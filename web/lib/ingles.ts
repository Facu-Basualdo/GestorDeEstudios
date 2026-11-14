// Separa un texto en tramos en español y en inglés, para leer cada uno con una voz de su idioma
// (una voz en español lee "Factory Method" o "Observer" como si fueran palabras castellanas).
// Sin dependencias del navegador: se puede probar con node.

export type Tramo = { texto: string; ingles: boolean };

// Términos que aparecen en las notas. Si una palabra en inglés se lee mal, se agrega acá (en minúscula).
const TERMINOS = `
software hardware framework frameworks middleware microkernel toolkit toolkits widget widgets web pool pools
factory method proxy observer observers strategy adapter adaptee builder singleton prototype composite decorator
facade bridge command mediator memento state template visitor iterator interpreter chain responsibility
flyweight flyweights creator concrete aggregate subject handler receiver invoker caretaker originator client
leaf component wrapper wrappers listener manager presenter controller view model shape window imp door house
application register notify update payment operation context element product abstract abstraction refined
reader parser scanner compiler converter document glyph border scroller graphic tool connection established listening
refactoring release releases switch switches stock stakeholder stakeholders feature features spike spikes
backlog sprint scrum daily review planning retrospective owner master story stories timeboxing timebox
pair programming extreme test testing tests tester mocking mock hooks hook binding bridging layer layers tier tiers
peer to multi lock in out cherry picking walking skeleton work breakdown good enough desk check
security safety quality usability reliability efficiency maintainability portability interoperability
flexibility testability reusability modifiability deployability availability scalability performance
integrity capability compatibility accountability suitability satisfaction freedom risk transition interaction
modeling flaw flaws attack trees spoofing tampering repudiation nonrepudiation disclosure denial service elevation
privilege information identity broken access cryptographic failures injection insecure design
misconfiguration vulnerable outdated components authentication logging alerting monitoring server side request
forgery supply hashes checksums mishandling identify authenticate authorize revoke recover react detect resist
firewall firewalls sandboxing lockout throttling throughput jitter canary mesh balancer load round robin
earliest deadline first least slack resource resources execution thread threads shuffle
owasp wsdl should could won't would must have never than that this they there reason modification able without
the and of for with on by as at is it be not doing knowing all
token tokens user string library table executable log logger email alerts youtube whatsapp cached class
kent beck fowler conway booch kruchten cockburn brooks schwaber sutherland beedle highsmith ambler kazman meyer
gary walters snowbird hollywood smalltalk python windows clear yellow crystal powers
moore alexander robert babbage rumbaugh boehm jim scott microsoft linux azure my app apps
trigger triggers export import dump restore failover cluster clusters endpoint endpoints target binlog index
indexes insert upsert update delete select drop commit rollback autocommit savepoint lost timestamp datacenter
filesystem namespace tablespace dataset database databases object objects event events instance store core
default bloat split batch foreach script scripts constraint driver host localhost latch heap bitmap loop true
false null port stop restart sync sent last from but use using reduce sort match project member prefer config
custom date number point current range row rows hot search filter catalog public text set get map list tree
create system image program sequence architecture practice top coach flip subsystem detach attach debug note
extent rect character broadcast change paste print dialog solver visit accept dispatch interpret restrict manage
exposure convert grasp price kit half transient device picture stream surrogate execute reset help font structure
debt redistribute defer queue stub postmortem salt input encrypt separate validate inform audit self part spot
mongodump plug plugin plugins sharding shard shards replica primary secondary key value document documents
`;

/** Palabras que existen en los dos idiomas: van en inglés sólo pegadas a otra en inglés y con mayúscula ("Real Subject"). */
const AMBIGUAS = new Set('real idea area global simple normal final local total error director control base data plan item'.split(' '));

/** Palabras castellanas que las reglas de abajo tomarían por inglesas. */
const CASTELLANAS = new Set('deshacer deshacen deshace rehacer kilo'.split(' '));

/** Siglas que se leen como palabra en inglés, o que conviene decir enteras. */
const REEMPLAZOS: [RegExp, string][] = [
  [/\bMoSCoW\b/g, 'Moscow'],
  [/\bPostgreSQL\b/g, 'Postgres'],
  [/\bSW\b/g, 'software'],
  [/\bHW\b/g, 'hardware'],
  [/\bGoF\b/g, 'Gang of Four'],
  [/\bXP\b/g, 'X P'],
];

const DICCIONARIO = new Set(TERMINOS.split(/\s+/).filter(Boolean));
// Grupos de letras que no existen en castellano.
const RASGOS = /w|k|th|ck|ph|ou|tt|pp|ff|dd|ss|(?<!de)sh|oo(?![rp])|[^aeiou]y$|.{3}ing$|tion$|ity$|ness$|ment$/i;

export function esIngles(palabra: string) {
  const p = palabra.toLowerCase().replace(/[’]/g, "'");
  if (DICCIONARIO.has(p)) return true;
  if (CASTELLANAS.has(p) || AMBIGUAS.has(p)) return false;
  if (p.length < 4 || /[áéíóúüñ]/.test(p) || palabra === palabra.toUpperCase()) return false;
  return RASGOS.test(p);
}

/** "ConcreteObserver" → "Concrete Observer", "RTFReader" → "RTF Reader", "crearExportador" → "crear Exportador". */
export const separarCamel = (t: string) =>
  t.replace(/(\p{Ll})(\p{Lu})/gu, '$1 $2').replace(/(\p{Lu}+)(\p{Lu}\p{Ll})/gu, '$1 $2');

export function tramos(texto: string): Tramo[] {
  let t = texto;
  for (const [re, por] of REEMPLAZOS) t = t.replace(re, por);
  t = separarCamel(t);

  // Fichas: palabras y lo que hay entre ellas.
  const fichas = [...t.matchAll(/([\p{L}][\p{L}'’]*)|([^\p{L}]+)/gu)].map((m) => ({
    texto: m[0],
    palabra: !!m[1],
    ingles: !!m[1] && esIngles(m[0]),
  }));
  // Una palabra ambigua con mayúscula pasa al inglés si la siguiente o la anterior (separadas sólo por espacio) lo es.
  for (let k = 0; k < fichas.length; k++) {
    const f = fichas[k];
    if (!f.palabra || f.ingles || !AMBIGUAS.has(f.texto.toLowerCase()) || !/^\p{Lu}/u.test(f.texto)) continue;
    const vecina = (d: number) => fichas[k + d]?.texto === ' ' && fichas[k + 2 * d]?.ingles;
    if (vecina(1) || vecina(-1)) f.ingles = true;
  }

  // Se agrupan: los separadores de sólo espacios o guiones entre dos palabras en inglés quedan del lado inglés.
  const salida: Tramo[] = [];
  fichas.forEach((f, k) => {
    let ingles = f.ingles;
    if (!f.palabra && /^[\s-]+$/.test(f.texto) && fichas[k - 1]?.ingles && fichas[k + 1]?.ingles) ingles = true;
    const ultimo = salida.at(-1);
    if (ultimo && (ultimo.ingles === ingles || (!f.palabra && !ingles))) ultimo.texto += f.texto;
    else salida.push({ texto: f.texto, ingles });
  });
  return salida.map((s) => ({ ...s, texto: s.texto.trim() })).filter((s) => /[\p{L}\p{N}]/u.test(s.texto));
}
