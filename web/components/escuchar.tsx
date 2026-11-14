'use client';

import { Button, Label, ListBox, Select, Tabs, Typography } from '@heroui/react';
import { useEffect, useRef, useState } from 'react';
import { guardado } from '@/lib/util';
import { alCambiarVoces, callar, esperar, mantenerPantalla, voces as vocesDe, vozDisponible, type OpcionesVoz } from '@/lib/voz';

/** `pausa`: segundos para pensar la respuesta de una flashcard antes de oírla. */
export type AjustesVoz = OpcionesVoz & { pausa: number };

const POR_DEFECTO: AjustesVoz = { velocidad: 1, voz: '', pausa: 8 };
const VELOCIDADES = [0.9, 1, 1.15, 1.3];
const PAUSAS = [4, 8, 15];

/** Ajustes de voz compartidos por flashcards y teoría, guardados en el navegador. */
export function useAjustesVoz() {
  const [ajustes, setAjustes] = useState<AjustesVoz>(POR_DEFECTO);
  useEffect(() => setAjustes({ ...POR_DEFECTO, ...guardado.leer<Partial<AjustesVoz>>('voz', {}) }), []);
  const cambiar = (p: Partial<AjustesVoz>) =>
    setAjustes((a) => {
      const nuevo = { ...a, ...p };
      guardado.escribir('voz', nuevo);
      return nuevo;
    });
  // Ref para leer el valor vigente desde un bucle de lectura sin reiniciarlo.
  const ref = useRef(ajustes);
  ref.current = ajustes;
  return { ajustes, cambiar, ref };
}

/** Mientras `activo`, la pantalla no se apaga; al terminar, se calla la voz. */
export function useSesionDeVoz(activo: boolean) {
  useEffect(() => {
    if (!activo) return;
    let soltar = () => {};
    let vivo = true;
    void mantenerPantalla().then((f) => (vivo ? (soltar = f) : f()));
    return () => {
      vivo = false;
      soltar();
      callar();
    };
  }, [activo]);
}

/** Corre `pasos` cada vez que cambian las dependencias; lo que estaba sonando se corta. */
export function useLectura(activo: boolean, pasos: (señal: AbortSignal) => Promise<void>, deps: unknown[]) {
  useEffect(() => {
    if (!activo) return;
    const control = new AbortController();
    // Una pausa corta: Chrome a veces pierde lo que se pide hablar justo después de callar.
    void esperar(150, control.signal).then(() => {
      if (!control.signal.aborted) return pasos(control.signal);
    });
    return () => {
      control.abort();
      callar();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activo, ...deps]);
}

export function Ajustes({ ajustes, onCambio, conPausa }: {
  ajustes: AjustesVoz;
  onCambio: (p: Partial<AjustesVoz>) => void;
  conPausa?: boolean;
}) {
  const [voces, setVoces] = useState<SpeechSynthesisVoice[]>([]);
  useEffect(() => {
    const leer = () => setVoces(vocesDe('es'));
    leer();
    return alCambiarVoces(leer);
  }, []);
  const voz = voces.find((v) => v.voiceURI === ajustes.voz) ?? voces[0];

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
      <Segmento
        etiqueta="Velocidad"
        valor={ajustes.velocidad}
        opciones={VELOCIDADES.map((v) => [v, `${v}×`])}
        onCambio={(velocidad) => onCambio({ velocidad })}
      />
      {conPausa && (
        <Segmento
          etiqueta="Tiempo para pensar"
          valor={ajustes.pausa}
          opciones={PAUSAS.map((p) => [p, `${p} s`])}
          onCambio={(pausa) => onCambio({ pausa })}
        />
      )}
      {voces.length > 1 && (
        <Select aria-label="Voz" value={voz?.voiceURI} onChange={(v) => v != null && onCambio({ voz: String(v) })} className="w-full min-w-0 sm:w-72">
          <Select.Trigger>
            <Select.Value className="truncate" />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {voces.map((v) => (
                <ListBox.Item key={v.voiceURI} id={v.voiceURI} textValue={v.name}>
                  <Label>{v.name}</Label>
                  <span className="font-mono text-xs text-muted">{v.lang}</span>
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
      )}
      {voces.length === 0 && (
        <Typography type="body-xs" color="muted">
          No encontré voces en español: se usa la voz por defecto del sistema.
        </Typography>
      )}
    </div>
  );
}

function Segmento({ etiqueta, valor, opciones, onCambio }: {
  etiqueta: string;
  valor: number;
  opciones: [number, string][];
  onCambio: (v: number) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="etiqueta">{etiqueta}</span>
      <Tabs selectedKey={String(valor)} onSelectionChange={(k) => onCambio(Number(k))} className="w-auto">
        <Tabs.ListContainer>
          <Tabs.List aria-label={etiqueta}>
            {opciones.map(([v, texto]) => (
              <Tabs.Tab key={v} id={String(v)} className="whitespace-nowrap font-mono text-xs">
                {texto}
                <Tabs.Indicator />
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs.ListContainer>
      </Tabs>
    </div>
  );
}

/** Botón para empezar o parar la lectura; no aparece si el navegador no tiene voz. */
export function BotonEscuchar({ activo, onCambio, texto = 'Escuchar' }: { activo: boolean; onCambio: (v: boolean) => void; texto?: string }) {
  const [hay, setHay] = useState(false);
  useEffect(() => setHay(vozDisponible()), []);
  if (!hay) return null;
  return (
    <Button variant={activo ? 'primary' : 'secondary'} size="sm" onPress={() => onCambio(!activo)} aria-pressed={activo}>
      <Auriculares />
      {activo ? 'Parar' : texto}
    </Button>
  );
}

function Auriculares() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}
