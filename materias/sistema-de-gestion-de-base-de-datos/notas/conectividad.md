# Conectividad y guardia DBA
[← Índice Sistemas de Gestión de Bases de Datos](../INDICE.md)

> Tema 5 (primera mitad) · Peso: 2/3 (estimado) · Fuente: *Clase 5 - Conectividad - Transacciones - Concurrencia 2026*
> (diap. 5–13) y el *Informe de guardia DBA* del grupo (U5 Act. 1, PostgreSQL por Tailscale y pgAdmin).

## Preguntas de recuperación

- ¿Cuál es la ruta completa de una conexión remota? :: Cliente → red (IP, ruta, firewall) → puerto → motor que escucha (listener) → autenticación → base. [→ Ruta de una conexión remota](#Ruta%20de%20una%20conexión%20remota)
- Nombrá los puntos del checklist de conexión remota. :: VM encendida, servicio activo, IP correcta, puerto abierto, motor escuchando externamente, usuario remoto habilitado, base existente y cliente apuntando al destino correcto. [→ Ruta de una conexión remota](#Ruta%20de%20una%20conexión%20remota)
- En VirtualBox, ¿qué cambia según el modo de red (NAT, puente, Host-Only)? :: Cómo se alcanza la VM desde otras PC: según el modo hace falta redirigir puertos o una interfaz accesible. La pregunta es si la IP y el puerto del SGBD son alcanzables desde otra PC. [→ Ruta de una conexión remota](#Ruta%20de%20una%20conexión%20remota)
- ¿Con qué comando se verifica la IP del servidor Ubuntu? :: ip addr. Hay que corroborar que esté en la misma red que el host; si no, hay que rutear. [→ Ruta de una conexión remota](#Ruta%20de%20una%20conexión%20remota)
- ¿Cómo distinguís un problema de red de uno del SGBD? :: Primero se prueba el alcance de la IP y el puerto. Si se alcanza pero falla, el problema está en el listener, la autenticación o la base. [→ Ruta de una conexión remota](#Ruta%20de%20una%20conexión%20remota)
- ¿Qué datos lleva una cadena de conexión? :: Host, puerto, base, usuario, contraseña, SSL y timeout. Ej.: postgresql://usuario:clave@servidor:5432/base o mysql://usuario:clave@servidor:3306/base. [→ Cadena de conexión y pool](#Cadena%20de%20conexión%20y%20pool)
- ¿Qué puertos usan por defecto PostgreSQL y MySQL? :: PostgreSQL 5432 y MySQL 3306. [→ Cadena de conexión y pool](#Cadena%20de%20conexión%20y%20pool)
- ¿Qué buena práctica hay con las credenciales de la cadena de conexión? :: No publicarlas en entregas ni capturas, y separar configuración, secretos y código. [→ Cadena de conexión y pool](#Cadena%20de%20conexión%20y%20pool)
- ¿Por qué una cadena mal escrita confunde el diagnóstico? :: Porque puede parecer un problema de red, de autenticación o de base inexistente. [→ Cadena de conexión y pool](#Cadena%20de%20conexión%20y%20pool)
- ¿Qué es el connection pooling y qué resuelve? :: Reutilizar un conjunto controlado de conexiones: la app pide una, la usa y la devuelve. Evita la latencia de abrir una conexión por operación y el exceso de sesiones. [→ Cadena de conexión y pool](#Cadena%20de%20conexión%20y%20pool)
- ¿Qué riesgo tiene el pool y qué no resuelve? :: Una conexión devuelta puede conservar contexto de sesión (por ejemplo, una transacción abierta) si la app no lo maneja bien. No resuelve concurrencia ni locks. [→ Cadena de conexión y pool](#Cadena%20de%20conexión%20y%20pool)
- ¿Qué capas hay entre la aplicación y el SGBD? :: Aplicación → driver (protocolo del motor: JDBC, ODBC, .NET, ORM) → conexión (sesión autenticada) → SQL (transacción y consultas) → SGBD (ejecución, locks, logs). [→ Cadena de conexión y pool](#Cadena%20de%20conexión%20y%20pool)
- ¿Qué diferencia hay entre forward y reverse engineering? :: Forward: modelo → DDL → base. Reverse: base existente → metadatos → representación del modelo (ERD). [→ Guardia DBA](#Guardia%20DBA)
- ¿Cuál es el límite de la ingeniería inversa? :: Reconstruye la implementación actual, no la intención original del diseño. Hay que contrastarla con PK, FK, constraints, índices y objetos reales. [→ Guardia DBA](#Guardia%20DBA)
- ¿Qué se revisa en una guardia DBA antes de decir que "la base está bien"? :: Sesiones (quién, desde dónde, estado), actividad (qué corre), consumo, espacio (tablas e índices más grandes), plan de una consulta y mantenimiento disponible. [→ Guardia DBA](#Guardia%20DBA)
- ¿Con qué formato se responde cada punto del checklist de la guardia? :: ¿Dónde está? → ¿qué muestra? → ¿para qué le sirve al DBA? → evidencia. No alcanzan las capturas. [→ Guardia DBA](#Guardia%20DBA)
- En la guardia, ¿para qué sirvió el rol pg_monitor? :: Para que las cuentas alumnoXX vieran sesiones y estadísticas del servidor sin poder modificar nada: mínimo privilegio aplicado a la guardia ("quien está de turno mira, no toca"). [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
- ¿Cómo se lee alumno01=arwd/postgres en los permisos de una tabla de PostgreSQL? :: El rol alumno01 tiene a = INSERT, r = SELECT, w = UPDATE y d = DELETE, otorgados por postgres. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
- ¿Por qué el grupo usó Tailscale y no el adaptador puente? :: No depende de la subred del aula, funciona igual desde casa sin abrir puertos ni publicar el 5432 en internet, y el motor escucha en direcciones concretas en lugar de listen_addresses = '*'. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)

## Cuestionario

1. Un integrante no puede conectarse con pgAdmin al servidor del grupo. ¿Qué se revisa primero?
   - [x] Que la IP y el puerto del SGBD sean alcanzables desde su PC
   - [ ] Reinstalar pgAdmin
   - [ ] Cambiar el nivel de aislamiento
   - [ ] Recrear la base de datos
   > Antes de culpar al cliente, se recorre la ruta: red → puerto → listener → autenticación → base. [→ Ruta de una conexión remota](#Ruta%20de%20una%20conexión%20remota)
2. El puerto responde, pero la conexión falla con "no existe la base de datos". ¿Dónde está el problema?
   - [x] En el SGBD: la base no existe o la cadena apunta a otra
   - [ ] En el firewall
   - [ ] En el modo de red de VirtualBox
   - [ ] En el driver JDBC
   > Si la red llega, el problema está del lado del motor. En el laboratorio U3 pasó con `sgbd_lab` y se resolvió con CREATE DATABASE. [→ Ruta de una conexión remota](#Ruta%20de%20una%20conexión%20remota)
3. ¿Qué resuelve un connection pool?
   - [x] La latencia de abrir conexiones y el exceso de sesiones simultáneas
   - [ ] Los deadlocks
   - [ ] Las esperas por locks
   - [ ] Las lecturas sucias
   > El pool gestiona conexiones; no resuelve concurrencia ni locks. [→ Cadena de conexión y pool](#Cadena%20de%20conexión%20y%20pool)
4. ¿Qué riesgo tiene una conexión que vuelve al pool?
   - [x] Que conserve contexto de sesión, como una transacción abierta
   - [ ] Que se cierre la base
   - [ ] Que pierda la autenticación
   - [ ] Ninguno: el pool limpia todo
   > Si la aplicación no maneja bien transacciones y estado, el siguiente que la usa hereda ese contexto. [→ Cadena de conexión y pool](#Cadena%20de%20conexión%20y%20pool)
5. ¿Qué afirmación sobre la ingeniería inversa es correcta?
   - [x] Reconstruye el modelo actual desde los metadatos, pero no la intención original del diseño
   - [ ] Genera el DDL a partir del modelo lógico
   - [ ] Recupera la documentación original de los diseñadores
   - [ ] Sólo funciona en MySQL Workbench
   > Generar DDL desde el modelo es forward engineering. [→ Guardia DBA](#Guardia%20DBA)
6. ¿Qué buena práctica corresponde a las cadenas de conexión?
   - [x] Separar configuración, secretos y código, y no publicar credenciales en capturas
   - [ ] Escribir la contraseña en el código para no perderla
   - [ ] Usar siempre el usuario root o postgres
   - [ ] Desactivar SSL para que conecte más rápido
   > Una cadena concentra decisiones operativas y secretos. [→ Cadena de conexión y pool](#Cadena%20de%20conexión%20y%20pool)
7. En la guardia, las cuentas alumnoXX están en pg_monitor y tienen arwd sobre las tablas. ¿Qué pueden hacer? (varias correctas)
   - [x] Ver sesiones activas y estadísticas del servidor
   - [x] Leer y modificar filas de las tablas
   - [ ] Borrar la tabla o cambiar su estructura
   - [ ] Crear bases y roles nuevos
   > Permisos de trabajo (a, r, w, d), sin permisos de administración. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)

## Ruta de una conexión remota

La VM del grupo pasa a ser un **servidor compartido**: equipos con pgAdmin, Workbench o DBeaver → red (IP, direccionamiento, ruta, firewall) → VM (VirtualBox o Multipass, Ubuntu, servicio activo) → SGBD (listener, autenticación, base).

**Una conexión remota es una ruta completa**: cliente → red → puerto → motor → autenticación → base.

- **VirtualBox**: NAT, puente o Host-Only cambian cómo se alcanza la VM. Puede hacer falta redirigir puertos.
- **Multipass**: la instancia tiene una IP administrada por la plataforma; hay que identificarla y verificar su alcance.
- Verificación: `ip addr` en el servidor para comprobar que está en la misma red que el host.

**Checklist**: VM encendida · servicio activo · IP correcta · puerto abierto · motor escucha externamente · usuario remoto habilitado · base existe · cliente apunta al destino correcto.

## Cadena de conexión y pool

Una aplicación también es un cliente: aplicación → **driver** (JDBC, ODBC, .NET, ORM) → **conexión** (sesión autenticada) → SQL → SGBD. La misma concurrencia aparece desde cualquier cliente.

```
postgresql://usuario:clave@servidor:5432/base
mysql://usuario:clave@servidor:3306/base
```

Parámetros: host, port, database, user, password, ssl, timeout. Una cadena incorrecta puede simular un problema de red, de autenticación o de base inexistente. **No publicar credenciales.**

**Connection pooling**:
- Sin pool: una conexión por operación → latencia y demasiadas sesiones.
- Con pool: se reutiliza un conjunto controlado; la app pide, usa y devuelve.
- Riesgo: la conexión devuelta conserva contexto de sesión si la app no administra bien transacciones y estado.
- **El pool no resuelve concurrencia ni locks.**

## Guardia DBA

pgAdmin y MySQL Workbench sirven para **observar**, no sólo para ejecutar SQL:
- **Objetos**: bases, esquemas, tablas, vistas, índices, constraints, funciones, triggers.
- **Operación**: sesiones, actividad, usuarios y roles, mantenimiento, mensajes.
- **Rendimiento**: planes, estadísticas, tamaño de tablas e índices, consultas activas.

**Ingeniería inversa**: base existente → metadatos → modelo. Reconstruye la implementación, no la intención. Hay que contrastarla con PK, FK, constraints e índices reales.

Qué revisar en la primera guardia: sesiones, actividad, consumo, espacio, plan y mantenimiento. Cada hallazgo responde **¿dónde está? → ¿qué muestra? → ¿para qué le sirve al DBA? → evidencia**. La interfaz es una herramienta de observación; la evidencia está en el SGBD.

## Lo que hicimos en el laboratorio

Informe de guardia DBA del grupo (PostgreSQL en una VM, host 100.116.70.32:5432, base sgbd_u5):
- **Red**: Tailscale en lugar del adaptador puente. No depende de la subred del aula (wfrre-2 entrega un /21), es más restrictivo (el motor escucha en dos direcciones concretas, no en `listen_addresses = '*'`) y funciona desde casa sin publicar el 5432.
- **Objetos**: se listaron con `pg_class` + `pg_namespace` (relkind r, v, S, i), constraints con `pg_constraint` (p, f, c, n) y funciones y triggers con `pg_proc` y `pg_trigger`.
- **Seguridad**: las seis cuentas `alumnoXX` pueden iniciar sesión, pero no son superusuario ni crean bases o roles. Pertenecen a **pg_monitor** (ven sesiones y estadísticas sin modificar nada). En las tablas tienen `arwd` (INSERT, SELECT, UPDATE, DELETE) otorgado por postgres.
- **Metadatos**: `movimiento.importe` es `numeric(12,2)` y no float, porque float redondea los decimales. Hay un índice `ix_mov_cuenta_fecha (cuenta_id, fecha)` que pgAdmin no muestra en Properties.
- **Ingeniería inversa**: ERD cuenta 1 → N movimiento. Sirve para entender una base sin documentación en minutos.
