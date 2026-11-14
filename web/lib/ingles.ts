// Términos en inglés escritos como suenan, para que la voz en español los lea bien sin cambiar
// de voz (cambiar de voz a mitad de frase mete pausas y suena a dos personas).
// Sin dependencias del navegador: se puede probar con node.

// palabra en minúscula → cómo se dice (con tilde donde va el acento).
// Si un término se lee mal, se agrega o se corrige acá.
const PRONUNCIACION: Record<string, string> = Object.fromEntries(
  `
software sóftuer · hardware járduer · middleware míduer · framework fréimuork · frameworks fréimuorks
microkernel maicrokérnel · toolkit túlkit · toolkits túlkits · widget uíyet · widgets uíyets
factory fáctori · method métod · proxy próxi · observer obsérver · observers obsérvers · strategy strátegi
adapter adápter · adaptee adaptí · builder bílder · singleton síngolton · prototype prótotaip
composite compósit · decorator decoréitor · facade fasád · bridge brich · command cománd
mediator midiéitor · memento meménto · state stéit · template témpleit · visitor vísitor
iterator iteréitor · interpreter intérpreter · chain chéin · responsibility risponsabíliti
flyweight fláiueit · flyweights fláiueits · creator criéitor · concrete cóncrit · aggregate ágregueit
subject sábyect · handler jándler · receiver risíver · invoker invóuker · caretaker kérteiker
originator oríyineitor · client cláient · leaf lif · component compóunent · components compóunents
wrapper ráper · wrappers rápers · listener lísener · manager mánayer · presenter presénter
controller contróuler · view viú · model módel · shape shéip · window uíndou · door dor · house jáus
application aplikéishon · register réyister · notify nóutifai · update ápdeit · payment péiment
operation operéishon · context cóntext · element élement · product pródact · abstract ábstract
abstraction abstrácshon · refined rifáind · reader ríder · parser párser · scanner scáner
compiler compáiler · converter convérter · document dókiument · glyph glif · border bórder
graphic gráfic · tool tul · connection conécshon · established estáblisht · listening lísenin
refactoring rifáctorin · release rilís · releases rilíses · switch suích · switches suíches · stock stoc
stakeholder stéikjolder · stakeholders stéikjolders · feature fíchur · features fíchurs · spike spáik
spikes spáiks · backlog báclog · scrum scram · daily déili · review riviú · planning plánin
retrospective retrospéctiv · owner óuner · story stóri · stories stóris · timeboxing táimboxin
pair per · programming prográmin · extreme extrím · testing téstin · mocking mókin · hooks juks · hook juk
binding báindin · bridging bríyin · layer léier · layers léiers · tier tíer · peer pir · to tu
lock loc · out áut · cherry chérri · picking píkin · walking uókin · skeleton skéleton · work uórk
breakdown bréikdaun · good gud · enough inóf · desk desc · check chec · checklists chéclists
security sekiúriti · safety séifti · quality cuáliti · usability iusabíliti · reliability rilaiabíliti
efficiency efíshensi · maintainability meintenabíliti · portability portabíliti
interoperability interoperabíliti · flexibility flexibíliti · testability testabíliti
reusability riiusabíliti · modifiability modifaiabíliti · deployability diploiabíliti
availability aveilabíliti · scalability skeilabíliti · performance perfórmans · integrity intégriti
capability keipabíliti · compatibility compatibíliti · accountability acauntabíliti
suitability sutabíliti · satisfaction satisfácshon · freedom frídom · risk risc · transition transíshon
interaction interácshon · modeling módelin · flaw flo · flaws flos · attack aták · trees tris
spoofing spúfin · tampering támperin · repudiation ripiudiéishon · nonrepudiation nonripiudiéishon
disclosure disclóuchur · denial dináial · service sérvis · elevation eleveíshon · privilege prívilech
information informéishon · identity aidéntiti · broken bróuken · access ákses · cryptographic criptográfic
failures féiliurs · injection inyécshon · insecure insekiúr · design disáin
misconfiguration misconfiguiuréishon · outdated autdéited · authentication autentikéishon
logging lóguin · alerting alértin · monitoring mónitorin · server sérver · side sáid · request ricuést
forgery fóryeri · supply saplái · hashes jáshes · checksums chécsams · mishandling misjándlin
identify aidéntifai · authenticate auténtikeit · authorize óthoraiz · revoke rivóuk · recover ricáver
react riáct · detect ditéct · resist risíst · firewall fáieruol · firewalls fáieruols
sandboxing sándboxin · lockout lócaut · throttling trótlin · throughput trúput · jitter yíter
canary kanéri · balancer bálanser · load lóud · round ráund · robin róbin · earliest érliest
deadline dédlain · first ferst · least list · slack slac · resource risórs · resources risórses
execution execiúshon · thread tred · threads treds · shuffle sháfol · owasp óuasp
should shud · could cud · won't uónt · would uud · must mast · have jav · never néver · than dan
that dat · this dis · they déi · there der · reason rízon · modification modifikéishon · able éibol
without uidáut · the de · with uid · by bái · doing dúin · knowing nóuin · all ol · four for
gang gang · token tóuken · tokens tóukens · user iúser · users iúsers · library láibreri · table téibol
executable exekiútabol · logger lóguer · email ímeil · alerts alérts · youtube iutúb · whatsapp guasáp
cached kasht · class clas · kent kent · beck bek · fowler fáuler · conway cónuei · booch buch
kruchten krújten · cockburn cóuburn · brooks bruks · schwaber shuéiber · sutherland sáderland
highsmith jáismiz · ambler ámbler · kazman cázman · meyer máier · walters uólters · snowbird snóuberd
hollywood jóliuud · smalltalk smóltok · python páizon · windows uíndous · clear clir · yellow iélou
powers páuers · moore mur · scott scot · microsoft máicrosoft · azure ázur · my mai · app ap · apps aps
trigger tríguer · triggers tríguers · dump damp · restore ristór · failover féilouver · cluster cláster
clusters cláster · endpoint éndpoint · endpoints éndpoints · target tárguet · insert insért
upsert apsért · delete dilít · select seléct · commit comít · rollback róulbac · autocommit autocomít
savepoint séivpoint · timestamp táimstamp · datacenter dátasenter · filesystem fáilsistem
namespace néimspeis · tablespace téibolspeis · dataset dátaset · database dátabeis
databases dátabeises · object óbyect · objects óbyects · event ivént · events ivénts · instance ínstans
store stor · default difólt · bloat blout · batch bach · foreach forích · constraint constréint
driver dráiver · host jost · localhost lócaljost · heap jip · bitmap bítmap · loop lup · true tru
false fols · null nal · sync sinc · restart ristárt · key qui · value váliu · sharding shárdin
shard shard · shards shards · primary práimari · secondary sécondari · plugin plágin · plugins plágins
plug plag · search serch · filter fílter · number námber · point póint · current cárent · range réinch
row rou · rows rous · get guet · tree tri · create criéit · system sístem · image ímich · replica réplica
string string · cluster cláster · source sors · open óupen · cloud cláud · backup bácap · driver dráiver
`
    .split(/\s*·\s*|\n/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => s.split(/\s+/) as [string, string]),
);

/** Existen en castellano: se pronuncian en inglés sólo con mayúscula y pegadas a otro término en inglés ("Real Subject"). */
const AMBIGUAS: Record<string, string> = { real: 'ríal', data: 'déita', base: 'béis', date: 'déit', item: 'áitem' };

/** Siglas que se dicen como palabra o enteras. */
const REEMPLAZOS: [RegExp, string][] = [
  [/\bMoSCoW\b/g, 'Moscow'],
  [/\bPostgreSQL\b/g, 'Postgres'],
  [/\bSW\b/g, 'software'],
  [/\bHW\b/g, 'hardware'],
  [/\bGoF\b/g, 'Gang of Four'],
  [/\bOO\b/g, 'O O'],
];

/** "ConcreteObserver" → "Concrete Observer", "RTFReader" → "RTF Reader", "crearExportador" → "crear Exportador". */
export const separarCamel = (t: string) =>
  t.replace(/(\p{Ll})(\p{Lu})/gu, '$1 $2').replace(/(\p{Lu}+)(\p{Lu}\p{Ll})/gu, '$1 $2');

/** Reescribe los términos en inglés como suenan, para leer todo con una voz en español. */
export function castellanizar(texto: string): string {
  let t = texto;
  for (const [re, por] of REEMPLAZOS) t = t.replace(re, por);
  t = separarCamel(t);
  const fichas = [...t.matchAll(/([\p{L}][\p{L}'’]*)|([^\p{L}]+)/gu)].map((m) => m[0]);
  const clave = (k: number) => fichas[k]?.toLowerCase().replace('’', "'") ?? '';
  const esIngles = (k: number) => clave(k) in PRONUNCIACION;
  return fichas
    .map((f, k) => {
      const c = clave(k);
      if (c in PRONUNCIACION) return PRONUNCIACION[c];
      // "Real Subject", "Base Decorator": ambigua con mayúscula, separada por un espacio de un término en inglés.
      const vecina = (d: number) => fichas[k + d] === ' ' && esIngles(k + 2 * d);
      if (c in AMBIGUAS && /^\p{Lu}/u.test(f) && (vecina(1) || vecina(-1))) return AMBIGUAS[c];
      return f;
    })
    .join('');
}
