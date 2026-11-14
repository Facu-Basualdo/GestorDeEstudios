// Lectura en voz alta con la síntesis de voz del navegador (Web Speech API).
// No hay audio pregrabado: la voz la pone el sistema (las "Natural" de Edge suenan mejor).

import type { Bloque } from './tipos';

export const vozDisponible = () => typeof window !== 'undefined' && 'speechSynthesis' in window;

/** Voces en español, primero las rioplatenses y las de mejor calidad. */
export function vocesEnEspañol(): SpeechSynthesisVoice[] {
  if (!vozDisponible()) return [];
  const puntaje = (v: SpeechSynthesisVoice) => {
    const lang = v.lang.toLowerCase().replace('_', '-');
    let p = lang === 'es-ar' ? 40 : lang === 'es-uy' ? 35 : ['es-419', 'es-us', 'es-mx'].includes(lang) ? 20 : 10;
    if (/natural|online|neural/i.test(v.name)) p += 30;
    else if (/google/i.test(v.name)) p += 15;
    return p;
  };
  return speechSynthesis
    .getVoices()
    .filter((v) => v.lang.toLowerCase().startsWith('es'))
    .sort((a, b) => puntaje(b) - puntaje(a));
}

/** Las voces llegan tarde en Chrome: avisa cuando cambian. Devuelve la función para dejar de escuchar. */
export function alCambiarVoces(fn: () => void) {
  if (!vozDisponible()) return () => {};
  speechSynthesis.addEventListener('voiceschanged', fn);
  return () => speechSynthesis.removeEventListener('voiceschanged', fn);
}

// Símbolos de las notas que el sintetizador lee mal o no lee.
const REEMPLAZOS: [RegExp, string][] = [
  [/\s*[→⇒]\s*/g, ', '],
  [/\s*↔\s*/g, ' equivale a '],
  [/\s*≈\s*/g, ' aproximadamente '],
  [/\s*≥\s*/g, ' mayor o igual que '],
  [/\s*≤\s*/g, ' menor o igual que '],
  [/\s*≠\s*/g, ' distinto de '],
  [/\s+=\s+/g, ' igual a '],
  [/\s+\+\s+/g, ' más '],
  [/\s+[−–]\s+/g, ', '],
  [/\s*×\s*/g, ' por '],
  [/\s*⊕\s*/g, ' xor '],
  [/\s*·\s*/g, '. '],
  [/…/g, '...'],
  [/(?<=\p{L})\/(?=\p{L})/gu, ' o '],
  [/_/g, ' guion bajo '],
  [/[◁◇*`|\\~]/g, ' '],
  [/\s{2,}/g, ' '],
];

/** HTML inline del generador → texto para leer en voz alta. */
export function paraLeer(html: string) {
  let t = new DOMParser().parseFromString(html, 'text/html').body.textContent ?? '';
  for (const [re, por] of REEMPLAZOS) t = t.replace(re, por);
  return t.trim();
}

/** Teoría → fragmentos para leer de a uno (título, párrafo, ítem o fila de tabla). */
export function bloquesParaLeer(bloques: Bloque[]): string[] {
  const salida: string[] = [];
  const recorrer = (bs: Bloque[]) => {
    for (const b of bs) {
      if (b.t === 'titulo' || b.t === 'parrafo') salida.push(paraLeer(b.html));
      else if (b.t === 'lista')
        for (const it of b.items) {
          salida.push(paraLeer(it.html));
          recorrer(it.hijos);
        }
      else if (b.t === 'cita') recorrer(b.hijos);
      else if (b.t === 'tabla') {
        // `titulo` repite el encabezado de la sección: no se lee dos veces.
        const cab = b.cabecera.map(paraLeer);
        // Cada fila como "columna: valor", que se entiende sin ver la tabla.
        for (const fila of b.filas)
          salida.push(fila.map((c, k) => (k === 0 || !cab[k] ? paraLeer(c) : `${cab[k]}: ${paraLeer(c)}`)).join('. '));
      }
      // Los bloques de código no se leen.
    }
  };
  recorrer(bloques);
  return salida.filter(Boolean);
}

/** Chrome corta los enunciados largos a los ~15 s: se lee de a oraciones. */
function trozos(texto: string): string[] {
  if (texto.length <= 220) return [texto];
  const salida: string[] = [];
  for (const oracion of texto.split(/(?<=[.!?])\s+(?=[\p{Lu}¿¡"(])/u)) {
    if (oracion.length <= 220) salida.push(oracion);
    else {
      let actual = '';
      for (const parte of oracion.split(/(?<=,)\s+/)) {
        if (actual && actual.length + parte.length > 220) {
          salida.push(actual);
          actual = parte;
        } else actual = actual ? `${actual} ${parte}` : parte;
      }
      if (actual) salida.push(actual);
    }
  }
  return salida.filter((s) => s.trim());
}

export type OpcionesVoz = { velocidad: number; voz: string };

// Referencia viva a los enunciados: si el recolector de basura se los lleva, Chrome no dispara onend.
const enCurso = new Set<SpeechSynthesisUtterance>();

function decir(texto: string, o: OpcionesVoz, señal: AbortSignal): Promise<void> {
  return new Promise((resolver) => {
    if (señal.aborted) return resolver();
    const u = new SpeechSynthesisUtterance(texto);
    const voz = vocesEnEspañol().find((v) => v.voiceURI === o.voz) ?? vocesEnEspañol()[0];
    if (voz) u.voice = voz;
    u.lang = voz?.lang ?? 'es-AR';
    u.rate = o.velocidad;
    // Por si el navegador nunca avisa el final (pasa en Chrome): una cota generosa por largo.
    const tope = setTimeout(listo, ((texto.length / 12) * 1000) / o.velocidad + 6000);
    function listo() {
      clearTimeout(tope);
      enCurso.delete(u);
      señal.removeEventListener('abort', listo);
      resolver();
    }
    u.onend = listo;
    u.onerror = listo;
    señal.addEventListener('abort', listo);
    enCurso.add(u);
    speechSynthesis.speak(u);
  });
}

/** Lee el texto entero; se corta al abortar la señal. */
export async function hablar(texto: string, o: OpcionesVoz, señal: AbortSignal) {
  for (const t of trozos(texto)) {
    if (señal.aborted) return;
    await decir(t, o, señal);
  }
}

export function callar() {
  if (vozDisponible()) speechSynthesis.cancel();
}

export function esperar(ms: number, señal: AbortSignal): Promise<void> {
  return new Promise((resolver) => {
    if (señal.aborted) return resolver();
    const t = setTimeout(fin, ms);
    function fin() {
      clearTimeout(t);
      señal.removeEventListener('abort', fin);
      resolver();
    }
    señal.addEventListener('abort', fin);
  });
}

/** Pantalla encendida mientras se escucha (en el celular se apagaría y cortaría la voz). */
export async function mantenerPantalla(): Promise<() => void> {
  try {
    const nav = navigator as Navigator & { wakeLock?: { request(t: 'screen'): Promise<{ release(): Promise<void> }> } };
    const candado = await nav.wakeLock?.request('screen');
    return () => void candado?.release().catch(() => {});
  } catch {
    return () => {};
  }
}
