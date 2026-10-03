# Backup, restore y recuperación a un punto en el tiempo
[← Índice Sistemas de Gestión de Bases de Datos](../INDICE.md)

> Tema 6 · Peso: 3/3 (estimado: clase, guía de mysqldump, instructivo de binlog y Fase 2 del laboratorio) · Fuente:
> *Clase 6 - Seguridad - Backup - Replica - HA 2026* (diap. 11–19), *Backup y Restore mysqldump*, *Instructivo binarylog*
> y la bitácora U6 Act. 1 del grupo, Fase 2 "El DBA borró producción" (PITR en PostgreSQL). Ampliada con el
> *Resumen parcial* del estudiante (pp. 24–27 y 33).

## Preguntas de recuperación

- ¿Qué diferencia hay entre backup, restore y recovery? :: Backup: generar una copia consistente. Restore: reconstruir archivos, objetos o datos desde la copia. Recovery: llevar la base al estado consistente requerido aplicando logs. "Tengo backup" no dice si puedo recuperar a tiempo y con los datos correctos. [→ Backup restore y recovery](#Backup%20restore%20y%20recovery)
- ¿Qué diferencia hay entre un backup lógico y uno físico? :: Lógico: sentencias SQL o contenido de los objetos; portable y legible, pero lento de restaurar en volumen alto (migraciones, laboratorio). Físico: copia de los archivos del motor; rápido para bases grandes, pero depende del motor, la versión y los archivos (DR). [→ Tipos de backup](#Tipos%20de%20backup)
- ¿Qué diferencia hay entre full, diferencial e incremental? :: Full: toda la base, recuperación simple pero costosa. Diferencial: cambios desde el último full. Incremental: cambios desde el último backup de cualquier tipo. Los dos últimos achican la ventana de copia y complican el recovery. [→ Tipos de backup](#Tipos%20de%20backup)
- ¿Cuál es la pregunta correcta al elegir un tipo de backup? :: No "cuál es mejor", sino cuál cumple el RPO/RTO con un costo razonable. [→ Tipos de backup](#Tipos%20de%20backup)
- ¿Dónde se ejecuta mysqldump y qué permisos necesita? :: En el sistema operativo, fuera del motor. Necesita como mínimo permisos de lectura sobre las bases y las opciones -u y -p. [→ mysqldump](#mysqldump)
- ¿Qué hacen --databases, --all-databases, --no-data y --no-create-info? :: --databases: respalda las bases nombradas (incluye el CREATE DATABASE). --all-databases: todas las de la instancia. --no-data: sólo la estructura. --no-create-info: sólo los datos. [→ mysqldump](#mysqldump)
- ¿Qué agregan --routines y --triggers? :: Incluyen en el dump los procedimientos y funciones y los triggers. [→ mysqldump](#mysqldump)
- ¿Para qué sirve --single-transaction? :: Para un backup en caliente de tablas InnoDB: hace el dump en un estado consistente sin bloquear las tablas. Si se ejecuta un DDL durante el dump, las consultas se bloquean para preservar la consistencia. [→ mysqldump](#mysqldump)
- ¿Qué hacen --flush-logs y --master-data=2 en mysqldump? :: --flush-logs cierra el binary log actual y abre uno nuevo, así los cambios posteriores al full quedan en un archivo aparte. --master-data=2 escribe en el dump, como comentario, la posición del binlog. [→ Binary log y PITR en MySQL](#Binary%20log%20y%20PITR%20en%20MySQL)
- ¿Cómo se restaura un dump de MySQL? :: Fuera del motor: mysql -u root -p base_destino < respaldo.sql. Si no se indica base, el dump tiene que traer el CREATE DATABASE. [→ mysqldump](#mysqldump)
- ¿Cómo se hace un backup lógico en PostgreSQL y cómo se restaura cada formato? :: pg_dump -U postgres -d base -f base.sql (SQL plano) o -Fc -f base.dump (custom). El SQL plano se restaura con psql -f; el custom con pg_restore -d. [→ pg_dump y restore en PostgreSQL](#pg_dump%20y%20restore%20en%20PostgreSQL)
- ¿Cuándo termina un restore según la cátedra? :: Cuando se verificó el estado recuperado: conteos, totales y registros clave antes y después. "Terminó sin error" no alcanza. [→ pg_dump y restore en PostgreSQL](#pg_dump%20y%20restore%20en%20PostgreSQL)
- ¿Qué limita el punto de recuperación si no hay logs? :: Sin logs, sólo se puede volver al último backup. [→ Logs y PITR](#Logs%20y%20PITR)
- Backup a las 10:00, DELETE accidental a las 10:47, detección a las 11:00. ¿A qué punto se recupera y por qué? :: A las 10:46:59. Restaurar a las 10:00 pierde las operaciones válidas; a las 11:00 conserva el error. [→ Logs y PITR](#Logs%20y%20PITR)
- ¿Qué se necesita para hacer PITR en PostgreSQL? :: Un backup base válido (pg_basebackup), el WAL archivado (wal_level = replica, archive_mode = on, archive_command) y un objetivo (recovery_target_time o un LSN). [→ Logs y PITR](#Logs%20y%20PITR)
- ¿Cómo se hace PITR en MySQL? :: Se restaura el full y después se aplica el binary log hasta el punto objetivo: mysqlbinlog --stop-datetime="…" mysql-bin.00000N | mysql -u root -p. [→ Binary log y PITR en MySQL](#Binary%20log%20y%20PITR%20en%20MySQL)
- ¿Cómo se activa el binary log en MySQL y cómo se lo ve? :: En mysqld.cnf: log_bin = /var/log/mysql/mysql-bin.log (y expire_logs_days para la retención), y reiniciar. Se ve con SHOW VARIABLES LIKE 'log_bin', SHOW BINARY LOGS y mysqlbinlog. [→ Binary log y PITR en MySQL](#Binary%20log%20y%20PITR%20en%20MySQL)
- ¿Qué precaución hay que tomar con el binlog antes de recuperar? :: Que no se siga escribiendo: copiarlo a otra carpeta y trabajar con la copia. [→ Binary log y PITR en MySQL](#Binary%20log%20y%20PITR%20en%20MySQL)
- ¿Qué son el RPO y el RTO? :: RPO (Recovery Point Objective): cuántos datos puede perder la organización. RTO (Recovery Time Objective): cuánto tiempo puede estar sin servicio. [→ RPO RTO y plan de recuperación](#RPO%20RTO%20y%20plan%20de%20recuperación)
- ¿Qué exige un RPO de 5 minutos con un RTO de 30? :: Logs frecuentes (archivados), un procedimiento probado y automatización suficiente. [→ RPO RTO y plan de recuperación](#RPO%20RTO%20y%20plan%20de%20recuperación)
- ¿Qué incluye el checklist mínimo de un plan de recuperación? :: Qué se copia, dónde queda, quién accede, cómo se cifra, cada cuánto se prueba y cómo se documenta. Un backup sin prueba de restore es una promesa no verificada. [→ RPO RTO y plan de recuperación](#RPO%20RTO%20y%20plan%20de%20recuperación)
- En el laboratorio, ¿de dónde sacaron la hora exacta del incidente? :: De la tabla auditoria_evento, que registró el INSERT del incidente con su timestamp. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
- ¿Para qué sirven recovery.signal, recovery_target_inclusive = off y recovery_target_action = 'promote'? :: recovery.signal: avisa al motor que arranque en modo recuperación. inclusive = off: frena justo antes de la marca de tiempo. promote: al llegar al objetivo, sale de recuperación y abre la base para escritura. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
- ¿Por qué hubo que hacer chmod 700 al directorio de datos antes de arrancar PostgreSQL? :: Porque PostgreSQL valida los permisos al iniciar y aborta si el directorio de datos es accesible para otros usuarios. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
- Full el domingo y la base falla el jueves. ¿Qué se restaura con diferenciales y qué con incrementales? :: Con diferenciales: domingo + miércoles. Con incrementales: domingo + lunes + martes + miércoles, en orden. [→ Tipos de backup](#Tipos%20de%20backup)
- ¿Qué hace `pg_basebackup`? :: Un backup físico de los archivos del cluster entero mientras sigue funcionando. Es la base para el PITR. [→ pg_dump y restore en PostgreSQL](#pg_dump%20y%20restore%20en%20PostgreSQL)
- ¿Qué es `recovery_target_xid` y cómo se encuentra el xid? :: Frena la recuperación en una transacción concreta (la culpable). El xid del DELETE se busca en el WAL con `pg_waldump`. [→ Logs y PITR](#Logs%20y%20PITR)
- ¿Qué es un LSN? :: Log Sequence Number: identifica cada posición del WAL. [→ Logs y PITR](#Logs%20y%20PITR)
- ¿Por qué conviene hacer el PITR en una instancia aparte? :: Porque el WAL y el backup son del cluster entero: recuperar sobre el principal haría retroceder también las otras bases. Se recupera en otro puerto y se copian las filas perdidas a producción. [→ Logs y PITR](#Logs%20y%20PITR)
- ¿Qué decide el RPO y qué el RTO? :: El RPO decide cada cuánto copiar (backups o logs); el RTO, qué tan rápido tiene que ser el procedimiento (¿alcanza un restore o hace falta una réplica lista?). [→ RPO RTO y plan de recuperación](#RPO%20RTO%20y%20plan%20de%20recuperación)
- Si el DELETE accidental lo hizo el DBA, ¿qué lo salva? :: El backup y los logs: el mínimo privilegio no protege del administrador. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)

## Cuestionario

1. Un operador borró por error los movimientos de una cuenta a las 10:47. Hay backup full de las 10:00 y logs archivados. ¿Qué se hace?
   - [x] Restaurar el full y aplicar los logs hasta las 10:46:59 (PITR)
   - [ ] Restaurar sólo el full de las 10:00
   - [ ] Promover la réplica
   - [ ] Restaurar hasta el último estado disponible
   > Sólo el full pierde las operaciones válidas; el último estado conserva el error; la réplica ya replicó el DELETE. [→ Logs y PITR](#Logs%20y%20PITR)
2. ¿Qué comando hace un backup en caliente y consistente de una base InnoDB?
   - [x] `mysqldump -u root -p --single-transaction rescate > rescate.sql`
   - [ ] `mysqldump -u root -p --no-data rescate > rescate.sql`
   - [ ] `mysql -u root -p rescate < rescate.sql`
   - [ ] `mysqldump -u root -p --lock-all-tables rescate > rescate.sql`
   > `--no-data` sólo copia la estructura; `mysql <` restaura; bloquear todas las tablas no es "en caliente". [→ mysqldump](#mysqldump)
3. Hay que respaldar la base con sus procedimientos y triggers. ¿Qué opciones se agregan a mysqldump?
   - [x] `--routines --triggers`
   - [ ] `--no-create-info`
   - [ ] `--all-databases`
   - [ ] `--flush-logs`
   > Sin `--routines`, los procedimientos y funciones no van al dump. [→ mysqldump](#mysqldump)
4. Se quiere copiar sólo la estructura de la base para armar un ambiente de prueba. ¿Qué opción corresponde?
   - [x] `--no-data`
   - [ ] `--no-create-info`
   - [ ] `--single-transaction`
   - [ ] `--master-data=2`
   > `--no-create-info` sería lo contrario: sólo los datos. [→ mysqldump](#mysqldump)
5. ¿Qué afirmación sobre el backup lógico es correcta?
   - [x] Es portable y legible, pero su restore es lento en volúmenes altos
   - [ ] Copia los archivos de datos del motor
   - [ ] Sólo sirve en la misma versión del motor
   - [ ] Es el más rápido para bases muy grandes
   > Las otras opciones describen el backup físico. [→ Tipos de backup](#Tipos%20de%20backup)
6. Un backup incremental contiene:
   - [x] Los cambios desde el último backup realizado, del tipo que sea
   - [ ] Los cambios desde el último full
   - [ ] La base completa
   - [ ] Sólo la estructura
   > Desde el último full es el diferencial. [→ Tipos de backup](#Tipos%20de%20backup)
7. El comando de restore terminó sin errores. ¿Qué falta?
   - [x] Verificar conteos, totales y registros clave contra el estado anterior
   - [ ] Nada: el restore terminó
   - [ ] Hacer un VACUUM
   - [ ] Borrar el backup
   > Restaurar no termina cuando el comando finaliza. [→ pg_dump y restore en PostgreSQL](#pg_dump%20y%20restore%20en%20PostgreSQL)
8. En PostgreSQL, un dump en formato custom (`-Fc`) se restaura con:
   - [x] `pg_restore`
   - [ ] `psql -f`
   - [ ] `mysql <`
   - [ ] `pg_basebackup`
   > `psql -f` restaura el SQL plano; `pg_basebackup` hace backups físicos. [→ pg_dump y restore en PostgreSQL](#pg_dump%20y%20restore%20en%20PostgreSQL)
9. La organización tolera perder como mucho 15 minutos de datos. ¿Qué métrica es esa?
   - [x] RPO
   - [ ] RTO
   - [ ] SLA de rendimiento
   - [ ] Lag de réplica
   > El RTO es cuánto tiempo puede estar sin servicio. [→ RPO RTO y plan de recuperación](#RPO%20RTO%20y%20plan%20de%20recuperación)
10. ¿Qué hace falta para PITR en PostgreSQL? (varias correctas)
    - [x] Un backup base válido
    - [x] El WAL archivado desde ese backup
    - [x] Un objetivo de recuperación (tiempo o LSN)
    - [ ] Una réplica sincrónica
    > Sin archivado de WAL, el punto de recuperación queda limitado al backup. [→ Logs y PITR](#Logs%20y%20PITR)
11. Después de restaurar el full en MySQL, ¿cómo se aplican los cambios posteriores?
    - [x] `mysqlbinlog mysql-bin.000002 | mysql -u root -p`
    - [ ] `mysqldump --flush-logs`
    - [ ] `SHOW BINARY LOGS`
    - [ ] `pg_restore mysql-bin.000002`
    > `SHOW BINARY LOGS` sólo los lista. Con `--stop-datetime` se frena antes del error. [→ Binary log y PITR en MySQL](#Binary%20log%20y%20PITR%20en%20MySQL)
12. En el PITR del laboratorio, ¿qué hace `recovery_target_inclusive = off`?
    - [x] Frena la reproducción del WAL justo antes de la marca de tiempo
    - [ ] Incluye la transacción del DELETE
    - [ ] Desactiva el archivado de WAL
    - [ ] Abre la base en sólo lectura para siempre
    > Así se excluye el borrado accidental. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
13. Hay que recuperar las filas borradas de una base sin hacer retroceder las otras bases del mismo cluster. ¿Qué conviene?
   - [ ] PITR sobre la instancia principal
   - [x] PITR en una instancia aparte (otro puerto) y copiar las filas perdidas a producción
   - [ ] Restaurar encima el último `pg_dump` de toda la instancia
   - [ ] Promover la réplica
   > El WAL y el backup físico son del cluster entero. La réplica ya tiene el DELETE. [→ Logs y PITR](#Logs%20y%20PITR)
14. ¿Con qué herramienta se busca en el WAL la transacción del DELETE accidental?
   - [ ] `pg_dump`
   - [ ] `pg_restore`
   - [x] `pg_waldump`
   - [ ] `mysqlbinlog`
   > pg_waldump muestra el contenido del WAL; de ahí sale el xid para `recovery_target_xid`. [→ Logs y PITR](#Logs%20y%20PITR)
15. Full el domingo e incrementales diarios. La base falla el jueves. ¿Qué hay que restaurar?
   - [ ] El full del domingo y el incremental del miércoles
   - [x] El full del domingo y los incrementales de lunes, martes y miércoles, en orden
   - [ ] Sólo el incremental del miércoles
   - [ ] El full del domingo y nada más
   > Cada incremental guarda lo cambiado desde el backup anterior: hacen falta todos. Con diferenciales alcanzaría el del miércoles. [→ Tipos de backup](#Tipos%20de%20backup)

## Backup restore y recovery

| Concepto | Qué es |
|---|---|
| Backup | Generar una copia consistente (lógica o física, full, diferencial o incremental) |
| Restore | Reconstruir archivos, objetos o datos desde la copia |
| Recovery | Llevar la base al estado consistente requerido aplicando logs o decisiones |

"Tengo backup" no responde si se puede recuperar el servicio a tiempo y con los datos correctos.

## Tipos de backup

| Mecanismo | Ventaja | Costo o límite | Uso típico |
|---|---|---|---|
| Lógico (SQL, export) | Portable, legible, por objeto | Restore lento en volumen alto | Migración, laboratorio |
| Físico (archivos del motor) | Rápido en bases grandes | Depende del motor, la versión y los archivos | DR, bases grandes |

| Alcance | Ventaja | Costo o límite | Uso típico |
|---|---|---|---|
| Full | Recuperación simple | Tiempo y espacio | Base de la cadena |
| Diferencial: lo cambiado desde el último **full** | Restore: full + **el último** diferencial | Crece día a día | Diario |
| Incremental: lo cambiado desde el último backup **de cualquier tipo** | Copias muy chicas y rápidas | Restore: full + **todos** los incrementales en orden | Varias veces al día |

Ejemplo (*Resumen parcial*, p. 25): full el domingo y falla el jueves. Con diferenciales se restaura domingo + miércoles; con incrementales, domingo + lunes + martes + miércoles.

La pregunta no es cuál es mejor, sino **cuál cumple el RPO/RTO con un costo razonable**.

## mysqldump

Se ejecuta **en el sistema operativo**, no dentro del motor. Requiere como mínimo lectura sobre las bases y `-u` / `-p`.

```bash
mysqldump -u root -p rescate cliente cuenta > tablas.sql        # tablas
mysqldump -u root -p --databases rescate > rescate.sql          # base (con CREATE DATABASE)
mysqldump -u root -p --all-databases > todo.sql                 # toda la instancia
mysqldump -u root -p --no-data rescate > estructura.sql         # sólo estructura
mysqldump -u root -p --no-create-info rescate > datos.sql       # sólo datos
mysqldump -u root -p --routines --triggers rescate > r.sql      # con rutinas y triggers
mysqldump -h servidor -P 3306 -u usr -p rescate > remoto.sql    # remoto (--host, --port)
mysqldump -u root -p --single-transaction rescate > r.sql       # en caliente (InnoDB)

mysql -u root -p -e "CREATE DATABASE rescate_restore"
mysql -u root -p rescate_restore < rescate.sql                  # restore
```

- **En caliente**: el dump de InnoDB normalmente bloquea las tablas. `--single-transaction` (y `--skip-lock-tables`) lo evita; `--single-transaction` además mantiene un estado consistente. Si hay un DDL durante el dump, las consultas se bloquean.
- El dump trae `DROP TABLE IF EXISTS`, `CREATE TABLE`, `LOCK TABLES … WRITE`, los INSERT y `UNLOCK TABLES`.
- Registrar: qué se copió, cuándo, dónde quedó y cómo se va a verificar.

## pg_dump y restore en PostgreSQL

```bash
pg_dump -U postgres -d rescate -f rescate.sql          # SQL plano
pg_dump -U postgres -Fc -d rescate -f rescate.dump     # formato custom

createdb -U postgres rescate_restore
psql -U postgres -d rescate_restore -f rescate.sql     # restaurar SQL plano
pg_restore -U postgres -d rescate_restore rescate.dump # restaurar custom
```

**Backup físico**: `pg_basebackup` copia los archivos del cluster entero mientras sigue funcionando. Es la base para el PITR.

**Verificar**: `SELECT COUNT(*) …`, totales y registros clave antes y después. "El restore terminó sin error" no alcanza.

## Logs y PITR

Sin logs suficientes, el punto de recuperación queda limitado al último backup.
- **MySQL**: el **binary log** permite reproducir o frenar cambios por posición o tiempo.
- **PostgreSQL**: el **WAL** permite recuperación física y PITR con backup base + archivado.

**Recuperación a un punto en el tiempo**:

| Hora | Evento |
|---|---|
| 10:00 | Backup full |
| 10:30 | Operaciones válidas |
| 10:47 | DELETE accidental |
| 11:00 | Detección |

- Restaurar a 10:00 → **pierde** operaciones válidas.
- Restaurar a 11:00 → **conserva** el error.
- Recuperar a **10:46:59** → conserva lo válido y evita el incidente.

PostgreSQL: `SHOW wal_level;`, `SELECT pg_current_wal_lsn();`, `SELECT pg_walfile_name(pg_current_wal_lsn());`. PITR requiere un backup base válido, WAL archivado y `recovery_target_time` (o un LSN objetivo).

Qué hace falta, con más detalle (*Resumen parcial*, p. 26): un **backup base físico** + **todos los logs** desde ese backup hasta el punto objetivo, **archivados** (copiados a un lugar seguro a medida que se generan). En PostgreSQL, `archive_mode = on` + `archive_command` guardan cada archivo de WAL. El objetivo se fija con `recovery_target_time` o con **`recovery_target_xid`**, el número de la transacción culpable, que se busca en el WAL con **`pg_waldump`**. Cada posición del WAL se identifica con un **LSN** (*Log Sequence Number*).

Buena práctica: hacer el PITR en una **instancia aparte** (otro puerto), copiar de ahí las filas perdidas y reinsertarlas en producción, sin volver atrás todo el servidor. El WAL y el backup son **del cluster entero**: recuperar sobre el principal haría retroceder también las otras bases.

El desafío no es "usar PITR": es **identificar el punto objetivo y demostrar por qué es el correcto**.

## Binary log y PITR en MySQL

Activación en `/etc/mysql/mysql.conf.d/mysqld.cnf`:

```
log_bin = /var/log/mysql/mysql-bin.log
expire_logs_days = 10
```

y `sudo service mysql restart`.

```sql
SHOW VARIABLES LIKE 'log_bin';
SHOW BINARY LOGS;
SHOW MASTER STATUS;
```

Procedimiento del instructivo:
1. Full con un binlog nuevo: `mysqldump -u root -p --single-transaction --flush-logs --master-data=2 sakila > full_backup.sql`.
   - `--flush-logs`: cierra el binlog y abre `mysql-bin.000002`, donde van los cambios posteriores.
   - `--master-data=2`: anota en el dump la posición del binlog.
   - `--delete-master-logs`: borra los binlogs previos, ya cubiertos por el full.
2. Desastre: `mysqladmin -u root -p drop sakila`. Antes de tocar nada, **copiar el binlog** para que no se siga escribiendo.
3. Restaurar: crear `sakila` vacía, `mysql -u root -p sakila < full_backup.sql`.
4. Aplicar los cambios: `mysqlbinlog /var/log/mysql/mysql-bin.000002 | mysql -u root -p`. Con `--stop-datetime="2026-09-22 10:46:59"` se frena antes del error.

## RPO RTO y plan de recuperación

- **RPO** (Recovery Point Objective): ¿cuántos datos puede perder la organización, **medido en tiempo**? RPO 15 min = como mucho se pierden los últimos 15 minutos. Define **cada cuánto** copiar (backups o logs).
- **RTO** (Recovery Time Objective): ¿cuánto tiempo puede estar sin servicio? RTO 30 min = en media hora tiene que volver a andar. Define **qué tan rápido** tiene que ser el procedimiento: ¿alcanza con restaurar o hace falta una réplica lista? (*Resumen parcial*, p. 26)

RPO de 5 minutos + RTO de 30 → logs frecuentes, procedimiento probado y automatización.

**Plan de recuperación**: inventario → política → ejecución → verificación → restauración → validación. Checklist: qué se copia, dónde queda, quién accede, cómo se cifra, cada cuánto se prueba y cómo se documenta. **Un backup sin prueba de restore es una promesa no verificada.**

## Lo que hicimos en el laboratorio

U6 Act. 1, Fase 2 "El DBA borró producción", PostgreSQL 16:

1. **Estado inicial**: 4 clientes, 4 cuentas, 5 movimientos, 73000 de importe.
2. **Archivado de WAL** en `postgresql.conf`: `wal_level = replica`, `archive_mode = on`, `archive_command = 'cp %p /tmp/wal_archive/%f'`, y reinicio.
3. **Backup base físico**: `pg_basebackup -D /tmp/backup_base -Fp -Xs -P`.
4. **Operaciones válidas**: movimientos 1006 y 1007.
5. **Incidente**: `DELETE FROM movimiento WHERE cuenta_id = 101` + un registro en `auditoria_evento`.
6. **Punto objetivo**: el timestamp del incidente en `auditoria_evento` (`2026-09-23 17:40:40.519895+00`).
7. **Restore**: detener el servicio, vaciar `/var/lib/postgresql/16/main/`, copiar el backup base y `chown postgres`.
8. **Recovery**: `touch recovery.signal`, `restore_command = 'cp /tmp/wal_archive/%f %p'`, `recovery_target_time = '<marca>'`, `recovery_target_inclusive = off` (frena antes), `recovery_target_action = 'promote'` (abre la base al llegar). `chmod 700` al directorio de datos (si no, PostgreSQL no arranca) e iniciar.
9. **Validación**: los 5 movimientos originales + 1006 y 1007, sin el DELETE.

Se descartó volver sólo al backup (perdía 1006 y 1007) y al último estado (conservaba el error).

> El *Resumen parcial* (p. 33) cuenta esta fase distinto: busca el **xid** del DELETE con `pg_waldump`, levanta el backup
> en una **instancia aparte (puerto 5433)** con `recovery_target_xid` y `recovery_target_inclusive = off`, y copia de ahí
> las filas perdidas a producción. La bitácora de arriba restaura sobre la instancia principal con `recovery_target_time`.
> **Verificar cuál es la versión entregada** (¿la reentrega?) antes de citarla en el parcial.

Conclusión clave (*Resumen parcial*, p. 33): el incidente lo ejecutó el DBA (`postgres`), así que **el mínimo privilegio no protege del administrador**: para eso están el backup y los logs.
