# Gestor de Estudios

Tutor de estudios personal para Ingeniería en Sistemas de Información (UTN FRRE).
El repo es un vault de Obsidian que arma, conduce y registra las sesiones de estudio con
Claude Code como tutor.

## Cómo funciona

| Pieza | Rol |
|---|---|
| **Claude Code** | El tutor: prioriza temas, toma preguntas, corrige y lleva el seguimiento. Sus reglas están en [CLAUDE.md](CLAUDE.md). |
| **NotebookLM** | La fuente del contenido, vía el MCP `notebooklm-mcp-2026` (uno o más notebooks por materia). Ver [notebooklm.md](metodo/notebooklm.md). |
| **Obsidian** | Donde se leen las notas: enlaces markdown relativos, todo navegable. |
| **[Web de estudio](web/README.md)** | Flashcards y cuestionarios generados desde las notas (Next.js). |

## Método

- **Priorización** por `peso × (3 − dominio) × urgencia` → [priorizacion.md](metodo/priorizacion.md)
- **Recuperación activa**: primero la pregunta, después la corrección → [recuperacion-activa.md](metodo/recuperacion-activa.md)
- **Repetición espaciada** según el dominio de cada tema → [repeticion-espaciada.md](metodo/repeticion-espaciada.md)
- **Cierre de sesión**: seguimiento, errores al índice y commit → [cierre-de-sesion.md](metodo/cierre-de-sesion.md)

## Materias

| Materia | Índice |
|---|---|
| Arquitectura de Computadoras | [INDICE](materias/arquitectura-de-computadoras/INDICE.md) |
| Diseño de Sistemas de Información | [INDICE](materias/diseno-de-sistemas/INDICE.md) |

Fechas de parciales y entregas en [calendario.md](calendario.md).

## Estructura

```
CLAUDE.md             reglas del tutor y tabla de materias
calendario.md         fechas de todas las materias
metodo/               cómo se prioriza, se pregunta, se repasa y se cierra una sesión
materias/<materia>/
  INDICE.md           temas, qué cae y errores frecuentes
  CLAUDE.md           contexto de la materia para el tutor
  programa.md         programa de la cátedra
  fuentes.md          notebooks y fuentes de NotebookLM
  notas/              una nota por tema, con preguntas de recuperación y cuestionario
  temas.md            peso, dominio y próximo repaso por tema
  sesiones.md         registro de sesiones y errores recurrentes
  examenes/           modelos de examen y su análisis
  material/           material crudo importado (fuera del grafo)
docs/                 planes y borradores (fuera del grafo)
scripts/              verificador del grafo y generador de datos de la web
web/                  web de estudio
.claude/commands/     comandos del tutor
```

## Comandos

Se corren desde Claude Code, abierto en la raíz del repo.

| Comando | Qué hace |
|---|---|
| `/nueva-materia` | Crea la carpeta de una materia desde el programa y la suma al hub y al calendario |
| `/procesar-fuente <materia> [fuente]` | Convierte una fuente larga de NotebookLM en notas por tema |
| `/cargar-examen <materia> <archivo>` | Analiza un modelo de examen y recalcula pesos |
| `/estudiar <materia> [minutos]` | Arma y conduce la sesión de hoy por puntaje |
| `/repaso [materia]` | Preguntas de los temas con repaso vencido |
| `/progreso [materia]` | Estado y riesgo por materia (sólo lectura) |
| `/cerrar-sesion` | Actualiza seguimiento, errores e índice; verifica y commitea |

## Requisitos

- [Claude Code](https://claude.com/claude-code) con el MCP de NotebookLM configurado.
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
