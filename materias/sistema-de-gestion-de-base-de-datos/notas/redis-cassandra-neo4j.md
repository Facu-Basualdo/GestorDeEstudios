# Redis, Cassandra, Neo4j y CAP
[← Índice Sistemas de Gestión de Bases de Datos](../INDICE.md)

> Temas 8, 9 y 10 (clave–valor, wide-column, grafos y distribución) · Peso: 3/3 (estimado) · Fuente: *Clase 9 - Redis
> Cassandra Neo4j CAP 2026* (diap. 1–37), la bitácora U9 Act. 1 "Laboratorio multimotor" con sus scripts y la entrega
> U9 Act. 2 "Batalla de arquitecturas multimodelo" (OmniMarket: bitácora, presentación y registro de objeciones).
> Lo que agrega el tutor va marcado *(tutor)*.

## Preguntas de recuperación

- ¿Qué pregunta responde cada motor de la unidad 9? :: Redis: ¿qué dato recupero inmediatamente por una clave? Cassandra: ¿qué consultas escalan sobre grandes volúmenes distribuidos? Neo4j: ¿qué conexiones necesito recorrer y descubrir? [→ Tres modelos tres preguntas](#Tres%20modelos%20tres%20preguntas)
- ¿Qué estructuras de Redis vieron y para qué sirve cada una? :: String (sesión), hash (carrito o perfil chico), set (miembros únicos: favoritos), sorted set (ranking por puntaje) y listas. [→ Redis](#Redis)
- ¿Qué hace SET session:ana activa EX 120 y cómo se ve el TTL? :: Guarda la clave con 120 segundos de vida. TTL devuelve los segundos restantes, y -2 cuando la clave ya expiró y no existe. [→ Redis](#Redis)
- ¿Qué diferencia hay entre set y sorted set? :: El set guarda miembros únicos sin orden; el sorted set guarda pares puntaje–miembro ordenados automáticamente por puntaje (rankings). [→ Redis](#Redis)
- ¿Qué diferencia hay entre RDB y AOF? :: RDB: snapshots periódicos, archivo compacto y reinicio rápido, con pérdida de lo posterior al último snapshot. AOF: registra cada escritura y la reejecuta al reiniciar; durabilidad según configuración (cada segundo o cada operación). [→ Redis](#Redis)
- ¿Qué se pierde si Redis se reinicia sin persistencia? :: Todos los datos: es una base en memoria. [→ Redis](#Redis)
- ¿Qué hay que diseñar por los límites de Redis? :: La RAM (maxmemory), la política de expulsión (borrar claves con TTL, LRU o devolver error), la replicación y la operación. [→ Redis](#Redis)
- ¿Qué determinan la partition key y las clustering columns en Cassandra? :: La partition key determina dónde vive el dato (pasa por un hash y se vuelve un token que asigna nodos). Las clustering columns ordenan las filas dentro de la partición. [→ Cassandra](#Cassandra)
- ¿Qué significa PRIMARY KEY ((usuario), fecha, evento_id)? :: usuario es la clave de partición; fecha y evento_id son clustering (ordenan dentro de la partición y hacen única la fila). [→ Cassandra](#Cassandra)
- ¿Por qué Cassandra rechaza WHERE tipo = 'click' sin la clave de partición, y qué se hace? :: Porque tendría que recorrer todas las particiones de todos los nodos; pide ALLOW FILTERING. La solución es otra tabla diseñada para esa consulta, con tipo en la clave de partición. [→ Cassandra](#Cassandra)
- ¿Qué diferencia hay entre RF y CL en Cassandra? :: RF (replication factor) es cuántas copias de cada dato existen. CL (consistency level) es cuántas réplicas tienen que responder para que una lectura o escritura cuente como exitosa; se elige por consulta. [→ Cassandra](#Cassandra)
- Con RF = 3, ¿cuántas réplicas exigen ONE, QUORUM y ALL? :: ONE: 1. QUORUM: 2 (mayoría). ALL: 3. [→ Cassandra](#Cassandra)
- ¿Quién es el coordinador en Cassandra? :: El nodo al que el cliente le manda esa operación: recibe la operación y contacta a las réplicas. No hay maestro, así que cualquier nodo puede coordinar y puede ser distinto en cada consulta. [→ Cassandra](#Cassandra)
- ¿Por qué un laboratorio de un nodo con RF = 1 no demuestra tolerancia a fallas? :: Porque hay una sola copia: hacen falta al menos tres nodos para observar RF = 3 y caídas de nodos. [→ Cassandra](#Cassandra)
- ¿Cuáles son los elementos de un grafo en Neo4j? :: Nodos (con etiquetas: Cliente, Producto), relaciones con tipo y dirección (COMPRO, SIGUE, PERTENECE_A) y propiedades en nodos y relaciones. [→ Neo4j](#Neo4j)
- ¿Qué aporta recorrer relaciones frente a múltiples JOIN? :: Las relaciones están persistidas como elementos de primera clase, no como listas de identificadores: el recorrido sigue punteros en lugar de cruzar tablas. [→ Neo4j](#Neo4j)
- ¿Qué costos tiene un grafo? :: Modelado, índices, cardinalidad y supernodos (nodos con muchísimas relaciones). Conviene cuando el valor está en explorar conexiones. [→ Neo4j](#Neo4j)
- ¿Qué garantías ACID tiene cada motor? :: Redis: comandos atómicos y MULTI/EXEC sin rollback; durabilidad según RDB/AOF. Cassandra: atomicidad por partición, LWT con Paxos (IF), consistencia configurable, sin aislamiento entre particiones. Neo4j: transacciones ACID completas. [→ ACID en NoSQL](#ACID%20en%20NoSQL)
- ¿Cuál es la formulación correcta de CAP? :: Bajo una partición de red aparece un compromiso: C = cada lectura ve el último valor confirmado o recibe error; A = cada solicitud a un nodo no fallado obtiene respuesta; P = la red puede perder mensajes y hay que tolerarlo. [→ Distribución y CAP](#Distribución%20y%20CAP)
- ¿Qué no significa CAP? :: No es un menú de "elegir dos de tres" en cualquier momento; su C no es la C de ACID; y no es una etiqueta fija por producto, porque cambia con el despliegue y la configuración. [→ Distribución y CAP](#Distribución%20y%20CAP)
- ¿Cómo se comporta Cassandra ante una falla según el CL? :: Con ONE puede responder aunque haya pocas réplicas (más disponibilidad, quizá dato viejo). Con QUORUM exige mayoría y puede rechazar durante la falla (más consistencia). [→ Distribución y CAP](#Distribución%20y%20CAP)
- En OmniMarket, ¿qué motor fue a cada dominio? :: PostgreSQL: clientes, inventario, ventas y pagos, fidelización. MongoDB: catálogo, marketing, logística y recomendaciones (batch). Redis: sesiones y carritos. Cassandra: navegación. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
- En OmniMarket, ¿cómo se evita vender dos veces la última unidad? :: En PostgreSQL, SELECT stock … FOR UPDATE: la transacción B espera el lock, al liberarse relee el stock en 0 y hace ROLLBACK. Redis sólo guarda la intención y MongoDB sólo valida el producto. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)

## Cuestionario

1. Carritos y sesiones que tienen que caducar solos. ¿Qué motor y qué mecanismo?
   - [x] Redis, con TTL
   - [ ] Cassandra, con clustering por fecha
   - [ ] Neo4j, con una relación EXPIRA
   - [ ] MongoDB, con un índice compuesto
   > Clave–valor en memoria con expiración automática. [→ Redis](#Redis)
2. ¿Qué estructura de Redis usás para un ranking de productos por puntaje?
   - [x] Sorted set (ZADD, ZREVRANGE)
   - [ ] Set (SADD)
   - [ ] Hash (HSET)
   - [ ] String (SET)
   > El set no garantiza orden; el sorted set ordena por puntaje. [→ Redis](#Redis)
3. ¿Qué devuelve `ZREVRANGE ranking 0 2 WITHSCORES`?
   - [x] Los tres miembros de mayor puntaje, de mayor a menor, con su puntaje
   - [ ] Los tres de menor puntaje
   - [ ] Los miembros con puntaje entre 0 y 2
   - [ ] Los dos primeros miembros
   > REV = descendente; 0 2 son posiciones (índices 0, 1 y 2), no puntajes. [→ Redis](#Redis)
4. Después de que una clave expiró, `TTL session:temporal` devuelve:
   - [x] -2
   - [ ] -1
   - [ ] 0
   - [ ] nil
   > *(tutor)* -2 = la clave no existe; -1 = existe pero sin expiración. En la U9 Act. 1 se vio 18 y después -2. [→ Redis](#Redis)
5. Redis persiste con RDB cada 5 minutos y el servidor se cae en el minuto 4. ¿Qué pasa?
   - [x] Se pierden los cambios de esos 4 minutos
   - [ ] No se pierde nada: RDB registra cada operación
   - [ ] Se pierde todo el archivo
   - [ ] Redis no arranca sin AOF
   > El que registra cada escritura es AOF. [→ Redis](#Redis)
6. ¿Qué afirmación sobre MULTI/EXEC en Redis es correcta?
   - [x] Ejecuta la secuencia sin intercalar otros clientes, pero un error en un comando no revierte los anteriores
   - [ ] Es una transacción ACID con rollback
   - [ ] Bloquea la base para lecturas
   - [ ] Sólo funciona en cluster
   > Atomicidad sin rollback tradicional. [→ ACID en NoSQL](#ACID%20en%20NoSQL)
7. En Cassandra, `PRIMARY KEY ((usuario), fecha, evento_id)`. ¿Cuál es la clave de partición?
   - [x] usuario
   - [ ] usuario y fecha
   - [ ] evento_id
   - [ ] Las tres columnas
   > Lo que está entre los paréntesis internos es la partición; el resto son clustering columns. [→ Cassandra](#Cassandra)
8. ¿Cuál de estas consultas es natural para la tabla `eventos` con partición por usuario?
   - [x] `SELECT * FROM eventos WHERE usuario = 'ana' LIMIT 10`
   - [ ] `SELECT * FROM eventos WHERE tipo = 'click'`
   - [ ] `SELECT * FROM eventos e JOIN usuarios u ON ...`
   - [ ] `SELECT * FROM eventos WHERE fecha > '2026-10-01'`
   > La consulta empieza por la clave de partición; Cassandra no hace JOIN. [→ Cassandra](#Cassandra)
9. Necesitás consultar eventos por tipo en Cassandra. ¿Cuál es la solución que pide la cátedra?
   - [x] Otra tabla orientada a esa consulta, con el tipo en la clave de partición
   - [ ] Agregar ALLOW FILTERING
   - [ ] Un JOIN con una tabla de tipos
   - [ ] Cambiar el CL a ALL
   > ALLOW FILTERING no es solución final: recorre todas las particiones. [→ Cassandra](#Cassandra)
10. Con RF = 3, ¿cuántas réplicas tienen que responder con CL = QUORUM?
    - [x] 2
    - [ ] 1
    - [ ] 3
    - [ ] Depende del coordinador
    > QUORUM = mayoría. ONE = 1, ALL = 3. [→ Cassandra](#Cassandra)
11. ¿Qué afirmación sobre RF y CL es correcta?
    - [x] RF es cuántas copias existen; CL es cuántas réplicas deben responder, y se elige por consulta
    - [ ] Son lo mismo con distinto nombre
    - [ ] CL se fija al crear el keyspace
    - [ ] RF se elige en cada consulta
    > "RF y CL son decisiones diferentes." [→ Cassandra](#Cassandra)
12. ¿Cómo se decide en qué nodos vive una fila de Cassandra?
    - [x] La clave de partición pasa por un hash, se vuelve un token y el token determina los nodos dueños
    - [ ] Lo decide el nodo maestro
    - [ ] Por orden de llegada
    - [ ] Por la clustering column
    > No hay maestro; el coordinador puede ser cualquier nodo. [→ Cassandra](#Cassandra)
13. ¿Qué devuelve `MATCH (p:Producto)<-[:COMPRO]-(c:Cliente) RETURN p.nombre, count(c) AS compras`?
    - [x] Cada producto con la cantidad de clientes que lo compraron
    - [ ] Los clientes con la cantidad de productos comprados
    - [ ] Todos los productos sin compras
    - [ ] Un error por la flecha invertida
    > La flecha va de Cliente a Producto; count agrupa por p.nombre. [→ Neo4j](#Neo4j)
14. ¿Cuándo conviene Neo4j?
    - [x] Cuando el valor está en recorrer y descubrir conexiones
    - [ ] Para guardar millones de eventos por fecha
    - [ ] Para sesiones con expiración
    - [ ] Para cualquier sistema que tenga relaciones
    > Todo sistema tiene relaciones; el grafo conviene cuando los recorridos son el problema. Cuidado con los supernodos. [→ Neo4j](#Neo4j)
15. ¿Qué motor de los tres ofrece transacciones ACID completas?
    - [x] Neo4j
    - [ ] Redis
    - [ ] Cassandra
    - [ ] Ninguno: NoSQL no tiene ACID
    > NoSQL no significa "sin ACID": las garantías y su alcance dependen del motor. [→ ACID en NoSQL](#ACID%20en%20NoSQL)
16. ¿Qué ofrece Cassandra para una actualización condicional?
    - [x] Lightweight transactions (IF) con Paxos, dentro de una partición
    - [ ] Transacciones ACID entre particiones
    - [ ] MULTI/EXEC
    - [ ] Bloqueos de fila como PostgreSQL
    > No hay transacciones ACID generales entre particiones. [→ ACID en NoSQL](#ACID%20en%20NoSQL)
17. Según la formulación correcta de CAP, ¿cuándo hay que elegir entre C y A?
    - [x] Cuando hay una partición de red
    - [ ] Al instalar el motor, una vez y para siempre
    - [ ] En cada consulta, aunque la red funcione
    - [ ] Sólo en motores de grafo
    > "No es menú": no se eligen dos de tres en cualquier momento. [→ Distribución y CAP](#Distribución%20y%20CAP)
18. ¿Qué afirmaciones sobre CAP son falsas? (varias correctas)
    - [x] La C de CAP es la misma consistencia de ACID
    - [x] Cada producto tiene una etiqueta CAP fija
    - [x] Siempre se eligen dos de tres propiedades
    - [ ] Bajo partición, responder puede implicar devolver datos desactualizados
    > La C de CAP habla de ver el último valor confirmado; la de ACID, de respetar restricciones. Redis con Sentinel o Cluster y Neo4j standalone o cluster cambian su comportamiento. [→ Distribución y CAP](#Distribución%20y%20CAP)
19. Cassandra con RF = 3 y una partición de red deja a una sola réplica alcanzable. ¿Qué pasa con una lectura en QUORUM?
    - [x] Se rechaza: no consigue mayoría
    - [ ] Responde con la réplica disponible
    - [ ] Espera indefinidamente sin error
    - [ ] Se convierte sola en ONE
    > Con ONE respondería (más disponibilidad, quizá dato viejo). [→ Distribución y CAP](#Distribución%20y%20CAP)
20. ¿Qué tres conceptos de distribución pide no confundir la clase?
    - [x] Particionado, replicación y consistencia
    - [ ] Backup, restore y recovery
    - [ ] Índice, plan y estadística
    - [ ] Nodo, relación y propiedad
    > Particionar distribuye subconjuntos; replicar mantiene copias; la consistencia define qué lecturas y escrituras son válidas. [→ Distribución y CAP](#Distribución%20y%20CAP)
21. En el script de Cassandra de la U9 Act. 1 la tabla quedó con `CLUSTERING ORDER BY (fecha_evento ASC, ...)` y "los últimos tres eventos de U01" se pidieron con `WHERE usuario_id = 'U01' LIMIT 3`. ¿Qué devuelve? *(tutor)*
    - [x] Los tres eventos más viejos de U01
    - [ ] Los tres más recientes
    - [ ] Tres eventos al azar
    - [ ] Un error por falta de ORDER BY
    > Las filas salen en el orden de clustering. Con ASC hace falta ORDER BY fecha_evento DESC, o definir la tabla con DESC como en la clase. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
22. La tabla `eventos_por_tipo` con `PRIMARY KEY ((tipo_evento), fecha_evento, evento_id)` resuelve la consulta, pero ¿qué riesgo tiene? *(tutor)*
    - [x] Pocos tipos distintos: cada partición crece sin límite y concentra la carga
    - [ ] No permite ordenar por fecha
    - [ ] Obliga a usar ALLOW FILTERING
    - [ ] Duplica la clave primaria
    > "Cuidado con particiones que crecen sin límite": se acota con un bucket, por ejemplo `((tipo_evento, dia), ...)`. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
23. En la recomendación de la U9 Act. 1, ¿para qué sirven `WHERE NOT (u1)-[:COMPRO]->(p)` y `RETURN DISTINCT`?
    - [x] Excluir lo que U01 ya compró y no repetir un producto que compraron varios seguidos
    - [ ] Ordenar por precio y limitar a uno
    - [ ] Crear la relación COMPRO y borrar duplicados del grafo
    - [ ] Excluir a los clientes que U01 no sigue
    > El recorrido es U01 -SIGUE-> u2 -COMPRO-> p. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
24. En OmniMarket, ¿por qué el inventario quedó en PostgreSQL y no en Redis o Cassandra?
    - [x] Necesita ACID y bloqueo de fila para no vender dos veces la última unidad
    - [ ] Porque PostgreSQL es más rápido que Redis
    - [ ] Porque el stock tiene atributos variables
    - [ ] Porque Cassandra no admite números
    > Redis persiste asincrónicamente (el stock podría "revivir") y Cassandra prioriza disponibilidad. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
25. ¿Cómo defendió el grupo no usar Neo4j para las recomendaciones de OmniMarket?
    - [x] El negocio tolera recomendaciones calculadas en batch, y un quinto motor sumaba costo operativo
    - [ ] Neo4j no puede recorrer relaciones SIGUE
    - [ ] Neo4j no tiene transacciones
    - [ ] MongoDB es un motor de grafos
    > "No gana quien usa más motores": cada motor entra sólo si resuelve algo que los demás no. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)

## Tres modelos tres preguntas

*Clase 9, diap. 1–5 y 23.* Un mismo comercio electrónico tiene tres problemas: carritos y sesiones que caducan,
millones de acciones por usuario y fecha, y productos relacionados o recomendaciones. **No son sustitutos perfectos.**

| Motor | Pregunta | En el comercio |
|---|---|---|
| Redis | ¿Qué dato recupero inmediatamente por una clave? | Carrito y sesión con TTL |
| Cassandra | ¿Qué consultas escalan sobre grandes volúmenes distribuidos? | Actividad por usuario y período |
| Neo4j | ¿Qué conexiones necesito recorrer y descubrir? | Afinidades entre clientes y productos |

Objetivo: **decidir a partir de evidencia, no por popularidad** (experimentar, comparar, justificar).

## Redis

*Diap. 6–11.* Clave–valor: **la clave determina el acceso**; es esencialmente una base **en memoria**. Cliente:
`redis-cli`.

- **Estructuras**: strings, **hashes** (atributos de carrito o perfil chico), **sets** (miembros únicos: favoritos),
  **sorted sets** (ranking por puntaje) y listas.
- **TTL**: expiración automática para datos temporales.

```text
SET session:ana activa EX 120     # guarda con 120 s de vida
GET session:ana                   # lee
TTL session:ana                   # segundos restantes
HSET carrito:ana sku A10 cantidad 2
HGETALL carrito:ana               # todo el hash
ZADD ranking 10 ana 20 luis 15 eva
ZREVRANGE ranking 0 2 WITHSCORES  # top 3 descendente con puntaje
SADD favoritos:ana A10 B22
SMEMBERS favoritos:ana
EXPIRE favoritos:ana 60
```

**Set frente a sorted set**: el set no garantiza orden y guarda miembros únicos (favoritos, etiquetas, amigos en
común); el sorted set guarda pares **puntaje–miembro** ordenados (rankings, prioridades).

**Persistencia y límites** (diap. 10):

| | RDB | AOF |
|---|---|---|
| Qué es | Snapshot periódico de toda la base | Registro secuencial de cada escritura |
| Ventaja | Archivo compacto, reinicio rápido | Pérdida casi nula: reejecuta el historial |
| Costo | **Pérdida de lo posterior al último snapshot** | Durabilidad según configuración (cada segundo o cada operación); más uso de disco |

**Sin persistencia, un reinicio pierde todos los datos.** Límites a diseñar: **RAM** (`maxmemory`), **política de
expulsión** (borrar claves con TTL, LRU o devolver error), replicación y operación.

**Arquitectura** (diap. 11): instancia única (suficiente para practicar), **réplica** (puede atender lecturas;
replicación habitualmente **asíncrona**) y **cluster** (distribuye claves por **slots**; configuración explícita). La
distribución no es una propiedad de toda instalación.

## Cassandra

*Diap. 12–18.* Wide-column: **pensar primero en la consulta**. Cliente: `cqlsh`.

- **Partition key**: determina la ubicación del dato.
- **Clustering columns**: ordenan las filas dentro de una partición.
- **El esquema se diseña para consultas concretas, no para JOIN arbitrarios.**

```sql
CREATE KEYSPACE IF NOT EXISTS sgdb2026
  WITH replication = {'class':'SimpleStrategy', 'replication_factor':1};

CREATE TABLE eventos (
  usuario text, fecha timestamp, evento_id uuid, tipo text,
  PRIMARY KEY ((usuario), fecha, evento_id)
) WITH CLUSTERING ORDER BY (fecha DESC, evento_id ASC);

INSERT INTO eventos (usuario, fecha, evento_id, tipo)
VALUES ('ana', toTimestamp(now()), uuid(), 'click');
SELECT * FROM eventos WHERE usuario = 'ana' LIMIT 10;
```

- La consulta natural **empieza por usuario**. Cuidado con **particiones que crecen sin límite**.
- Una búsqueda global por `tipo` requiere **otro diseño** (otra tabla), no `ALLOW FILTERING`.
- **Distribución física**: la clave de partición pasa por una **función hash** y se vuelve un **token**; el token
  determina qué nodos son dueños del dato. **RF** define cuántas copias. El **coordinador** es el nodo al que el
  cliente le manda esa operación y contacta a las réplicas: **no hay maestro**, cualquier nodo puede coordinar.
- **Consistencia configurable**: RF y CL son decisiones diferentes. **CL** (consistency level) = cuántas réplicas
  deben responder para que la operación cuente como exitosa; se elige por consulta (`CONSISTENCY QUORUM;` en cqlsh).

  | CL (con RF = 3) | Réplicas que responden |
  |---|---|
  | ONE | 1 de 3 |
  | QUORUM | 2 de 3 (mayoría) |
  | ALL | 3 de 3 |

- **Advertencia del laboratorio**: un nodo único permite CQL, particiones y modelado; **con RF = 1 no se demuestra
  tolerancia a fallas**. Hacen falta tres nodos para observar RF = 3 y caídas. No afirmar tolerancia a fallas sin
  ensayar un cluster real.

## Neo4j

*Diap. 19–22.* **Las relaciones son elementos de primera clase.** Cliente: `cypher-shell` o Neo4j Browser.

- **Nodo** (persona, producto, categoría, con etiquetas), **relación** (COMPRO, SIGUE, PERTENECE_A, con **dirección y
  tipo**) y **propiedad** (atributos en nodos y relaciones).

```cypher
CREATE (a:Cliente {id:1, nombre:'Ana'})
CREATE (p:Producto {sku:'A10', nombre:'Teclado'})
CREATE (q:Producto {sku:'B22', nombre:'Mouse'})
CREATE (a)-[:COMPRO]->(p)
CREATE (a)-[:COMPRO]->(q);

MATCH (c:Cliente)-[:COMPRO]->(p:Producto) WHERE c.nombre = 'Ana'
RETURN c.nombre, p.nombre;

MATCH (p:Producto)<-[:COMPRO]-(c:Cliente)
RETURN p.nombre, count(c) AS compras;
```

- Los vínculos son **relaciones persistidas, no listas de identificadores**: recorrer relaciones reemplaza a
  múltiples JOIN.
- **Fortaleza**: recorridos y patrones variables. **Costo**: modelado, índices, cardinalidad y **supernodos**.
  **Decisión**: elegir cuando el valor está en explorar conexiones. El grafo no reemplaza automáticamente todo SQL.

## ACID en NoSQL

*Diap. 24.* ¿Los NoSQL sacrifican ACID? **No necesariamente**: cada motor ofrece garantías distintas según su
arquitectura y el alcance de sus operaciones.

| | Redis | Cassandra | Neo4j |
|---|---|---|---|
| Atomicidad | Comandos atómicos; MULTI/EXEC **sin rollback** tradicional | Atómica **por partición**; transacciones ligeras (LWT, `IF`) con **Paxos** | Transacciones **ACID completas** |
| Consistencia | Depende de las reglas de la aplicación | Configurable entre réplicas | Mantiene las restricciones definidas |
| Aislamiento | Ejecución secuencial; sin aislamiento SQL | Sin aislamiento general entre particiones | Aislamiento con bloqueos |
| Durabilidad | Según RDB/AOF | Commit log + SSTables | Registro de transacciones y recuperación |

Ejemplos de las notas: un carrito con MULTI/EXEC no se intercala con otros clientes, pero un error no revierte lo
anterior; en Cassandra un `IF` sirve para una actualización condicional, no para una transacción entre particiones; en
Neo4j una compra con sus relaciones se revierte entera si falla antes del COMMIT.

## Distribución y CAP

*Diap. 25–31.* No confundir técnicas con propiedades:

- **Particionado**: distribuir subconjuntos de datos entre nodos.
- **Replicación**: mantener copias para tolerancia a fallas y lecturas.
- **Consistencia**: definir qué lecturas y escrituras se consideran válidas.

**Si se corta la red**: el lado A acepta X = 1 y el lado B recibe una lectura y quizá X = 2. ¿Responder en ambos lados
o rechazar alguna operación?

**CAP, formulación correcta**: bajo una partición de red aparece un compromiso.

- **C**: cada lectura ve el último valor confirmado **o recibe error**.
- **A**: cada solicitud a un nodo **no fallado** obtiene respuesta.
- **P**: la red puede perder mensajes entre nodos; hay que tolerarlo.

**Lo que CAP no significa**: **no es menú** (no se "eligen dos de tres" en cualquier momento); **no es ACID** (la C de
CAP no es la consistencia de restricciones); **no es etiqueta fija** (un producto ofrece modos y configuraciones
distintas).

- **Cassandra**: con **ONE** puede responder con menos réplicas disponibles; con **QUORUM** exige mayoría y **puede
  rechazar durante fallas**. Latencia, disponibilidad y frescura dependen de la configuración.
- **Redis y Neo4j**: réplica, Sentinel y Cluster (Redis) o standalone y cluster (Neo4j) cambian las garantías. **No
  asignar una etiqueta CAP sin contexto**: evaluar despliegue, escritura, lectura y partición concreta.

**Matriz de decisión** (diap. 31):

| Criterio | Redis | Cassandra | Neo4j |
|---|---|---|---|
| Acceso | Clave directa | Rango por partición | Recorrido |
| Escala | Memoria y claves | Distribución | Densidad de relaciones |
| Operación | Persistencia, réplicas, backups, seguridad y costos (en los tres) | | |

Cierre: **elegir motor también es elegir costos de operación**. Puente a la [U10](dbaas-y-nube.md): ¿quién opera todo
esto en producción?

## Lo que hicimos en el laboratorio

**U9 Act. 1 — laboratorio multimotor** (VM Ubuntu `mv-sgbd2`).

- **Verificación de servicios**: `redis-cli ping`; `nodetool status` (el nodo debe estar **UN** = Up/Normal) y
  `cqlsh`; `systemctl status neo4j` y `cypher-shell -a bolt://localhost:7687 -u neo4j` (Bolt en 7687, HTTP en 7474;
  la contraseña inicial `neo4j` obliga a cambiarla).
- **Redis**: sesiones como string, carritos como hash, favoritos como set y ranking como sorted set.
  - `HSET carrito:U01 P102 5` devuelve 0 porque el campo ya existía (sólo actualizó); `HDEL` devuelve 1.
  - `SISMEMBER` devuelve 1 si está y 0 si no.
  - `SET session:temporal ... EX 30`: el TTL dio 18 y después **-2** (expiró).
  - **ACL**: `ACL SETUSER appuser on >clave ~session:* ~carrito:* ~favoritos:* ~ranking +GET +SET +HGETALL ...`; con
    ese usuario `GET session:U02` funciona y `CONFIG GET dir` se rechaza.
  - **Backup**: `BGSAVE` genera `dump.rdb`; se copió y se levantó una **instancia aislada en el puerto 6380** con ese
    archivo, y se compararon tres claves con la principal (6379) sin tocar el servicio compartido.
- **Cassandra**: keyspace `omnimarket` (SimpleStrategy, RF 1) y `eventos_por_usuario` con
  `PRIMARY KEY ((usuario_id), fecha_evento, evento_id)`; 15 eventos.
  - UPDATE y DELETE **con la clave primaria completa** (partición + clustering).
  - Rango de fechas: primero `usuario_id = ...` y después `>`/`<` sobre `fecha_evento`.
  - Filtrar por `tipo_evento` sin partición → error que pide `ALLOW FILTERING`. Solución: tabla `eventos_por_tipo`
    con `tipo_evento` como partición.
  - Seguridad: en `cassandra.yaml`, `authenticator: PasswordAuthenticator` y `authorizer: CassandraAuthorizer`;
    `GRANT SELECT ON KEYSPACE omnimarket TO lector_app` → SELECT permitido, INSERT denegado.
  - Backup: `nodetool snapshot omnimarket` (un directorio por marca de tiempo con las SSTables).
- **Neo4j**: 5 Cliente, 8 Producto, 3 Categoria, PERTENECE_A, COMPRO y SIGUE. Recorrido de dos saltos y
  recomendación:

  ```cypher
  MATCH (u1:Cliente {usuario_id:'U01'})-[:SIGUE]->(u2:Cliente)-[:COMPRO]->(p:Producto)
  WHERE NOT (u1)-[:COMPRO]->(p)
  RETURN DISTINCT p.producto_id, p.nombre;
  ```

  `WHERE NOT` excluye lo ya comprado y `DISTINCT` evita repetir un producto que compraron varios seguidos. Community
  no trae RBAC granular (es de Enterprise). Backup offline: `systemctl stop neo4j`, copiar
  `/var/lib/neo4j/data/databases/neo4j` y volver a arrancar.
- *(tutor)* Tres puntos flojos para la defensa:
  - En el script, la tabla quedó con clustering **ASC** y "los últimos tres" se pidió con `LIMIT 3` sin `ORDER BY`:
    devuelve los **tres más viejos**.
  - `eventos_por_tipo` particiona por un campo de **pocos valores**: particiones enormes y calientes. Se acota con un
    bucket, por ejemplo `((tipo_evento, dia), ...)`.
  - Las "restauraciones" de Cassandra y Neo4j se verificaron contando sobre la **misma** instancia, no restaurando en
    un entorno aislado como con Redis. Para Neo4j Community la herramienta offline oficial es
    `neo4j-admin database dump`/`load`.

**U9 Act. 2 — batalla de arquitecturas: OmniMarket.**

- **Supuestos**: 500.000 usuarios activos por mes, 50.000 SKU, +30 % anual; hasta 5.000 operaciones por segundo en
  sesiones y navegación frente a 200 en pagos; ACID obligatorio en ventas, pagos e inventario, consistencia eventual
  en navegación, recomendaciones y carritos; < 10 ms en sesiones y carritos; 99,99 % de disponibilidad.
- **Asignación** (4 motores para 10 dominios):

  | Motor | Dominios | Por qué |
  |---|---|---|
  | PostgreSQL | Clientes, inventario, ventas y pagos, fidelización | Unicidad (DNI, email), FK, ACID y bloqueo de fila; los puntos son un libro contable |
  | MongoDB | Catálogo, marketing, logística, recomendaciones (batch) | Atributos y reglas heterogéneos; el envío es un documento con su historial embebido |
  | Redis | Sesiones y carritos | RAM, < 1 ms, TTL para carritos abandonados |
  | Cassandra | Navegación (clickstream) | Ingesta masiva write-heavy por usuario y fecha |

- **Fuente de verdad única**: cada dato compartido tiene un solo dueño (PostgreSQL: identidad, dinero y stock;
  MongoDB: catálogo y campañas; Redis: sólo temporal; Cassandra: historial de clics). Los demás se actualizan desde
  él.
- **Sincronización**: **sincrónica** sólo donde no se puede fallar (la compra en PostgreSQL, leyendo el producto de
  MongoDB); **asincrónica** con eventos (Kafka o CDC) o batch nocturno para lo que tolera retraso.
- **Concurrencia en la última unidad**: Redis guarda la intención (single-thread, no conoce el stock), MongoDB valida
  el producto y PostgreSQL decide: `SELECT stock FROM inventario WHERE producto_id = 'PROD-101' FOR UPDATE`. A toma el
  lock, descuenta y hace COMMIT; B espera, relee 0 y hace ROLLBACK. Después un evento marca el producto sin stock en
  MongoDB y borra el carrito en Redis.
- **Costo de sumar motores**: "no gana quien usa más tecnologías". Objeciones previstas: ¿por qué no Neo4j? (batch
  alcanza, un quinto motor suma costo); ¿por qué Cassandra? (el clickstream saturaría al documental); ¿y si cae Redis?
  (es capa rápida; lo crítico se persiste en PostgreSQL al pagar).
- *(tutor)* La matriz de la Fase 2 marcaba Neo4j "SI" para recomendaciones y la arquitectura final las puso en
  MongoDB: en la defensa conviene explicar ese cambio como decisión de costo, no dejarlo como contradicción.
