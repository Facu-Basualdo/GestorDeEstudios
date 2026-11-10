# Sistemas de Gestión de Bases de Datos — Índice
[← Hub](../../CLAUDE.md)

[Programa](programa.md) · [Temas](temas.md) · [Sesiones](sesiones.md) · [Fuentes](fuentes.md) · [Análisis de exámenes](examenes/analisis.md)

> Próxima fecha: **2026-11-17 · Parcial 2** (temas 7 a 11, NoSQL y nube: bloque 2, más abajo). El Parcial BT1 (temas 1 a 6) fue el 2026-10-06. Ver
> [calendario](../../calendario.md).

> Las notas salen de las **clases 1 a 6 de 2026** y de las **bitácoras de laboratorio del grupo** (PostgreSQL), escritas
> el 2026-10-03. Los parciales 2019–2025 de `material/` y `examenes/` **no se usan**: desde 2026 la cátedra evalúa
> distinto por la IA (decisiones justificadas con evidencia, no comandos sueltos). Por eso los pesos son
> **estimados**, según el énfasis de las clases. Para practicar: [web de estudio](../../web/README.md).

## Unidad 1 — Arquitectura de un motor de base de datos

| Nota | Peso | Qué cae · dónde me equivoco |
|---|---|---|
| [Arquitectura de un motor](notas/arquitectura-e-instalacion.md) | 2 | ANSI/SPARC e independencia física y lógica · recorrido parser → optimizador → ejecutor · **el COMMIT persiste el log, no la página** · nombres por motor (WAL, redo/undo, buffer pool) |

## Unidad 2 — Diseño físico y rendimiento

| Nota | Peso | Qué cae · dónde me equivoco |
|---|---|---|
| [Diseño físico y rendimiento](notas/diseno-fisico.md) | 3 | Carga → decisión → plan → medición · índices compuestos (prefijo izquierdo), cobertura y su costo · pruning sólo con la clave de partición · no todo se arregla con otro índice |

## Unidad 3 — SQL avanzado

| Nota | Peso | Qué cae · dónde me equivoco |
|---|---|---|
| [Lenguaje SQL avanzado](notas/lenguaje-sql-avanzado.md) | 3 | **acumulado por fila es ventana (OVER), no GROUP BY** · **sin marco manda RANGE: dos ventas del mismo día muestran el mismo acumulado** · **LAG es la fila anterior, LEAD la siguiente** · **el marco (ROWS BETWEEN…) es hasta dónde suma, no el grupo** · ROW_NUMBER/RANK/DENSE_RANK, CTE recursiva, LEFT JOIN + COALESCE |

## Unidad 4 — Programabilidad y migraciones

| Nota | Peso | Qué cae · dónde me equivoco |
|---|---|---|
| [Programabilidad](notas/herramientas-de-programacion.md) | 3 | Elegir el mecanismo más simple: CHECK, función, procedimiento o trigger · OLD/NEW por evento, BEFORE/AFTER · trigger MySQL frente a PostgreSQL · migrar sin recrear y rollback con pérdida |

## Unidad 5 — Conectividad, transacciones y concurrencia

| Nota | Peso | Qué cae · dónde me equivoco |
|---|---|---|
| [Transacciones, concurrencia y bloqueos](notas/transacciones-y-concurrencia.md) | 3 | Anomalías y niveles de aislamiento (defaults: PG READ COMMITTED, MySQL REPEATABLE READ) · MVCC no elimina locks · espera frente a deadlock · leer pg_stat_activity y pg_locks |
| [Conectividad y guardia DBA](notas/conectividad.md) | 2 | Ruta cliente → red → puerto → listener → autenticación → base · cadena de conexión · el pool no resuelve locks · ingeniería inversa |

## Unidad 6 — Seguridad, backup, replicación y HA

| Nota | Peso | Qué cae · dónde me equivoco |
|---|---|---|
| [Backup, restore y PITR](notas/backup-y-recuperacion.md) | 3 | Backup ≠ restore ≠ recovery · lógico/físico, full/diferencial/incremental · opciones de mysqldump · PITR con binlog o WAL · RPO y RTO |
| [Seguridad y auditoría](notas/seguridad-y-auditoria.md) | 2 | Mínimo privilegio **probado** (OK + error esperado) · GRANT/REVOKE con roles · en PG: CONNECT, USAGE y SELECT |
| [Replicación y alta disponibilidad](notas/replicacion-y-alta-disponibilidad.md) | 2 | **La réplica replica el DELETE**: HA no es backup · sincrónica frente a asincrónica · failover y split brain · estrategia por criticidad |

# Bloque 2 — NoSQL y nube (Parcial 2)

> Notas escritas el 2026-11-10 con las **clases 7 a 10 de 2026** y las **bitácoras del grupo** (U7 Act. 1 y 2, U8 Act. 1
> y 2, U9 Act. 1 y 2). Pesos **estimados** por el énfasis de las clases. El tema 12 (herramientas de datos distribuidos)
> no tiene material todavía.

## Unidad 7 — Datos semiestructurados

| Nota | Peso | Qué cae · dónde me equivoco |
|---|---|---|
| [Datos semiestructurados y transición a NoSQL](notas/datos-semiestructurados.md) | 2 | Tensiones del relacional · **semiestructurado no es "sin estructura"** · json frente a jsonb, GIN, columna generada en MySQL, Document Store · scale up/out, sharding · **ACID/BASE no son etiquetas de familias** · 4 familias y árbol de decisión |

## Unidad 8 — MongoDB

| Nota | Peso | Qué cae · dónde me equivoco |
|---|---|---|
| [MongoDB y el modelo documental](notas/mongodb.md) | 3 | **Diseñar desde los patrones de acceso, no traducir tablas** · embed frente a referencia, arrays sin tope (16 MB) · CRUD con operadores · explain: COLLSCAN → IXSCAN · pipeline · $jsonSchema · atomicidad por documento · conexión / autenticación / autorización |

## Unidad 9 — Redis, Cassandra, Neo4j y CAP

| Nota | Peso | Qué cae · dónde me equivoco |
|---|---|---|
| [Redis, Cassandra, Neo4j y CAP](notas/redis-cassandra-neo4j.md) | 3 | Estructuras y TTL, RDB frente a AOF · **partition key y clustering; sin la partición no hay consulta** · **RF ≠ CL** (QUORUM = mayoría) · Cypher · ACID por motor · **CAP sólo bajo partición, no es "dos de tres"** · OmniMarket |

## Unidad 11 — DBaaS y nube

| Nota | Peso | Qué cae · dónde me equivoco |
|---|---|---|
| [Bases de datos como servicio en la nube](notas/dbaas-y-nube.md) | 2 | **Managed no es sin dueño**: matriz de responsabilidad compartida · endpoint, público ≠ abierto · **backup enabled no es restore probado** · escalar frente a optimizar, costos · IAM + roles · migración en 6 pasos · estrategia de salida |
