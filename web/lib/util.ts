import type { Materia, Tema } from './tipos';

export const hash = (s: string) => {
  let x = 5381;
  for (const c of s) x = ((x * 33) ^ c.codePointAt(0)!) >>> 0;
  return x.toString(36);
};

export function mezclar<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

// localStorage sólo para comodidades de quien estudia (filtros, última nota de
// cada tarjeta). Puede no estar disponible: todo funciona igual sin él.
export const guardado = {
  leer<T>(clave: string, porDefecto: T): T {
    try {
      const v = localStorage.getItem('flipflop:' + clave);
      return v == null ? porDefecto : (JSON.parse(v) as T);
    } catch {
      return porDefecto;
    }
  },
  escribir(clave: string, valor: unknown) {
    try {
      localStorage.setItem('flipflop:' + clave, JSON.stringify(valor));
    } catch {
      /* sin almacenamiento */
    }
  },
};

/** Temas ordenados por peso (estable: dentro del mismo peso, el orden del índice). */
export const porPeso = (temas: Tema[]) => [...temas].sort((a, b) => b.peso - a.peso);

export type Filtro = 'todos' | 'p3' | string;

export function filtrarPorTema<T extends { tema: Tema }>(lista: T[], filtro: Filtro): T[] {
  if (filtro === 'todos') return lista;
  if (filtro === 'p3') return lista.filter((x) => x.tema.peso >= 3);
  return lista.filter((x) => x.tema.id === filtro);
}

export const unidadesDe = (m: Materia) => [...new Set(m.temas.map((t) => t.unidad))].sort((a, b) => a - b);

export const nombreUnidad = (m: Materia, u: number) =>
  m.unidades[u] ? `Unidad ${u} — ${m.unidades[u]}` : `Unidad ${u}`;

export const plural = (n: number, uno: string, varios: string) => `${n} ${n === 1 ? uno : varios}`;

export const ENTRA: Record<string, string> = { 'sí': 'Entra', 'teoría': 'Entra: sólo teoría', dudoso: 'Dudoso' };

export function cuentaRegresiva(m: Materia) {
  if (!m.fecha) return '';
  const [y, mes, d] = m.fecha.split('-').map(Number);
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const dias = Math.round((new Date(y, mes - 1, d).getTime() - hoy.getTime()) / 864e5);
  if (dias < 0) return '';
  const cuando = dias === 0 ? 'es hoy' : dias === 1 ? 'es mañana' : `faltan ${dias} días`;
  return `${m.evento || 'Próxima fecha'} · ${cuando}`;
}
