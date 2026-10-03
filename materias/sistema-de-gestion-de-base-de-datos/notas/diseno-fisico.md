# Diseño físico y rendimiento
[← Índice Sistemas de Gestión de Bases de Datos](../INDICE.md)

> Tema 2 · Peso: 3/3 (estimado: clase larga, dos actividades y la cátedra insiste en decidir con evidencia) · Fuente:
> *Clase 2 - Diseño Físico 2026* (diap. 1–41, con notas del docente) y la bitácora U2 Desafío 2 del grupo
> (PostgreSQL: heap vs. particionada). Ampliada con el *Resumen parcial* del estudiante (pp. 6–11 y 28–30).

## Preguntas de recuperación

- ¿Cuál es la secuencia que pide la cátedra para una decisión de diseño físico? :: Carga de trabajo → decisión física → evidencia en el plan → medición antes y después. Toda decisión responde a una carga y se comprueba con evidencia. [→ El diseño parte de la carga](#El%20diseño%20parte%20de%20la%20carga)
- ¿Qué datos de la carga hacen falta antes de proponer un índice? :: Volumen y crecimiento, distribución de valores, frecuencia y criticidad de la consulta, concurrencia y costo de las escrituras. [→ El diseño parte de la carga](#El%20diseño%20parte%20de%20la%20carga)
- ¿Por qué el ancho de la fila importa? :: Tipo de dato → ancho de fila → filas por página → páginas procesadas. Filas más anchas: menos filas por página, más E/S y peor uso de caché. [→ Páginas y organización](#Páginas%20y%20organización)
- ¿Cuál es la unidad básica de lectura y escritura del motor? :: La página (o bloque). El motor mueve páginas, no filas sueltas. [→ Páginas y organización](#Páginas%20y%20organización)
- ¿Qué es una tabla heap, una clustered y una IOT? :: Heap: filas sin orden físico (PostgreSQL por defecto, índices aparte). Clustered: una estructura principal organiza las filas (InnoDB alrededor de la PK). IOT: tabla organizada por índice (Oracle). [→ Páginas y organización](#Páginas%20y%20organización)
- ¿Por qué en InnoDB una PK ancha es un problema? :: Porque la tabla se organiza por la PK y sus columnas se copian en cada índice secundario: una PK ancha agranda todos los índices. [→ Páginas y organización](#Páginas%20y%20organización)
- ¿De qué tres formas un índice reduce trabajo? :: Localiza claves sin recorrer la tabla, entrega filas en un orden útil (evita un sort) y puede cubrir la consulta sin volver a la tabla. [→ Índices](#Índices)
- ¿Cuándo un table scan es la decisión correcta? :: Cuando la tabla es chica o la consulta devuelve gran parte de las filas: leer todo de corrido sale más barato que ir y venir por el índice. [→ Índices](#Índices)
- ¿Para qué operadores sirve un B-tree y para cuáles un hash? :: B-tree: igualdad, rangos, prefijos y orden (el más usado). Hash: sólo igualdad, en motores y casos específicos. [→ Índices](#Índices)
- Índice (cliente_id, fecha): ¿sirve para buscar sólo por fecha? :: No de la misma manera. Rige el prefijo izquierdo: sirve para cliente_id, o cliente_id + rango u orden por fecha, pero no para fecha sola. [→ Índices](#Índices)
- ¿Qué es la selectividad y de qué depende? :: El porcentaje de filas que quedan después del filtro. Depende del valor y de su distribución, no sólo de la columna: un estado poco frecuente es selectivo y el dominante no. [→ Estadísticas y optimizador](#Estadísticas%20y%20optimizador)
- ¿Qué es un índice de cobertura y cuál es su costo? :: Un índice que contiene todas las columnas que pide la consulta, así se responde sin ir a la tabla ("Using index" en MySQL, Index Only Scan en PostgreSQL). Cuesta más espacio y más mantenimiento en cada escritura. [→ Índices](#Índices)
- ¿Cuál es el costo oculto de los índices? :: Espacio y memoria, y que cada INSERT, DELETE o UPDATE de una columna indexada tiene que mantener todas las estructuras. Bajo concurrencia, también más WAL/redo y contención. [→ Índices](#Índices)
- ¿Qué es el partition pruning? :: El optimizador descarta las particiones que no pueden tener filas del predicado antes de buscar. Sólo funciona si el filtro incluye la clave de partición. [→ Particionamiento](#Particionamiento)
- ¿Qué estrategias de particionamiento hay y para qué sirve cada una? :: Rango (fechas, períodos), lista (regiones o categorías conocidas) y hash (distribución uniforme). [→ Particionamiento](#Particionamiento)
- ¿Particionar reemplaza al índice? :: No: son complementarios. Particionar reduce lo que se recorre; el índice localiza pocas filas dentro de lo que queda. [→ Particionamiento](#Particionamiento)
- ¿Qué ventaja de operación da particionar por fecha? :: Retirar un período entero (DETACH o DROP de la partición) en vez de borrar fila por fila con DELETE. [→ Particionamiento](#Particionamiento)
- ¿Qué es materializar y qué riesgo tiene? :: Guardar un resultado para no recalcularlo (vista materializada, tabla resumen, columna generada). Riesgo: desactualización; hay que definir fuente de verdad, frecuencia de refresh y cómo se reconstruye. [→ Desnormalizar y materializar](#Desnormalizar%20y%20materializar)
- ¿Qué cuatro preguntas hay que responder antes de desnormalizar? :: Cuál es la fuente de verdad, cómo se sincroniza la copia, qué pasa ante fallos y cómo se reconstruye. Y antes que nada: medir que el costo es real y repetido. [→ Desnormalizar y materializar](#Desnormalizar%20y%20materializar)
- ¿Qué mirás primero en un plan de ejecución? :: Dónde se concentra el costo o el tiempo, filas estimadas frente a reales, scans inesperados, joins y sorts caros, advertencias y conversiones. [→ Leer un plan](#Leer%20un%20plan)
- Las filas estimadas y las reales del plan difieren mucho. ¿Qué hacés? :: Actualizar estadísticas con ANALYZE (o crear estadísticas extendidas si hay columnas correlacionadas). Una mala estimación produce un mal plan aunque haya buenos índices. [→ Estadísticas y optimizador](#Estadísticas%20y%20optimizador)
- ¿Qué problemas de rendimiento no se arreglan con otro índice? :: Estadísticas viejas (ANALYZE), funciones aplicadas sobre la columna indexada (reescribir el predicado o usar un índice por expresión) y sorts que se derraman a disco (menos filas o más memoria). [→ Leer un plan](#Leer%20un%20plan)
- ¿Para qué sirven VACUUM y ANALYZE en PostgreSQL? :: VACUUM recupera el espacio de las versiones muertas (evita el bloat). ANALYZE actualiza las estadísticas para el optimizador. [→ Estadísticas y optimizador](#Estadísticas%20y%20optimizador)
- ¿Cuál es el protocolo de medición del laboratorio? :: Hipótesis escrita antes del DDL, mismos parámetros, sin reiniciar ni limpiar cachés, tres ejecuciones y la mediana, estadísticas actualizadas después del DDL. Veredicto: mantener, modificar o revertir. [→ Leer un plan](#Leer%20un%20plan)
- En el laboratorio, ¿por qué particionar no ayudó al histórico de un cliente? :: Porque la consulta filtraba por cliente_id, no por la clave de partición (fecha): no hubo pruning y se recorrieron las 48 particiones con Seq Scan + Sort. [→ Lo que medimos en el laboratorio](#Lo%20que%20medimos%20en%20el%20laboratorio)
- En el laboratorio, ¿qué resolvió el histórico de un cliente y por qué ese índice? :: Un índice local compuesto (cliente_id, fecha DESC): Index Scan, desaparece el Sort porque el B-tree ya da el orden y el LIMIT 20 corta antes. Pasó de 101 ms a 0,43 ms. Uno sólo sobre cliente_id seguía necesitando el Sort. [→ Lo que medimos en el laboratorio](#Lo%20que%20medimos%20en%20el%20laboratorio)
- ¿Para qué sirven los índices GIN, GiST y BRIN? :: GIN: valores compuestos (texto completo, JSON, arrays). GiST: datos geométricos y rangos. BRIN: tablas enormes ordenadas físicamente por la clave; guarda mínimo y máximo por bloque y ocupa poquísimo. [→ Índices](#Índices)
- ¿Por qué un Seq Scan puede ganarle a un Index Scan? :: El Seq Scan lee las páginas en orden (secuencial); el Index Scan salta por el árbol y va a buscar cada fila (aleatorio). Si la consulta trae ~30% de la tabla, conviene leerla entera. [→ Índices](#Índices)
- ¿En qué orden van las columnas de un índice compuesto? :: Primero las que se filtran por igualdad, después las de rango u orden. [→ Índices](#Índices)
- ¿Qué es un hot spot? :: Una página donde se concentran muchas escrituras, como el final de un índice sobre un id que siempre crece. [→ Índices](#Índices)
- ¿Qué diferencia hay entre VACUUM y VACUUM FULL? :: VACUUM marca como reutilizable el espacio de las filas muertas; VACUUM FULL reescribe la tabla y devuelve el espacio, pero la bloquea mientras tanto. [→ Estadísticas y optimizador](#Estadísticas%20y%20optimizador)
- ¿Qué indica `Sort Method: external merge Disk` en un plan? :: Que el ordenamiento no entró en `work_mem` y fue a archivos temporales en disco. [→ Leer un plan](#Leer%20un%20plan)
- ¿En qué unidades está el costo que muestra EXPLAIN en PostgreSQL? :: En unidades internas del planificador, no en milisegundos; no se compara entre motores. [→ Leer un plan](#Leer%20un%20plan)
- En el Caso 05 (sort a disco), ¿qué índice lo resolvió y por qué? :: `(fecha, importe DESC)`: con la fecha por igualdad, las filas del día salen ordenadas por importe; desaparece el Sort y el LIMIT corta a las 1.000. [→ Lo que medimos en el laboratorio](#Lo%20que%20medimos%20en%20el%20laboratorio)
- ¿Por qué no se sube `work_mem` para todo el servidor? :: Porque se asigna por operación y por sesión: 100 sesiones con 3 sorts a 500 MB podrían pedir 150 GB. Se sube sólo en la sesión que lo necesita (`SET work_mem`). [→ Lo que medimos en el laboratorio](#Lo%20que%20medimos%20en%20el%20laboratorio)
- ¿Una FK crea un índice en la tabla hija? :: No. PRIMARY KEY y UNIQUE crean el suyo; el índice de la FK se crea a mano. [→ Lo que medimos en el laboratorio](#Lo%20que%20medimos%20en%20el%20laboratorio)
- ¿Por qué un B-tree común no sirvió para `LIKE 'CTA-%'` en el laboratorio? :: Porque el locale de la base no era C: hizo falta un índice con `varchar_pattern_ops`. [→ Lo que medimos en el laboratorio](#Lo%20que%20medimos%20en%20el%20laboratorio)

## Cuestionario

1. Una consulta tarda 5 ms con 10.000 filas y 4 s con 50 millones. Es lógicamente correcta. Según la cátedra, ¿qué se hace primero?
   - [x] Caracterizar la carga: volumen, distribución, frecuencia y costo de escritura
   - [ ] Crear un índice sobre todas las columnas del WHERE
   - [ ] Particionar la tabla por fecha
   - [ ] Desnormalizar para evitar joins
   > No se optimiza en abstracto: primero la carga, después la decisión y después la medición. [→ El diseño parte de la carga](#El%20diseño%20parte%20de%20la%20carga)
2. ¿Qué priorizarías: ahorrar 5 s en un reporte diario o 50 ms en cada login de un sistema con miles de logins por hora?
   - [x] Depende de frecuencia, criticidad y concurrencia; lo moderado y muy frecuente puede dominar el costo total
   - [ ] Siempre el reporte, porque el ahorro por ejecución es mayor
   - [ ] Siempre el login, porque es interactivo
   - [ ] Ninguno: hay que optimizar todo por igual
   > Dos consultas lentas no tienen la misma prioridad: se combinan uso, impacto y condiciones pico. [→ El diseño parte de la carga](#El%20diseño%20parte%20de%20la%20carga)
3. Hay un índice compuesto (cliente_id, fecha). ¿Qué consulta lo aprovecha mejor?
   - [x] `WHERE cliente_id = ? AND fecha BETWEEN ? AND ?`
   - [ ] `WHERE fecha BETWEEN ? AND ?`
   - [ ] `WHERE total > 1000`
   - [ ] `WHERE YEAR(fecha) = 2026`
   > Prefijo izquierdo: igualdad en la primera columna y rango en la segunda. Con fecha sola no se aprovecha igual. [→ Índices](#Índices)
4. ¿Por qué `WHERE YEAR(fecha) = 2026` puede no usar un índice sobre fecha?
   - [x] Porque aplica una función sobre la columna indexada; conviene reescribirlo como rango o usar un índice por expresión
   - [ ] Porque YEAR no existe en SQL estándar
   - [ ] Porque los índices B-tree no soportan fechas
   - [ ] Porque el optimizador nunca usa índices con números
   > Es una de las tres causas de la Actividad 1 que no se arreglan creando otro índice. [→ Leer un plan](#Leer%20un%20plan)
5. El plan muestra 10 filas estimadas y 2 millones reales en un nodo. ¿Cuál es la intervención prioritaria?
   - [x] Actualizar estadísticas (ANALYZE) o crear estadísticas extendidas
   - [ ] Crear un índice nuevo
   - [ ] Particionar la tabla
   - [ ] Aumentar la memoria del servidor
   > Si estimado y real divergen, el optimizador está decidiendo con información equivocada. [→ Estadísticas y optimizador](#Estadísticas%20y%20optimizador)
6. ¿Qué afirmación sobre el table scan es correcta?
   - [x] Puede ser el mejor plan si la tabla es chica o se devuelve gran parte de las filas
   - [ ] Siempre indica que falta un índice
   - [ ] Sólo ocurre en tablas sin PK
   - [ ] Nunca aparece en PostgreSQL
   > La etiqueta del nodo no dice por sí sola si el plan es malo. [→ Índices](#Índices)
7. ¿Qué cuesta un índice de cobertura?
   - [x] Más espacio y más trabajo en cada INSERT, UPDATE y DELETE
   - [ ] Nada: sólo mejora las lecturas
   - [ ] Que la consulta deje de usar la tabla para siempre
   - [ ] Que deshabilita el partition pruning
   > Cubrir una consulta crítica tiene que justificarse con frecuencia y medición. [→ Índices](#Índices)
8. Tabla de pedidos particionada por mes. ¿En qué consulta el pruning **no** ayuda?
   - [x] Todos los pedidos de un cliente, sin filtro de fecha
   - [ ] Los pedidos del primer trimestre de 2024
   - [ ] Los pedidos de ayer
   - [ ] El total facturado en marzo
   > Sin la clave de partición en el filtro, el motor recorre todas las particiones. [→ Particionamiento](#Particionamiento)
9. Hay que borrar todos los pedidos de enero de 2022 en una tabla particionada por mes. ¿Qué conviene y por qué?
   - [x] Separar la partición (DETACH o DROP): es un cambio de catálogo y no recorre filas
   - [ ] DELETE con WHERE por fecha: es más seguro
   - [ ] TRUNCATE de toda la tabla
   - [ ] Crear un índice por fecha y después hacer DELETE
   > En el laboratorio, DELETE tardó 363 ms, ensució 5.416 bloques y dejó bloat; DETACH tardó 6 ms. [→ Lo que medimos en el laboratorio](#Lo%20que%20medimos%20en%20el%20laboratorio)
10. En InnoDB, ¿por qué conviene una PK angosta?
    - [x] Porque la tabla se organiza por la PK y sus columnas se repiten en cada índice secundario
    - [ ] Porque InnoDB no admite PK compuestas
    - [ ] Porque la PK no se indexa
    - [ ] Porque PostgreSQL lo exige
    > La PK ancha tiene un efecto multiplicador en todos los índices. [→ Páginas y organización](#Páginas%20y%20organización)
11. ¿Qué precio se paga por una vista materializada o una tabla resumen?
    - [x] Posible desactualización: hay que definir refresh, fuente de verdad y reconstrucción
    - [ ] Que no se puede consultar con SELECT
    - [ ] Que los datos originales se borran
    - [ ] Ninguno
    > Materializar cambia cálculo por almacenamiento y consistencia. [→ Desnormalizar y materializar](#Desnormalizar%20y%20materializar)
12. Una tabla particionada en 48 meses y una consulta sobre todo el histórico. ¿Qué pasó en el laboratorio?
    - [x] Se tocaron los mismos bloques que en la heap y la planificación tardó 10 veces más
    - [ ] Fue 16 veces más rápida que la heap
    - [ ] El motor descartó 45 de 48 particiones
    - [ ] Dio error por exceso de particiones
    > El beneficio es proporcional a las particiones descartadas. Sin pruning sólo queda el costo de planificar 48 relaciones. [→ Lo que medimos en el laboratorio](#Lo%20que%20medimos%20en%20el%20laboratorio)
13. Un plan muestra `Rows Removed by Filter: 980000` en un nodo. ¿Qué indica?
   - [ ] El índice filtró esas filas sin leerlas
   - [x] Se leyeron casi un millón de filas para descartarlas: trabajo desperdiciado
   - [ ] Las estadísticas están desactualizadas
   - [ ] El ordenamiento fue a disco
   > Rows Removed by Filter = filas leídas y tiradas después (Filter, no Index Cond). [→ Leer un plan](#Leer%20un%20plan)
14. Reporte `WHERE fecha = ? ORDER BY importe DESC LIMIT 1000` con `external merge Disk` en el plan. ¿Qué intervención propuso el grupo?
   - [ ] Subir `work_mem` a 500 MB en todo el servidor
   - [x] Un índice `(fecha, importe DESC)`
   - [ ] Un índice sólo sobre `importe`
   - [ ] Correr VACUUM FULL sobre la tabla
   > Con la fecha por igualdad, el índice entrega ordenado por importe: no hay Sort y el LIMIT corta enseguida. Subir work_mem global arriesga la RAM. [→ Lo que medimos en el laboratorio](#Lo%20que%20medimos%20en%20el%20laboratorio)
15. Un histórico de logs enorme se inserta siempre en orden de fecha y se consulta por rangos de fecha. ¿Qué índice ocupa menos y sirve?
   - [ ] Hash
   - [ ] GIN
   - [x] BRIN
   - [ ] GiST
   > BRIN guarda mínimo y máximo por bloque: ideal para tablas grandes ordenadas físicamente por la clave. [→ Índices](#Índices)
16. `WHERE sexo = 'F'` sobre una tabla de un millón de personas. ¿Conviene un índice B-tree sobre `sexo`?
   - [x] No: devuelve la mitad de las filas (baja selectividad) y el Seq Scan suele ganar
   - [ ] Sí, siempre que haya un WHERE conviene un índice
   - [ ] Sí, pero de tipo hash
   - [ ] Sólo si además se particiona por sexo
   > Selectividad baja = muchas filas: el índice obliga a lecturas aleatorias por cada una. [→ Índices](#Índices)

## El diseño parte de la carga

**Diseño físico** = transformar un esquema lógico en una implementación coherente con la carga, eligiendo almacenamiento, índices y particiones, y verificando con planes de ejecución. Decide **cómo** se guardan y se acceden los datos, no **qué** datos hay.

El problema típico (*Resumen parcial*, p. 6): `SELECT * FROM pedido WHERE cliente_id = 1500 AND fecha BETWEEN '2024-01-01' AND '2024-03-31';` tarda milisegundos con 10.000 filas y segundos con 50 millones, porque hace un **full table scan**. El SQL es correcto: lo que falla es el **camino de acceso** físico.

Abarca más que índices: tipos de datos y ancho de fila, organización (claves, orden físico), acceso (índices, particiones, materialización), ejecución (estadísticas, memoria, paralelismo) y operación (concurrencia, mantenimiento, retención).

**Matriz de carga**: por cada operación, las tablas, columnas, filtros, joins y orden; la frecuencia, las filas esperadas y el tiempo objetivo. Toda decisión de índice o partición tiene que poder rastrearse a una fila de la matriz. Si falta un dato, se mide; no se supone.

| Qué relevar | Pregunta | Ejemplo (*Resumen parcial*, p. 6) |
|---|---|---|
| Operación | ¿Qué SQL se ejecuta? | Historial de pedidos de un cliente |
| Patrón de acceso | ¿Qué filtra, une y ordena? | `WHERE cliente_id = ? ORDER BY fecha DESC` |
| Frecuencia | ¿Cuántas veces y cuándo? | 5.000 por hora en horario comercial |
| Criticidad | ¿Qué pasa si tarda? | El cliente espera en la app: < 200 ms |
| Volumen y crecimiento | ¿Cuántas filas hoy y en un año? | 600.000 hoy, +400 por día |

- **Volumen**: filas, bytes y tamaño promedio. El tamaño actual engaña: hay que proyectar el crecimiento y la retención.
- **Distribución**: valores frecuentes, sesgos, nulos.
- **Frecuencia, criticidad y concurrencia**: una consulta nocturna lenta puede tolerarse; una moderada que corre miles de veces por hora puede dominar el costo.
- **Lecturas frente a escrituras**: mejorar lecturas casi siempre encarece escrituras. Optimizar una consulta aislada puede degradar el sistema.

## Páginas y organización

- **Página**: unidad básica de E/S (8 KB en PostgreSQL, 16 KB en InnoDB). Varias filas comparten una página. Menos sentencias SQL no siempre es menos E/S. **El objetivo del diseño físico es procesar menos páginas.**
- **Jerarquía**: página → extensión → objeto (segmentos, archivos). Agrupación de archivos: tablespaces (PostgreSQL, Oracle, MySQL), filegroups (SQL Server). Comparar por función, no por nombre.
- **Ancho de fila**: tipos adecuados → más filas por página → mejor caché → menos E/S. Ejemplo: una fecha como `date` (4 bytes) en vez de `varchar(30)` (*Resumen parcial*, p. 6).
- **Tablespace**: ubicación física (carpeta o disco) donde se guardan objetos. Ejemplo: las tablas históricas en un disco barato y las activas en un SSD.

| Organización | Qué es | Motor |
|---|---|---|
| Heap | Filas sin orden físico, en la primera página con lugar; los índices apuntan a la dirección física (`ctid` = página, posición) | PostgreSQL por defecto |
| Clustered | La PK organiza las filas | InnoDB, SQL Server |
| IOT | Los datos son parte del índice principal | Oracle |

En **InnoDB** la PK organiza los datos y sus columnas aparecen en cada índice secundario: una PK ancha o aleatoria multiplica el costo.

## Índices

Un índice reduce trabajo de tres formas: **localizar** claves, **ordenar** (evita un sort) y **cubrir** (no vuelve a la tabla). Crearlo no garantiza que el optimizador lo use.

- **Table scan o acceso por índice**: los dos pueden ser correctos. PostgreSQL muestra Seq Scan, Index Scan, Index Only Scan o Bitmap; MySQL, Table Scan, Index o Range. Un **Seq Scan** lee todas las páginas en orden (lectura **secuencial**); un **Index Scan** salta por el árbol y va a buscar cada fila (lectura **aleatoria**). Si la consulta trae ~30% de la tabla, el Seq Scan suele ganar (*Resumen parcial*, p. 8).
- **B-tree**: igualdad, rangos, prefijos y orden. Es el punto de partida. **Hash**: igualdad. Otros: full-text, espacial, bitmap. El tipo tiene que coincidir con el operador.

| Tipo (PostgreSQL) | Sirve para | Ejemplo (*Resumen parcial*, pp. 7–8) |
|---|---|---|
| B-tree (default) | Igualdad, rangos, prefijos, orden | `WHERE fecha > '2024-01-01'`, `ORDER BY fecha` |
| Hash | Sólo igualdad | `WHERE codigo = 'ABC'` |
| GIN | Valores compuestos: texto completo, JSON, arrays | Buscar una palabra en una descripción |
| GiST | Datos geométricos y rangos | Locales a menos de 1 km |
| BRIN | Tablas enormes ordenadas físicamente por la clave; guarda mín. y máx. por bloque y ocupa poquísimo | Histórico de logs por fecha |

- **Selectividad** en ejemplos: `WHERE dni = 30111222` devuelve 1 fila de un millón (muy selectivo, conviene índice); `WHERE sexo = 'F'` devuelve la mitad (el índice no ayuda). La misma columna cambia según el valor: `estado = 'CANCELADO'` (1%) frente a `estado = 'ENTREGADO'` (90%).
- **Compuestos**: el orden de las columnas importa (**prefijo izquierdo**). Con (cliente_id, fecha), ordenado primero por cliente y dentro de cada cliente por fecha (*Resumen parcial*, p. 8):
  - `WHERE cliente_id = 1500` → sirve;
  - `WHERE cliente_id = 1500 AND fecha > '2024-01-01'` → sirve, es el caso ideal;
  - `WHERE fecha > '2024-01-01'` sola → **no**: sin el cliente no hay por dónde entrar al árbol (como buscar en la guía telefónica por nombre sin saber el apellido).

  Regla práctica: **primero las columnas de igualdad, después las de rango u orden**.
- **Cobertura**: incluye todas las columnas que pide la consulta. MySQL muestra "Using index"; en PostgreSQL, Index Only Scan, que igual depende del mapa de visibilidad (Heap Fetches). Ejemplo: `CREATE INDEX ON pedido (cliente_id) INCLUDE (total);` cubre `SELECT total FROM pedido WHERE cliente_id = 5`. No convertir el índice en una copia de la tabla.
- **Costo oculto**: espacio, memoria y mantenimiento en cada INSERT y DELETE y en cada UPDATE de columna indexada. Bajo concurrencia, más WAL/redo, contención y **hot spots** (una página donde se concentran las escrituras, como el final de un índice sobre un id que siempre crece). Antes de crear uno, hay que saber qué mejora, cuánto se usa y qué encarece.

## Particionamiento

Dividir una tabla según una clave y una regla. Para las consultas sigue siendo una sola tabla.

```sql
CREATE TABLE pedido (id int, fecha date, cliente_id int, total numeric)
  PARTITION BY RANGE (fecha);
CREATE TABLE pedido_2024_01 PARTITION OF pedido
  FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');
```

- **Pruning**: descarta particiones antes de buscar filas. Sólo si el predicado usa la clave de partición. Con 48 particiones mensuales, un filtro de enero a marzo lee 3; un filtro por `cliente_id` abre las 48 (*Resumen parcial*, p. 9).
- **Operación**: permite retirar períodos completos sin borrar fila por fila: `DETACH PARTITION` (o `DROP`) sólo toca el catálogo.
- **Límite**: no reemplaza al índice dentro de lo que queda.

| Estrategia | Para |
|---|---|
| Rango | Fechas, períodos, secuencias |
| Lista | Regiones o categorías conocidas |
| Hash | Distribución uniforme |

**Particionar reduce lo recorrido; indexar localiza filas dentro de lo conservado.** Más particiones: más tiempo de planificación y más mantenimiento (crear la partición nueva, ANALYZE).

## Desnormalizar y materializar

- **Desnormalizar**: redundancia controlada, una excepción. Sólo con un costo medido y repetido (joins o cálculos caros). Riesgo: duplicación e inconsistencia. Hay que documentar la fuente de verdad y la sincronización.
- **Materializar**: vista materializada (persiste el resultado de una consulta), tabla resumen (agregados para reportes) y columna generada (precalcula una expresión). Antes hay que definir la frecuencia de refresh, el bloqueo durante el refresh y la reconstrucción.

## Estadísticas y optimizador

El optimizador **decide por costos** comparando scans, índices, joins y ordenamientos con estimaciones. Las estadísticas alimentan las cardinalidades; una mala estimación cambia el orden de joins, el método de acceso y la memoria.

- **Selectividad**: porcentaje de filas que quedan después del filtro. No hay umbrales universales: la misma columna es selectiva para un valor y no para otro.
- **Estadísticas viejas**: cargaste 5 millones de filas y el motor cree que la tabla tiene 1.000; elige un Nested Loop que termina recorriendo millones de veces. Se arregla con `ANALYZE tabla;` (*Resumen parcial*, p. 8).
- **Histogramas**: frecuencias, rangos y valores dominantes.
- **Correlación**: columnas relacionadas (ciudad y provincia) no son independientes. En PostgreSQL, `CREATE STATISTICS` define qué relación capturar y `ANALYZE` recolecta los datos.
- **Mantenimiento**: el diseño envejece. ANALYZE actualiza estadísticas; VACUUM reutiliza el espacio de versiones muertas (bloat); hay que revisar índices sin uso.
- **Bloat y VACUUM** (*Resumen parcial*, p. 10): en PostgreSQL un UPDATE o DELETE no borra la fila vieja, la marca como muerta (por MVCC). Ese espacio ocupado es el **bloat**. `VACUUM` lo marca como reutilizable; `VACUUM FULL` reescribe la tabla y devuelve el espacio, pero **la bloquea** mientras tanto.

## Leer un plan

`EXPLAIN` da el plan estimado (una predicción); `EXPLAIN ANALYZE` (PostgreSQL) ejecuta y da la evidencia real.

Qué mirar:
- Dónde está el mayor costo o tiempo.
- **Filas estimadas frente a reales**; los loops amplifican los errores.
- Scans inesperados, joins y sorts caros, temporales.
- MySQL: `possible_keys` (posible) frente a `key` (usado) y la columna `Extra`. PostgreSQL: **Index Cond** (condición resuelta por el índice) frente a **Filter** (filtro posterior), Buffers y Heap Fetches.

Se lee **de adentro hacia afuera** (de abajo hacia arriba). Señales en PostgreSQL (*Resumen parcial*, pp. 9–10):

| Señal | Qué indica |
|---|---|
| `rows` estimadas muy distintas de las reales | Estadísticas viejas: correr ANALYZE |
| `Seq Scan` sobre tabla grande con filtro selectivo | Falta un índice o no se puede usar |
| `Rows Removed by Filter` alto | Se leyeron filas para tirarlas |
| `Sort Method: external merge Disk` | El ordenamiento no entró en `work_mem` y fue a disco |
| `Buffers: shared hit / read` | Páginas desde caché (hit) o desde disco (read) |
| `loops` | Cuántas veces corrió un nodo: multiplica los errores |

El **costo** de PostgreSQL está en unidades internas del planificador, **no en milisegundos**, y no se compara entre motores.

**No todo se resuelve con otro índice**:

| Señal | Intervención |
|---|---|
| Muchas páginas | Índice, ubicación o partición |
| Filas anchas | Tipos, compresión, proyección |
| Estimación errada | ANALYZE o estadísticas extendidas |
| Temporales y sorts a disco | Reducir filas o revisar memoria |
| Degradación | VACUUM, bloat, índices sin uso |
| Función sobre la columna | Reescribir el predicado o índice por expresión |

**Protocolo de medición**: hipótesis antes del DDL, mismos parámetros, no reiniciar ni limpiar cachés, **tres ejecuciones y mediana**, DDL + estadísticas, comparar más de un indicador. Veredicto: **mantener, modificar o revertir**. Una hipótesis refutada también es un resultado.

## Lo que medimos en el laboratorio

**U1 Act. 3 · índices sobre `cuentas` (2,2 M filas) y `movimientos` (10 M)**, cargadas con `\copy` y `generate_series` (*Resumen parcial*, pp. 28–29):

| Consulta | Sin índice | Con índice | Plan antes → después |
|---|---|---|---|
| Igualdad (`nro_cuenta = …`) | ~450 ms | ~0,2 ms | Parallel Seq Scan → Index Scan |
| JOIN + agregación | ~1300 ms | ~0,3 ms | Hash Join → Nested Loop + Index Scan |
| Prefijo (`LIKE 'CTA-…%'`) | ~650 ms | ~0,2 ms | Seq Scan → Index Scan con `varchar_pattern_ops` |

- El índice no "lee más rápido": **cambia el algoritmo**. El JOIN pasó de armar un hash de 10 millones de filas (**Hash Join**: bueno para unir muchas filas) a visitar 3 cuentas (**Nested Loop**: por cada fila busca su pareja; excelente con pocas filas e índice).
- Funcionó porque las consultas eran muy selectivas (menos del 0,001% de la tabla).
- Un B-tree común no sirve para `LIKE 'abc%'` si el *locale* de la base no es C: hace falta `varchar_pattern_ops`.
- Los índices ocupan: 306 MB de índices sobre 793 MB de datos.
- **PRIMARY KEY y UNIQUE crean su índice solos; una FK no**: el índice en la tabla hija se crea a mano.

**U2 Act. 1 · Caso 05, el sort que llega al disco** (*Resumen parcial*, pp. 29–30): `WHERE fecha = día ORDER BY importe DESC LIMIT 1000` sobre 22 M de movimientos tardaba 10,7 s.

```
Limit (rows=1000)
  -> Sort  Sort Key: importe DESC
           Sort Method: external merge  Disk: 1400000kB
           Buffers: temp read=349000 written=351000
       -> Index Scan using ix_movimientos_fecha (rows=920000)
```

- El índice por fecha encontraba rápido las 920.000 filas del día, pero no las entregaba ordenadas por importe: había que ordenarlas todas para devolver 1.000.
- **External merge**: el sort no entró en `work_mem` (4 MB); partió los datos en tandas ordenadas en archivos temporales (1,4 GB) y después las mezcló. Evidencia: `Disk:` y `temp read/written`.
- **Mejora**: índice `(fecha, importe DESC)`. Con la fecha por igualdad, las filas ya salen ordenadas por importe: desaparece el Sort y el LIMIT corta a las 1.000.
- **¿Por qué no subir `work_mem` en todo el servidor?** Se asigna **por operación y por sesión**: 100 sesiones con 3 sorts cada una a 500 MB podrían pedir 150 GB. Si hace falta, sólo en la sesión del reporte: `SET work_mem = '256MB';`.

**U2 Desafío 2 · heap frente a particionada**, en PostgreSQL: `pedido_heap` frente a `pedido_part` (600.000 filas, 48 particiones mensuales), con `EXPLAIN (ANALYZE, BUFFERS)`.

| Caso | Heap | Particionada | Lectura |
|---|---|---|---|
| Rango Q1 2024 | 119 ms · 5.957 buffers | 47 ms · 372 buffers | Pruning: 45 de 48 particiones descartadas, ~16× menos lectura |
| Rango 2022–2026 | 103 ms · 5.957 bloques | 72 ms · 5.991 bloques | 0 descartadas: mismo trabajo. Planificación 0,65 ms contra 6,6 ms |
| Histórico de un cliente | — | 101 ms | Sin pruning: 48 Seq Scan + Sort |
| Mismo, con índice (cliente_id, fecha DESC) | — | 0,43 ms | Index Scan, sin Sort, corte en LIMIT 20 |
| Retención de un mes | DELETE 363 ms, 5.416 bloques sucios | DETACH 6 ms | DDL de catálogo, sin bloat |

Conclusiones:
- El beneficio del particionamiento es **proporcional a la fracción de particiones descartadas**.
- La diferencia de tiempo en el rango amplio no se debía al particionamiento: la heap leía de disco (`read`) y la particionada de memoria (`hit`). La métrica comparable eran los **bloques tocados**.
- Se descartó el índice sólo sobre cliente_id porque obligaba a un Sort antes del LIMIT.
- `ANALYZE` recolecta estadísticas; `EXPLAIN ANALYZE` **ejecuta** la consulta: por eso las pruebas que modifican datos van dentro de `BEGIN … ROLLBACK`.
- Veredicto: **mantener** partición + índice local. Costos: el índice se replica en 48 particiones y encarece los INSERT; la planificación crece con las particiones; DETACH toma un lock breve sobre la tabla padre.
