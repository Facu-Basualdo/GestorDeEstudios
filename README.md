# Gestor de Estudios

Tutor de estudios personal para Ingeniería en Sistemas de Información (UTN FRRE).
El repo es un vault de Obsidian que arma, conduce y registra las sesiones de estudio con
Claude Code como tutor.

## Cómo funciona

| Pieza | Rol |
|---|---|
| **Claude Code** | El tutor: revisa la teoría, escribe preguntas y cuestionarios, prioriza temas, toma preguntas, corrige y lleva el seguimiento. Sus reglas están en [CLAUDE.md](CLAUDE.md). |
| **Gemini** (Antigravity) | Pasa el material de cada materia a texto y redacta la teoría por tema, con el [prompt genérico](docs/prompt-gemini.md). Ver [material.md](metodo/material.md). |
| **Obsidian** | Donde se leen las notas: enlaces markdown relativos, todo navegable. |
| **[Web de estudio](web/README.md)** | Flashcards y cuestionarios generados desde las notas (Next.js). |

## Método

- **Priorización** por `peso × (3 − dominio) × urgencia` → [priorizacion.md](metodo/priorizacion.md)
- **Recuperación activa**: primero la pregunta, después la corrección → [recuperacion-activa.md](metodo/recuperacion-activa.md)
- **Repetición espaciada** según el dominio de cada tema → [repeticion-espaciada.md](metodo/repeticion-espaciada.md)
- **Material**: Gemini lo pasa a texto y teoría, Claude revisa y arma las preguntas → [material.md](metodo/material.md)
- **Cierre de sesión**: seguimiento, errores al índice y commit → [cierre-de-sesion.md](metodo/cierre-de-sesion.md)

## Materias

| Materia | Índice |
|---|---|
| Arquitectura de Computadoras | [INDICE](materias/arquitectura-de-computadoras/INDICE.md) |
| Diseño de Sistemas de Información | [INDICE](materias/diseno-de-sistemas/INDICE.md) |
| Sistemas de Gestión de Bases de Datos | [INDICE](materias/sistema-de-gestion-de-base-de-datos/INDICE.md) |

Fechas de parciales y entregas en [calendario.md](calendario.md).

## Estructura

```
CLAUDE.md             reglas del tutor y tabla de materias
calendario.md         fechas de todas las materias
metodo/               cómo se prioriza, se pregunta, se repasa y se cierra una sesión
materias/<materia>/
  INDICE.md           temas, qué cae y errores frecuentes
  CLAUDE.md           contexto de la materia para el tutor
  programa.md         programa de la cátedra y fechas
  fuentes.md          inventario del material: tipo, temas que cubre, estado
  notas/              una nota por tema, con preguntas de recuperación y cuestionario
  temas.md            peso, dominio y próximo repaso por tema
  sesiones.md         registro de sesiones y errores recurrentes
  examenes/           análisis de los modelos de examen
  material/           material crudo y su texto extraído (fuera de git y del grafo)
docs/                 planes, borradores y el prompt de Gemini (fuera del grafo)
scripts/              verificador del grafo y generador de datos de la web
web/                  web de estudio
.claude/commands/     comandos del tutor
```

## Comandos

Se corren desde Claude Code, abierto en la raíz del repo.

| Comando | Qué hace |
|---|---|
| `/nueva-materia` | Crea el esqueleto de una materia, la suma al hub y deja listo el prompt para Gemini |
| `/revisar-materia <materia> [nota]` | Revisa la teoría que escribió Gemini y arma preguntas y cuestionarios |
| `/cargar-examen <materia> <archivo>` | Analiza un modelo de examen y recalcula pesos |
| `/estudiar <materia> [minutos]` | Arma y conduce la sesión de hoy por puntaje |
| `/repaso [materia]` | Preguntas de los temas con repaso vencido |
| `/progreso [materia]` | Estado y riesgo por materia (sólo lectura) |
| `/cerrar-sesion` | Actualiza seguimiento, errores e índice; verifica y commitea. Acepta el informe de la web |

## Requisitos

- [Claude Code](https://claude.com/claude-code).
- Gemini en Antigravity, con acceso al repo, para procesar el material.
- [Obsidian](https://obsidian.md) para leer el vault (opcional: son archivos markdown).
- Node.js para el verificador y la web.

```bash
node scripts/verificar-docs.mjs   # revisa enlaces, breadcrumbs e índices del grafo
cd web && npm install && npm run dev   # web de estudio en http://localhost:3000
```

## Convenciones

- Enlaces markdown relativos, nunca `[[wikilinks]]`.
- Archivos y carpetas en kebab-case; fechas `AAAA-MM-DD`.
- Una nota, un tema; cada nota tiene breadcrumb al índice de su materia y figura en él.
