# Bases de datos como servicio en la nube
[← Índice Sistemas de Gestión de Bases de Datos](../INDICE.md)

> Tema 11 · Peso: 2/3 (estimado) · Fuente: *Clase 10 - Operar como Servicio - DBaaS Cloud 2026* (diap. 1–34). No hay
> bitácora del grupo de esta unidad en el material. Lo que agrega el tutor va marcado *(tutor)*.

## Preguntas de recuperación

- ¿Cuál es la pregunta disparadora de la unidad 10? :: Si el proveedor administra el servidor, los backups y la alta disponibilidad, ¿qué queda por administrar? ¿Quién configura, protege, observa y paga? La respuesta está en la responsabilidad compartida. [→ De servidor a servicio](#De%20servidor%20a%20servicio)
- ¿Cuáles son los cuatro modelos de operación, de menos a más abstracción? :: On-premise (hardware + SO + SGBD, máximo control), IaaS (VM + SGBD, infraestructura alquilada), PaaS o DBaaS (motor administrado, operación compartida) y serverless DB (capacidad bajo demanda). [→ De servidor a servicio](#De%20servidor%20a%20servicio)
- ¿Qué tres ideas de cloud hay que tener antes de hablar de DBaaS? :: Elasticidad (ajustar capacidad sin comprar hardware), pago por consumo (el costo pasa de la capacidad instalada a lo usado) y automatización (aprovisionamiento, métricas, backups, parches y HA como capacidades de plataforma). [→ De servidor a servicio](#De%20servidor%20a%20servicio)
- ¿Qué es DBaaS? :: El SGBD entregado como capacidad administrada: se consume por un endpoint y una API o consola, y el proveedor opera gran parte de la infraestructura y del ciclo de vida del motor. Es una forma de operar un motor, no un nuevo modelo de datos. [→ De servidor a servicio](#De%20servidor%20a%20servicio)
- En la responsabilidad compartida, ¿qué es del proveedor, qué es compartido y qué es del cliente? :: Proveedor: hardware y datacenter, SO y parches de plataforma. Compartido: disponibilidad de la plataforma. Cliente: configuración del servicio, usuarios y privilegios, modelo, SQL e índices, datos y clasificación, costo y gobierno. [→ Responsabilidad compartida](#Responsabilidad%20compartida)
- ¿Qué trabajo permanece con DBaaS? :: Diseñar datos e índices, gestionar identidades y privilegios, configurar los parámetros permitidos, diagnosticar consultas y sesiones, validar restore, RPO/RTO y costos, y definir arquitectura y gobierno. [→ Responsabilidad compartida](#Responsabilidad%20compartida)
- ¿Qué decisiones se toman al provisionar una base como servicio? :: Región, motor y versión, compute (CPU y RAM), storage (capacidad e IOPS), red (pública o privada) y HA (una o varias zonas). [→ Provisionar y conectar](#Provisionar%20y%20conectar)
- ¿Qué cambia en la conexión con DBaaS? :: El endpoint reemplaza a la IP del servidor, pero la ruta sigue siendo cliente → red → autenticación → base; cambia quién opera los componentes intermedios. [→ Provisionar y conectar](#Provisionar%20y%20conectar)
- ¿Qué diferencia hay entre acceso público y privado? :: Público: endpoint alcanzable desde Internet, protegido por firewall, identidad y TLS. Privado: dentro de una red virtual (VPC o VNet), menos exposición pero hay que resolver rutas y DNS. Público no significa abierto. [→ Provisionar y conectar](#Provisionar%20y%20conectar)
- ¿Qué puede cambiar en un PostgreSQL o MySQL como servicio? :: Extensiones disponibles, privilegios de superusuario, parámetros modificables, acceso al filesystem, plugins y ventanas de mantenimiento. [→ Provisionar y conectar](#Provisionar%20y%20conectar)
- En el backup administrado, ¿qué hace cada uno? :: El proveedor ejecuta copias y retención según la configuración; el cliente elige política, retención y ventanas, y prueba el restore; los dos sostienen el RPO/RTO. Un checkbox "backup enabled" no demuestra recuperabilidad. [→ Backup HA y mantenimiento](#Backup%20HA%20y%20mantenimiento)
- ¿Qué preguntas hace el DBA sobre la HA administrada? :: ¿Qué SLA ofrece? ¿Qué RPO/RTO real necesito? ¿Qué pasa con las conexiones? ¿Cómo pruebo el failover? Y la HA no reemplaza al backup ni corrige errores lógicos. [→ Backup HA y mantenimiento](#Backup%20HA%20y%20mantenimiento)
- ¿Qué señales se observan en DBaaS? :: CPU y memoria, conexiones, latencia e I/O, SQL costoso, logs y alertas (umbral + acción). La pregunta es qué decisión permite tomar cada señal. [→ Observabilidad y performance](#Observabilidad%20y%20performance)
- ¿Cuáles son las tres formas de escalar en DBaaS? :: Vertical (más CPU y RAM: puede requerir reinicio o failover y tiene techo), réplicas de lectura (la aplicación tiene que saber usarlas) y serverless o autoscale (simplifica picos, pero hay que entender límites y modelo de cobro). [→ Escalar y costos](#Escalar%20y%20costos)
- ¿Qué componentes cobra un DBaaS? :: Compute (vCPU, RAM, tiempo), storage (GB provisionados), I/O, backup (retención y snapshots), red (egress) y HA (réplicas y zonas). [→ Escalar y costos](#Escalar%20y%20costos)
- CPU alta y latencia creciente: ¿qué hace el DBA antes de duplicar la instancia? :: Medir SQL, I/O e índices y comparar el costo de optimizar contra el de escalar. Escalar puede ocultar un problema: el proveedor no optimiza nuestro SQL. [→ Escalar y costos](#Escalar%20y%20costos)
- ¿Cuáles son los dos planos de seguridad en DBaaS? :: Identidad cloud (IAM: quién crea, modifica o lee la configuración del servicio) e identidad del motor (usuarios, roles y privilegios sobre los objetos), más red y cifrado (firewall o red privada, TLS, cifrado en reposo). [→ Seguridad y migración](#Seguridad%20y%20migración)
- ¿Cuáles son los seis pasos de una migración a DBaaS? :: Inventariar (versiones, extensiones, tamaño), evaluar (compatibilidad y límites), mover (dump/restore o replicación), validar (conteos, SQL, rendimiento), traspasar (DNS o endpoint, ventana) y observar (errores, latencia, costo). [→ Seguridad y migración](#Seguridad%20y%20migración)
- ¿Qué es la estrategia de salida? :: Preguntarse antes de adoptar cómo nos iríamos de la plataforma: revisar dependencias (extensiones, versiones, APIs propietarias), asegurar la exportación y probar restaurar en otra instancia midiendo tiempos. [→ Elegir dónde operar](#Elegir%20dónde%20operar)

## Cuestionario

1. ¿Qué afirmación sobre DBaaS es correcta?
   - [x] Reduce trabajo operativo, pero no elimina las decisiones de administración
   - [ ] Elimina la necesidad de un DBA
   - [ ] Es un nuevo modelo de datos
   - [ ] Garantiza alta disponibilidad sin configurar nada
   > "DBaaS no elimina al DBA: eleva el nivel en el que debe administrar." Interpretarlo como "sin administración" es el No logrado. [→ De servidor a servicio](#De%20servidor%20a%20servicio)
2. ¿Qué modelo da el máximo control sobre el sistema operativo?
   - [x] On-premise
   - [ ] DBaaS
   - [ ] Serverless DB
   - [ ] PaaS
   > A mayor abstracción, menos infraestructura propia, pero no necesariamente menos responsabilidad sobre los datos. [→ De servidor a servicio](#De%20servidor%20a%20servicio)
3. ¿Qué afirmación sobre cloud es correcta según la clase?
   - [x] No es automáticamente barato, elástico ni altamente disponible: depende de cómo se configure
   - [ ] Siempre es más barato que on-premise
   - [ ] La elasticidad siempre es automática
   - [ ] La alta disponibilidad viene incluida en cualquier servicio
   > Elasticidad, pago por consumo y automatización son capacidades a configurar. [→ De servidor a servicio](#De%20servidor%20a%20servicio)
4. En la matriz de responsabilidad compartida, ¿de quién son los usuarios, roles y privilegios?
   - [x] Del cliente
   - [ ] Del proveedor
   - [ ] Compartida
   - [ ] De nadie: los gestiona la plataforma
   > "Managed no significa sin dueño". [→ Responsabilidad compartida](#Responsabilidad%20compartida)
5. ¿Qué responsabilidad es compartida entre proveedor y cliente?
   - [x] La disponibilidad de la plataforma
   - [ ] El hardware y el datacenter
   - [ ] El modelo, el SQL y los índices
   - [ ] El costo y el gobierno
   > Hardware y SO: proveedor. Modelo, SQL, datos, costo: cliente. [→ Responsabilidad compartida](#Responsabilidad%20compartida)
6. ¿Qué trabajo **permanece** al pasar de la VM del curso a DBaaS? (varias correctas)
   - [x] Diseñar datos e índices
   - [x] Validar el restore, el RPO/RTO y los costos
   - [x] Diagnosticar consultas y sesiones
   - [ ] Instalar el SO y el motor
   > Lo que se reduce: instalar, gestionar discos, parte del patching, HA básica y copias estándar. [→ Responsabilidad compartida](#Responsabilidad%20compartida)
7. ¿Cuál es la frontera visible para la aplicación en DBaaS?
   - [x] El endpoint
   - [ ] La IP del servidor físico
   - [ ] El sistema de archivos
   - [ ] La consola del SO
   > El DBA ya no "entra al servidor": observa por SQL, consola, API, métricas y logs. [→ Provisionar y conectar](#Provisionar%20y%20conectar)
8. `postgresql://app@mi-db.proveedor.cloud:5432/ventas`: ¿qué es `mi-db.proveedor.cloud`?
   - [x] El endpoint administrado (host)
   - [ ] La base lógica
   - [ ] El usuario
   - [ ] El certificado TLS
   > app = usuario, 5432 = puerto, ventas = base lógica. [→ Provisionar y conectar](#Provisionar%20y%20conectar)
9. Un endpoint DBaaS con acceso público:
   - [x] Es alcanzable desde Internet, pero protegido por firewall, identidad y TLS
   - [ ] Está abierto a cualquiera sin control
   - [ ] Sólo es accesible dentro de la VPC
   - [ ] No necesita usuario
   > Público no significa abierto; el privado (VPC o VNet) reduce la exposición pero exige resolver rutas y DNS. [→ Provisionar y conectar](#Provisionar%20y%20conectar)
10. Antes de migrar a un PostgreSQL administrado, ¿qué conviene verificar además de que acepte SQL?
    - [x] Extensiones disponibles, privilegios de superusuario y parámetros modificables
    - [ ] Sólo la versión del cliente pgAdmin
    - [ ] Nada: compatible significa idéntico
    - [ ] Que tenga JOIN
    > Compatibilidad no implica control idéntico al servidor propio. [→ Provisionar y conectar](#Provisionar%20y%20conectar)
11. El servicio tiene "backup enabled". ¿Qué falta para afirmar que la base es recuperable?
    - [x] Un restore validado
    - [ ] Nada: el proveedor lo garantiza
    - [ ] Activar la HA
    - [ ] Aumentar la retención
    > Automatizar no es validar; la evidencia sigue siendo un restore probado (como en la [U6](backup-y-recuperacion.md)). [→ Backup HA y mantenimiento](#Backup%20HA%20y%20mantenimiento)
12. Alguien borra por error una tabla en un DBaaS con HA multizona. ¿Qué lo resuelve?
    - [x] El backup o PITR, porque la HA replica el error
    - [ ] El failover a la otra zona
    - [ ] Escalar verticalmente
    - [ ] Abrir un ticket para que el proveedor deshaga el DROP
    > HA del servicio no reemplaza backup ni corrige errores lógicos. [→ Backup HA y mantenimiento](#Backup%20HA%20y%20mantenimiento)
13. Con patching administrado, ¿quién asume el impacto de negocio de un parche?
    - [x] La organización: define la ventana, prueba compatibilidad y revisa extensiones
    - [ ] El proveedor, porque aplica el parche
    - [ ] Nadie: los parches no tienen impacto
    - [ ] El fabricante del motor
    > "Managed cambia quién aplica el parche; no quién asume el impacto de negocio." La aplicación debe tolerar reinicios y failover. [→ Backup HA y mantenimiento](#Backup%20HA%20y%20mantenimiento)
14. ¿Qué debe acompañar a cada alerta según la clase?
    - [x] Un umbral y una acción
    - [ ] Un dashboard nuevo
    - [ ] Un correo al proveedor
    - [ ] Un reinicio automático
    > La pregunta no es qué dashboard existe sino qué decisión puedo tomar con esa señal. [→ Observabilidad y performance](#Observabilidad%20y%20performance)
15. Una consulta mala en DBaaS se vuelve lenta. ¿Quién la optimiza?
    - [x] El equipo: el proveedor administra la plataforma, no la carga
    - [ ] El proveedor, automáticamente
    - [ ] Nadie: se escala la instancia
    - [ ] El driver de la aplicación
    > "Cloud permite comprar más recursos rápidamente; eso no convierte una consulta mala en un buen diseño." [→ Observabilidad y performance](#Observabilidad%20y%20performance)
16. ¿Qué limitación tiene el escalado vertical en DBaaS?
    - [x] Puede requerir reinicio o failover y tiene techo
    - [ ] No existe en DBaaS
    - [ ] Sólo escala lecturas
    - [ ] No cambia el costo
    > Las réplicas de lectura reparten consultas compatibles, pero la aplicación tiene que saber usarlas. [→ Escalar y costos](#Escalar%20y%20costos)
17. CPU alta y latencia creciente. ¿Cuál es la decisión de DBA según la clase?
    - [x] Medir SQL, I/O e índices y comparar el costo de optimizar contra el de escalar
    - [ ] Duplicar el compute de inmediato
    - [ ] Pasar a serverless
    - [ ] Agregar una réplica de lectura sin medir
    > Duplicar compute baja la latencia pero sube el costo: FinOps optimiza el valor, no el costo a cualquier precio. [→ Escalar y costos](#Escalar%20y%20costos)
18. ¿Qué componente de costo corresponde a la transferencia de datos que sale del proveedor?
    - [x] Red (egress)
    - [ ] Storage
    - [ ] Compute
    - [ ] I/O
    > Los seis: compute, storage, I/O, backup, red y HA. [→ Escalar y costos](#Escalar%20y%20costos)
19. ¿Qué controla la IAM del proveedor cloud en DBaaS?
    - [x] Quién puede crear, modificar o leer la configuración del servicio
    - [ ] Los permisos SELECT sobre las tablas
    - [ ] El plan de ejecución
    - [ ] El cifrado de cada columna
    > Dos planos: quién administra el servicio (IAM) y quién usa los datos (usuarios y roles del motor). [→ Seguridad y migración](#Seguridad%20y%20migración)
20. ¿Cuándo termina una migración a DBaaS?
    - [x] Cuando la operación es estable y verificable
    - [ ] Cuando termina la copia de datos
    - [ ] Cuando se cambia el DNS
    - [ ] Cuando el proveedor confirma la instancia
    > Después del traspaso falta observar errores, latencia y costo. [→ Seguridad y migración](#Seguridad%20y%20migración)
21. ¿Qué motivos sostienen mantener parte de los datos on-premise en una arquitectura híbrida?
    - [x] Sistemas legacy, regulación, latencia local o costo hundido
    - [ ] Que la nube no admite PostgreSQL
    - [ ] Que DBaaS no tiene backups
    - [ ] Ninguno: todo tiene que mudarse
    > La arquitectura híbrida exige administrar también la frontera (VPN, replicación, ETL/CDC, APIs). [→ Elegir dónde operar](#Elegir%20dónde%20operar)
22. ¿En qué modelo la compatibilidad está "sujeta a límites" y el costo es "servicio + consumo"?
    - [x] DBaaS
    - [ ] On-premise
    - [ ] VM o IaaS
    - [ ] Ninguno
    > On-premise: compatibilidad máxima y CapEx. IaaS: alta y OpEx de infraestructura. [→ Elegir dónde operar](#Elegir%20dónde%20operar)
23. ¿Qué pregunta hay que hacerse antes de adoptar una plataforma DBaaS?
    - [x] ¿Cómo nos iríamos de esta plataforma?
    - [ ] ¿Cuál es el proveedor más conocido?
    - [ ] ¿Tiene la consola más completa?
    - [ ] ¿Cuántas regiones tiene?
    > Portabilidad: dependencias, exportación y prueba de salida. "No gana el proveedor más conocido." [→ Elegir dónde operar](#Elegir%20dónde%20operar)

## De servidor a servicio

*Clase 10, diap. 1–8.* Pregunta disparadora: **si el proveedor administra el servidor, los backups y la alta
disponibilidad, ¿qué queda por administrar?** ¿Quién configura, protege, observa y paga? La respuesta está en la
**responsabilidad compartida**.

| Modelo | Qué se opera | Rasgo |
|---|---|---|
| On-premise | Hardware + SO + SGBD | Máximo control |
| IaaS | VM + SGBD | Infraestructura alquilada |
| PaaS / DBaaS | Motor administrado | Operación compartida |
| Serverless DB | Capacidad bajo demanda | Mayor abstracción |

**A mayor abstracción, menos infraestructura propia; no necesariamente menos responsabilidad sobre los datos.**

Tres ideas de cloud (diap. 7): **elasticidad** (ajustar capacidad sin comprar hardware, manual o automática según el
servicio), **pago por consumo** (el costo pasa de la compra y la capacidad instalada a lo usado) y **automatización**
(aprovisionamiento, métricas, backups, parches y HA como capacidades de plataforma). **Cloud no es automáticamente
barato, elástico ni altamente disponible: depende de cómo se configure.**

**DBaaS** (Database as a Service): el SGBD se entrega como capacidad administrada; se consume mediante un **endpoint**
y una API o consola, y el proveedor opera gran parte de la infraestructura y del ciclo de vida del motor. Ciclo:
**provisionar** (crear instancia o cluster) → **conectar** (endpoint, red, TLS) → **operar** (métricas, backup, HA) →
**escalar** (compute, storage). **DBaaS es una forma de operar un motor, no un nuevo modelo de datos.**

## Responsabilidad compartida

*Diap. 9–10.*

| Responsabilidad | Quién |
|---|---|
| Hardware / datacenter | Proveedor |
| SO y parches de plataforma | Proveedor |
| Disponibilidad de la plataforma | **Compartida** |
| Configuración del servicio | Cliente |
| Usuarios, roles y privilegios | Cliente |
| Modelo, SQL e índices | Cliente |
| Datos y clasificación | Cliente |
| Costo y gobierno | Cliente |

**"Managed" no significa "sin dueño"**: hay decisiones que el proveedor no puede tomar por nosotros.

| Trabajo que suele reducirse | Trabajo que permanece |
|---|---|
| Instalar el SO y el motor | Diseñar datos e índices |
| Gestionar discos del servidor | Gestionar identidades y privilegios |
| Aplicar parte del patching | Configurar los parámetros permitidos |
| Construir mecanismos básicos de HA | Diagnosticar consultas y sesiones |
| Automatizar copias estándar | Validar restore, RPO/RTO y costos |
| | Definir arquitectura y gobierno |

El foco se desplaza **de administrar máquinas a administrar niveles de servicio y decisiones**.

## Provisionar y conectar

*Diap. 11–16.* La aplicación ve: DNS → **endpoint** → TLS (red segura) → DBaaS → storage, con métricas y logs al
costado. **El DBA ya no "entra al servidor"**: observa por SQL, consola, API, métricas y logs.

**Provisionar es diseñar una plataforma operativa**, no sólo "crear una base": **región** (¿dónde vive?), **motor y
versión** (¿qué compatibilidad?), **compute** (¿cuánta CPU y RAM?), **storage** (¿capacidad e IOPS?), **red** (¿pública
o privada?) y **HA** (¿una o varias zonas?).

**El endpoint reemplaza a la IP del servidor**: `postgresql://app@mi-db.proveedor.cloud:5432/ventas` → host (endpoint
administrado), puerto del motor, base lógica, usuario (identidad), más TLS y timeout del cliente. La ruta sigue siendo
**cliente → red → autenticación → base** (la de la [U5](conectividad.md)); cambia quién opera los componentes
intermedios.

**Público no significa abierto** (diap. 14):

- **Acceso público**: alcanzable desde Internet, protegido por firewall o reglas, identidad y TLS. Útil en
  laboratorios; exige control.
- **Acceso privado**: dentro de una red virtual (**VPC** o **VNet**). Reduce la exposición; hay que resolver rutas y DNS.
- **Aplicación**: debe conocer endpoint, credencial, certificado y política de conexión. **El pool sigue importando.**

DBaaS no elimina los problemas de red: cambia la topología que hay que diagnosticar.

**Ofertas** (diap. 15): AWS (RDS for MySQL/PostgreSQL, Aurora), Azure (Azure Database for MySQL/PostgreSQL), Google
Cloud (Cloud SQL, AlloyDB for PostgreSQL). **Comparar capacidades, límites, operación y costo, no nombres comerciales.**

**¿Sigue siendo PostgreSQL o MySQL?** (diap. 16): se reconocen SQL, tipos, tablas, índices, constraints, transacciones,
aislamiento, planes, roles y drivers. **Puede cambiar**: extensiones disponibles, privilegios de superusuario,
parámetros modificables, acceso al filesystem, plugins y ventanas de mantenimiento. Antes de migrar, verificar
compatibilidad funcional **y operativa**.

## Backup HA y mantenimiento

*Diap. 17–19.* Retoma la [U6](backup-y-recuperacion.md) con una pregunta nueva: ¿quién ejecuta y quién responde?

- **Backup administrado**: el **proveedor** ejecuta copias y retención según la configuración; el **cliente** elige
  política, retención y ventanas, **y prueba el restore**; **ambos** sostienen el RPO/RTO. **Un checkbox "backup
  enabled" no demuestra recuperabilidad: la evidencia es un restore validado.**
- **HA administrada**: primario en la zona A, standby en la zona B, replicación y failover gestionados. Preguntas del
  DBA: ¿qué **SLA** ofrece? ¿qué **RPO/RTO** real necesito? ¿qué pasa con las **conexiones**? ¿cómo **pruebo el
  failover**? **La HA no reemplaza al backup ni corrige errores lógicos** (igual que en la
  [U6](replicacion-y-alta-disponibilidad.md#HA%20no%20es%20backup)).
- **Patching**: el proveedor mantiene la plataforma y publica versiones y ventanas; el **cliente** define la ventana,
  prueba compatibilidad, revisa extensiones y planifica cambios de versión; la **aplicación** debe tolerar reinicios,
  failover y cambios de endpoint o sesión. **"Managed" cambia quién aplica el parche, no quién asume el impacto de
  negocio.**

## Observabilidad y performance

*Diap. 20–21.* La consola reemplaza parte del acceso al SO, pero hace falta evidencia.

| Señal | Qué mira |
|---|---|
| CPU / memoria | Saturación y capacidad |
| Conexiones | Pool, límites y picos |
| Latencia / I/O | Esperas y almacenamiento |
| SQL | Consultas costosas |
| Logs | Errores y eventos |
| Alertas | **Umbral + acción** |

La pregunta no es "¿qué dashboard existe?" sino **"¿qué decisión puedo tomar con esa señal?"**.

**El proveedor no optimiza nuestro SQL**: planes, JOIN, filtros, ventanas y patrones de acceso; índices,
estadísticas y particiones; y la capacidad (**escalar puede ocultar un problema: primero medir**) siguen siendo del
equipo.

## Escalar y costos

*Diap. 22–24.*

| Forma | Qué hace | Ojo |
|---|---|---|
| Vertical | Más CPU y RAM para la instancia | Puede requerir reinicio o failover; tiene techo |
| Réplicas de lectura | Distribuyen consultas compatibles | La aplicación tiene que saber usarlas |
| Serverless / autoscale | La plataforma ajusta la capacidad | Hay que entender límites y modelo de cobro |

**Escalar es una decisión de arquitectura y costo, no un botón mágico.**

**El costo también se administra**: compute (vCPU, RAM, tiempo), storage (GB provisionados), I/O (operaciones,
throughput), backup (retención, snapshots), red (**egress**) y HA (réplicas, zonas). Nueva habilidad: correlacionar
rendimiento, disponibilidad y costo antes de sobredimensionar (calculadoras de AWS, Azure y GCP).

**Ejemplo "subamos la instancia"**: síntoma CPU alta y latencia creciente → respuesta rápida: duplicar compute (baja
la latencia, sube el costo) → **decisión DBA: medir SQL + I/O + índices y comparar el costo de optimizar contra el de
escalar**. FinOps para bases: optimizar el valor, no minimizar el costo a cualquier precio.

## Seguridad y migración

*Diap. 25–26.* **La nube agrega capas; no reemplaza el mínimo privilegio.**

- **Identidad cloud (IAM)**: quién puede crear, modificar o leer la configuración del servicio.
- **Identidad del motor**: usuarios, roles y privilegios sobre objetos y acciones (como en la
  [U6](seguridad-y-auditoria.md)).
- **Red + cifrado**: firewall o red privada, TLS y cifrado en reposo complementan la autorización.

Dos planos: **quién administra el servicio** y **quién puede usar los datos**.

**Migrar no es copiar y pegar**: **1 inventariar** (versiones, extensiones, tamaño) → **2 evaluar** (compatibilidad,
límites) → **3 mover** (dump/restore o replicación) → **4 validar** (conteos, SQL, rendimiento) → **5 traspasar**
(DNS o endpoint, ventana) → **6 observar** (errores, latencia, costo). **La migración termina cuando la operación es
estable y verificable, no cuando finaliza la copia.**

## Elegir dónde operar

*Diap. 27–34.*

**Cloud e híbrido**: no todo tiene que mudarse. On-premise por legacy, regulación, latencia local o costo hundido;
DBaaS por elasticidad, operación administrada y servicios integrados. La frontera (VPN o enlace privado, replicación,
ETL/CDC, APIs) también se administra.

**El nuevo rol del DBA**: de operar servidores a gobernar una plataforma de datos. Operación (menos instalación, más
configuración), performance (SQL + capacidad + métricas), seguridad (IAM + roles + red + secretos), automatización
(API, CLI, IaC, pipelines), costos (dimensionamiento y consumo) y gobierno (políticas, tagging, evidencia).

| Criterio | On-premise | VM / IaaS | DBaaS |
|---|---|---|---|
| Control de SO | Alto | Alto | Bajo |
| Instalación y parches | Propio | Propio | Mayormente proveedor |
| HA y backup | Diseño propio | Diseño propio | Capacidad administrada |
| Elasticidad | Baja, planificada | Media | Alta según servicio |
| Compatibilidad | Máxima | Alta | Sujeta a límites |
| Costo | Capacidad + operación (CapEx) | Infra + operación (OpEx) | Servicio + consumo |
| Foco del DBA | Servidor + motor | VM + motor | Servicio + datos |

**Elegir DBaaS es elegir una frontera de responsabilidad, no sólo un proveedor.**

**Portabilidad y estrategia de salida** (diap. 30): mismo motor no implica comportamiento idéntico. Revisar
**dependencias** (extensiones, versiones, autenticación, automatizaciones, APIs propietarias), asegurar la
**exportación** (formatos, herramientas y permisos para sacar datos y esquema) y hacer una **prueba de salida**
(restaurar en otra instancia, medir tiempos y correr consultas críticas). Pregunta: **¿cómo nos iríamos de esta
plataforma?** *(tutor)* Ese riesgo se llama *vendor lock-in*.

**Actividad "Tu base deja la VM"** (diap. 31–33): diagnosticar lo que hoy administra el grupo en la VM, diseñar con un
DBaaS (región, tamaño, storage, red, backup/PITR, HA, monitoreo, migración) y defender el antes → después con 3
responsabilidades transferidas, 3 que permanecen y 3 riesgos o costos. Toda afirmación sobre el servicio va con
documentación oficial o evidencia de consola. Cierre: **de "¿quién administra el servidor?" a "¿quién responde por el
servicio?"**.
