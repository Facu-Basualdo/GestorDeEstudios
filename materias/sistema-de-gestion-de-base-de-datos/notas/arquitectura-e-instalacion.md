# Arquitectura de un motor de base de datos
[← Índice Sistemas de Gestión de Bases de Datos](../INDICE.md)

> Tema 1 · Peso: 2/3 (estimado: los parciales 2026 cambiaron de formato y todavía no hay modelo) · Fuente:
> *Clase 1 - Arquitectura DB 2026 multiplataforma* (diap. 9–34) y la bitácora U1 Act. 3 del grupo
> (instalación de PostgreSQL 18.4 en Ubuntu Server). Ampliada con el *Resumen parcial* del estudiante (pp. 1–5).

## Preguntas de recuperación

- ¿Qué diferencia hay entre base de datos, sistema de base de datos y DBMS? :: BD: conjunto persistente y organizado de datos (concepto lógico). Sistema de BD: hardware + software + datos + usuarios + procesos. DBMS: el software que gestiona definición, manipulación, seguridad, concurrencia, transacciones, recuperación y acceso eficiente. [→ Conceptos base](#Conceptos%20base)
- ¿Qué gana un DBMS frente a un sistema de archivos? :: Centraliza reglas, transacciones, seguridad, metadatos, concurrencia, optimización y backup. Menos redundancia e inconsistencia, más integridad, mejor recuperación e independencia datos-aplicación. [→ Conceptos base](#Conceptos%20base)
- ¿Cuáles son los tres niveles de ANSI/SPARC y qué describe cada uno? :: Externo: cómo ve los datos cada usuario o aplicación (vistas). Conceptual: el modelo lógico común (tablas, relaciones, restricciones). Interno: cómo se almacenan físicamente (páginas, índices, archivos, logs). [→ ANSI SPARC e independencia de datos](#ANSI%20SPARC%20e%20independencia%20de%20datos)
- ¿Qué es la independencia física y qué la independencia lógica? Un ejemplo de cada una. :: Física: cambiar el nivel interno sin tocar el lógico (crear un índice, particionar, mover a otro tablespace). Lógica: cambiar el esquema conceptual sin romper las vistas externas (agregar un atributo, dividir una entidad conservando la vista). [→ ANSI SPARC e independencia de datos](#ANSI%20SPARC%20e%20independencia%20de%20datos)
- Nombrá las familias de comandos SQL con un ejemplo de cada una. :: DDL (CREATE, ALTER, DROP), DML (SELECT, INSERT, UPDATE, DELETE), DCL (GRANT, REVOKE), TCL (COMMIT, ROLLBACK). [→ Conceptos base](#Conceptos%20base)
- ¿Por qué componentes pasa una consulta dentro del motor, en orden? :: Cliente → parser (léxico, sintáctico, semántico, con el catálogo) → optimizador (plan de menor costo según estadísticas) → ejecutor → buffer cache → storage manager → datos y logs. [→ Recorrido de una consulta](#Recorrido%20de%20una%20consulta)
- ¿Qué hace el optimizador y con qué decide? :: Estima costos de los caminos posibles (índice o scan, orden y tipo de join, filtros, paralelismo) y elige el plan más barato, usando las estadísticas y metadatos del catálogo. [→ Recorrido de una consulta](#Recorrido%20de%20una%20consulta)
- ¿Sobre qué opera el ejecutor: disco o memoria? :: Sobre páginas en memoria (buffer). Si la página no está (miss), la pide al almacenamiento. [→ Recorrido de una consulta](#Recorrido%20de%20una%20consulta)
- En un UPDATE + COMMIT, ¿qué se escribe primero a disco y qué persiste el COMMIT? :: Primero el log (escritura anticipada, WAL). El COMMIT fuerza el log a disco; la página modificada queda "sucia" en RAM y baja al archivo de datos recién con el checkpoint. [→ Recorrido de una consulta](#Recorrido%20de%20una%20consulta)
- Si el servidor cae después del COMMIT pero antes del checkpoint, ¿se pierde el cambio? :: No. La recuperación rehace los cambios desde el log, que ya estaba en disco. Por eso el COMMIT garantiza la durabilidad. [→ Recorrido de una consulta](#Recorrido%20de%20una%20consulta)
- ¿Qué áreas de memoria tiene un motor y para qué sirve cada una? :: Buffer pool o cache (páginas de datos e índices), plan cache (reutilizar planes), sort/work memory (ordenamientos, joins, hash) y log buffer (agrupa cambios antes de escribir el log). [→ Memoria y almacenamiento](#Memoria%20y%20almacenamiento)
- ¿Cómo se llama el buffer de datos en MySQL, PostgreSQL, SQL Server y Oracle? :: MySQL: InnoDB Buffer Pool. PostgreSQL: Shared Buffers. SQL Server: Buffer Pool. Oracle: SGA / Buffer Cache. [→ Memoria y almacenamiento](#Memoria%20y%20almacenamiento)
- ¿Cómo se llama el log transaccional en cada motor? :: MySQL/InnoDB: redo log + undo log. PostgreSQL: WAL (Write-Ahead Log). SQL Server: transaction log. Oracle: redo log + undo. [→ Memoria y almacenamiento](#Memoria%20y%20almacenamiento)
- ¿Qué guarda el diccionario de datos y para qué se usa? :: Tablas, columnas, tipos, restricciones, índices, vistas, estadísticas, usuarios, permisos y dependencias. Se usa para validar consultas, aplicar seguridad, estimar costos y armar planes. [→ Diccionario de datos](#Diccionario%20de%20datos)
- ¿Dónde consulto los metadatos en MySQL y en PostgreSQL? :: MySQL: INFORMATION_SCHEMA (+ performance_schema), SHOW TABLES, DESCRIBE. PostgreSQL: pg_catalog (pg_class, pg_attribute) + information_schema, y en psql \dt y \d. [→ Diccionario de datos](#Diccionario%20de%20datos)
- ¿Qué es un esquema en MySQL, en Oracle y en PostgreSQL? :: MySQL: equivale a una base de datos. Oracle: va ligado al usuario dueño. PostgreSQL: un namespace dentro de una base. [→ Instancia base y esquema](#Instancia%20base%20y%20esquema)
- ¿Qué es la instancia? :: El proceso o servicio que administra memoria, recursos y conexiones (en MySQL, mysqld). No siempre equivale a una base: una instancia puede tener varias. [→ Instancia base y esquema](#Instancia%20base%20y%20esquema)
- En DBaaS (RDS, Azure SQL, Cloud SQL), ¿qué sigue siendo responsabilidad del equipo? :: Modelo, consultas, índices, seguridad, costos y continuidad. El proveedor administra parte del backup, el patching, la disponibilidad y el monitoreo. [→ Nube y rol del DBA](#Nube%20y%20rol%20del%20DBA)
- ¿Qué viste en el laboratorio de instalación que confirma la independencia física? :: Que los nombres lógicos (sgbd_lab, cuentas) no existen en el disco: hay directorios y archivos identificados por OID, páginas de 8 kB y segmentos de WAL. [→ Lo que vimos en el laboratorio](#Lo%20que%20vimos%20en%20el%20laboratorio)
- ¿Qué cuatro problemas aparecen al manejar los datos con archivos sueltos? Un ejemplo de cada uno. :: Concurrencia (dos cajeros pisan el mismo saldo), atomicidad (corte a mitad de una transferencia), redundancia e inconsistencia (la dirección copiada en tres archivos y una vieja) e integridad (nada impide un saldo negativo). [→ Conceptos base](#Conceptos%20base)
- Cuando el motor necesita una fila, ¿qué lee? :: La página entera donde está (8 KB en PostgreSQL). Nunca lee "una fila". [→ Recorrido de una consulta](#Recorrido%20de%20una%20consulta)
- Tras una caída, ¿qué hace el recovery con el log? :: Rehace (redo) los cambios confirmados y deshace (undo) los que no llegaron al COMMIT. [→ Recorrido de una consulta](#Recorrido%20de%20una%20consulta)
- ¿Por qué el motor escribe primero el log y no la página modificada? :: Porque escribir el log es secuencial y rápido, y escribir páginas sueltas es lento. Con el log en disco el cambio ya es durable; la página baja después con el checkpoint. [→ Recorrido de una consulta](#Recorrido%20de%20una%20consulta)
- ¿Cómo se llaman en PostgreSQL el buffer de datos, la memoria de trabajo y el log buffer? :: `shared_buffers`, `work_mem` (por operación: si no alcanza, va a disco) y `wal_buffers`. [→ Memoria y almacenamiento](#Memoria%20y%20almacenamiento)
- ¿Qué mecanismo sostiene cada propiedad ACID? :: Atomicidad: log de undo y ROLLBACK. Consistencia: constraints (CHECK, FK). Aislamiento: locks y MVCC. Durabilidad: el WAL en disco. [→ Memoria y almacenamiento](#Memoria%20y%20almacenamiento)
- ¿Qué hace `SET search_path TO sgbd_u5;`? :: Le dice al motor en qué esquema buscar las tablas sin calificarlas. [→ Instancia base y esquema](#Instancia%20base%20y%20esquema)

## Cuestionario

1. Un DBA crea un índice y particiona una tabla, y ninguna aplicación tiene que cambiar. ¿Qué propiedad lo permite?
   - [x] Independencia física de datos
   - [ ] Independencia lógica de datos
   - [ ] Atomicidad
   - [ ] Nivel externo de ANSI/SPARC
   > Cambiar estructuras internas sin tocar la visión lógica es independencia física. La lógica es cambiar el esquema conceptual sin romper vistas. [→ ANSI SPARC e independencia de datos](#ANSI%20SPARC%20e%20independencia%20de%20datos)
2. Una vista que oculta columnas sensibles a un grupo de usuarios pertenece al nivel:
   - [x] Externo
   - [ ] Conceptual
   - [ ] Interno
   - [ ] Físico
   > El nivel externo son las vistas parciales que ve cada usuario o aplicación. [→ ANSI SPARC e independencia de datos](#ANSI%20SPARC%20e%20independencia%20de%20datos)
3. ¿Qué componente valida que la tabla y las columnas de una consulta existan?
   - [x] El parser, apoyándose en el catálogo
   - [ ] El optimizador
   - [ ] El ejecutor
   - [ ] El storage manager
   > El parser hace el análisis léxico, sintáctico y semántico; el semántico consulta el catálogo. [→ Recorrido de una consulta](#Recorrido%20de%20una%20consulta)
4. Después de un COMMIT, ¿qué está garantizado que ya se escribió en disco?
   - [x] El registro en el log de transacciones
   - [ ] La página de datos modificada
   - [ ] El log y la página de datos
   - [ ] Nada: se escribe en el próximo checkpoint
   > El COMMIT persiste el log (WAL); la página sucia baja después, con el checkpoint. [→ Recorrido de una consulta](#Recorrido%20de%20una%20consulta)
5. ¿Qué afirmación sobre el ejecutor es correcta?
   - [x] Opera sobre páginas en memoria y pide al almacenamiento las que faltan
   - [ ] Lee siempre directamente del disco
   - [ ] Elige el plan de ejecución
   - [ ] Escribe las páginas sucias en cada COMMIT
   > El plan lo elige el optimizador; las páginas sucias las baja el checkpoint. [→ Recorrido de una consulta](#Recorrido%20de%20una%20consulta)
6. ¿Cuáles son mecanismos concretos con los que el motor sostiene ACID? (varias correctas)
   - [x] Logs transaccionales
   - [x] Bloqueos y control de concurrencia
   - [x] Checkpoints
   - [ ] El plan cache
   > El plan cache sólo reutiliza planes: es rendimiento, no ACID. [→ Memoria y almacenamiento](#Memoria%20y%20almacenamiento)
7. ¿Qué motor usa WAL como nombre de su log transaccional?
   - [x] PostgreSQL
   - [ ] MySQL/InnoDB
   - [ ] SQL Server
   - [ ] Oracle
   > InnoDB y Oracle hablan de redo + undo; SQL Server de transaction log. [→ Memoria y almacenamiento](#Memoria%20y%20almacenamiento)
8. En MySQL, "esquema" es:
   - [x] Sinónimo de base de datos
   - [ ] Un namespace dentro de una base
   - [ ] El usuario dueño de los objetos
   - [ ] El catálogo del sistema
   > El namespace dentro de una base es PostgreSQL; el ligado al usuario es Oracle. [→ Instancia base y esquema](#Instancia%20base%20y%20esquema)
9. ¿Qué es INFORMATION_SCHEMA?
   - [x] El catálogo estándar ANSI que comparten MySQL, SQL Server y PostgreSQL
   - [ ] El catálogo propio de Oracle
   - [ ] Una herramienta gráfica de MySQL
   - [ ] El log de auditoría del motor
   > Oracle usa su propio diccionario (vistas USER_, ALL_, DBA_). [→ Diccionario de datos](#Diccionario%20de%20datos)
10. Una empresa migra a una base administrada en la nube (DBaaS). ¿Qué sigue a cargo del equipo?
    - [x] Los índices, la seguridad y los costos
    - [ ] El patching del motor
    - [ ] El hardware del servidor
    - [ ] Nada: el proveedor resuelve todo
    > DBaaS cambia la operación, no elimina la arquitectura ni las decisiones técnicas. [→ Nube y rol del DBA](#Nube%20y%20rol%20del%20DBA)
11. Con archivos sueltos, se corta la luz a mitad de una transferencia y la plata queda debitada de una cuenta pero no acreditada en la otra. ¿Qué garantía faltó?
   - [x] Atomicidad
   - [ ] Consistencia
   - [ ] Aislamiento
   - [ ] Durabilidad
   > Atomicidad = todo o nada: o se debita y se acredita, o no pasa nada. [→ Conceptos base](#Conceptos%20base)
12. ¿Qué mecanismo sostiene el **aislamiento** de las transacciones?
   - [ ] Constraints CHECK y FK
   - [x] Locks y MVCC
   - [ ] El WAL forzado a disco en el COMMIT
   - [ ] El log de undo
   > Los constraints sostienen la consistencia; el WAL, la durabilidad; el undo, la atomicidad. [→ Memoria y almacenamiento](#Memoria%20y%20almacenamiento)
13. En PostgreSQL, un ORDER BY grande no entra en `work_mem`. ¿Qué pasa?
   - [ ] Falla con un error de memoria
   - [ ] Toma la memoria que le falta de `shared_buffers`
   - [x] Usa archivos temporales en disco y la consulta se vuelve lenta
   - [ ] Ordena sólo las filas que entran y devuelve el resto sin ordenar
   > `work_mem` es por operación; si no alcanza, el ordenamiento sigue en disco. [→ Memoria y almacenamiento](#Memoria%20y%20almacenamiento)

## Conceptos base

- **Base de datos**: conjunto persistente y organizado de datos con un fin. Es un concepto lógico.
- **Sistema de BD**: hardware (CPU, memoria, discos, red), software (DBMS, utilidades, drivers), datos y usuarios.
- **DBMS / SGBD**: el software que gestiona definición, manipulación, seguridad, concurrencia, transacciones, recuperación y acceso eficiente. No es sólo "guardar datos".

DBMS frente a archivos: con archivos, el programa conoce la estructura exacta y la integridad, la seguridad y la recuperación quedan del lado de la aplicación. El DBMS lo centraliza todo.

Qué sale mal con archivos sueltos (un CSV por tabla), con el ejemplo de un banco (*Resumen parcial*, p. 1):

| Problema | Ejemplo |
|---|---|
| Concurrencia | Dos cajeros actualizan el mismo saldo y uno pisa el cambio del otro |
| Atomicidad | Se corta la luz a mitad de una transferencia: debitada en una cuenta, no acreditada en la otra |
| Redundancia e inconsistencia | La dirección del cliente copiada en tres archivos, y en uno quedó vieja |
| Integridad | Nada impide un saldo negativo o un movimiento de una cuenta que no existe |

Además el DBMS da **independencia datos–aplicación**: la app pide datos con SQL sin saber cómo están guardados.

Roles: el **DA** define políticas y gobierno de datos. El **DBA** administra operación, seguridad, rendimiento, backups y disponibilidad. El **desarrollador** hace aplicaciones, consultas y migraciones. El **analista** consume la información. La cátedra mira desde el DBA.

| Familia | Comandos | Para qué |
|---|---|---|
| DDL | CREATE, ALTER, DROP | Definir objetos |
| DML | SELECT, INSERT, UPDATE, DELETE | Manipular y consultar |
| DCL | GRANT, REVOKE | Permisos |
| TCL | COMMIT, ROLLBACK | Transacciones |

Modelos de datos: relacional, documental (JSON/BSON), clave-valor, columnar, grafo y otros (series temporales, búsqueda, multimodelo). El 82% de la popularidad del top 10 de DB-Engines es relacional: **el motor se elige por el caso de uso, no por la moda**.

## ANSI SPARC e independencia de datos

| Nivel | Qué describe | Ejemplo |
|---|---|---|
| Externo | Cómo ve los datos cada usuario o app | Vista que oculta columnas sensibles |
| Conceptual | Modelo lógico común | Tablas, relaciones, restricciones, dominios |
| Interno | Almacenamiento físico | Páginas, bloques, índices, particiones, tablespaces, logs |

- **Independencia lógica**: cambiar el conceptual sin afectar las vistas (agregar atributos, dividir una entidad).
- **Independencia física**: cambiar el interno sin cambiar la visión lógica (índices, tablespaces, particiones). Ejemplo de la clase: migrar de row-store en disco a column-store en SSD sin que los usuarios lo noten.

Ejemplos concretos (*Resumen parcial*, p. 2): agregar la columna `email` a `cliente` y que la vista `v_clientes_publica` (nombre y ciudad, sin DNI) siga andando es independencia **lógica**; crear un índice o pasar la tabla a un SSD sin reescribir ninguna consulta es independencia **física**.

El ideal: que una decisión física de rendimiento no obligue a reprogramar el sistema.

## Recorrido de una consulta

`SELECT saldo FROM cuentas WHERE nro_cuenta = 12345;`

1. **Parser**: análisis léxico, sintáctico y semántico. Consulta el **catálogo** (¿existe la tabla? ¿las columnas? ¿hay permisos?) y produce un árbol de consulta.
2. **Optimizador**: con las **estadísticas**, estima costos y elige el plan de menor costo (índice o scan, joins, orden, paralelismo). Ejemplo: con un índice sobre `nro_cuenta`, leer 3 páginas en vez de 50.000 (*Resumen parcial*, p. 3).
3. **Ejecutor**: corre el plan **sobre páginas en memoria**. Si la página está en el buffer, es *hit*; si no, *miss* y la pide al almacenamiento.
4. Devuelve el resultado respetando aislamiento y permisos.

El **storage manager** es el componente que lee y escribe los archivos de datos y de logs en el disco. La **página** (o bloque) es la unidad mínima de lectura y escritura: 8 KB en PostgreSQL, con varias filas adentro. **El motor nunca lee "una fila": lee la página entera donde está** (*Resumen parcial*, p. 3).

**Escritura (UPDATE + COMMIT)**:
- El cambio se anota en el **buffer de log** y la página queda **sucia** en RAM.
- **Escritura anticipada**: el log se escribe antes que el dato.
- El **COMMIT fuerza el log a disco** → durabilidad. No baja la página.
- El **checkpoint** (asíncrono, en segundo plano) baja las páginas sucias a los archivos de datos.
- Si el servidor cae, la recuperación lee el log, **rehace (redo)** los cambios confirmados y **deshace (undo)** los que no llegaron al COMMIT.
- ¿Por qué así? Escribir el log es **secuencial y rápido**; escribir páginas sueltas es lento (*Resumen parcial*, p. 3).

## Memoria y almacenamiento

Memoria:
- **Buffer pool / cache**: páginas de datos e índices leídas recientemente.
- **Plan cache**: reutiliza planes de consultas frecuentes.
- **Sort / work memory**: ordenamientos, joins, hash.
- **Log buffer**: agrupa cambios antes de escribirlos al log.

En PostgreSQL (*Resumen parcial*, pp. 3–4): el buffer es `shared_buffers`, la memoria de trabajo es `work_mem` (**por operación**: si un ordenamiento no entra, va a archivos temporales en disco), el log buffer es `wal_buffers` y el plan cache se aprovecha con **sentencias preparadas**.

| Motor | Buffer de datos | Log transaccional |
|---|---|---|
| MySQL/InnoDB | InnoDB Buffer Pool | Redo log + undo log |
| PostgreSQL | Shared Buffers | WAL |
| SQL Server | Buffer Pool | Transaction log |
| Oracle | SGA / Buffer Cache | Redo + undo |

Almacenamiento: **datos** (páginas, bloques, segmentos, tablespaces, datafiles), **índices** (B-Tree, hash, columnstore, full-text, espacial), **logs** y **temporales** (sort, hash, objetos temporales).

**ACID**: atomicidad (todo o nada), consistencia (respeta reglas), aislamiento (controla concurrencia), durabilidad (lo confirmado sobrevive). Se sostiene con logs, bloqueos, control de concurrencia y checkpoints.

Qué mecanismo sostiene cada propiedad, con una transferencia de $100 (dos UPDATE) (*Resumen parcial*, p. 4):

| Propiedad | En el ejemplo | Mecanismo |
|---|---|---|
| Atomicidad | Se debita y se acredita, o no pasa nada | Log de undo, ROLLBACK |
| Consistencia | Ningún saldo queda negativo | Constraints (CHECK, FK) |
| Aislamiento | Otro cajero no ve la plata "en el aire" | Locks, MVCC |
| Durabilidad | Tras el COMMIT, un corte de luz no borra la transferencia | Log (WAL) en disco |

## Diccionario de datos

Guarda información sobre la información: tablas, columnas, tipos, restricciones, índices, vistas, estadísticas, usuarios, permisos y dependencias. **Sin metadatos no hay optimizador, ni seguridad, ni administración.** Los metadatos son datos: se consultan con SQL.

| Motor | Catálogo | Ejemplo |
|---|---|---|
| MySQL | INFORMATION_SCHEMA + performance_schema | `SHOW TABLES; DESCRIBE cuentas;` |
| PostgreSQL | pg_catalog (pg_class, pg_attribute) + information_schema | `\dt`, `\d cuentas` |
| SQL Server | sys.* + INFORMATION_SCHEMA + sp_* | `EXEC sp_help 'cuentas'` |
| Oracle | Vistas USER_* / ALL_* / DBA_* | `SELECT table_name FROM user_tables;` |

INFORMATION_SCHEMA es el estándar ANSI; Oracle usa su propio diccionario.

## Instancia base y esquema

| Concepto | Idea general | Ojo |
|---|---|---|
| Instancia | Proceso o servicio que administra recursos y conexiones | No siempre es una base |
| Base de datos | Contenedor lógico de objetos y datos | En algunos motores es el catálogo |
| Esquema | Namespace o propietario lógico | Oracle: ligado al usuario. MySQL: = base de datos. PostgreSQL: namespace dentro de una base |

- **MySQL**: instancia `mysqld`, InnoDB como motor transaccional, buffer pool, redo/undo, B-Tree.
- **PostgreSQL**: cluster con varias bases, esquemas como namespaces, shared buffers, WAL, **MVCC** y mucha extensibilidad.
- **SQL Server**: instancia con bases, data files, log files y **tempdb**.
- **Oracle**: instancia + base, SGA/PGA, datafiles, control files, redo, undo.

Hay que comparar términos antes de comparar comandos.

En nuestra VM de PostgreSQL (*Resumen parcial*, p. 5): la **instancia** es el proceso que escucha en el puerto 5432; las **bases** son `pruebas`, `sgbd_lab` y `sgbd_u5`; los **esquemas** (`public`, `sgbd_u5`) son carpetas dentro de cada base, y `SET search_path TO sgbd_u5;` le dice al motor en qué esquema buscar las tablas.

## Nube y rol del DBA

DBaaS (Azure SQL, Amazon RDS/Aurora, Cloud SQL): el proveedor maneja parte del backup, el patching, la disponibilidad y el monitoreo. El equipo sigue definiendo **modelo, consultas, índices, seguridad, costos y continuidad**.

DBA moderno: operación, rendimiento, seguridad, automatización (scripts, IaC, observabilidad) y costos. La competencia clave es **justificar decisiones técnicas según el contexto**.

## Lo que vimos en el laboratorio

U1 Act. 3 del grupo: PostgreSQL 18.4 instalado desde el repositorio de Ubuntu (no desde PGDG, porque daba la misma versión y sumaba mantenimiento), en una VM de VirtualBox con Ubuntu Server 26.04, accedida por Tailscale desde pgAdmin 4.

Conclusión del grupo: lo que más se entendió fue la **independencia física**. Se crearon base, esquema y tabla con SQL estándar sin decidir nunca archivo ni bloque. En el disco no aparecen esos nombres: hay directorios y archivos con **OID**, páginas de **8 kB**, segmentos de **WAL** y un proceso servidor del usuario `postgres`.
