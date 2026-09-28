# Arquitecturas de sistemas distribuidos
[← Índice Diseño de Sistemas](../INDICE.md)

> Unidad 4.2 · Peso provisorio 2/3 (**entra en el 2º parcial**, clase 21 "Arquitectura II":
> maestro-esclavo, cliente-servidor, componentes distribuidos, peer-to-peer, orientada a
> servicios y microservicios) · Fuente: doc 11 *arq. sistemas distribuidos* (filminas y clase,
> pp. 2–29, siguiendo a Sommerville cap. 17), vía el export de Faro.

## Preguntas de recuperación

- ¿Qué es un sistema distribuido? :: Un sistema con **varios nodos que trabajan coordinados a través de una red**, y esa coordinación es **transparente** para el usuario. Es más complejo de diseñar, implementar y mantener que uno centralizado. [→ Sistemas distribuidos](#Sistemas%20distribuidos)
- ¿Qué cuestiones de diseño plantea un sistema distribuido? :: **Transparencia, apertura, escalabilidad, seguridad, calidad de servicio y gestión de fallos**. [→ Sistemas distribuidos](#Sistemas%20distribuidos)
- ¿Cuáles son las tres dimensiones de la escalabilidad? :: **Tamaño** (sumar recursos ante más usuarios), **distribución** (dispersar componentes sin perder rendimiento) y **gestionabilidad** (administrarlo al crecer; suele ser la que limita). [→ Sistemas distribuidos](#Sistemas%20distribuidos)
- ¿Qué cuatro tipos de ataque sufre un sistema distribuido? :: **Intercepción** (pérdida de confidencialidad), **interrupción** (DoS), **modificación** y **fabricación** (información falsa, como una contraseña). [→ Sistemas distribuidos](#Sistemas%20distribuidos)
- ¿Qué es el middleware y qué dos tipos de soporte da? :: Software que hace de **capa de comunicación** entre componentes. Da **soporte de interacción** (coordina, da transparencia de ubicación, convierte parámetros) y **servicios comunes** reutilizables. [→ Sistemas distribuidos](#Sistemas%20distribuidos)
- ¿Cómo es la arquitectura maestro-esclavo? :: Un proceso **maestro** central y procesos **esclavos** que hacen el trabajo y le reportan; los esclavos no se conocen. Se usa para **rendimiento** y para tener **datos replicados** (confiabilidad). [→ Maestro-esclavo](#Maestro-esclavo)
- ¿Cómo funciona cliente-servidor y qué ventajas tiene? :: Un servidor da servicios a **muchos clientes distribuidos**; el cliente inicia (descubrimiento e interacción). Ventajas: bajo acoplamiento, escala, cliente y servidor evolucionan por separado, servicios compartidos. [→ Cliente-servidor](#Cliente-servidor)
- Cliente liviano vs. cliente pesado :: Liviano: casi sin procesamiento (el origen de la web). Pesado: tiene la aplicación y hay que **desplegarla y actualizarla** en cada máquina (juegos). [→ Cliente-servidor](#Cliente-servidor)
- Cliente-servidor de 2 niveles vs. multinivel :: 2 niveles: cliente y servidor (siempre al menos 2 capas físicas). Multinivel: el **servidor se sigue dividiendo** en niveles (presentación, aplicación, datos) y separa mejor quién genera los datos de quién los presenta. [→ Cliente-servidor](#Cliente-servidor)
- ¿Qué son los componentes distribuidos? :: El servidor se divide en **componentes (objetos)** que se comunican por **middleware** y pueden estar hechos en distintos lenguajes. Se basó en **CORBA** (OMG), que no prosperó. Es el **antecesor de los microservicios**. [→ Componentes distribuidos](#Componentes%20distribuidos)
- ¿Cómo es la arquitectura peer-to-peer? :: **Descentralizada**: cada nodo es **cliente y servidor** a la vez y los nodos se consultan entre vecinos. Ventaja: redundante y tolerante a fallos. Desventajas: difícil de monitorear, búsquedas repetidas, sobrecarga de comunicación. [→ Peer-to-peer](#Peer-to-peer)
- ¿Qué es la arquitectura orientada a servicios (SOA)? :: Una aplicación compuesta por **servicios independientes**, que puede dar cualquier proveedor y se pueden cambiar en ejecución. El servicio es **autocontenido**. Estándares: **SOAP** (mensajes), la interfaz del servicio (WSDL, *dato del tutor*) y **UDDI** (descubrimiento). [→ Arquitectura orientada a servicios](#Arquitectura%20orientada%20a%20servicios)
- ¿Qué son los microservicios? :: Una especialización de SOA con servicios **más chicos y autónomos**, cada uno desplegado por separado; se relacionan con la **responsabilidad única**. Muy escalables pero más complejos; suelen necesitar una **capa de API** que los junte. [→ Microservicios](#Microservicios)
- ¿SaaS es un estilo arquitectónico? :: No: es un **modelo de entrega y negocio** (software alojado en forma remota y usado por internet). Se implementa más con componentes que con servicios. [→ Microservicios](#Microservicios)

## Cuestionario

1. ¿Cuáles de las siguientes son cuestiones de diseño de un sistema distribuido según Sommerville?
   - [x] Transparencia
   - [x] Apertura
   - [x] Escalabilidad
   - [ ] Portabilidad del código fuente
   > También seguridad, calidad de servicio y gestión de fallos. [→ Sistemas distribuidos](#Sistemas%20distribuidos)
2. ¿Cuál de las dimensiones de la escalabilidad suele ser la que en la práctica limita?
   - [x] La gestionabilidad
   - [ ] El tamaño
   - [ ] La distribución
   - [ ] La portabilidad
   > Administrar el sistema cuando crece, sobre todo si hay partes en otras organizaciones. [→ Sistemas distribuidos](#Sistemas%20distribuidos)
3. Un atacante inunda un nodo con solicitudes falsas y el servicio deja de responder a los usuarios reales. ¿Qué tipo de ataque es?
   - [x] Interrupción
   - [ ] Intercepción
   - [ ] Modificación
   - [ ] Fabricación
   > La denegación de servicio (DoS) es el ejemplo de interrupción. [→ Sistemas distribuidos](#Sistemas%20distribuidos)
4. En una arquitectura maestro-esclavo…
   - [x] los esclavos hacen el trabajo y le reportan al maestro, sin necesidad de conocerse entre sí
   - [ ] cada nodo es cliente y servidor a la vez
   - [ ] los componentes se comunican sólo a través de un repositorio
   - [ ] no hay ningún componente central
   > Se usaba mucho en bases de datos replicadas, por rendimiento y confiabilidad. Lo descentralizado es peer-to-peer. [→ Maestro-esclavo](#Maestro-esclavo)
5. ¿Cuáles son ventajas de cliente-servidor?
   - [x] El servidor no necesita conocer de antemano a sus clientes
   - [x] Clientes y servidores pueden evolucionar por separado
   - [x] La cantidad de clientes escala fácilmente
   - [ ] El rendimiento es predecible porque no depende de la red
   > Al revés: la red puede retrasar mensajes y hacer el rendimiento impredecible, y hay que cuidar la seguridad. [→ Cliente-servidor](#Cliente-servidor)
6. Un juego que hay que instalar y actualizar en cada computadora y que se conecta a un servidor es un ejemplo de…
   - [x] cliente pesado
   - [ ] cliente liviano
   - [ ] peer-to-peer
   - [ ] microkernel
   > El cliente liviano casi no procesa (como una página web básica). [→ Cliente-servidor](#Cliente-servidor)
7. ¿Qué arquitectura divide el servidor en objetos que se comunican por middleware, se basó en CORBA y es la antecesora de los microservicios?
   - [x] Componentes distribuidos
   - [ ] Cliente-servidor de dos niveles
   - [ ] Peer-to-peer
   - [ ] Maestro-esclavo
   > No prosperó porque cada empresa armó su propia tecnología en vez del estándar de la OMG. [→ Componentes distribuidos](#Componentes%20distribuidos)
8. ¿Cuál es una ventaja de peer-to-peer?
   - [x] Es muy redundante y tolera fallas y desconexiones de nodos
   - [ ] Es fácil de monitorear
   - [ ] Cada búsqueda la procesa un único nodo
   - [ ] Tiene un servidor central que ordena el tráfico
   > Las otras son justamente sus problemas (o describen la variante semicentralizada). [→ Peer-to-peer](#Peer-to-peer)
9. En SOA, ¿qué estándar se usaba para **descubrir** servicios, como un catálogo?
   - [x] UDDI
   - [ ] SOAP
   - [ ] WSDL
   - [ ] REST
   > SOAP intercambia los mensajes y WSDL describe la interfaz. UDDI cayó rápido en desuso. [→ Arquitectura orientada a servicios](#Arquitectura%20orientada%20a%20servicios)
10. ¿Qué distingue a los microservicios de SOA?
    - [x] Son servicios más chicos y autónomos, cada uno con una responsabilidad y desplegado por separado
    - [ ] No usan servicios, sino componentes compartidos
    - [ ] Tienen un único despliegue monolítico
    - [ ] Dependen de UDDI para descubrirse
    > Son una especialización de SOA; al haber muchos, suelen necesitar una capa de API. [→ Microservicios](#Microservicios)

## Contenido

### Sistemas distribuidos

- **Sistema distribuido**: **varios nodos** que funcionan **coordinados a través de una red**, con esa coordinación **transparente** para el usuario (doc 11, pp. 2–3).
  - Ventajas: se **comparten recursos**; pueden convivir computadoras de distintos fabricantes; los nodos pueden estar dispersos geográficamente.
  - Desventajas: probar o entender qué pasa exige considerar muchos factores; **más superficie de ataque**; recursos más difíciles de gestionar (versiones de software y hardware). Son mucho más complejos que los centralizados.
- **Cuestiones de diseño** (Sommerville, cap. 17):
  - **Transparencia**: ¿cuánto debe parecer un único sistema?
  - **Apertura**: ¿protocolos estándar o especializados? (CORBA no prosperó; REST se usa mucho pero no está estandarizado).
  - **Escalabilidad**, en tres dimensiones: **tamaño**, **distribución** y **gestionabilidad** (esta última suele limitar).
  - **Seguridad**: una política común para partes que pueden ser de distintas organizaciones. Ataques: **intercepción**, **interrupción** (DoS), **modificación** y **fabricación**.
  - **Calidad de servicio**: servir de forma fiable con tiempos aceptables; no siempre rentable para los picos (se alivia con la nube) y los parámetros pueden contradecirse.
  - **Gestión de fallos**: detectar, contener y reparar. Las fallas son **inevitables**: hay que diseñar para resistirlas.
- **Middleware**: la capa de comunicación entre componentes, sistemas operativos y bases de datos. Da **soporte de interacción** (coordina, da **transparencia de ubicación**, convierte parámetros entre lenguajes) y **servicios comunes** reutilizables.
- Nunca se modela una arquitectura con un solo diagrama: los **diagramas de despliegue** muestran nodos y procesos, pero no quién conoce a quién.
- Los estilos se presentan también para entender **de dónde vienen** los actuales: no todos se usan hoy.

| Estilo | Idea | Clave |
|---|---|---|
| Maestro-esclavo | Un maestro coordina, los esclavos trabajan | Rendimiento, datos replicados |
| Cliente-servidor | Un servidor atiende a muchos clientes | 2 niveles o multinivel; clientes livianos o pesados |
| Componentes distribuidos | Objetos que se comunican por middleware | CORBA; antecesor de los microservicios |
| Peer-to-peer | Todos son clientes y servidores | Descentralizado, redundante |
| Orientada a servicios (SOA) | Servicios independientes de cualquier proveedor | SOAP, WSDL, UDDI |
| Microservicios | Servicios chicos y autónomos | Responsabilidad única, capa de API |

### Maestro-esclavo

- Un componente central, el **maestro**, y **procesos esclavos** que hacen el trabajo. Son al menos **dos procesos distintos** (en la misma máquina o en varias) (doc 11, p. 7).
- Sommerville lo plantea como un patrón para **aumentar el rendimiento**. Se usaba sobre todo para tener **datos distribuidos y duplicados** en distintos lugares, por **confiabilidad** o **performance** (típico en bases de datos).
- Los esclavos le mandan información al maestro, y cada tanto el maestro a los esclavos. **Los esclavos no necesariamente se conocen**.
- En el programa figura como "maestro-esclavo (multiprocesador)".

### Cliente-servidor

- Un **servidor** da servicios simultáneamente a **muchos clientes distribuidos** (ejemplo típico: un servidor web) (doc 12, p. 22; doc 11, pp. 12–13).
- Secuencia: **descubrimiento** (el cliente inicia y ubica al servidor) e **interacción** (pedidos y respuestas).
- Servidor **sin estado**: cada pedido es independiente. **Con estado**: cada pedido identifica al cliente, hay "fin de sesión" y tiempos de expiración.
- **Ventajas**: conexión dinámica (el servidor no conoce de antemano a los clientes: bajo acoplamiento) · no hay acoplamiento entre clientes · **escala** fácil · cliente y servidor **evolucionan por separado** · servicios comunes compartidos · la interacción con el usuario queda en el cliente.
- **Desventajas**: la **red** puede retrasar mensajes y volver **impredecible el rendimiento** · hay que cuidar la **seguridad** y la integridad en redes compartidas.
- **Dos niveles (2-tier)**: siempre hay al menos **2 capas físicas**, más allá de las lógicas.
  - **Cliente liviano**: casi no procesa; la web empezó así.
  - **Cliente pesado**: tiene la aplicación, que hay que **desplegar y actualizar** en cada máquina (los juegos actuales).
- **Multinivel (multi-tier)**: el servidor se sigue dividiendo en niveles (por ejemplo, aplicación y base de datos). Cuantas más capas, más se separa quién **genera** los datos de quién los **presenta**. La clave, además de compartir datos, es **compartir recursos**.

### Componentes distribuidos

- El servidor se divide en **componentes (u objetos)** que se comunican entre sí a través del **middleware**, lo que permite que estén escritos en **distintos lenguajes**. Cada componente se desarrolla por separado y los clientes consumen sus servicios (doc 11, p. 14).
- Requiere **interfaces bien definidas**. En la teoría funciona; en la práctica cuesta mantener cada componente dedicado sólo a lo suyo.
- Se basó en el estándar **CORBA** de la OMG, que no tuvo éxito porque cada empresa implementó su propia tecnología (por ejemplo, .NET dentro de Windows).
- Desventaja: mucho más **complejo de diseñar**. Es el **antecesor de los microservicios**.

### Peer-to-peer

- Arquitectura **descentralizada**, **sin roles predefinidos**: cada nodo actúa como **cliente y servidor** al mismo tiempo. Los nodos hacen de enrutadores: para encontrar algo se pregunta a los vecinos, y así sucesivamente (doc 11, p. 18).
- Surgió a fines de los 90. Ejemplos: el intercambio de archivos y **SETI@home** (voluntarios que prestaban su computadora para analizar datos de radiotelescopios).
- **Ventajas**: muy **redundante** y **tolerante a fallos** y a la desconexión de nodos.
- **Desventajas**: difícil de **monitorear** · muchos nodos pueden procesar la **misma búsqueda** · **sobrecarga** de comunicaciones replicadas.
- Variante **semicentralizada**: uno o más nodos hacen de servidores para facilitar las comunicaciones y bajar el tráfico.

### Arquitectura orientada a servicios

- Según el **W3C**: una aplicación compuesta por **servicios independientes** que puede brindar **cualquier proveedor** y que se pueden **cambiar incluso en ejecución**. La aplicación queda más liviana porque buena parte de los servicios está afuera (doc 11, p. 21).
- SOA se centra en **qué hace**, no en cómo: la entiende la gente de negocio.
- El servicio es **autocontenido**: se describe a sí mismo y tiene toda la información para que otros se conecten. Para usarlo, primero hay que **buscarlo**.
- Estándares de servicios web: **SOAP** (intercambio de mensajes), la **interfaz**, que dice qué datos se necesitan (en la práctica, WSDL: *dato del tutor, no está en las filminas*) y **UDDI** (catálogo para **descubrir** servicios; cayó rápido en desuso). Como depende de estándares, no sufre incompatibilidades tecnológicas.
- Hoy se usa poco en su forma original; su especialización son los **microservicios**.

### Microservicios

- Servicios de **escala más chica** que SOA y, sobre todo, **autónomos**: cada uno se despliega como su propio nodo (doc 11, p. 25).
- Se relaciona con la **responsabilidad única** de [SOLID](principios-solid.md#S%20—%20Responsabilidad%20única).
- Frente a la arquitectura **monolítica**: muy **escalable**, pero **más compleja** de manejar porque hay más módulos. Al estar todo tan dividido, hace falta una **capa de API** que junte los microservicios.
- **SaaS** (*software as a service*) **no es un patrón de arquitectura**: es un **modelo de entrega y negocio**. El software se aloja en forma remota (en la nube) y se usa por internet, y lo controla su dueño. Beneficios: sin licencias por dispositivo, actualizaciones y correcciones más baratas. Desventajas: mucha **carga de red**, y el cliente no controla la evolución del software. Se implementa más con componentes que con servicios.

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Arquitectura de software y diseño arquitectónico](arquitectura-de-software.md).
- [Estilos arquitectónicos](estilos-arquitectonicos.md): capas y cliente-servidor como patrones.
