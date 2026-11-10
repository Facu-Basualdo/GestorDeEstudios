# Datos semiestructurados y transición a NoSQL
[← Índice Sistemas de Gestión de Bases de Datos](../INDICE.md)

> Tema 7 (y la introducción a los temas 8 y 10) · Peso: 2/3 (estimado) · Fuente: *Clase 7 - Datos semiestructurados 2026*
> (diap. 1–36), la bitácora U7 Act. 1 (capacidades de PostgreSQL) y la bitácora U7 Act. 2 "Laboratorio bisagra" (JSONB + GIN) del grupo.
> Lo que agrega el tutor va marcado *(tutor)*.

## Preguntas de recuperación

- ¿Cuál es la pregunta de toda la unidad 7? :: ¿Por qué el modelo relacional deja de ser suficiente en algunos escenarios? Se responde desde tensiones concretas: estructura que cambia, jerarquía, relaciones con demasiados JOIN, escala y patrones de acceso no tabulares. [→ La pregunta de la unidad](#La%20pregunta%20de%20la%20unidad)
- ¿Qué sigue aportando el modelo relacional según la clase? :: ACID, integridad (FK y constraints), SQL declarativo con optimizador maduro y operación conocida (backup, seguridad, concurrencia, HA). La pregunta no es "SQL contra NoSQL" sino qué parte del problema representa mejor cada modelo. [→ La pregunta de la unidad](#La%20pregunta%20de%20la%20unidad)
- ¿Qué opciones aparecen ante un catálogo con atributos distintos por categoría? :: Una tabla por categoría, una tabla con muchas columnas opcionales (NULL), EAV o un documento flexible. [→ La pregunta de la unidad](#La%20pregunta%20de%20la%20unidad)
- ¿Qué distingue a los datos estructurados, semiestructurados y no estructurados? :: Estructurados: esquema explícito y estable (tablas, tipos, restricciones). Semiestructurados: estructura presente pero flexible, anidada o autocontenida (XML, JSON, eventos). No estructurados: texto libre, imagen, audio, video. [→ Tres formas de mirar los datos](#Tres%20formas%20de%20mirar%20los%20datos)
- ¿Qué es un agregado? :: Un objeto autocontenido con los datos que se usan juntos (por ejemplo el pedido con su cliente e ítems), pensado para un patrón de acceso. Cambia la pregunta de "¿cómo normalizo?" a "¿qué datos se usan juntos?". [→ Tres formas de mirar los datos](#Tres%20formas%20de%20mirar%20los%20datos)
- ¿Qué diferencia hay entre json y jsonb en PostgreSQL? :: json guarda una copia del texto y lo reprocesa en muchas operaciones (preserva formato). jsonb guarda una representación binaria descompuesta: se procesa más rápido y admite índices. La documentación recomienda jsonb salvo necesidades específicas. [→ PostgreSQL 18](#PostgreSQL%2018)
- ¿Qué hace un índice GIN sobre una columna jsonb? :: Es un índice invertido: mapea cada clave y valor interno a las filas que lo contienen, y permite buscar por claves, valores y contención (@>) sin recorrer la tabla. [→ PostgreSQL 18](#PostgreSQL%2018)
- ¿Cómo se indexa una propiedad interna de un JSON en MySQL? :: Con una columna generada (GENERATED ALWAYS AS (atributos->>'$.marca')) y un índice sobre esa columna. [→ MySQL 9.7](#MySQL%209.7)
- ¿Qué es el Document Store de MySQL? :: Un modo de trabajo documental sobre el mismo servidor: colecciones y documentos con CRUD vía X DevAPI, por X Protocol (X Plugin), sin perder ACID. MySQL no se convierte en MongoDB. [→ MySQL 9.7](#MySQL%209.7)
- ¿Qué hacen las JSON Duality Views de MySQL? :: Mapean tablas relacionales a documentos JSON jerárquicos y permiten leer y escribir con los dos modelos sin duplicar necesariamente los datos. [→ MySQL 9.7](#MySQL%209.7)
- ¿Qué diferencia hay entre scale up y scale out? :: Scale up: más CPU, RAM o disco en el mismo servidor. Scale out: más nodos que comparten datos y carga; aparece el problema de particionar, replicar y mantener consistencia. [→ Escalar con replicación y sharding](#Escalar%20con%20replicación%20y%20sharding)
- ¿Qué es el sharding y cuál es su riesgo? :: Partir horizontalmente una base lógica en fragmentos por una clave de partición. Riesgo: una mala shard key concentra tráfico o complica consultas; costo: consultas cross-shard, rebalanceo y operación distribuida. [→ Escalar con replicación y sharding](#Escalar%20con%20replicación%20y%20sharding)
- ¿Por qué "SQL = ACID y NoSQL = BASE" es una simplificación? :: Porque ACID describe propiedades de transacciones y BASE fue un enfoque histórico de algunos sistemas distribuidos. Hay NoSQL con transacciones fuertes y relacionales distribuidos con distintos compromisos de consistencia. [→ ACID BASE y CAP](#ACID%20BASE%20y%20CAP)
- ¿Cuáles son las cuatro familias NoSQL y su ejemplo? :: Clave–valor (Redis), documental (MongoDB), wide-column (Cassandra) y grafo (Neo4j). [→ Familias NoSQL y persistencia políglota](#Familias%20NoSQL%20y%20persistencia%20políglota)
- ¿Qué es la persistencia políglota? :: Usar varios modelos en un mismo sistema, cada uno donde aporta valor: relacional para pedidos y pagos, documental para catálogo, clave–valor para sesión, wide-column para eventos, grafo para fraude o relaciones. [→ Familias NoSQL y persistencia políglota](#Familias%20NoSQL%20y%20persistencia%20políglota)
- ¿Cuál es el árbol de decisión de la clase? :: ¿El relacional representa bien el problema? Sí → mantener. No → ¿alcanza una extensión (JSONB, Document Store)? Sí → extender. No → modelo especializado. [→ Familias NoSQL y persistencia políglota](#Familias%20NoSQL%20y%20persistencia%20políglota)
- En la U7 Act. 2, ¿qué evidencia mostró que el GIN servía? :: El plan pasó de Seq Scan (31 buffers leídos) a Bitmap Index Scan sobre ix_universidad_carreras (9 buffers) en la búsqueda por contención @> sobre el array JSONB carreras. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
- En la U7 Act. 1, ¿qué capacidades de PostgreSQL eran core y cuáles extensión? :: Core: JSONB, índice GIN y Full Text Search. hstore: extensión contrib disponible pero no instalada (CREATE EXTENSION hstore). PostGIS: paquete aparte (postgresql-18-postgis-3), no instalado. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)

## Cuestionario

1. ¿Cuál de estas situaciones **no** es por sí sola un motivo para abandonar el modelo relacional?
   - [x] Que algunas entidades tengan unos pocos atributos opcionales
   - [ ] Que una sola instancia ya no alcance para el volumen
   - [ ] Que las consultas sean recorridos profundos de relaciones
   - [ ] Que el acceso dominante sea una clave con latencia mínima
   > La flexibilidad es una tensión de diseño, no una excusa para abandonar integridad y transacciones: unos atributos opcionales se resuelven extendiendo el relacional. [→ La pregunta de la unidad](#La%20pregunta%20de%20la%20unidad)
2. ¿Qué significa "semiestructurado"?
   - [x] Que hay estructura, pero flexible, anidada o autocontenida
   - [ ] Que los datos no tienen estructura
   - [ ] Que sólo puede guardarse fuera de un SGBD
   - [ ] Que es texto libre, como un PDF
   > Semiestructurado no significa "sin estructura". El texto libre es no estructurado. [→ Tres formas de mirar los datos](#Tres%20formas%20de%20mirar%20los%20datos)
3. ¿Qué afirmación sobre JSON es correcta según la clase?
   - [x] Es una representación; no es por sí mismo un modelo de base de datos ni una arquitectura NoSQL
   - [ ] Usar JSON convierte a la base en NoSQL
   - [ ] JSON no admite arrays
   - [ ] JSON reemplazó a XML en todas las integraciones
   > XML sigue vivo en integraciones, mensajería y sistemas legados; JSON es sólo un formato. [→ Tres formas de mirar los datos](#Tres%20formas%20de%20mirar%20los%20datos)
4. ¿Qué tipo de PostgreSQL conviene para consultar el contenido de documentos y poder indexarlo?
   - [x] jsonb
   - [ ] json
   - [ ] text con un CHECK
   - [ ] hstore
   > jsonb se guarda descompuesto en binario, se procesa más rápido y admite índices; json reprocesa el texto. [→ PostgreSQL 18](#PostgreSQL%2018)
5. ¿Qué índice de PostgreSQL acelera `WHERE atributos @> '{"marca":"X"}'` sobre una columna jsonb?
   - [x] GIN
   - [ ] B-tree sobre la columna
   - [ ] Hash
   - [ ] Ninguno: jsonb no se indexa
   > GIN es un índice invertido: clave o valor → filas. Un B-tree por columna no entra en el documento. [→ PostgreSQL 18](#PostgreSQL%2018)
6. En MySQL, la consulta filtra seguido por la marca guardada dentro de una columna JSON. ¿Qué se hace?
   - [x] Columna generada con atributos->>'$.marca' y un índice sobre ella
   - [ ] Un índice GIN sobre la columna JSON
   - [ ] Pasar la tabla a Document Store
   - [ ] Nada: MySQL indexa el JSON completo solo
   > GIN es de PostgreSQL. En MySQL la propiedad frecuente se vuelve columna generada indexada, y sólo si hay una consulta que lo justifique. [→ MySQL 9.7](#MySQL%209.7)
7. ¿Qué es el Document Store de MySQL?
   - [x] Una interfaz documental (colecciones, X DevAPI, X Protocol) sobre el mismo servidor, con ACID
   - [ ] Un motor aparte compatible con MongoDB
   - [ ] Una columna de tipo JSON
   - [ ] Una extensión que hay que compilar
   > "MySQL no se convierte en MongoDB": agrega una interfaz documental sobre el mismo motor. [→ MySQL 9.7](#MySQL%209.7)
8. ¿Qué permiten las JSON Duality Views de MySQL 9.7?
   - [x] Leer y escribir los mismos datos como tablas relacionales o como documentos JSON jerárquicos
   - [ ] Duplicar cada tabla en una colección
   - [ ] Validar JSON con XSD
   - [ ] Replicar JSON a MongoDB
   > Unifican representación relacional y jerárquica sin duplicar necesariamente los datos. [→ MySQL 9.7](#MySQL%209.7)
9. ¿Cómo se aproxima PostgreSQL al multimodelo?
   - [x] Con tipos, operadores, índices y extensiones integradas al SQL (jsonb, arrays, hstore, full text)
   - [ ] Con una API documental separada del SQL
   - [ ] Con un motor de grafos incluido por defecto
   - [ ] No lo hace: es sólo relacional
   > La interfaz documental aparte es el camino de MySQL; PostgreSQL extiende el SQL. [→ PostgreSQL 18](#PostgreSQL%2018)
10. Una sola instancia ya no alcanza. ¿Qué cambia al pasar a scale out?
    - [x] Hay que decidir cómo particionar, replicar y mantener una visión consistente
    - [ ] Nada: es agregar servidores
    - [ ] Desaparece la necesidad de backup
    - [ ] Se pierde SQL
    > Distribuir cambia el problema de consistencia, particionado y operación. [→ Escalar con replicación y sharding](#Escalar%20con%20replicación%20y%20sharding)
11. ¿Cuál es el riesgo principal de elegir mal la shard key?
    - [x] Concentrar el tráfico en un fragmento y complicar las consultas
    - [ ] Perder la replicación
    - [ ] Que el sharding pase a ser vertical
    - [ ] Que no se pueda hacer backup
    > Una clave mal elegida genera fragmentos calientes y consultas cross-shard. [→ Escalar con replicación y sharding](#Escalar%20con%20replicación%20y%20sharding)
12. ¿Qué afirmación sobre ACID y BASE es correcta?
    - [x] ACID describe transacciones; BASE es un enfoque histórico de algunos sistemas distribuidos, y no son etiquetas de familias
    - [ ] Todo motor NoSQL es BASE
    - [ ] Todo motor relacional distribuido es estrictamente ACID
    - [ ] BASE significa que no hay consistencia nunca
    > BASE = disponibilidad básica, estado flexible y consistencia eventual. Hay NoSQL con transacciones fuertes. [→ ACID BASE y CAP](#ACID%20BASE%20y%20CAP)
13. Según CAP, ¿cuándo aparece la decisión entre consistencia y disponibilidad?
    - [x] Cuando hay una partición de red real entre nodos
    - [ ] Siempre, en cualquier consulta
    - [ ] Sólo en motores relacionales
    - [ ] Cuando se crea un índice
    > Si dos grupos de nodos no se comunican: ¿respondo con datos quizá viejos o rechazo para proteger la consistencia? [→ ACID BASE y CAP](#ACID%20BASE%20y%20CAP)
14. ¿Qué **no** significa NoSQL según la clase? (varias correctas)
    - [x] Que no se use SQL en absoluto
    - [x] Que no existan transacciones
    - [x] Que no haga falta diseñar
    - [ ] Que haya que pensar desde el patrón de datos y de acceso
    > No significa "sin SQL", no garantiza que no haya transacciones y no elimina el diseño; sí exige pensar desde el patrón de acceso. [→ Familias NoSQL y persistencia políglota](#Familias%20NoSQL%20y%20persistencia%20políglota)
15. Relacioná: sesión y carrito con expiración. ¿Qué familia corresponde?
    - [x] Clave–valor
    - [ ] Documental
    - [ ] Wide-column
    - [ ] Grafo
    > Acceso directo por clave con mínimo overhead (Redis). [→ Familias NoSQL y persistencia políglota](#Familias%20NoSQL%20y%20persistencia%20políglota)
16. Detectar fraude siguiendo conexiones entre clientes, cuentas, comercios e IP. ¿Qué familia corresponde?
    - [x] Grafo
    - [ ] Wide-column
    - [ ] Clave–valor
    - [ ] Documental
    > Cuando las relaciones y los recorridos son el dato principal (Neo4j). [→ Familias NoSQL y persistencia políglota](#Familias%20NoSQL%20y%20persistencia%20políglota)
17. Millones de eventos por cliente y fecha, distribuidos en varios nodos. ¿Qué familia corresponde?
    - [x] Wide-column
    - [ ] Grafo
    - [ ] Documental
    - [ ] Clave–valor
    > El diseño gira alrededor de la partición y las consultas previstas (Cassandra). No es lo mismo que un column-store analítico. [→ Familias NoSQL y persistencia políglota](#Familias%20NoSQL%20y%20persistencia%20políglota)
18. En el árbol de decisión de la clase, el relacional no representa bien el catálogo pero JSONB lo resuelve. ¿Qué se hace?
    - [x] Extender el relacional (JSONB o Document Store)
    - [ ] Migrar todo a MongoDB
    - [ ] Mantener el relacional sin cambios
    - [ ] Usar un modelo de grafo
    > Sí representa → mantener; no, pero alcanza una extensión → extender; no alcanza → modelo especializado. [→ Familias NoSQL y persistencia políglota](#Familias%20NoSQL%20y%20persistencia%20políglota)
19. En la U7 Act. 2, ¿qué veredicto dio el grupo para el catálogo de universidades con carreras en JSONB?
    - [x] Mantener el relacional extendido: JSONB + GIN alcanzaba sin perder ACID ni FK
    - [ ] Migrar a MongoDB por la variabilidad del esquema
    - [ ] Usar Cassandra por volumen
    - [ ] Volver a normalizar las carreras en otra tabla
    > Un NoSQL sólo se justificaría si el volumen superara el scale up o el esquema no tuviera un núcleo estable. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
20. ¿Qué operador y clase de índice usó el grupo en la U7 Act. 2?
    - [x] @> (contención) con un GIN jsonb_path_ops
    - [ ] ->> con un B-tree
    - [ ] LIKE con un índice full text
    - [ ] = con un índice hash
    > jsonb_path_ops es la clase de GIN para búsquedas por contención; ->> devuelve texto. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)

## La pregunta de la unidad

*Clase 7, diap. 1–6.* **¿Por qué el modelo relacional deja de ser suficiente en algunos escenarios?** La unidad no
parte de una tecnología nueva sino de cinco tensiones del modelo que ya conocemos:

| Tensión | Qué pasa |
|---|---|
| Estructura | La forma de los datos cambia con frecuencia |
| Jerarquía | Los datos llegan naturalmente anidados |
| Relaciones | Algunos recorridos requieren demasiados JOIN |
| Escala | Una sola instancia deja de alcanzar |
| Acceso | El patrón de consulta no tiene forma tabular |

- **El relacional sigue siendo excelente** (diap. 4): ACID, integridad (FK, constraints), SQL declarativo con
  optimizador maduro y operación conocida (backup, seguridad, concurrencia, HA). La pregunta profesional no es
  "SQL contra NoSQL" sino **qué parte del problema representa mejor cada modelo**.
- **Caso del catálogo** (diap. 5–6): notebooks (RAM, CPU, GPU), heladeras (litros, no frost), calzado (talle, color).
  ¿Una tabla por categoría, 80 columnas opcionales, EAV o un documento flexible? Si el esquema es estable y dominan
  las relaciones e invariantes, el relacional funciona muy bien. Si los atributos cambian por entidad y el agregado se
  consume como unidad, conviene flexibilizar. **La flexibilidad es una tensión de diseño, no una excusa para
  abandonar integridad y transacciones.**
- Objetivo de la unidad (diap. 2): **identificar** la tensión, **explorar** las capacidades extendidas del motor real y
  **decidir** entre relacional, extendido o modelo especializado.

## Tres formas de mirar los datos

*Diap. 7–11.*

- **Estructurados**: esquema explícito y estable (tablas, columnas, tipos, restricciones).
- **Semiestructurados**: la estructura está, pero es flexible, anidada o autocontenida (XML, JSON, eventos).
  **No significa "sin estructura".**
- **No estructurados**: texto libre, imagen, audio, video; requieren otras técnicas de interpretación.

**XML** es el antecedente: árbol jerárquico de elementos y atributos, autodescriptivo y validable con **XSD** (impone
estructura y tipos). Sigue vivo en integraciones empresariales, mensajería y sistemas legados.

**JSON**: objetos (pares clave–valor), arrays (colecciones ordenadas) y anidamiento. **Es una representación, no un
modelo de base de datos ni una arquitectura NoSQL.**

**Relación frente a agregado** (diap. 10): en el relacional, CLIENTE–PEDIDO–ITEM–PRODUCTO se unen con JOIN y reglas
entre tablas. En el agregado documental, el pedido trae adentro al cliente y sus ítems: **un objeto autocontenido para
un patrón de acceso**. La pregunta cambia a **¿qué datos se usan juntos?**

**JSON no resuelve todo** (diap. 11): ayuda con atributos variables, jerarquía y propiedades opcionales, pero no con la
distribución, los recorridos profundos, la caché por clave ni la escala masiva. Distintos problemas empujan hacia
distintos modelos.

## El relacional extendido

*Diap. 12.* Los motores relacionales modernos absorben patrones documentales, clave–valor, full text y espacial **sin
dejar de ser relacionales**: tipos extendidos, JSON y arrays, índices especializados, APIs y vistas documentales.

### MySQL 9.7

*Diap. 13–16.*

```sql
CREATE TABLE producto (id BIGINT PRIMARY KEY, nombre VARCHAR(100), atributos JSON);
SELECT nombre, atributos->>'$.marca' FROM producto;
```

- El tipo **JSON** garantiza un documento válido; rutas y funciones acceden a las propiedades internas. Seguimos en una
  tabla: la flexibilidad aparece en una parte del esquema.
- **De dato flexible a acceso eficiente**: la propiedad frecuente se vuelve **columna generada** y se indexa.

  ```sql
  ALTER TABLE producto ADD marca VARCHAR(50) GENERATED ALWAYS AS (atributos->>'$.marca');
  CREATE INDEX ix_producto_marca ON producto(marca);
  ```

  Conexión con la Unidad 2: un índice sólo tiene sentido frente a un patrón de consulta y su costo de escritura.
- **Document Store**: cliente → **X DevAPI** (MySQL Shell, conectores) → **X Protocol** → servidor con **X Plugin**
  (habilitado por defecto) → colecciones y documentos. CRUD documental sin abandonar ACID. **MySQL no se convierte en
  MongoDB.**
- **JSON Duality Views**: mapean tablas relacionales a documentos JSON jerárquicos; se lee y escribe con los dos modelos
  sin duplicar necesariamente los datos.
- Además: **Full Text** (índices de texto) y **Spatial** (tipos geométricos, GeoJSON, índices espaciales).

### PostgreSQL 18

*Diap. 17–19.*

| | json | jsonb |
|---|---|---|
| Cómo guarda | Copia del texto de entrada | Representación binaria descompuesta |
| Procesamiento | Reprocesa en muchas operaciones | Más eficiente |
| Formato original | Lo preserva | No |
| Índices | — | Sí (GIN) |

La documentación recomienda **jsonb** para la mayoría de las aplicaciones que consultan el contenido.

```sql
CREATE TABLE producto (id BIGSERIAL PRIMARY KEY, atributos JSONB);
CREATE INDEX idx_producto_json ON producto USING GIN (atributos);
```

**GIN** es un **índice invertido**: cada clave y valor del documento (marca, X, rojo, portable) apunta a las filas que
lo contienen. Permite buscar claves, valores y **contención**. El documento sigue dentro de una fila, pero el acceso
ya no se parece a un B-tree por columna.

Más allá del documento: **arrays** nativos (pertenencia y contención), **hstore** (extensión clave–valor de pares de
texto), **Full Text** (tokenización, tsvector, búsqueda indexada) y **extensiones** (tipos, funciones e índices).
PostgreSQL llega al multimodelo **por tipos, operadores, índices y extensiones integradas al SQL**.

### Comparación

*Diap. 20.* Mismo problema, mecanismos distintos: comparar capacidades, no memorizar nombres.

| Capacidad | MySQL 9.7 | PostgreSQL 18 |
|---|---|---|
| Documento | JSON | json / jsonb |
| API documental | Document Store + X DevAPI | SQL + tipos y extensiones |
| Índice documental | Columnas generadas, expresiones | GIN sobre jsonb |
| Clave–valor | Documento JSON | hstore |
| Full text | Sí | Sí |
| Spatial | Sí | Tipos + extensiones (PostGIS) |

## Escalar con replicación y sharding

*Diap. 21–23.* La flexibilidad del esquema no resuelve el crecimiento, la distribución ni la latencia global.

- **Scale up**: más CPU, RAM o disco en un mismo servidor.
- **Scale out**: más nodos que comparten datos y carga. Nueva pregunta: **¿cómo particiono, replico y mantengo una
  visión consistente?** Distribuir no es sólo agregar servidores.
- **Replicación** (ya vista en la [U6](replicacion-y-alta-disponibilidad.md)): un primario o líder y réplicas.
  Beneficio: disponibilidad, lectura, recuperación. Costo: red, almacenamiento y operación. Decisión: síncrona,
  asíncrona, quórum u otro mecanismo según el motor.
- **Sharding**: una sola base lógica partida horizontalmente en fragmentos según una **clave de partición** (por
  ejemplo, rangos 0–33, 34–66, 67–99). Ventaja: crece horizontalmente. **Riesgo: una mala shard key concentra tráfico
  o complica consultas.** Costo: consultas cross-shard, rebalanceo y operación distribuida.

## ACID BASE y CAP

*Diap. 24–25.* Se profundiza en la [Unidad 9](redis-cassandra-neo4j.md#Distribución%20y%20CAP).

- **ACID**: propiedades de transacciones (atomicidad, consistencia, aislamiento, durabilidad).
- **BASE**: enfoque histórico de algunos sistemas distribuidos: **B**asically **A**vailable, **S**oft state,
  **E**ventual consistency.
- **Evitar "SQL = ACID / NoSQL = BASE"**: hay motores NoSQL con transacciones fuertes y relacionales distribuidos con
  distintos compromisos de consistencia.
- **CAP**: cuando hay una **partición de red real**, el sistema distribuido tiene que decidir cómo balancear
  **C**onsistencia (todos ven una visión coherente del dato) y **A**vailability (cada solicitud recibe respuesta útil
  aunque haya nodos caídos), tolerando la **P**artición. Pregunta útil: si dos grupos de nodos no se comunican,
  ¿respondo con datos quizá desactualizados o espero o rechazo para proteger la consistencia?

## Familias NoSQL y persistencia políglota

*Diap. 26–33.*

**NoSQL** = sistemas con modelos distintos o complementarios al relacional que suelen optimizar flexibilidad,
distribución o patrones específicos de acceso. **No significa** "sin SQL"; **no garantiza** que no haya
transacciones; **no elimina** el diseño ni los trade-offs; **sí exige** pensar desde el patrón de datos y acceso.

| Familia | Idea | Caso típico | Ejemplo |
|---|---|---|---|
| Clave–valor | Una clave identifica un valor; acceso directo y simple | Sesión, caché, contador | Redis |
| Documental | Documentos jerárquicos, agregados flexibles | Pedido, catálogo | MongoDB ([U8](mongodb.md)) |
| Wide-column | Partición y columnas orientadas al acceso distribuido | Eventos masivos por cliente y fecha | Cassandra |
| Grafo | Nodos, relaciones y recorridos de primera clase | Fraude, conexiones, recomendaciones | Neo4j |

Wide-column **no es lo mismo que un column-store analítico**: el diseño gira alrededor de la partición, la
distribución y las consultas previstas.

**Persistencia políglota** (diap. 32–33): un mismo sistema puede tener varios problemas. Pedidos y pagos → relacional;
catálogo flexible → documental; sesión y carrito → clave–valor; eventos masivos → wide-column; fraude y conexiones →
grafo. **La tecnología se elige por patrón de datos y acceso, no por moda**; muchas veces se complementa al relacional
en vez de reemplazarlo.

**Árbol de decisión**: ¿el relacional representa bien? **Sí → mantener.** No → ¿alcanza una extensión? **Sí → JSONB o
Document Store.** No → **modelo especializado.**

## Lo que hicimos en el laboratorio

**U7 Act. 1 — capacidades no tabulares de PostgreSQL** (Community, en la VM Ubuntu con Multipass, cliente pgAdmin 4).
Se investigaron cinco capacidades y se documentó qué es core y qué no:

| Capacidad | Estado | Cómo se usa |
|---|---|---|
| JSONB | Core | Columna JSONB; `->>` devuelve texto, `@>` verifica contención |
| Índice GIN sobre JSONB | Core | `CREATE INDEX ... USING gin (...)` |
| Full Text Search | Core | `to_tsvector('spanish', texto)`, `plainto_tsquery`, operador `@@`; la configuración `spanish` está en `pg_ts_config` |
| hstore | Extensión contrib disponible, no instalada | `CREATE EXTENSION hstore;` (se verifica en `pg_available_extensions`) |
| PostGIS | Paquete aparte, no instalado | Instalar `postgresql-18-postgis-3` y `CREATE EXTENSION postgis;` |

**U7 Act. 2 — laboratorio bisagra: JSONB + GIN** (PostgreSQL 18.6, las fases B y C en un Docker propio).

- Tabla `universidad` con columnas relacionales (provincia, ciudad…) y `carreras JSONB NOT NULL CHECK
  (jsonb_typeof(carreras) = 'array')`. 203 universidades, 622 carreras.
- Tres consultas: **escalar** (`WHERE provincia = 'Chaco'`, lo relacional sigue mandando), **anidada**
  (`jsonb_array_elements(u.carreras)` para filtrar carreras con 80 materias o más, sin tabla ni JOIN) y **de la
  capacidad** (`carreras @> '[{"nombre": "Ingeniería en Sistemas de Información", "paginaPublica": true}]'`).
- Intervención: `CREATE INDEX ix_universidad_carreras ON universidad USING gin (carreras jsonb_path_ops);` y `ANALYZE`.
- Evidencia con `EXPLAIN (ANALYZE, BUFFERS)`: **Seq Scan con 31 buffers → Bitmap Index Scan con 9 buffers** (5 del
  índice y 4 del heap).
- **Veredicto: mantener el relacional extendido.** Alcanza para variabilidad acotada, conserva ACID, FK y unicidad, y
  no suma otro motor. Un NoSQL sólo se justificaría si el volumen superara el scale up o el esquema no tuviera un
  núcleo estable.
- *(tutor)* `jsonb_path_ops` sólo sirve para la contención (`@>`) y consultas de ruta; no acelera la búsqueda de
  existencia de claves (`?`). Para eso está la clase por defecto `jsonb_ops`, más grande.
