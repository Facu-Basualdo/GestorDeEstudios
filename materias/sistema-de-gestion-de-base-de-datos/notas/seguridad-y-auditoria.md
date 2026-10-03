# Seguridad: usuarios, roles, privilegios y auditoría
[← Índice Sistemas de Gestión de Bases de Datos](../INDICE.md)

> Tema 6 · Peso: 2/3 (estimado) · Fuente: *Clase 6 - Seguridad - Backup - Replica - HA 2026* (diap. 5–10) y la
> bitácora U6 Act. 1 del grupo, Fase 1 "El usuario infiltrado" (PostgreSQL). Ampliada con el *Resumen parcial* del
> estudiante (pp. 22–24 y 33).

## Preguntas de recuperación

- ¿Cuáles son las tres respuestas del DBA ante incidentes y cuándo actúa cada una? :: Proteger (antes: mínimo privilegio, auditoría, cifrado), recuperar (durante: restore, logs, punto objetivo) y continuar (después: réplica, failover, monitoreo). Son complementarias. [→ Pilares de la seguridad](#Pilares%20de%20la%20seguridad)
- ¿Cuáles son los cuatro pilares de la seguridad en una base de datos y qué pregunta responde cada uno? :: Autenticación (¿quién es?), autorización (¿qué puede hacer?), auditoría (¿qué hizo?) y cifrado u ofuscación (¿cómo se protege?). [→ Pilares de la seguridad](#Pilares%20de%20la%20seguridad)
- ¿Con qué se puede autenticar un usuario? :: Usuario y credencial, plugin, LDAP/AD o certificado. [→ Pilares de la seguridad](#Pilares%20de%20la%20seguridad)
- ¿Qué se cifra y qué es el enmascaramiento? :: Datos en tránsito, en reposo y en las copias. El enmascaramiento oculta datos sensibles, de forma estática (copia alterada) o dinámica (al consultar). [→ Pilares de la seguridad](#Pilares%20de%20la%20seguridad)
- ¿Qué es el principio de mínimo privilegio? :: Otorgar sólo lo necesario para cumplir la función. Una cuenta de aplicación no opera como DBA y un usuario de consulta no modifica datos. [→ Mínimo privilegio](#Mínimo%20privilegio)
- ¿Cuáles son los cuatro pasos para aplicar mínimo privilegio? :: Definir la operación esperada por rol, otorgar sólo lo necesario, revocar lo heredado o no justificado y probar: un OK y un error esperado. [→ Mínimo privilegio](#Mínimo%20privilegio)
- ¿Por qué no alcanza con decir "este rol no tiene permisos"? :: Porque hay que ejecutar una prueba que falle por la razón correcta (error de permisos). La evidencia incluye éxitos y errores esperados. [→ Mínimo privilegio](#Mínimo%20privilegio)
- En la matriz de la clase, ¿qué puede hacer cada rol: app, analista, auditor, operador y dba? :: app: lee y escribe. analista: lectura parcial. auditor: lee la auditoría. operador: lectura operativa y escritura limitada. dba: todo (lectura, escritura, DDL, usuarios, auditoría). [→ Mínimo privilegio](#Mínimo%20privilegio)
- ¿Por qué conviene otorgar permisos a roles y no a usuarios? :: Porque el permiso se define una vez por función y se asigna o quita a cada usuario con GRANT rol TO usuario: es más fácil de auditar y de corregir. [→ Comandos por motor](#Comandos%20por%20motor)
- En MySQL, ¿cómo se crea un rol de analista que sólo lee cliente y se le asigna a un usuario? :: CREATE ROLE rol_analista; GRANT SELECT ON banco.cliente TO rol_analista; CREATE USER 'user'@'%' IDENTIFIED BY '***'; GRANT rol_analista TO 'user'@'%'; [→ Comandos por motor](#Comandos%20por%20motor)
- ¿Qué permisos extra necesita un rol en PostgreSQL para poder leer una tabla? :: CONNECT sobre la base (GRANT CONNECT ON DATABASE banco) y USAGE sobre el esquema (GRANT USAGE ON SCHEMA public), además de SELECT sobre la tabla. [→ Comandos por motor](#Comandos%20por%20motor)
- ¿Cómo se revisan los permisos de un usuario en MySQL? :: SHOW GRANTS FOR 'user'@'%'. [→ Comandos por motor](#Comandos%20por%20motor)
- ¿Cómo se quita un rol y un privilegio? :: REVOKE rol_analista FROM usuario; REVOKE SELECT ON tabla FROM rol. [→ Comandos por motor](#Comandos%20por%20motor)
- ¿Cómo sirve una vista para la seguridad? :: Expone sólo las columnas o filas permitidas: se da SELECT sobre la vista y no sobre la tabla base. [→ Mínimo privilegio](#Mínimo%20privilegio)
- ¿Qué fuentes de auditoría tiene un DBA? :: Eventos (conexiones, errores, DDL, operaciones sensibles), logs (error log, general log, slow log, binlog, WAL), tablas de auditoría propias por trigger y la revisión de qué evidencia alcanza. [→ Auditoría](#Auditoría)
- ¿Qué significa auditar bien? :: Registrar eventos relevantes, consultables y protegidos contra alteraciones; no guardar todo. [→ Auditoría](#Auditoría)
- En la Fase 1 del laboratorio, ¿qué tres accesos indebidos tenía u6_app? :: Intentar borrar un cliente (lo frenó la FK, no el permiso), borrar un movimiento histórico (DELETE 1) y poner en cero el saldo de todas las cuentas (4 filas). [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
- Si un DELETE falla por una FK, ¿demuestra que el usuario no tenía permiso? :: No. El motor lo dejó intentar (tenía el privilegio) y lo frenó la integridad referencial. Para probar el permiso hay que buscar una operación que no choque con restricciones. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
- ¿Qué trampa tiene el pseudo-rol PUBLIC en PostgreSQL? :: Tiene CONNECT y TEMP sobre cada base nueva: hay que hacer `REVOKE CONNECT ON DATABASE banco FROM PUBLIC;` para restringir de verdad. [→ Comandos por motor](#Comandos%20por%20motor)
- ¿Cómo se prueba un permiso con un rol en PostgreSQL? :: `SET ROLE rol;`, ejecutar lo permitido (OK) y lo prohibido (error esperado), y `RESET ROLE;`. Se guarda la evidencia de las dos. [→ Mínimo privilegio](#Mínimo%20privilegio)
- ¿Qué es un usuario en PostgreSQL? :: Un rol que puede iniciar sesión. [→ Comandos por motor](#Comandos%20por%20motor)
- En MySQL, ¿por qué `'juan'@'%'` y `'juan'@'localhost'` son usuarios distintos? :: Porque el usuario incluye desde dónde se conecta: `%` es cualquier host. [→ Comandos por motor](#Comandos%20por%20motor)
- ¿Qué guarda una buena auditoría? :: Quién (`session_user`), qué, cuándo y el valor anterior y el nuevo. [→ Auditoría](#Auditoría)
- En la Fase 1, ¿cómo se evitó que la app falsificara el usuario de la auditoría? :: Con un permiso por columna: `GRANT INSERT (evento, detalle) ON auditoria_evento TO app;`, así no puede mandar `usuario`. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
- ¿Por qué los ids tienen saltos después de un ROLLBACK? :: Porque el ROLLBACK no devuelve los números de secuencia ya usados. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)

## Cuestionario

1. Un usuario de reportes puede hacer UPDATE sobre todas las tablas. ¿Qué principio se viola?
   - [x] Mínimo privilegio
   - [ ] Independencia física
   - [ ] Atomicidad
   - [ ] Durabilidad
   > Un usuario de consulta no debería modificar datos. [→ Mínimo privilegio](#Mínimo%20privilegio)
2. ¿Qué pilar responde "¿qué hizo el usuario?"?
   - [x] Auditoría
   - [ ] Autenticación
   - [ ] Autorización
   - [ ] Cifrado
   > Autenticación: ¿quién es? Autorización: ¿qué puede hacer? Cifrado: ¿cómo se protege? [→ Pilares de la seguridad](#Pilares%20de%20la%20seguridad)
3. Después de corregir permisos, ¿qué evidencia pide la cátedra?
   - [x] Pruebas de lo permitido que funciona y de lo prohibido que falla por error de permisos
   - [ ] Sólo el script de GRANT y REVOKE
   - [ ] Una captura de la lista de roles
   - [ ] Que el usuario diga que no puede borrar
   > Una prueba tiene que fallar por la razón correcta. [→ Mínimo privilegio](#Mínimo%20privilegio)
4. En PostgreSQL, un rol tiene SELECT sobre `cliente` pero no puede leerla. ¿Qué falta probablemente?
   - [x] USAGE sobre el esquema (y CONNECT sobre la base)
   - [ ] SUPERUSER
   - [ ] Un trigger
   - [ ] FLUSH PRIVILEGES
   > En PostgreSQL se necesitan permisos en los tres niveles: base, esquema y objeto. [→ Comandos por motor](#Comandos%20por%20motor)
5. ¿Qué comando muestra los permisos de un usuario en MySQL?
   - [x] `SHOW GRANTS FOR 'user'@'%';`
   - [ ] `SHOW PROCESSLIST;`
   - [ ] `\du`
   - [ ] `SELECT @@grants;`
   > `\du` lista roles en psql (PostgreSQL). [→ Comandos por motor](#Comandos%20por%20motor)
6. La aplicación necesita leer, insertar y actualizar movimientos, pero nunca borrarlos. ¿Qué se le otorga?
   - [x] SELECT, INSERT y UPDATE
   - [ ] ALL PRIVILEGES
   - [ ] SELECT, INSERT, UPDATE, DELETE y TRUNCATE
   - [ ] Sólo SELECT
   > Fue la corrección del laboratorio: rol_app perdió DELETE y TRUNCATE. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
7. Un analista debe ver los clientes sin el DNI ni el teléfono. ¿Qué se usa?
   - [x] Una vista con las columnas permitidas y SELECT sobre la vista
   - [ ] SELECT sobre la tabla y confiar en el analista
   - [ ] Un trigger BEFORE SELECT
   - [ ] Un backup lógico de la tabla
   > Las vistas son un mecanismo de seguridad del nivel externo. [→ Mínimo privilegio](#Mínimo%20privilegio)
8. ¿Qué afirmación sobre la auditoría es correcta?
   - [x] Registra eventos relevantes, consultables y protegidos contra alteración
   - [ ] Consiste en guardar todo lo que pasa en el servidor
   - [ ] Sólo se hace con triggers
   - [ ] Reemplaza al backup
   > Las fuentes son eventos, logs del motor y tablas propias por trigger. [→ Auditoría](#Auditoría)
9. Se dio CONNECT sobre la base `banco` sólo a `rol_analista`, pero cualquier usuario se sigue conectando. ¿Qué falta?
   - [ ] `GRANT USAGE ON SCHEMA public TO rol_analista;`
   - [x] `REVOKE CONNECT ON DATABASE banco FROM PUBLIC;`
   - [ ] Reiniciar el servicio
   - [ ] `REVOKE ALL ON DATABASE banco FROM rol_analista;`
   > PUBLIC tiene CONNECT por defecto sobre toda base nueva. [→ Comandos por motor](#Comandos%20por%20motor)
10. La tabla de auditoría tiene `usuario DEFAULT CURRENT_USER` y la app tiene INSERT sobre toda la tabla. ¿Qué riesgo hay?
   - [x] La app puede mandar otro valor en `usuario` y falsificar quién hizo el cambio
   - [ ] Ninguno: el DEFAULT siempre se aplica
   - [ ] El INSERT falla si no se manda `usuario`
   - [ ] CURRENT_USER siempre devuelve postgres
   > El DEFAULT sólo aplica si no se manda la columna. Se cierra con un permiso por columna. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)

## Pilares de la seguridad

El DBA responde a los incidentes en tres tiempos complementarios:
- **Proteger** (antes): mínimo privilegio, auditoría, cifrado, cuentas separadas.
- **Recuperar** (durante): restore, logs, validación, punto objetivo.
- **Continuar** (después): réplica, failover, monitoreo, mejora del plan.

| Pilar | Pregunta | Cómo |
|---|---|---|
| Autenticación | ¿Quién es? | Usuario y credencial, plugin, LDAP/AD, certificado |
| Autorización | ¿Qué puede hacer? | Roles, privilegios, objetos |
| Auditoría | ¿Qué hizo? | Eventos, consultas, cambios, trazabilidad |
| Cifrado u ofuscación | ¿Cómo se protege? | Tránsito (SSL/TLS), reposo (archivos del disco), copias; enmascaramiento estático y dinámico (mostrar `****-1234` en vez de la tarjeta completa) |

## Mínimo privilegio

**Diseñar los permisos antes de ejecutar comandos.** Se otorga lo necesario para la función y se prueba explícitamente lo que tiene que quedar bloqueado.

- **Privilegio**: permiso para una acción sobre un objeto (SELECT sobre `cliente`, INSERT sobre `movimiento`, CREATE en un esquema).
- **Rol**: conjunto de privilegios con nombre. Se asigna el rol a las personas en vez de dar permisos uno por uno: 20 analistas reciben `rol_analista`, y si cambia lo que puede hacer un analista se cambia el rol una sola vez.
- **Mínimo privilegio**: cada usuario tiene **sólo** lo que necesita. La cuenta de la app no debe poder hacer DROP; el analista no debe poder modificar datos (*Resumen parcial*, p. 23).

| Rol | Lectura | Escritura | DDL | Usuarios | Auditoría |
|---|---|---|---|---|---|
| app | Sí | Sí | No | No | No |
| analista | Parcial | No | No | No | No |
| auditor | De auditoría | No | No | No | Sí |
| operador | Operativa | Limitada | No | No | No |
| dba | Sí | Sí | Sí | Sí | Sí |

Pasos:
1. **Definir** la operación esperada por rol.
2. **Otorgar** sólo lo necesario.
3. **Revocar** permisos heredados, globales o temporales no justificados.
4. **Probar**: un OK y un error esperado.

Las **vistas** también son seguridad: exponen sólo columnas o filas permitidas (permiso sobre una vista sin DNI ni sueldo, y no sobre la tabla).

**Probar los permisos** (*Resumen parcial*, p. 24): no alcanza con decir "no tiene permiso". Se ejecuta la prueba y se guarda la evidencia de lo que funciona **y** de lo que falla por la razón correcta:

```sql
SET ROLE rol_analista;
SELECT * FROM cliente;   -- OK
DELETE FROM cliente;     -- ERROR: permission denied for table cliente (error esperado)
RESET ROLE;
```

## Comandos por motor

```sql
-- MySQL / MariaDB
CREATE ROLE rol_analista;
GRANT SELECT ON banco.cliente TO rol_analista;
CREATE USER 'user'@'%' IDENTIFIED BY '***';
GRANT rol_analista TO 'user'@'%';
SHOW GRANTS FOR 'user'@'%';
REVOKE rol_analista FROM 'user'@'%';
REVOKE SELECT ON banco.cliente FROM rol_analista;

-- PostgreSQL
CREATE ROLE rol_analista;
GRANT CONNECT ON DATABASE banco TO rol_analista;
GRANT USAGE ON SCHEMA public TO rol_analista;
GRANT SELECT ON cliente TO rol_analista;
CREATE USER usuario WITH PASSWORD '***';
GRANT rol_analista TO usuario;
REVOKE rol_analista FROM usuario;
REVOKE USAGE ON SCHEMA public FROM rol_analista;
```

> *(agregado)* La diapositiva escribe `REVOKE … TO`; la sintaxis correcta es `REVOKE … FROM`.

En PostgreSQL los permisos van en tres niveles: **base (CONNECT) → esquema (USAGE) → objeto (SELECT…)**. Un **usuario es un rol que puede iniciar sesión**. En MySQL, en cambio, el usuario incluye desde dónde se conecta: `'juan'@'%'` (cualquier host) no es `'juan'@'localhost'`.

**Trampa de PostgreSQL** (*Resumen parcial*, pp. 24 y 33): el pseudo-rol **PUBLIC** (todos los usuarios) tiene `CONNECT` y `TEMP` sobre cada base nueva. Dar CONNECT a los roles no restringe nada si antes no se hace `REVOKE CONNECT ON DATABASE banco FROM PUBLIC;`.

 En `pg_class.relacl`, `arwd` = INSERT (a), SELECT (r), UPDATE (w), DELETE (d).

## Auditoría

El DBA tiene que poder reconstruir qué pasó sin depender de la memoria de nadie.
- **Eventos**: conexiones, errores, DDL, operaciones sensibles.
- **Logs**: error log, general log, slow log, binlog, WAL.
- **Tablas propias** por trigger, cuando aplica al negocio.
- **Revisión**: qué evidencia alcanza para sostener una conclusión.

Auditar no es guardar todo: es registrar lo relevante, consultable y protegido contra alteraciones. Una buena auditoría guarda **quién** (`session_user`), **qué**, **cuándo** y el **valor anterior y nuevo** (*Resumen parcial*, p. 24).

## Lo que hicimos en el laboratorio

U6 Act. 1, Fase 1 "El usuario infiltrado", base `u6_rescate` en PostgreSQL (4 clientes, 4 cuentas, 5 movimientos, 73000 de importe):

- **Permisos peligrosos**: `rol_app` (usuario `u6_app`) tenía TRUNCATE, DELETE y UPDATE sobre todas las tablas, y el analista más de lo que necesitaba.
- **Accesos indebidos demostrados**:
  1. `DELETE FROM cliente WHERE cliente_id = 4`: el motor lo dejó intentar (tenía el permiso) pero lo frenó la **FK** con cuenta. No prueba falta de permiso.
  2. `DELETE FROM movimiento WHERE movimiento_id = 1005` → `DELETE 1`: la app podía borrar el histórico.
  3. Puso en cero el saldo de las 4 cuentas con un UPDATE masivo.
- **Corrección**: REVOKE de DELETE y TRUNCATE. `rol_app` queda con SELECT, INSERT y UPDATE en cliente, cuenta y movimiento, y SELECT en `auditoria_evento`. `rol_analista`, sólo SELECT.
- **Prueba**: con `u6_analista`, DELETE e INSERT dan error de permisos.
- **Auditoría falsificable** (*Resumen parcial*, p. 33): la columna `usuario` era un `DEFAULT CURRENT_USER`, y la app podía mandar otro valor en el INSERT. Se cerró con un **permiso por columna**: `GRANT INSERT (evento, detalle) ON auditoria_evento TO app;`.
- Un ROLLBACK **no devuelve los números de secuencia**: por eso los ids tienen saltos.
