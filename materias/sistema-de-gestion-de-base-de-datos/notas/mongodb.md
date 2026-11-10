# MongoDB y el modelo documental
[← Índice Sistemas de Gestión de Bases de Datos](../INDICE.md)

> Temas 8 y 9 (modelo de agregados) · Peso: 3/3 (estimado) · Fuente: *Clase 8 - MongoDB 2026* (diap. 1–41), la bitácora
> U8 Act. 1 "Del requerimiento al documento" (portal de noticias) y la bitácora U8 Act. 2 "Administración, seguridad y
> recuperación" del grupo. Lo que agrega el tutor va marcado *(tutor)*.

## Preguntas de recuperación

- ¿Cuál es la pregunta disparadora de la unidad 8? :: Si ya decidimos usar documentos, ¿cómo evitamos que MongoDB sea "tablas convertidas a JSON"? Se responde con tres preguntas: qué se lee junto, qué cambia junto y con qué frecuencia, y qué arrays pueden crecer sin límite. [→ Diseñar desde los patrones de acceso](#Diseñar%20desde%20los%20patrones%20de%20acceso)
- ¿Cuál es la jerarquía lógica de MongoDB? :: Deployment (cluster) → database → collection → document → field. Una colección no obliga a que todos sus documentos tengan los mismos campos. [→ El documento](#El%20documento)
- ¿Qué agrega BSON a JSON? :: Tipos útiles para bases: ObjectId (12 bytes), Date (UTC), Decimal128 (dinero), además de arrays y subdocumentos. [→ El documento](#El%20documento)
- ¿Qué pasa con _id si no se informa? :: Todo documento de una colección estándar tiene un _id único; si no se informa, el driver o MongoDB generan un ObjectId. No conviene apoyar reglas de negocio en su estructura interna. [→ El documento](#El%20documento)
- ¿Cuáles son los cuatro pasos para diseñar un documento? :: Listar las consultas (lecturas frecuentes y críticas), identificar las escrituras (qué cambia junto), medir la cardinalidad (uno a pocos o a millones) y recién ahí diseñar: embed, referencia o duplicación controlada. [→ Diseñar desde los patrones de acceso](#Diseñar%20desde%20los%20patrones%20de%20acceso)
- ¿Cuándo conviene embeber? :: Cuando se consulta junto casi siempre, la relación es acotada, se actualiza como unidad y la duplicación es aceptable. [→ Embedding o referencia](#Embedding%20o%20referencia)
- ¿Cuándo conviene referenciar? :: Cuando el dato vive y cambia por separado, hay alta cardinalidad, el crecimiento puede ser no acotado o muchos documentos comparten la entidad. [→ Embedding o referencia](#Embedding%20o%20referencia)
- ¿Por qué los ítems del pedido se embeben con precio y descripción? :: Porque son una foto del momento de la compra: el pedido debe conservar el estado histórico. Referenciar al producto actual alteraría la lectura del pedido pasado. [→ Embedding o referencia](#Embedding%20o%20referencia)
- ¿Qué se hace con uno a muchísimos (logs, telemetría)? :: Evitar arrays no acotados: colección separada, bucket pattern o colecciones time series. El documento tiene un tope de 16 MB. [→ Embedding o referencia](#Embedding%20o%20referencia)
- ¿Cuál es el anti-patrón de la clase? :: SQL traducido 1:1: muchas colecciones chicas con referencias para todo, que obligan a reconstruir el agregado como si fueran JOIN. [→ Embedding o referencia](#Embedding%20o%20referencia)
- ¿Cuándo se justifica duplicar datos? :: Cuando el beneficio de lectura supera el costo de mantener la consistencia. Desnormalizar es "una negociación permanente", no un objetivo. [→ Embedding o referencia](#Embedding%20o%20referencia)
- ¿Con qué se reemplazaron insert, update y remove? :: insertOne/insertMany, updateOne/updateMany con operadores ($set, $inc, $push) y deleteOne/deleteMany. [→ CRUD](#CRUD)
- ¿Qué se hace antes de un deleteMany? :: Ejecutar el mismo filtro con find() o countDocuments() y guardar evidencia del conjunto afectado. [→ CRUD](#CRUD)
- ¿Qué se compara en explain("executionStats") antes y después de un índice? :: winningPlan (COLLSCAN o IXSCAN), totalDocsExamined, totalKeysExamined y nReturned. [→ Índices y explain](#Índices%20y%20explain)
- ¿Qué hace cada etapa del pipeline $match → $unwind → $group → $sort? :: $match reduce el conjunto, $unwind abre el array (un documento por elemento), $group calcula métricas y $sort ordena. El orden de las etapas afecta el trabajo. [→ Aggregation pipeline](#Aggregation%20pipeline)
- ¿MongoDB valida esquemas? :: Sí: validadores por colección con $jsonSchema (campos requeridos, tipos, reglas). La idea de que toda la validación queda en la aplicación es incompleta. [→ Validación y atomicidad](#Validación%20y%20atomicidad)
- ¿Qué es atómico en MongoDB? :: Una escritura sobre un único documento, aunque modifique varios campos o subdocumentos. Para varios documentos o colecciones hay transacciones multidocumento. [→ Validación y atomicidad](#Validación%20y%20atomicidad)
- ¿Qué diferencia hay entre replica set y sharded cluster? :: Replica set: varios mongod con copias (primary y secondaries, elección automática) para redundancia y alta disponibilidad. Sharded cluster: distribuye datos entre shards, mongos enruta y los config servers guardan metadatos, para escalar horizontalmente. [→ Replica set y sharding](#Replica%20set%20y%20sharding)
- ¿Qué tres capas se separan al diagnosticar "puede leer pero no modificar"? :: Conexión (red y puerto: falla con connection refused o timeout), autenticación (credenciales: Authentication failed) y autorización (roles: Unauthorized). Si lee, las dos primeras funcionan: es el rol. [→ Seguridad](#Seguridad)
- En la U8 Act. 1, ¿por qué los comentarios fueron a su propia colección? :: Porque son uno a muchísimos sin tope (una noche electoral concentra cientos en una nota), el documento tiene tope de 16 MB, cada comentario reescribiría la nota más leída y la moderación los cambia sin tocar la publicación. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
- En la U8 Act. 1, ¿qué es la referencia extendida del autor? :: Guardar en la publicación autor: {_id, nombre}: la firma sale sin $lookup y el perfil completo vive una sola vez en autores. Costo: renombrar un autor es un updateMany sobre sus notas. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
- ¿Qué regla siguió el índice {seccion: 1, fecha: -1}? :: Igualdad → orden/rango: primero el campo de igualdad, después el de rango, que también es el de orden y en el mismo sentido. Por eso desaparece la etapa SORT. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)

## Cuestionario

1. ¿Qué pregunta guía el diseño de un documento en MongoDB?
   - [x] ¿Qué información necesito recuperar y cambiar junta?
   - [ ] ¿Cuáles son las tablas del modelo relacional?
   - [ ] ¿Qué forma normal cumple cada colección?
   - [ ] ¿Cuántas colecciones puedo crear?
   > Primero las preguntas (lecturas, escrituras, crecimiento), después la estructura. [→ Diseñar desde los patrones de acceso](#Diseñar%20desde%20los%20patrones%20de%20acceso)
2. ¿Qué tipo BSON conviene para importes monetarios?
   - [x] Decimal128
   - [ ] Double
   - [ ] String
   - [ ] ObjectId
   > Decimal128: números de alta precisión de 128 bits, pensados para cálculos financieros. [→ El documento](#El%20documento)
3. ¿Qué afirmación sobre el esquema flexible es correcta?
   - [x] Los documentos pueden variar, pero la aplicación necesita nombres, tipos y reglas previsibles, y se puede validar
   - [ ] Significa que no hace falta diseñar
   - [ ] Impide validar en el motor
   - [ ] Obliga a que todos los documentos tengan los mismos campos
   > Esquema flexible ≠ ausencia de diseño. [→ El documento](#El%20documento)
4. Perfil de usuario con sus direcciones (5 a 10) y preferencias, que se muestran siempre juntas. ¿Qué conviene?
   - [x] Embeber direcciones y preferencias en el usuario
   - [ ] Una colección de direcciones referenciada
   - [ ] Una colección por preferencia
   - [ ] Guardarlas en Redis
   > Se leen juntas y el crecimiento es acotado: una sola lectura y sin riesgo del tope de 16 MB. [→ Embedding o referencia](#Embedding%20o%20referencia)
5. Dispositivo IoT con millones de mediciones. ¿Qué conviene?
   - [x] Colección separada (bucket pattern o colección time series)
   - [ ] Un array de mediciones dentro del dispositivo
   - [ ] Embeber las mediciones y crear un índice
   - [ ] Referenciar el dispositivo desde cada campo del array
   > Uno a muchísimos con crecimiento ilimitado: un array embebido llega al tope de 16 MB. [→ Embedding o referencia](#Embedding%20o%20referencia)
6. Catálogo con categorías que cambian poco y stock que cambia en cada compra. ¿Qué propuso la clase?
   - [x] Referenciar las categorías y embeber el stock en el producto
   - [ ] Embeber las categorías y referenciar el stock
   - [ ] Todo en colecciones separadas
   - [ ] Todo embebido, incluso la categoría completa
   > Renombrar una categoría no debe tocar millones de productos; el stock embebido permite $inc atómico sobre el documento. [→ Embedding o referencia](#Embedding%20o%20referencia)
7. ¿Por qué el ítem del pedido guarda descripción y precio unitario en vez de referenciar al producto?
   - [x] Porque el pedido debe conservar el estado histórico de la compra
   - [ ] Porque MongoDB no admite referencias
   - [ ] Para ahorrar espacio
   - [ ] Porque el producto no tiene _id
   > El ítem es una "foto" del momento de compra. [→ Embedding o referencia](#Embedding%20o%20referencia)
8. Un diseño tiene CLIENTES, PEDIDOS, ITEMS, PRODUCTOS y DIRECCIONES como colecciones con referencias para todo. ¿Qué problema tiene?
   - [x] Es SQL traducido 1:1: cada lectura reconstruye el agregado como si fueran JOIN
   - [ ] Ninguno: es el diseño recomendado
   - [ ] Supera el límite de colecciones
   - [ ] No permite índices
   > Es el anti-patrón de la clase y el "No logrado" del criterio de modelo documental. [→ Embedding o referencia](#Embedding%20o%20referencia)
9. ¿Qué devuelve `db.pedidos.find({estado:"nuevo", total:{$gte:3000}}, {nroPedido:1, total:1, _id:0})`?
   - [x] Los pedidos nuevos de 3000 o más, mostrando sólo nroPedido y total
   - [ ] Todos los pedidos con los campos nroPedido y total en 1
   - [ ] Los pedidos con total mayor a 3000, sin el estado
   - [ ] Un error: no se puede excluir _id
   > Primer argumento = filtro (≈ WHERE), segundo = proyección (≈ columnas del SELECT). [→ CRUD](#CRUD)
10. ¿Qué operador expresa una condición sobre los elementos de un array?
    - [x] $elemMatch
    - [ ] $in
    - [ ] $exists
    - [ ] $push
    > $in es pertenencia a un conjunto, $exists presencia del campo y $push es de actualización. [→ CRUD](#CRUD)
11. ¿Qué hace `updateOne({nroPedido:"P-501"}, {$set:{estado:"confirmado"}, $inc:{intentosPago:1}, $push:{eventos:{...}}})`?
    - [x] Cambia el estado, suma 1 a intentosPago y agrega un evento al array, de forma atómica en ese documento
    - [ ] Reemplaza el documento completo por esos tres campos
    - [ ] Actualiza todos los pedidos P-501
    - [ ] Crea el pedido si no existe
    > Los operadores expresan la intención del cambio; crear si no existe requiere la opción upsert. [→ CRUD](#CRUD)
12. En explain("executionStats") ves COLLSCAN, totalDocsExamined 20 y nReturned 4. ¿Qué indica?
    - [x] Que recorrió toda la colección para devolver 4: falta un índice adecuado
    - [ ] Que el índice funciona bien
    - [ ] Que la consulta devolvió 20 documentos
    - [ ] Que hubo un error de ejecución
    > Con el índice adecuado: IXSCAN y lo examinado se acerca a lo devuelto. [→ Índices y explain](#Índices%20y%20explain)
13. ¿Cuál es el costo de crear un índice en MongoDB?
    - [x] Ocupa almacenamiento y agrega trabajo a cada escritura
    - [ ] Ninguno
    - [ ] Hace más lentas las lecturas
    - [ ] Bloquea la colección para siempre
    > No crear índices "por si acaso": cada uno debe responder a una consulta real. [→ Índices y explain](#Índices%20y%20explain)
14. ¿Para qué sirve $unwind en un pipeline de ventas por producto?
    - [x] Abre el array items: un documento por ítem, para poder agrupar por sku
    - [ ] Filtra los pedidos confirmados
    - [ ] Ordena el resultado
    - [ ] Une con otra colección
    > $match filtra, $group calcula, $sort ordena; unir con otra colección es $lookup. [→ Aggregation pipeline](#Aggregation%20pipeline)
15. ¿Por qué conviene poner $match al principio del pipeline?
    - [x] Porque reduce el conjunto que procesan las etapas siguientes
    - [ ] Porque es obligatorio por sintaxis
    - [ ] Porque $group no funciona sin él
    - [ ] No importa el orden
    > El orden de las etapas puede afectar el trabajo y el rendimiento. [→ Aggregation pipeline](#Aggregation%20pipeline)
16. ¿Qué es atómico en MongoDB sin usar transacciones?
    - [x] Una escritura sobre un único documento, aunque toque varios campos y subdocumentos
    - [ ] Cualquier updateMany
    - [ ] Escrituras sobre dos colecciones
    - [ ] Nada: no tiene atomicidad
    > Por eso modelar bien (lo que cambia junto, junto) reduce la necesidad de transacciones multidocumento. [→ Validación y atomicidad](#Validación%20y%20atomicidad)
17. Necesitás que MongoDB rechace pedidos sin nroPedido o con total que no sea decimal. ¿Qué usás?
    - [x] Un validador de colección con $jsonSchema
    - [ ] Sólo validación en la aplicación: el motor no valida
    - [ ] Un índice único
    - [ ] Un trigger
    > $jsonSchema con required y bsonType por propiedad. [→ Validación y atomicidad](#Validación%20y%20atomicidad)
18. ¿Cuál es el objetivo principal de un replica set?
    - [x] Redundancia y alta disponibilidad
    - [ ] Escalar la escritura repartiendo datos
    - [ ] Validar esquemas
    - [ ] Enrutar consultas con mongos
    > Repartir datos es el sharded cluster, con mongos y config servers. [→ Replica set y sharding](#Replica%20set%20y%20sharding)
19. Un usuario puede hacer find() pero recibe Unauthorized al hacer insertOne(). ¿Dónde está el problema?
    - [x] En la autorización: su rol (read) no permite escribir
    - [ ] En la red: el puerto está cerrado
    - [ ] En la autenticación: la contraseña es incorrecta
    - [ ] En el bindIp
    > Si puede leer, la conexión y la autenticación funcionan. [→ Seguridad](#Seguridad)
20. ¿Qué mínimo de seguridad no puede omitir un DBA en MongoDB? (varias correctas)
    - [x] Habilitar autenticación (control de acceso)
    - [x] Usuarios y roles con privilegio mínimo
    - [x] Limitar la exposición de red y cifrar con TLS
    - [x] Probar la restauración de los backups
    > Los cuatro de la diapositiva 36: autenticación, RBAC, red/TLS y backups con restore probado. [→ Seguridad](#Seguridad)
21. En la U8 Act. 1, ¿qué se descartó para los comentarios de una nota y por qué?
    - [x] Embeberlos: array sin tope, cada comentario reescribe la nota más leída y la moderación tendría que hacer $unwind de todas las notas
    - [ ] Referenciarlos: obliga a hacer $lookup en cada listado
    - [ ] Guardar la sección en cada comentario: ocupa mucho espacio
    - [ ] Una colección propia: MongoDB no permite tantas colecciones
    > Se pagó una segunda lectura en la vista de la nota a cambio de que la nota no crezca. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
22. En la U8 Act. 1, al probar una transacción multidocumento el motor respondió "Transaction numbers are only allowed on a replica set member or mongos". ¿Por qué?
    - [x] Porque la instancia era standalone: las transacciones multidocumento requieren replica set o sharded cluster
    - [ ] Porque MongoDB no tiene transacciones
    - [ ] Porque faltaba un índice
    - [ ] Porque el usuario no tenía permisos
    > Por eso entre el updateOne en autores y el updateMany en publicaciones hay una ventana sin atomicidad, y el script verifica la consistencia después. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
23. En la U8 Act. 2, `bindIp: 127.0.0.1` en mongod.cfg significa que:
    - [x] Sólo acepta conexiones desde la misma máquina: no está expuesta a la red
    - [ ] Acepta conexiones de cualquier IP
    - [ ] Exige TLS
    - [ ] Exige autenticación
    > La exposición de red es una capa distinta de la autenticación (security.authorization: enabled) y de TLS. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
24. ¿Por qué copiar las colecciones con `$out` a u8_g06_restore no reemplaza un backup con mongodump? *(tutor)*
    - [x] Porque la copia queda en la misma instancia: si se pierde el servidor se pierden las dos, y no se probó restaurar un artefacto
    - [ ] Porque $out no copia documentos
    - [ ] Porque $out sólo funciona en replica set
    - [ ] No hay diferencia: es un backup válido
    > Igualar conteos prueba que la copia salió bien, no que el sistema sea recuperable. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)

## El documento

*Clase 8, diap. 6–11.* La unidad natural deja de ser la fila aislada: el pedido con sus ítems es **un documento**.

- **Documento MongoDB**: objeto **BSON** con campos → valores, documentos anidados (dirección, pago, perfil) y arrays
  (ítems, tags, eventos), autocontenido.
- **Jerarquía lógica**: deployment (cluster) → **database** → **collection** → **document** → **field**. Una colección
  no obliga a que todos sus documentos tengan exactamente los mismos campos.
- **BSON no es "sólo JSON"**: agrega tipos para bases de datos.

| Tipo | Para qué |
|---|---|
| ObjectId | Clave única de 12 bytes asignada automáticamente |
| Date | Momento exacto, en UTC |
| Decimal128 | Alta precisión (128 bits): dinero y finanzas |
| Array | Lista ordenada de valores en un campo |
| Object | Subdocumento incrustado (por ejemplo, la dirección) |

- **_id y ObjectId**: todo documento de una colección estándar tiene un `_id` único; si no se informa, el driver o
  MongoDB generan un ObjectId. **No conviene apoyar reglas de negocio en la estructura interna del ObjectId.**
- **Esquema flexible ≠ ausencia de diseño**: los documentos *pueden variar*, *deben ser coherentes* (nombres, tipos y
  reglas previsibles) y *pueden validarse* ($jsonSchema). La flexibilidad sirve para evolucionar, no para guardar
  "cualquier cosa".

## Diseñar desde los patrones de acceso

*Diap. 4, 12–13.* Pregunta disparadora: **si ya decidimos usar documentos, ¿cómo evitamos que MongoDB sea "tablas
convertidas a JSON"?**

1. **Lecturas**: ¿qué información necesito recuperar junta?
2. **Cambios**: ¿qué datos cambian juntos y con qué frecuencia?
3. **Crecimiento**: ¿qué arrays o relaciones pueden crecer sin límite?

**El agregado es la frontera de diseño**: lo que se lee y cambia junto suele vivir junto. ¿El pedido debe leerse y
persistirse como unidad coherente? Si **sí**, el documento representa esa frontera; si una relación crece o cambia por
separado, conviene referenciar.

Los cuatro pasos: **listar consultas** (frecuentes y críticas) → **identificar escrituras** (qué cambia junto, qué se
actualiza mucho) → **medir cardinalidad** (¿uno a pocos o uno a millones?) → **diseñar** el documento (embed,
referencia o duplicación controlada).

## Embedding o referencia

*Diap. 14–20.* **No es una traducción mecánica de PK/FK.**

| Embed (incrustar) conviene cuando | Reference (referenciar) conviene cuando |
|---|---|
| Se consulta junto casi siempre | El dato vive y cambia por separado |
| La relación es acotada | Hay alta cardinalidad |
| Se actualiza como unidad | El crecimiento puede ser no acotado |
| La duplicación es aceptable | Muchos documentos comparten la entidad |

- **Ítems embebidos en el pedido**: son una **foto** del momento de compra; el precio y la descripción deben conservar
  el estado histórico.
- **Cliente referenciado** (`clienteId`): tiene vida propia, participa en muchos pedidos y se actualiza por separado.
- **Cardinalidad y crecimiento**: el riesgo no es tener arrays sino que **crezcan sin límite**.
  - Uno a pocos (teléfonos, direcciones, ítems razonables) → embed suele ser natural.
  - Uno a muchos (pedidos de un cliente) → evaluar acceso y crecimiento.
  - Uno a muchísimos (logs, telemetría) → evitar arrays no acotados; separar o usar patrones específicos.
- **Duplicación controlada**: menos lecturas cruzadas a cambio de espacio y de decidir cómo sincronizar. **Duplicar
  cuando el beneficio de lectura supera el costo de mantener la consistencia.**
- **Anti-patrón: SQL traducido 1:1** (CLIENTES → PEDIDOS → ITEMS → PRODUCTOS → DIRECCIONES con referencias para
  todo): si cada lectura reconstruye el agregado como JOIN, no se aprovechó el modelo documental.

**Microdesafío** (diap. 20, con la solución de las notas del docente):

| Caso | Decisión | Por qué |
|---|---|---|
| Perfil de usuario: direcciones + preferencias | **Embed** | Se muestran juntas; crecimiento acotado, lejos del tope de 16 MB |
| Catálogo: producto + categorías + stock | **Híbrido**: referenciar categorías, embeber stock | Renombrar una categoría no toca millones de productos; el stock embebido se actualiza con `$inc` atómico |
| IoT: dispositivo + millones de mediciones | **Colección separada** (bucket pattern o time series) | Crecimiento ilimitado; se consulta por rangos de tiempo |

## CRUD

*Diap. 21–27.* Herramientas: **mongosh** (shell), **Compass** (cliente gráfico: datos, índices, pipelines) y
**drivers** oficiales.

```js
use sgdb2026
db.pedidos.insertOne({ nroPedido: "P-501", clienteId: 77, estado: "nuevo", total: 3900 })
db.pedidos.insertMany([ {...}, {...} ])

db.pedidos.find(
  { estado: "nuevo", total: { $gte: 3000 } },   // filtro ≈ WHERE
  { nroPedido: 1, total: 1, _id: 0 }            // proyección ≈ columnas
).sort({ total: -1 }).limit(5)                  // sobre el cursor

db.pedidos.updateOne({ nroPedido: "P-501" }, {
  $set: { estado: "confirmado" }, $inc: { intentosPago: 1 },
  $push: { eventos: { tipo: "PAGO_OK", fecha: new Date() } } })

db.pedidos.deleteMany({ estado: "cancelado", fecha: { $lt: ISODate("2025-01-01") } })
```

- La base y la colección se materializan al primer uso; `_id` se genera si no se informa.
- `insert()` de la versión vieja se reemplaza por `insertOne`/`insertMany`; usar `updateOne`/`updateMany` con
  operadores. `upsert` sigue disponible como opción.
- **Operadores de consulta**: `$gt`/`$gte`, `$in` (pertenece a un conjunto), `$exists` (campo presente),
  `$and`/`$or`, `$elemMatch` (condición sobre elementos de un array).
- **Práctica segura**: antes de borrar, correr el mismo filtro con `find()` o `countDocuments()` y guardar la evidencia.

## Índices y explain

*Diap. 28–30.* Sin índice: **COLLSCAN** (examina muchos documentos). Con el índice adecuado: **IXSCAN** (ubicación
selectiva).

```js
db.pedidos.createIndex({ estado: 1 })
db.pedidos.createIndex({ clienteId: 1, fecha: -1 })
db.pedidos.find({ clienteId: 77 }).sort({ fecha: -1 }).explain("executionStats")
```

- **Trade-off**: aceleran lecturas compatibles, pero consumen almacenamiento y agregan trabajo a las escrituras. **No
  crear "por si acaso"**: ¿qué consulta concreta justifica cada índice?
- **explain() es la evidencia**: comparar antes y después `winningPlan` (COLLSCAN o IXSCAN), `totalDocsExamined`,
  `totalKeysExamined` y `nReturned`. "No afirmar 'mejoró': demostrar qué cambió."

## Aggregation pipeline

*Diap. 31–32.* Los documentos atraviesan etapas: **$match → $unwind → $group → $project → $sort**.

```js
db.pedidos.aggregate([
  { $match: { estado: "confirmado" } },          // reduce el conjunto
  { $unwind: "$items" },                         // abre el array
  { $group: { _id: "$items.sku",                 // calcula métricas
      unidades: { $sum: "$items.cantidad" },
      importe: { $sum: { $multiply: ["$items.cantidad", "$items.precioUnitario"] } } } },
  { $sort: { importe: -1 } }                     // ordena
])
```

El orden de las etapas puede afectar el trabajo y el rendimiento. *(tutor)* `$lookup` es la etapa que une con otra
colección; si se usa en cada lectura frecuente, es señal de que el modelo quedó relacional.

## Validación y atomicidad

*Diap. 33–34.*

```js
db.createCollection("pedidos", { validator: { $jsonSchema: {
  bsonType: "object", required: ["nroPedido", "estado", "total"],
  properties: { nroPedido: { bsonType: "string" }, total: { bsonType: "decimal" } } } } })
```

- **MongoDB sí valida en el motor**: campos, tipos y reglas por colección. La afirmación de la PPT vieja ("toda la
  validación queda en la aplicación") hoy es incompleta.
- **Documento único**: una escritura sobre un documento es **atómica**, aunque modifique varios campos o subdocumentos.
- **Varios documentos**: hay **transacciones multidocumento** cuando el caso necesita atomicidad entre documentos o
  colecciones. **Modelar bien puede reducir la necesidad de transacciones.**

## Replica set y sharding

*Diap. 35.* Dos problemas distintos.

| | Replica set | Sharded cluster |
|---|---|---|
| Qué es | Varios `mongod` con copias; un **primary** y **secondaries**; elección automática ante fallas | Datos distribuidos entre **shards**; **mongos** enruta; **config servers** guardan metadatos |
| Objetivo | Redundancia y **alta disponibilidad** | **Escalar** datos y carga horizontalmente |

## Seguridad

*Diap. 36.* Lo mínimo que un DBA no puede omitir:

- **Autenticación**: habilitar el control de acceso; no operar una instancia expuesta sin autenticación.
- **RBAC**: usuarios y roles con privilegio mínimo.
- **Red y TLS**: limitar la exposición y cifrar las comunicaciones.
- **Backups**: probar la restauración; backup sin restore probado no alcanza.

**Diagnóstico por capas** (U8 Act. 2): ante "puede leer pero no modificar", separar
**conexión** (¿llega al puerto? si falla: *connection refused* o *timeout*) → **autenticación** (¿credenciales válidas
en su `authenticationDatabase`? si falla: *Authentication failed*) → **autorización** (¿su rol permite la acción? si
falla: *Unauthorized: not authorized on … to execute command*). Es la misma ruta de la
[conectividad](conectividad.md) de la U5.

## Lo que hicimos en el laboratorio

**U8 Act. 1 — portal de noticias** (base `u8_g06`: 6 autores, 20 publicaciones, 43 comentarios).

- **Patrones de acceso primero**: P1 noticias por sección y rango de fecha (prioritaria), P2 interacciones por
  sección (pipeline), C1 cola de moderación por estado y fecha, C2 nota completa por `_id`, C3 filtro por array
  (`etiquetas`) y subdocumento (`metadatos.portada`), C4 resumen con `$unwind` de etiquetas.
- **Tres colecciones**:
  - `comentarios` **en su propia colección** con `publicacionId`: uno a muchísimos sin tope, tope de 16 MB, cada
    comentario reescribiría la nota más leída, y la moderación los cambia sin tocar la publicación.
  - `autores` referenciado con **referencia extendida**: la publicación guarda `autor: {_id, nombre}` (lo que muestra
    un listado), así P1, C2 y C3 no hacen `$lookup`.
  - `etiquetas` y `metadatos` **embebidos**: uno a pocos, se leen y cambian con la nota.
  - La **sección se copia en cada comentario** para que P2 agrupe sin `$lookup` sobre la colección más grande.
- **Índice** `{seccion: 1, fecha: -1}` para P1, con la regla **igualdad → orden/rango**:

  | Métrica | Antes (sólo `_id_`) | Después (`seccion_fecha`) |
  |---|---|---|
  | winningPlan | SORT ← COLLSCAN | FETCH ← IXSCAN |
  | nReturned | 4 | 4 |
  | totalKeysExamined | 0 | 4 |
  | totalDocsExamined | 20 | 4 |
  | executionTimeMillis | 0 | 0 |

  Desaparece el SORT en memoria. Con 20 documentos el tiempo da 0 ms en los dos casos: la mejora se mide en trabajo
  (un COLLSCAN crece con la colección, un IXSCAN con el resultado), no en tiempo.
- **Costo de duplicar**: renombrar un autor = `updateOne` en autores + `updateMany` en sus notas (en la prueba,
  `matchedCount: 2, modifiedCount: 2`). La instancia **standalone no admite transacciones multidocumento** ("Transaction
  numbers are only allowed on a replica set member or mongos"), así que el script verifica la consistencia: comentarios
  huérfanos, sección distinta de la nota y nombre de autor distinto del perfil (las tres dan 0).
- Si el volumen creciera ×100: índice `{publicacionId: 1, fecha: -1}` para C2, uno por fecha para P2, precalcular
  interacciones (patrón computed) y archivar comentarios viejos.

**U8 Act. 2 — administración, seguridad y recuperación** (MongoDB 8.0 standalone, servicio de Windows).

- **Diagnóstico**: `db.version()`, `db.runCommand({hello: 1})`, `db.serverStatus().connections`, `show dbs`,
  `db.adminCommand({getCmdLineOpts: 1})`. Escucha en `bindIp: 127.0.0.1`, puerto **27017**: no está expuesta.
- **Autenticación**: primero crear el administrador en `admin` con rol `root`, después agregar
  `security: authorization: enabled` en `mongod.cfg` y reiniciar. Sin credenciales, `show dbs` falla; con
  `mongosh -u ... --authenticationDatabase admin`, `connectionStatus` muestra el rol `root`.
- **RBAC**: `u8_g06_lector` con `read` y `u8_g06_operador` con `readWrite`, ambos sólo sobre `u8_g06`. Probado:
  el lector lee y no escribe; el operador escribe y actualiza pero `createUser` le da *Unauthorized*.
- **TLS**: en el laboratorio está deshabilitado (sólo loopback). En producción: certificado de una CA (`.pem`),
  configurar `net.tls` en `mongod.cfg` y migrar con **`preferTLS`** antes de pasar a **`requireTLS`**.
- **Backup**: `mongodump` no estaba (faltan las Database Tools), así que se copiaron las colecciones con
  `aggregate([{ $out: { db: "u8_g06_restore", coll: ... } }])` y se compararon los `countDocuments()`.
  *(tutor)* Eso prueba una copia lógica, no un backup: queda en la misma instancia y no se restauró un artefacto. Lo
  pedido era `mongodump` → `mongorestore --nsFrom/--nsTo` hacia `u8_g06_restore` y validar conteos y registros.
