// Forma de web/datos/datos.json, que arma scripts/generar-web.mjs desde las notas.
// Los campos *html son HTML inline ya escapado por el generador (énfasis, código, enlaces);
// la teoría viene en bloques para dibujar cada uno con su componente de HeroUI.

export type Bloque =
  | { t: 'titulo'; nivel: number; id: string; html: string }
  | { t: 'parrafo'; html: string }
  | { t: 'lista'; ordenada: boolean; items: { html: string; tarea: boolean | null; hijos: Bloque[] }[] }
  | { t: 'tabla'; titulo: string; cabecera: string[]; filas: string[][] }
  | { t: 'cita'; tono: 'warning' | 'default'; hijos: Bloque[] }
  | { t: 'codigo'; texto: string }
  | { t: 'separador' };

export type Seccion = { nivel: number; titulo: string; id: string };

export type Flashcard = { q: string; a: string; ref: string };

/** `correctas`: índices de las opciones correctas; con más de una, se marcan todas y se comprueba. */
export type Pregunta = { q: string; opciones: string[]; correctas: number[]; exp: string; ref: string };

export type Tema = {
  id: string;
  titulo: string;
  unidad: number;
  peso: number;
  /** Columna "Eval 1" de temas.md: "sí", "teoría", "dudoso" o "—". */
  entra: string;
  dominio: number;
  descripcion: string;
  bloques: Bloque[];
  secciones: Seccion[];
  flashcards: Flashcard[];
  preguntas: Pregunta[];
};

export type Materia = {
  id: string;
  nombre: string;
  fecha: string;
  evento: string;
  unidades: Record<string, string>;
  temas: Tema[];
};

export type Fuente = { id: string; titulo: string; ruta: string; bloques: Bloque[] };

export type Datos = { generado: string; materias: Materia[]; fuentes: Fuente[] };

export type Vista = 'flashcards' | 'cuestionario' | 'teoria';

/** Qué se está leyendo en la pestaña Teoría. `n` fuerza el salto aunque se repita el destino. */
export type Lectura = { tipo: 'nota' | 'fuente'; id: string; ancla: string; n: number };

/** Nota de una flashcard: 0 no la sabía, 1 dudé, 2 la sabía. */
export type Nota = 0 | 1 | 2;

export type IrATeoria = (tipo: Lectura['tipo'], id: string, ancla?: string) => void;
