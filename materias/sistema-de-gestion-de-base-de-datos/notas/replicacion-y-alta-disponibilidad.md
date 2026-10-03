# Replicación y alta disponibilidad
[← Índice Sistemas de Gestión de Bases de Datos](../INDICE.md)

> Tema 6 · Peso: 2/3 (estimado) · Fuente: *Clase 6 - Seguridad - Backup - Replica - HA 2026* (diap. 20–29) y la
> bitácora U6 Act. 1 del grupo, Fase 3 "Diseñar para sobrevivir". Ampliada con el *Resumen parcial* del estudiante (pp. 27–28 y 33).

## Preguntas de recuperación

- ¿Por qué la alta disponibilidad no reemplaza al backup? :: Porque resuelven problemas distintos: la réplica replica también los errores. Un DELETE accidental llega a la réplica; sólo el backup con logs permite volver antes del error. [→ HA no es backup](#HA%20no%20es%20backup)
- ¿Qué resuelve mejor una réplica que un backup? :: La caída del nodo principal o la destrucción de un disco: con failover el corte es corto. El backup recupera, pero puede tardar. [→ HA no es backup](#HA%20no%20es%20backup)
- ¿Qué hacen el primario y la réplica, y qué es el lag? :: El primario recibe las escrituras y publica los cambios. La réplica los recibe y puede servir lecturas o esperar un failover. El lag es la distancia temporal entre los dos. [→ Replicación](#Replicación)
- ¿Qué diferencia hay entre réplica sincrónica y asincrónica? :: Sincrónica: menor pérdida potencial, mayor acoplamiento (el primario espera a la réplica). Asincrónica: menor impacto en el primario, posible pérdida si hay lag. [→ Replicación](#Replicación)
- ¿Cuáles son los pasos de un failover? :: Detectar (¿falla real o red parcial?), promover (qué réplica asume las escrituras), reconectar (cómo llegan las apps al nuevo nodo) y reintegrar (qué pasa con el nodo anterior). [→ Failover](#Failover)
- ¿Qué es el split brain? :: Dos nodos que se creen primario a la vez (por ejemplo, tras un corte de red) y aceptan escrituras distintas, lo que corrompe los datos. [→ Failover](#Failover)
- ¿Qué riesgos tiene un failover además del split brain? :: Pérdida de datos por lag, y un failover que funciona técnicamente pero no operacionalmente (las aplicaciones no llegan al nuevo nodo). [→ Failover](#Failover)
- ¿Qué estrategia corresponde a cada escenario de criticidad? :: Bajo impacto (RPO 24 h, RTO 8 h): backup diario + restore probado. Operación interna (4 h, 2 h): full + lógicos frecuentes + procedimiento. E-commerce (15 min, 30 min): logs archivados + réplica asincrónica. Crítico (≈0, muy bajo): réplica o cluster + DR + pruebas periódicas. [→ Diseño por criticidad](#Diseño%20por%20criticidad)
- ¿Qué justifica más complejidad en la estrategia de continuidad? :: La criticidad, el costo de la caída y la capacidad de operarla. No todos los datos justifican lo mismo. [→ Diseño por criticidad](#Diseño%20por%20criticidad)
- ¿Qué campos se miran en SHOW REPLICA STATUS de MySQL? :: Replica_IO_Running, Replica_SQL_Running, Seconds_Behind_Source y Source_Host. [→ Observar la réplica](#Observar%20la%20réplica)
- ¿Cómo se sabe en PostgreSQL si un nodo es réplica y cómo va la replicación? :: SELECT pg_is_in_recovery() (true en la réplica). En el primario, pg_stat_replication (state, sync_state, sent_lsn, replay_lsn); en la réplica, pg_last_wal_replay_lsn(). [→ Observar la réplica](#Observar%20la%20réplica)
- ¿Qué herramienta corresponde a cada incidente: permiso incorrecto, pérdida completa, DELETE accidental, caída del primario? :: GRANT/REVOKE (probando permitido y rechazado); backup + restore; backup + logs + PITR; réplica + failover. [→ Problema y herramienta](#Problema%20y%20herramienta)
- En la Fase 3, ¿por qué el grupo eligió failover manual? :: Porque con dos nodos y sin un tercer árbitro, una conmutación automática ante un corte de red puede producir split brain. La promoción la valida y ejecuta un DBA. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
- ¿Qué envía la replicación física en PostgreSQL y qué en MySQL? :: PostgreSQL envía el WAL (streaming replication); MySQL, el binlog. [→ Replicación](#Replicación)
- En la réplica sincrónica, ¿qué espera el COMMIT y qué costo tiene? :: Espera que la réplica confirme que recibió el cambio: RPO ≈ 0, pero cada escritura es más lenta y, si la réplica falla, puede frenar al primario. [→ Replicación](#Replicación)

## Cuestionario

1. Alguien ejecuta un DELETE accidental en el primario, que tiene una réplica asincrónica al día. ¿Qué pasa?
   - [x] La réplica también borra los datos: hace falta backup + logs para recuperar
   - [ ] La réplica conserva los datos y se promueve
   - [ ] El failover deshace el DELETE
   - [ ] La réplica rechaza el cambio por ser un error
   > Replicar un error no crea un backup. [→ HA no es backup](#HA%20no%20es%20backup)
2. El servidor primario se apaga por una falla de hardware. ¿Qué herramienta restablece el servicio más rápido?
   - [x] Promover una réplica (failover)
   - [ ] Restaurar el último backup full
   - [ ] Aplicar PITR
   - [ ] REVOKE de los permisos del primario
   > El backup recupera, pero puede tardar más. [→ HA no es backup](#HA%20no%20es%20backup)
3. ¿Qué caracteriza a una réplica asincrónica?
   - [x] Menor impacto en el primario, con posible pérdida de datos si hay lag
   - [ ] Pérdida cero garantizada
   - [ ] El primario espera la confirmación de la réplica en cada COMMIT
   - [ ] No puede servir lecturas
   > La sincrónica da menor pérdida a cambio de más acoplamiento. [→ Replicación](#Replicación)
4. Tras un corte de red, los dos nodos se promueven como primarios y aceptan escrituras. ¿Cómo se llama?
   - [x] Split brain
   - [ ] Deadlock
   - [ ] Lag
   - [ ] Phantom
   > Es el riesgo central del failover automático sin árbitro. [→ Failover](#Failover)
5. Un e-commerce con RPO de 15 minutos y RTO de 30. ¿Qué estrategia es razonable?
   - [x] Logs archivados + réplica asincrónica
   - [ ] Backup semanal
   - [ ] Cluster con réplica sincrónica en tres regiones
   - [ ] Sólo backup diario con restore probado
   > El backup diario alcanza para RPO 24 h; el cluster sincrónico es para escenarios críticos. [→ Diseño por criticidad](#Diseño%20por%20criticidad)
6. En MySQL, ¿qué campo de SHOW REPLICA STATUS indica cuánto atrasada está la réplica?
   - [x] Seconds_Behind_Source
   - [ ] Replica_IO_Running
   - [ ] Source_Host
   - [ ] log_bin
   > IO_Running y SQL_Running dicen si los hilos de replicación corren. [→ Observar la réplica](#Observar%20la%20réplica)
7. En PostgreSQL, `SELECT pg_is_in_recovery();` devuelve true. ¿Qué significa?
   - [x] Que el nodo es una réplica (está reproduciendo WAL)
   - [ ] Que el nodo es el primario
   - [ ] Que hay un deadlock
   - [ ] Que el backup falló
   > En el primario se mira `pg_stat_replication`. [→ Observar la réplica](#Observar%20la%20réplica)
8. ¿Qué se responde en el paso "reintegrar" de un failover?
   - [x] Qué pasa con el nodo anterior cuando vuelve
   - [ ] Qué réplica asume las escrituras
   - [ ] Si la falla es real o una red parcial
   - [ ] Cómo llegan las aplicaciones al nuevo nodo
   > Detectar, promover, reconectar y reintegrar. [→ Failover](#Failover)
9. Con replicación **sincrónica**, la réplica se cae. ¿Qué riesgo hay?
   - [ ] Ninguno: el primario sigue igual
   - [x] El primario puede frenarse esperando la confirmación de la réplica
   - [ ] Se pierden las transacciones que estaban en el lag
   - [ ] Se produce un split brain
   > El COMMIT sincrónico depende de la réplica. Perder lo del lag es el riesgo de la asincrónica. [→ Replicación](#Replicación)

## HA no es backup

| Situación | Backup | Réplica / HA |
|---|---|---|
| Nodo principal caído | Recupera, pero puede tardar | Failover rápido |
| Disco destruido | Permite restaurar | Con réplica, reduce el corte |
| DELETE accidental | Permite volver antes del error | **Puede replicar el error** |
| Error lógico de aplicación | Histórico recuperable | Propaga el cambio |

**Replicar un error no crea un backup.**

Ante un incidente hay tres respuestas que se complementan (*Resumen parcial*, p. 22): **proteger** (que no pase: permisos, auditoría), **recuperar** (volver a un estado correcto: backup + logs) y **continuar** (seguir dando servicio: réplica, failover). Primero se diagnostica qué pasó y después se elige la herramienta.

## Replicación

**Alta disponibilidad** = que el servicio siga funcionando aunque falle un componente. Se logra con **replicación**: copias vivas de la base en otros servidores.

- **Primario** (*primary / source*): recibe escrituras y publica cambios.
- **Réplica** (*standby / replica*): recibe cambios y los aplica; sirve lecturas (por ejemplo, reportes) o espera el failover.
- **Lag**: distancia temporal entre primario y réplica (por ejemplo, 3 segundos).

| Tipo | Cómo funciona (*Resumen parcial*, p. 27) | Ventaja | Costo |
|---|---|---|---|
| Sincrónica | El COMMIT **espera** a que la réplica confirme que recibió el cambio | Pérdida casi nula (RPO ≈ 0) | Cada escritura es más lenta; si la réplica falla, puede frenar al primario |
| Asincrónica | El primario confirma y **envía después** | No afecta el rendimiento | Si el primario muere, se pierde lo que estaba en el lag |

En PostgreSQL la replicación física envía el **WAL** a la réplica (*streaming replication*); en MySQL se envía el **binlog**.

## Failover

Volver a dar servicio no alcanza:
1. **Detectar**: ¿falla real o red parcial?
2. **Promover**: ¿qué réplica asume las escrituras?
3. **Reconectar**: ¿cómo llegan las aplicaciones al nuevo nodo?
4. **Reintegrar**: ¿qué pasa con el nodo anterior? Vuelve **como réplica**, no como primario.

Detectar, promover (convertir una réplica en el nuevo primario) y reconectar (IP virtual, DNS o proxy) son los pasos del *Resumen parcial* (p. 27).

Riesgos: **split brain** (por un problema de red los dos nodos creen ser el primario, los dos aceptan escrituras y los datos divergen), pérdida por lag y un failover que funciona técnicamente pero no operacionalmente.

## Diseño por criticidad

| Escenario | RPO | RTO | Estrategia razonable |
|---|---|---|---|
| Bajo impacto | 24 h | 8 h | Backup diario + restore probado |
| Operación interna | 4 h | 2 h | Full + lógicos frecuentes + procedimiento |
| E-commerce | 15 min | 30 min | Logs archivados + réplica asincrónica |
| Crítico | ≈ 0 | Muy bajo | Réplica o cluster + DR + pruebas periódicas |

La complejidad técnica se justifica por la criticidad, el costo de la caída y la capacidad de operarla.

## Observar la réplica

```sql
-- MySQL
SHOW REPLICA STATUS\G
-- Replica_IO_Running, Replica_SQL_Running, Seconds_Behind_Source (el lag), Source_Host
SHOW BINARY LOGS;

-- PostgreSQL
SELECT pg_is_in_recovery();                     -- true en la réplica
SELECT application_name, state, sync_state, sent_lsn, replay_lsn
FROM pg_stat_replication;                       -- en el primario
SELECT pg_last_wal_replay_lsn();                -- en la réplica
```

Preguntas: ¿quién es el primario? ¿la réplica está al día? ¿qué pasa si se replica un DELETE accidental?

## Problema y herramienta

| Problema | Herramienta | Demostrar |
|---|---|---|
| Permiso incorrecto | GRANT / REVOKE | Permitido + rechazado |
| Pérdida completa | Backup + restore | Reconstruir y validar |
| DELETE accidental | Backup + logs + PITR | Volver justo antes del error |
| Caída del primario | Réplica + failover | Restablecer el servicio |

Primero se diagnostica el problema; después se elige la herramienta y se demuestra que cumple el objetivo.

## Lo que hicimos en el laboratorio

U6 Act. 1, Fase 3 "Diseñar para sobrevivir", escenario logística y depósitos (RPO ≤ 15 min, RTO ≤ 30 min, presupuesto medio):
- **Continuidad**: activo-pasivo con dos nodos y **réplica asincrónica** de PostgreSQL, para que el primario no pierda velocidad.
- **Protección**: backup base diario a las 03:00 (operatoria mínima), retención de 7 días y WAL archivado de forma continua en una ubicación externa.
- **Recuperación**: PITR (backup diario + WAL) ante errores humanos; promoción del standby ante la caída del primario.
- **RPO**: el WAL continuo limita la pérdida a los minutos previos al corte. **RTO**: promover el standby lleva pocos minutos; un restore completo, menos de 20.
- **Riesgo**: split brain, porque con dos nodos no hay árbitro. **Mitigación**: failover **manual**, validado por un DBA.
