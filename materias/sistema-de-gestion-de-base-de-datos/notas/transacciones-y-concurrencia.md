# Transacciones, concurrencia y bloqueos
[← Índice Sistemas de Gestión de Bases de Datos](../INDICE.md)

> Tema 5 · Peso: 3/3 (estimado: el cronograma lo nombra "Transacciones y Bloqueos" y la Actividad 2 de U5 son tres
> experimentos) · Fuente: *Clase 5 - Conectividad - Transacciones - Concurrencia 2026* (diap. 14–37) y la bitácora
> U5 Act. 2 del grupo ("Dos usuarios, un mismo dato", PostgreSQL 18.6).

## Preguntas de recuperación

- ¿Qué hacen autocommit, BEGIN, COMMIT, ROLLBACK y SAVEPOINT? :: Autocommit: cada sentencia se confirma sola. BEGIN / START TRANSACTION: abre un bloque explícito. COMMIT: confirma. ROLLBACK: revierte lo no confirmado. SAVEPOINT: permite volver a un punto intermedio sin descartar todo. [→ Transacciones](#Transacciones)
- ¿Qué mecanismo concreto sostiene cada letra de ACID? :: A: COMMIT/ROLLBACK. C: constraints y reglas. I: qué ve cada sesión (aislamiento). D: lo confirmado sobrevive (log). [→ Transacciones](#Transacciones)
- ¿Qué es un schedule y cuándo es serializable? :: El orden real en que el motor intercala las operaciones de transacciones concurrentes. Es serializable si su efecto equivale a algún orden serial. [→ Schedules y anomalías](#Schedules%20y%20anomalías)
- Definí dirty read, non-repeatable read y phantom. :: Dirty read: leer datos no confirmados. Non-repeatable read: la misma fila cambia entre dos lecturas. Phantom: cambia el conjunto de filas que cumple la condición. [→ Schedules y anomalías](#Schedules%20y%20anomalías)
- ¿Qué es un lost update? :: Un cambio que termina sobrescrito por otra transacción concurrente, como si no hubiera existido. [→ Schedules y anomalías](#Schedules%20y%20anomalías)
- Nombrá los cuatro niveles de aislamiento de menor a mayor. :: READ UNCOMMITTED, READ COMMITTED (cada sentencia ve un snapshot confirmado), REPEATABLE READ (lecturas consistentes en toda la transacción), SERIALIZABLE (equivale a una ejecución serial). [→ Niveles de aislamiento](#Niveles%20de%20aislamiento)
- ¿Qué nivel tiene por defecto PostgreSQL y cuál MySQL/InnoDB? :: PostgreSQL: READ COMMITTED. MySQL/InnoDB: REPEATABLE READ. [→ Niveles de aislamiento](#Niveles%20de%20aislamiento)
- ¿Cómo se consulta el aislamiento real en cada motor? :: PostgreSQL: SHOW transaction_isolation. MySQL: SELECT @@transaction_isolation. [→ Niveles de aislamiento](#Niveles%20de%20aislamiento)
- A lee, B modifica y confirma, A vuelve a leer en la misma transacción. ¿Qué ve A en PostgreSQL y qué en MySQL con los valores por defecto? :: PostgreSQL (READ COMMITTED): el valor nuevo, porque cada sentencia toma un snapshot. MySQL (REPEATABLE READ): el valor viejo, porque reutiliza el snapshot de la primera lectura. [→ Niveles de aislamiento](#Niveles%20de%20aislamiento)
- ¿Qué es MVCC y qué no elimina? :: Control de concurrencia multiversión: guarda versiones para que las lecturas sean consistentes sin bloquear a los escritores. No elimina los locks de escritura: dos UPDATE sobre la misma fila igual esperan. [→ MVCC y locks](#MVCC%20y%20locks)
- ¿Qué combinaciones de lock compartido (S) y exclusivo (X) son compatibles? :: Sólo S + S. S + X, X + S y X + X obligan a esperar. [→ MVCC y locks](#MVCC%20y%20locks)
- ¿Qué cambia según la granularidad del lock? :: Fila: conflicto fino, más concurrencia. Rango o gap: protege un conjunto y puede afectar inserciones. Tabla: impacto amplio. Además, una transacción larga retiene los locks y agranda la ventana de conflicto. [→ MVCC y locks](#MVCC%20y%20locks)
- ¿Para qué sirve Two-Phase Locking? :: Organiza la adquisición y la liberación de locks (primero se adquieren, después se liberan) para garantizar schedules serializables. Tomar y soltar locks sin reglas no alcanza. [→ MVCC y locks](#MVCC%20y%20locks)
- Una consulta no termina. ¿Cuáles son las dos hipótesis y cómo se distinguen? :: Plan lento (demasiado trabajo) o espera por un lock. Se distinguen con evidencia: plan, sesiones, locks y wait event. [→ Diagnosticar esperas](#Diagnosticar%20esperas)
- ¿Con qué se diagnostican los locks en PostgreSQL? :: pg_stat_activity (state, wait_event_type, wait_event, query), pg_locks (granted) y pg_blocking_pids(pid). [→ Diagnosticar esperas](#Diagnosticar%20esperas)
- ¿Con qué se diagnostican los locks en MySQL/InnoDB? :: SHOW PROCESSLIST, performance_schema.data_locks, performance_schema.data_lock_waits y SHOW ENGINE INNODB STATUS. [→ Diagnosticar esperas](#Diagnosticar%20esperas)
- En pg_stat_activity, ¿cómo se reconoce a la sesión bloqueada y a la bloqueante? :: La bloqueada está active con wait_event_type = Lock y tiene un PID en blocking_pids. La bloqueante es ese PID, que suele estar idle in transaction (terminó su sentencia pero no cerró la transacción). [→ Lo que observamos en el laboratorio](#Lo%20que%20observamos%20en%20el%20laboratorio)
- En el experimento 1, ¿qué lock esperaba la sesión B según pg_locks? :: Un ShareLock sobre el transactionid de A, con granted = false. No esperaba la tabla: así implementa PostgreSQL los locks de fila. [→ Lo que observamos en el laboratorio](#Lo%20que%20observamos%20en%20el%20laboratorio)
- ¿Qué es un deadlock y en qué se diferencia de una espera común? :: Dos transacciones esperando cada una lo que tiene la otra (A tiene la cuenta 1 y pide la 2; B tiene la 2 y pide la 1). Una espera se resuelve sola con COMMIT o ROLLBACK; un deadlock necesita que el motor lo detecte y aborte una transacción. [→ Deadlocks](#Deadlocks)
- En PostgreSQL, ¿qué transacción aborta el detector de deadlocks? :: La que encuentra el ciclo al vencer su deadlock_timeout (1 s): en la práctica, la que cerró el ciclo. No es la más barata ni la menos importante. [→ Lo que observamos en el laboratorio](#Lo%20que%20observamos%20en%20el%20laboratorio)
- ¿Cómo se previenen y manejan los deadlocks? :: Acceder a los recursos siempre en el mismo orden, transacciones cortas, acceso selectivo (índices y predicados adecuados), reintento en la aplicación y diagnóstico con evidencia antes de rediseñar. [→ Deadlocks](#Deadlocks)
- ¿Qué parámetros evitan que una transacción olvidada bloquee indefinidamente? :: lock_timeout y statement_timeout: el motor corta la espera o la sentencia en lugar de dejar el recurso tomado. [→ Lo que observamos en el laboratorio](#Lo%20que%20observamos%20en%20el%20laboratorio)

## Cuestionario

1. Sesión A: `BEGIN; UPDATE cuenta SET saldo = saldo - 100 WHERE cuenta_id = 1;` sin confirmar. Sesión B: `BEGIN; UPDATE cuenta SET saldo = saldo + 50 WHERE cuenta_id = 1;`. ¿Qué pasa con B?
   - [x] Queda esperando hasta que A haga COMMIT o ROLLBACK
   - [ ] Recibe un error de deadlock
   - [ ] Se ejecuta y sobrescribe el cambio de A
   - [ ] Lee el saldo modificado por A y lo actualiza
   > Dos escrituras sobre la misma fila: la segunda espera el lock. No es deadlock porque A no espera nada. [→ MVCC y locks](#MVCC%20y%20locks)
2. En pg_stat_activity, una sesión figura `active` con `wait_event_type = Lock`. ¿Qué significa?
   - [x] Está esperando un lock; no está lenta
   - [ ] Está ejecutando un plan costoso
   - [ ] Está inactiva
   - [ ] Está en deadlock
   > Una consulta lenta estaría activa sin evento de espera. [→ Lo que observamos en el laboratorio](#Lo%20que%20observamos%20en%20el%20laboratorio)
3. La sesión bloqueante aparece como `idle in transaction`. ¿Qué indica?
   - [x] Terminó su sentencia pero dejó la transacción abierta, reteniendo los locks
   - [ ] Que está ejecutando el UPDATE
   - [ ] Que su transacción fue abortada
   - [ ] Que está desconectada
   > `idle in transaction (aborted)` sería la abortada, que espera un ROLLBACK. [→ Lo que observamos en el laboratorio](#Lo%20que%20observamos%20en%20el%20laboratorio)
4. A lee el saldo (15000). B suma 1000 y hace COMMIT. A vuelve a leer en la misma transacción, en PostgreSQL con el aislamiento por defecto. ¿Qué ve?
   - [x] 16000, porque READ COMMITTED toma un snapshot por sentencia
   - [ ] 15000, porque REPEATABLE READ conserva el snapshot
   - [ ] Un error de serialización
   - [ ] Se queda esperando el lock de B
   > Fue el resultado del experimento 2 del grupo. En MySQL (REPEATABLE READ) vería 15000. [→ Niveles de aislamiento](#Niveles%20de%20aislamiento)
5. La misma secuencia en MySQL/InnoDB con el nivel por defecto. ¿Qué ve A en la segunda lectura?
   - [x] El valor viejo, porque reutiliza el snapshot de la primera lectura
   - [ ] El valor nuevo
   - [ ] Un dirty read
   - [ ] Un error
   > El default de InnoDB es REPEATABLE READ. [→ Niveles de aislamiento](#Niveles%20de%20aislamiento)
6. ¿Cómo se llama leer datos que otra transacción todavía no confirmó?
   - [x] Dirty read
   - [ ] Non-repeatable read
   - [ ] Phantom
   - [ ] Lost update
   > Non-repeatable: la misma fila cambia entre lecturas. Phantom: cambia el conjunto de filas. [→ Schedules y anomalías](#Schedules%20y%20anomalías)
7. Una transacción cuenta las filas con `estado = 'pendiente'` dos veces y la segunda da más porque otra insertó una. ¿Qué anomalía es?
   - [x] Phantom
   - [ ] Dirty read
   - [ ] Non-repeatable read
   - [ ] Deadlock
   > Cambió el conjunto de filas que cumple la condición, no una fila existente. [→ Schedules y anomalías](#Schedules%20y%20anomalías)
8. ¿Qué afirmación sobre MVCC es correcta?
   - [x] Permite leer versiones consistentes sin bloquear a los escritores, pero dos escrituras sobre la misma fila igual esperan
   - [ ] Elimina la necesidad de locks
   - [ ] Sólo existe en MySQL
   - [ ] Garantiza SERIALIZABLE en cualquier nivel
   > MVCC reduce conflictos de lectura; no elimina los locks de escritura. [→ MVCC y locks](#MVCC%20y%20locks)
9. Una transacción tiene un lock compartido (S) sobre una fila. ¿Qué pedido se concede sin esperar?
   - [x] Otro lock compartido (S)
   - [ ] Un lock exclusivo (X)
   - [ ] Cualquiera de los dos
   - [ ] Ninguno
   > Sólo S + S es compatible. [→ MVCC y locks](#MVCC%20y%20locks)
10. A bloquea la cuenta 1 y pide la 2; B bloquea la 2 y pide la 1. ¿Qué hace el motor?
    - [x] Detecta el ciclo y aborta una de las dos transacciones
    - [ ] Las deja esperando hasta que alguien haga COMMIT
    - [ ] Aborta las dos
    - [ ] Ejecuta las dos en serie
    > En el laboratorio, B recibió `ERROR: deadlock detected` (SQL state 40P01) y el UPDATE de A se completó solo. [→ Lo que observamos en el laboratorio](#Lo%20que%20observamos%20en%20el%20laboratorio)
11. ¿Qué medida previene los deadlocks de una transferencia entre dos cuentas?
    - [x] Bloquear las cuentas siempre en el mismo orden, por ejemplo de menor a mayor id
    - [ ] Bloquear primero la cuenta de origen y después la de destino
    - [ ] Subir el aislamiento a READ UNCOMMITTED
    - [ ] Agregar más conexiones al pool
    > Con origen y destino, el orden depende de lo que carga el usuario: dos transferencias opuestas forman el ciclo. [→ Deadlocks](#Deadlocks)
12. ¿Qué tiene que hacer la aplicación cuando el motor aborta su transacción por deadlock?
    - [x] Estar preparada para reintentarla
    - [ ] Hacer COMMIT igual
    - [ ] Matar la sesión de la otra transacción
    - [ ] Nada: el motor la reintenta sola
    > La víctima queda abortada y sólo acepta un ROLLBACK; reintentar es responsabilidad de la aplicación. [→ Deadlocks](#Deadlocks)
13. ¿Qué herramientas de MySQL muestran los locks en espera? (varias correctas)
    - [x] performance_schema.data_lock_waits
    - [x] SHOW ENGINE INNODB STATUS
    - [x] SHOW PROCESSLIST
    - [ ] pg_blocking_pids
    > pg_blocking_pids es de PostgreSQL. [→ Diagnosticar esperas](#Diagnosticar%20esperas)

## Transacciones

| Comando | Qué hace |
|---|---|
| Autocommit | Cada sentencia se confirma sola (según cliente o configuración) |
| BEGIN / START TRANSACTION | Abre un bloque explícito |
| COMMIT | Confirma los cambios |
| ROLLBACK | Revierte lo no confirmado |
| SAVEPOINT | Vuelve a un punto intermedio sin descartar todo |

En el laboratorio se usan transacciones explícitas para que la espera y el bloqueo sean observables.

**ACID observable**: A = COMMIT/ROLLBACK · C = constraints y reglas · I = qué ve cada sesión · D = lo confirmado sobrevive. **En U5 el foco está en la I.**

## Schedules y anomalías

- **Ejecución serial**: T1 completa y después T2. Fácil de razonar, desaprovecha concurrencia.
- **Ejecución intercalada**: las lecturas y escrituras de T1 y T2 se mezclan. Es lo habitual.
- **Serializable**: el efecto equivale a algún orden serial, aunque las operaciones se hayan intercalado.

| Anomalía | Qué pasa |
|---|---|
| Dirty read | Leer datos no confirmados |
| Non-repeatable read | La misma fila cambia entre dos lecturas |
| Phantom | Cambia el conjunto de filas |
| Lost update | Un cambio queda sobrescrito |
| Serialization anomaly | El resultado no equivale a ningún orden serial |

No todos los motores implementan los fenómenos de la misma manera.

## Niveles de aislamiento

| Nivel | Garantía |
|---|---|
| READ UNCOMMITTED | Mínima |
| READ COMMITTED | Cada **sentencia** ve un snapshot confirmado |
| REPEATABLE READ | Lecturas consistentes en toda la **transacción** |
| SERIALIZABLE | Equivale a una ejecución serial |

- **PostgreSQL 18**: default READ COMMITTED (`SHOW transaction_isolation;`).
- **MySQL 9.7 / InnoDB**: default REPEATABLE READ (`SELECT @@transaction_isolation;`).

**Experimento 2**: A hace BEGIN y lee; B actualiza y confirma; A vuelve a leer.
- PostgreSQL (READ COMMITTED): la segunda lectura **ve el cambio**.
- MySQL (REPEATABLE READ): reutiliza el snapshot de la primera lectura y **no lo ve**.

El objetivo no es memorizar defaults: es consultar el aislamiento real y relacionarlo con lo observado.

## MVCC y locks

- **MVCC**: mantiene versiones para lecturas consistentes mientras hay cambios. Muchas lecturas no bloquean a los escritores.
- **Locks**: siguen protegiendo las modificaciones. Dos UPDATE sobre la misma fila esperan.

| | S | X |
|---|---|---|
| **S** | ✓ | ✕ |
| **X** | ✕ | ✕ |

Es un modelo conceptual: MySQL y PostgreSQL tienen más modos.

**Granularidad**: fila (fino, más concurrencia) · rango o gap (protege un conjunto, puede afectar inserciones) · tabla (amplio). **Duración**: una transacción larga retiene recursos. Una consulta eficiente también reduce las filas afectadas.

**Two-Phase Locking (2PL)**: tomar y soltar locks sin reglas igual permite schedules incorrectos. 2PL ordena la adquisición y la liberación para obtener serializabilidad. Los motores reales combinan MVCC, locks y reglas internas; 2PL es el modelo conceptual.

## Diagnosticar esperas

Una consulta que no termina: **plan lento** o **espera por lock**. La percepción del usuario es la misma; las causas y soluciones, no.

| | PostgreSQL | MySQL / InnoDB |
|---|---|---|
| Sesiones | `pg_stat_activity` | `SHOW PROCESSLIST` |
| Locks | `pg_locks` | `performance_schema.data_locks` |
| Quién bloquea | `pg_blocking_pids(pid)` | `performance_schema.data_lock_waits` |
| Detalle | wait_event_type, wait_event | `SHOW ENGINE INNODB STATUS` |

Preguntas: ¿qué proceso espera? ¿quién lo bloquea? ¿qué consulta está involucrada? Después hay que decidir: **esperar, cancelar, reintentar o rediseñar**.

## Deadlocks

A bloquea la cuenta 1 y pide la 2; B bloquea la 2 y pide la 1. Cada una espera lo que tiene la otra. **El motor detecta el ciclo y aborta una.** Una espera se resuelve con COMMIT o ROLLBACK; un deadlock necesita detección y ruptura.

Prevención y manejo:
- **Orden consistente** de acceso a los recursos.
- **Transacciones cortas**.
- **Acceso selectivo**: índices y predicados adecuados.
- **Reintento** en la aplicación.
- **Diagnóstico**: registrar la evidencia antes de cambiar el diseño.

No se resuelven "matando sesiones".

## Lo que observamos en el laboratorio

U5 Act. 2 del grupo: PostgreSQL 18.6, tabla `cuenta`, tres puestos (Sesión A, Sesión B y Diagnóstico) desde PC distintas, `transaction_isolation = read committed`, `deadlock_timeout = 1s`.

**Experimento 1, espera por lock**: B quedó colgada más de 1 minuto 26 segundos sin error.

```
pid   | usename  | state               | wait_event_type | wait_event    | blocking_pids
25240 | alumno03 | idle in transaction | Client          | ClientRead    | {}
25246 | alumno05 | active              | Lock            | transactionid | {25240}
```

- B (25246) **no está lenta, está esperando**: `active` + `Lock`.
- A (25240) no hace nada: `idle in transaction`, sólo retiene.
- En `pg_locks`, la única fila con `granted = false` es un **ShareLock sobre el transactionid** de A: B no espera la tabla sino la transacción. El lock de fila se guarda en la propia fila.
- Cuando A hizo ROLLBACK, el UPDATE de B se completó solo.

**Experimento 2, aislamiento**: A leyó 15000; B sumó 1000 y confirmó; A volvió a leer **16000** en la misma transacción (READ COMMITTED).

**Experimento 3, deadlock**: A tomó la cuenta 1 y B la 2; A pidió la 2 y esperó; B pidió la 1 y recibió `ERROR: deadlock detected` (SQL state **40P01**).
- Víctima: **B, la que cerró el ciclo**. Cada sesión que espera arranca un reloj de `deadlock_timeout`; al vencer el de A, B todavía no esperaba y no había ciclo. Al vencer el de B, el ciclo estaba cerrado: el que lo encuentra se sacrifica.
- Después: A `idle in transaction` (con su UPDATE hecho); B `idle in transaction (aborted)`, sin locks en `pg_locks`, aceptando sólo ROLLBACK.

**Medidas preventivas propuestas**: bloquear siempre en el mismo orden (de menor a mayor id) y configurar `lock_timeout` o `statement_timeout`.
