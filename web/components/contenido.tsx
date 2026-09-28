'use client';

import { Alert, Checkbox, ScrollShadow, Separator, Table, Typography } from '@heroui/react';
import type { Bloque } from '@/lib/tipos';
import { Rico } from './piezas';

/**
 * Dibuja la teoría (bloques que arma scripts/generar-web.mjs) con componentes de HeroUI.
 * Los títulos llevan el id `<nota>--<ancla>` al que apuntan las flashcards y los enlaces.
 */
export function Contenido({ bloques }: { bloques: Bloque[] }) {
  return (
    <>
      {bloques.map((b, i) => (
        <BloqueDe key={i} b={b} />
      ))}
    </>
  );
}

function BloqueDe({ b }: { b: Bloque }) {
  switch (b.t) {
    case 'titulo': {
      const tipo = b.nivel <= 2 ? 'h2' : b.nivel === 3 ? 'h3' : 'h4';
      return (
        <Typography type={tipo} id={b.id} className={`titulo-prosa titulo-prosa--${tipo} font-titulo`}>
          <Rico html={b.html} />
        </Typography>
      );
    }

    case 'parrafo':
      return (
        <Typography className="texto-prosa">
          <Rico html={b.html} />
        </Typography>
      );

    case 'lista': {
      const Lista = b.ordenada ? 'ol' : 'ul';
      const esDeTareas = b.items.some((it) => it.tarea !== null);
      return (
        <Lista className={`texto-prosa ${esDeTareas ? 'lista-tareas' : b.ordenada ? 'list-decimal' : 'list-disc'}`}>
          {b.items.map((it, i) => (
            <li key={i}>
              {it.tarea === null ? (
                <Rico html={it.html} />
              ) : (
                <Checkbox isReadOnly isSelected={it.tarea}>
                  <Checkbox.Content>
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Rico html={it.html} />
                  </Checkbox.Content>
                </Checkbox>
              )}
              {it.hijos.length > 0 && (
                <div className="mt-2 grid gap-2">
                  <Contenido bloques={it.hijos} />
                </div>
              )}
            </li>
          ))}
        </Lista>
      );
    }

    case 'tabla':
      return (
        <Table className="bloque-prosa">
          <Table.ScrollContainer>
            <Table.Content aria-label={b.titulo}>
              <Table.Header>
                {b.cabecera.map((c, i) => (
                  <Table.Column key={i} id={`c${i}`} isRowHeader={i === 0}>
                    <Rico html={c} />
                  </Table.Column>
                ))}
              </Table.Header>
              <Table.Body>
                {b.filas.map((fila, i) => (
                  <Table.Row key={i} id={`f${i}`}>
                    {b.cabecera.map((_, j) => (
                      <Table.Cell key={j} className="tabular-nums">
                        <Rico html={fila[j] ?? ''} />
                      </Table.Cell>
                    ))}
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      );

    case 'cita':
      return (
        <Alert status={b.tono} className="bloque-prosa texto-prosa">
          <Alert.Indicator />
          <Alert.Content className="grid gap-2 text-[0.94em]">
            <Contenido bloques={b.hijos} />
          </Alert.Content>
        </Alert>
      );

    case 'codigo':
      return (
        <ScrollShadow orientation="horizontal" className="bloque-prosa rounded-xl bg-surface-secondary">
          <pre className="px-4 py-3 font-mono text-sm">
            <code>{b.texto}</code>
          </pre>
        </ScrollShadow>
      );

    case 'separador':
      return <Separator className="my-2" />;
  }
}
