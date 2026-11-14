# Seguridad de software
[← Índice Diseño de Sistemas](../INDICE.md)

> Unidad 6 (supuesta) · Peso 2 (**Parcial 2 / IE5**, agregado en 2026)
> · Fuentes: `2do Parcial - Powers de Clase (2).pdf` (pp. 365–376) y
> `DSI-03-Arquitectura I - Bass SW Architecture in Practice 4ed.pdf` (cap. 11, pp. 216–232).
> Las filminas de la cátedra citan además a Sommerville (2016, cap. 13; 2021, cap. 7) y Pressman y
> Maxim (2020, cap. 18). No hay exámenes previos del tema por haberse incorporado en 2026.

## Preguntas de recuperación

- ¿Cómo define Bass la seguridad? :: Como la capacidad del sistema de proteger datos y servicios de accesos no autorizados, dando acceso a las personas y sistemas autorizados. [→ Qué es la seguridad y por qué entra en arquitectura](#Qu%C3%A9%20es%20la%20seguridad%20y%20por%20qu%C3%A9%20entra%20en%20arquitectura)
- ¿Qué es la tríada CIA? :: Confidencialidad (sólo lee quien está autorizado), Integridad (sólo cambios autorizados) y Disponibilidad (el servicio está para el uso legítimo). [→ Tríada CIA](#Tr%C3%ADada%20CIA)
- Diferenciá amenaza, vulnerabilidad, ataque y riesgo. :: Amenaza: evento con potencial de causar daño. Vulnerabilidad: debilidad que permite ese daño. Ataque: acción deliberada que la explota (puede fallar). Riesgo: valoración del daño por probabilidad e impacto. [→ Amenaza, vulnerabilidad, ataque y riesgo](#Amenaza%2C%20vulnerabilidad%2C%20ataque%20y%20riesgo)
- En el caso del pedido 1042, ¿cuál es la vulnerabilidad? :: Que la consulta busca el pedido por ID sin verificar quién es el dueño: falta autorización. [→ Amenaza, vulnerabilidad, ataque y riesgo](#Amenaza%2C%20vulnerabilidad%2C%20ataque%20y%20riesgo)
- ¿Cuáles son las 6 partes del escenario de seguridad E1? :: Fuente y estímulo (Bruno autenticado pide el pedido de Ana), artefacto (servicio y datos del pedido), entorno (operación normal, sesión válida), respuesta (denegar y registrar el intento) y medida (cero datos divulgados). [→ Escenario de seguridad y puntos críticos en arquitectura](#Escenario%20de%20seguridad%20y%20puntos%20cr%C3%ADticos%20en%20arquitectura)
- ¿Qué significa cada letra de STRIDE? :: Spoofing (suplantación), Tampering (alteración de datos), Repudiation (repudio), Information disclosure (divulgación), Denial of service (denegación de servicio) y Elevation of privilege (elevación de privilegios). [→ Modelo STRIDE](#Modelo%20STRIDE)
- ¿Qué propiedad viola cada letra de STRIDE? :: S autenticación, T integridad, R no repudio, I confidencialidad, D disponibilidad, E autorización (relación armada por el tutor). [→ Modelo STRIDE](#Modelo%20STRIDE)
- ¿Cuál es el riesgo n.° 1 del OWASP Top 10 2025 y cómo aparece en el caso? :: Broken Access Control: Bruno ve un pedido ajeno porque el servidor no valida el permiso sobre ese pedido. [→ OWASP Top 10 (2025) y controles de aplicación](#OWASP%20Top%2010%20%282025%29%20y%20controles%20de%20aplicaci%C3%B3n)
- ¿Qué decisión de diseño ataca la inyección SQL y cuál el XSS? :: Inyección: consultas parametrizadas y entradas acotadas. XSS: codificar la salida según el contexto. [→ OWASP Top 10 (2025) y controles de aplicación](#OWASP%20Top%2010%20%282025%29%20y%20controles%20de%20aplicaci%C3%B3n)
- ¿Cuáles son las 4 familias de tácticas de seguridad de Bass? :: Detectar, resistir, reaccionar y recuperarse de ataques. [→ Tácticas y patrones arquitectónicos de seguridad (Bass, cap. 11)](#T%C3%A1cticas%20y%20patrones%20arquitect%C3%B3nicos%20de%20seguridad%20%28Bass%2C%20cap.%2011%29)
- ¿Cuál es la táctica central para el escenario E1 y de qué familia es? :: Autorizar actores, de la familia Resistir: verificar el permiso sobre cada objeto y acción. [→ Tácticas y patrones arquitectónicos de seguridad (Bass, cap. 11)](#T%C3%A1cticas%20y%20patrones%20arquitect%C3%B3nicos%20de%20seguridad%20%28Bass%2C%20cap.%2011%29)
- Nombrá tácticas de la familia Resistir. :: Identificar, autenticar y autorizar actores, limitar el acceso, limitar la exposición, cifrar datos, separar entidades, validar entradas y cambiar la configuración de credenciales. [→ Tácticas y patrones arquitectónicos de seguridad (Bass, cap. 11)](#T%C3%A1cticas%20y%20patrones%20arquitect%C3%B3nicos%20de%20seguridad%20%28Bass%2C%20cap.%2011%29)
- ¿Qué tácticas tienen Reaccionar y Recuperarse? :: Reaccionar: revocar acceso, restringir el login, informar a los actores. Recuperarse: auditar y no repudio, más las de disponibilidad para restaurar. [→ Tácticas y patrones arquitectónicos de seguridad (Bass, cap. 11)](#T%C3%A1cticas%20y%20patrones%20arquitect%C3%B3nicos%20de%20seguridad%20%28Bass%2C%20cap.%2011%29)
- ¿Por qué no alcanza con verificar que Bruno tiene rol Cliente? :: Porque el rol no dice de quién es el pedido: hay que autorizar sobre cada objeto y acción (pedido con cliente_id = actor.id). [→ Autenticación, autorización sobre cada pedido y operación segura](#Autenticaci%C3%B3n%2C%20autorizaci%C3%B3n%20sobre%20cada%20pedido%20y%20operaci%C3%B3n%20segura)
- ¿De dónde tiene que salir la identidad del actor? :: Sólo de la sesión validada, nunca de un parámetro que el cliente pueda editar. [→ Autenticación, autorización sobre cada pedido y operación segura](#Autenticaci%C3%B3n%2C%20autorizaci%C3%B3n%20sobre%20cada%20pedido%20y%20operaci%C3%B3n%20segura)
- ¿Qué se prueba en seguridad y qué compromisos de diseño hay que evaluar? :: Acceso permitido (Ana recibe sus campos) y denegado (Bruno no recibe datos ni cambia el estado). Compromisos: latencia, dependencia del proveedor y retención de registros. [→ Autenticación, autorización sobre cada pedido y operación segura](#Autenticaci%C3%B3n%2C%20autorizaci%C3%B3n%20sobre%20cada%20pedido%20y%20operaci%C3%B3n%20segura)

## Cuestionario

1. Bruno, autenticado como Cliente, consulta el pedido 1042 de Ana y ve su dirección. ¿Qué propiedad de la tríada CIA se viola?
   - [x] Confidencialidad
   - [ ] Integridad
   - [ ] Disponibilidad
   - [ ] No repudio
   > Leer datos ajenos sin autorización viola la confidencialidad; integridad sería modificarlos. [→ Tríada CIA](#Tr%C3%ADada%20CIA)
2. Bruno logra cancelar el pedido de Ana. ¿Qué propiedad se viola?
   - [ ] Confidencialidad
   - [x] Integridad
   - [ ] Disponibilidad
   - [ ] Autenticación
   > Un cambio no autorizado viola la integridad. [→ Tríada CIA](#Tr%C3%ADada%20CIA)
3. ¿Cuáles de estas afirmaciones son correctas?
   - [x] Una amenaza es una circunstancia o evento con potencial de causar daño
   - [x] El riesgo valora el daño potencial según probabilidad e impacto
   - [ ] Un ataque siempre tiene éxito; si fracasa es sólo una amenaza
   - [ ] La vulnerabilidad es la acción deliberada del atacante
   > El ataque puede tener éxito o fracasar; la acción deliberada es el ataque, la debilidad es la vulnerabilidad. [→ Amenaza, vulnerabilidad, ataque y riesgo](#Amenaza%2C%20vulnerabilidad%2C%20ataque%20y%20riesgo)
4. "La consulta busca el pedido por ID sin verificar el propietario". Esto es:
   - [ ] Una amenaza
   - [x] Una vulnerabilidad
   - [ ] Un ataque
   - [ ] Un riesgo
   > Es la debilidad que se puede aprovechar. "La vulnerabilidad esencial es que no haya validación o autorización". [→ Amenaza, vulnerabilidad, ataque y riesgo](#Amenaza%2C%20vulnerabilidad%2C%20ataque%20y%20riesgo)
5. En el escenario E1, "cantidad de datos del pedido divulgados al solicitante no autorizado: cero" es:
   - [x] La medida de la respuesta
   - [ ] La respuesta
   - [ ] El entorno
   - [ ] El artefacto
   > La respuesta es "denegar, no devolver datos y registrar el intento"; la medida es el número que la verifica. [→ Escenario de seguridad y puntos críticos en arquitectura](#Escenario%20de%20seguridad%20y%20puntos%20cr%C3%ADticos%20en%20arquitectura)
6. Un cliente niega haber cancelado un pedido y no hay evidencia confiable. ¿Qué categoría de STRIDE es?
   - [ ] Spoofing
   - [ ] Tampering
   - [x] Repudiation
   - [ ] Information disclosure
   > Repudio: poder negar una acción. Se combate con auditoría y no repudio. [→ Modelo STRIDE](#Modelo%20STRIDE)
7. Un cliente ejecuta una función reservada al operador. ¿Qué categoría de STRIDE es?
   - [ ] Spoofing
   - [ ] Tampering
   - [ ] Denial of service
   - [x] Elevation of privilege
   > Obtener derechos superiores a los propios. Spoofing sería hacerse pasar por otro usuario. [→ Modelo STRIDE](#Modelo%20STRIDE)
8. ¿Cuál es la táctica central para impedir que Bruno vea el pedido de Ana?
   - [x] Autorizar actores
   - [ ] Autenticar actores
   - [ ] Detectar intrusión
   - [ ] Cifrar datos
   > Bruno ya está autenticado: lo que falta es verificar el permiso sobre ese pedido. [→ Tácticas y patrones arquitectónicos de seguridad (Bass, cap. 11)](#T%C3%A1cticas%20y%20patrones%20arquitect%C3%B3nicos%20de%20seguridad%20%28Bass%2C%20cap.%2011%29)
9. ¿Cuáles son familias de tácticas de seguridad en Bass?
   - [x] Detectar ataques
   - [x] Resistir ataques
   - [x] Reaccionar ante ataques
   - [x] Recuperarse de ataques
   - [ ] Auditar ataques
   > Auditar es una táctica de la familia Recuperarse, no una familia. [→ Tácticas y patrones arquitectónicos de seguridad (Bass, cap. 11)](#T%C3%A1cticas%20y%20patrones%20arquitect%C3%B3nicos%20de%20seguridad%20%28Bass%2C%20cap.%2011%29)
10. ¿Qué tácticas pertenecen a la familia Resistir ataques?
    - [x] Autorizar actores
    - [x] Limitar la exposición
    - [x] Cifrar datos
    - [ ] Revocar acceso
    - [ ] Auditar
    > Revocar acceso es de Reaccionar; Auditar, de Recuperarse. [→ Tácticas y patrones arquitectónicos de seguridad (Bass, cap. 11)](#T%C3%A1cticas%20y%20patrones%20arquitect%C3%B3nicos%20de%20seguridad%20%28Bass%2C%20cap.%2011%29)
11. Un usuario estándar entra a `/admin/users` cambiando la URL. ¿Qué riesgo del OWASP Top 10 2025 es?
    - [x] Broken Access Control
    - [ ] Security Misconfiguration
    - [ ] Insecure Design
    - [ ] Injection
    > El servidor no valida el permiso: control de acceso roto, el n.° 1 de la lista. [→ OWASP Top 10 (2025) y controles de aplicación](#OWASP%20Top%2010%20%282025%29%20y%20controles%20de%20aplicaci%C3%B3n)
12. El login no tiene límite de intentos y permite fuerza bruta. ¿Qué riesgo de OWASP 2025 es?
    - [ ] Broken Access Control
    - [x] Authentication Failures
    - [ ] Cryptographic Failures
    - [ ] Security Logging & Alerting Failures
    > Falta de rate limiting en el login = fallas de autenticación. La táctica que lo ataca es "restringir login". [→ OWASP Top 10 (2025) y controles de aplicación](#OWASP%20Top%2010%20%282025%29%20y%20controles%20de%20aplicaci%C3%B3n)

## Qué es la seguridad y por qué entra en arquitectura

Bass (2021) define la seguridad como una medida de la capacidad del sistema para **proteger los datos y servicios de accesos no autorizados**, al tiempo que proporciona acceso a personas y sistemas autorizados (`Powers, pág. 366`; `Bass cap. 11, pág. 216`). En clase el docente tacha la palabra *"información"* porque a lo largo del capítulo Bass habla siempre de **datos y servicios** (`Powers, pág. 366`). Sommerville (2016) la define como el atributo del sistema que refleja su capacidad para protegerse de **ataques internos o externos maliciosos** (`Powers, pág. 366`).

La seguridad como atributo de calidad se concreta en decisiones arquitectónicas y evidencia verificable (`Powers, pág. 367`):

| Dimensión | Aplicación en el hilo conductor de clase |
|---|---|
| **Funcionalidad** | Consultar un pedido |
| **Condición de seguridad** | Cada cliente consulta sólo sus pedidos |
| **Decisión arquitectónica** | El servicio aplica la política de seguridad antes de entregar datos |
| **Evidencia** | Pruebas de acceso permitido y denegado |

**Hilo conductor (sistema de pedidos)**: **Ana** es dueña del pedido `1042` (que contiene su dirección de entrega) y **Bruno** es un actor malicioso autenticado con rol `Cliente` que intenta consultarlo o cancelarlo (`Powers, págs. 366–367, 376`). No basta comprobar que Bruno tiene rol de cliente: la política debe autorizar **sobre cada objeto y acción** (`Powers, págs. 367, 372`):

- **Cliente**: consultar y cancelar pedidos propios (cancelar sólo pendientes).
- **Operador**: consultar y procesar pedidos de su sucursal.
- **Administrador técnico**: mantener y recuperar, sin permiso comercial automático.

Relación con la **privacidad**: Bass señala que la privacidad consiste en limitar el acceso a la **información personalmente identificable (PII)** —datos que permiten identificar o vincular a una persona, como nombres o direcciones— y ocultar esa PII en entornos de prueba o frente a desarrolladores que no la necesitan (`Bass cap. 11, págs. 216–217`).

## Tríada CIA

Bass caracteriza la seguridad mediante tres propiedades fundamentales (`Powers, pág. 368`; `Bass cap. 11, pág. 216`):

| Propiedad | Qué preserva | Qué exige en el diseño / en el caso |
|---|---|---|
| **Confidencialidad** | Acceso autorizado (datos y servicios protegidos de lecturas no autorizadas) | Bruno no lee la dirección ni el pedido de Ana (`Powers, pág. 368`) |
| **Integridad** | Cambios autorizados (sin alteración no autorizada de datos o servicios) | Bruno no cancela ni cambia el pedido de Ana; restringir qué datos pueden modificarse (`Powers, pág. 368`) |
| **Disponibilidad** | Uso legítimo del servicio | Los clientes operan dentro de la carga acordada; un ataque que satura el servicio (DoS) convierte la disponibilidad en un problema de seguridad y requiere **detectar** que alguien está atacando (`Powers, pág. 368`) |

Un mismo incidente puede comprometer más de una propiedad a la vez (`Powers, pág. 368`).

## Amenaza, vulnerabilidad, ataque y riesgo

Siguiendo a Sommerville (2016) —remarcando la diferencia sutil entre amenaza y riesgo— (`Powers, pág. 369`):

| Concepto | Definición | En el caso de pedidos |
|---|---|---|
| **Amenaza** | Circunstancia o evento con potencial de causar daño | Un cliente puede leer pedidos ajenos |
| **Vulnerabilidad** | Debilidad que puede aprovecharse para causar ese daño | La consulta busca por `ID` sin verificar propietario |
| **Ataque** | Acción deliberada que intenta comprometer la seguridad; puede tener éxito o fracasar | Bruno solicita el pedido `1042` |
| **Riesgo** | Valoración del daño potencial considerando **probabilidad e impacto** | Posibilidad e impacto de exponer datos de clientes |

> *"La vulnerabilidad esencial es que no haya validación o autorización"* (`Powers, pág. 369`).

En modelado de amenazas, Bass también menciona los **árboles de ataque** (*attack trees*, análogos a los árboles de fallas): la raíz es un ataque exitoso y sus hojas representan estímulos que intentan comprometer CIA (`Bass cap. 11, pág. 216`).

## Escenario de seguridad y puntos críticos en arquitectura

Como todo atributo de calidad en Bass, la seguridad se especifica en un escenario de **6 partes** (`Powers, pág. 370`):

| Elemento | Escenario E1 (consulta no autorizada) |
|---|---|
| **Fuente** y **Estímulo** | Bruno autenticado solicita el pedido de Ana |
| **Artefacto** | Servicio de consulta y datos del pedido `1042` |
| **Entorno** | Operación normal y sesión válida |
| **Respuesta** | Denegar, no devolver datos ajenos y registrar el intento |
| **Medida** | Cantidad de datos del pedido divulgados al solicitante no autorizado: **cero** |

En un **diagrama de despliegue**, las conexiones y límites de confianza revelan cinco puntos críticos (`Powers, pág. 370`):

1. **P1 · Canal de acceso**: HTTP sin cifrado / tráfico expuesto en el borde público.
2. **P2 · Autorización ausente**: el servicio sólo comprueba sesión, no verifica permisos sobre el pedido.
3. **P3 · Base expuesta y registros/copias**: acceso sin restringir (cuenta de aplicación con privilegios excesivos que además alcanza evidencia y respaldos) en una red sin segmentar.
4. **P4 · Identidad y sesión**: anillo de confianza simplificado con el proveedor externo de identidad.
5. **P5 · Gestión expuesta**: interfaces administrativas accesibles sin HTTPS desde administración.

## Modelo STRIDE

STRIDE (Pressman y Maxim, 2020) clasifica seis categorías de amenazas (`Powers, pág. 371`). La columna *"Viola"* se agrega para vincular cada categoría con CIA y propiedades de seguridad relacionadas:

| Letra y amenaza | Qué es | Viola *(agregado)* | Amenaza en el caso |
|---|---|---|---|
| **S** — *Spoofing Identity* (suplantación) | Hacerse pasar por otro usuario para obtener acceso no autorizado | Autenticación | Usar la sesión robada de Ana |
| **T** — *Tampering with Data* (alteración) | Modificación no autorizada de datos para interrumpir o engañar | Integridad | Cambiar el importe o cancelar un pedido ajeno |
| **R** — *Repudiation* (repudio) | Capacidad de negar acciones tomadas, complicando la rendición de cuentas | No repudio | Negar una cancelación sin evidencia confiable |
| **I** — *Information Disclosure* (divulgación) | Acceso no autorizado a información confidencial | Confidencialidad | Exponer la dirección o datos en un log |
| **D** — *Denial of Service* (denegación de servicio) | Interrupción del acceso a servicios o recursos | Disponibilidad | Agotar recursos con consultas costosas |
| **E** — *Elevation of Privilege* (elevación de privilegios) | Incumple autorización: usuario limitado obtiene derechos superiores | Autorización | Ejecutar como cliente una función de operador |

## OWASP Top 10 (2025) y controles de aplicación

Las filminas enumeran los diez riesgos críticos de OWASP Top 10 (2025) con ejemplos prácticos (`Powers, pág. 372`):

1. **Broken Access Control**: usuario estándar accede a `/admin/users` cambiando la URL sin validación de permisos en servidor (corresponde al caso de Bruno con pedidos ajenos).
2. **Security Misconfiguration**: consola de administración expuesta (p. ej. `/manager/html`) con credenciales por defecto activas.
3. **Software Supply Chain Failures**: paquetes de terceros vulnerables o pipelines CI/CD comprometidos que inyectan código malicioso.
4. **Cryptographic Failures**: contraseñas almacenadas con hashes débiles como MD5 o SHA-1 sin salt en lugar de Argon2.
5. **Injection**: consulta SQL no parametrizada (`SELECT ... WHERE user = '` + `input`) que permite inyección de comandos.
6. **Insecure Design**: flujo de recuperación de contraseñas que permite enumerar cuentas válidas por mensajes de error diferenciados.
7. **Authentication Failures**: ausencia de *rate limiting* en login, habilitando fuerza bruta o *credential stuffing*.
8. **Software or Data Integrity Failures**: descarga/instalación de actualizaciones o plugins sin verificar firma digital.
9. **Security Logging & Alerting Failures**: eventos críticos de autenticación no registrados o sin alertas automáticas de intrusión.
10. **Mishandling of Exceptional Conditions**: excepción no controlada en BD que expone estructura interna o deja acceso libre tras un fallo (*"falla abierto"*).

Cuatro fallos típicos y la decisión de diseño que ataca su causa raíz (`Powers, pág. 372`):

| Fallo | Decisión que trata su causa |
|---|---|
| Pedido ajeno accesible (OWASP Broken Access Control) | Verificar permiso sobre **objeto y acción** |
| Inyección SQL | Consulta **parametrizada** y entradas acotadas |
| XSS en observaciones | Salida **codificada** según el contexto |
| Consulta que agota recursos | Paginación, cuotas y tiempos máximos |

## Tácticas y patrones arquitectónicos de seguridad (Bass, cap. 11)

Bass organiza las tácticas en cuatro familias (`Powers, pág. 373`; `Bass cap. 11, págs. 220–224`):

| Familia | Tácticas | Aplicación al caso de pedidos |
|---|---|---|
| **1. Detectar ataques** (*Detect*) | *Detect Intrusion* (comparar tráfico/patrones con firmas IDS/IPS) · *Detect Service Denial* (monitorear volumen/patrones para DoS/DDoS) · *Verify Message Integrity* (firmas digitales, HMAC, checksums) · *Detect Message Delivery Anomalies* / *Detect Message Delay* (`Bass cap. 11, pág. 221`) (secuencias/timestamps alterados) | Observar patrones anormales y denegaciones |
| **2. Resistir ataques** (*Resist*) | *Identify Actors* (IDs, certificados) · *Authenticate Actors* (contraseñas, MFA, tokens) · *Authorize Actors* (RBAC/ABAC sobre recursos y acciones) · *Limit Access* (firewalls, VPCs, ACL) · *Limit Exposure* (reducir superficie, desactivar servicios innecesarios, mínimo privilegio) · *Encrypt Data* (TLS/HTTPS en tránsito, AES en reposo) · *Separate Entities* (sandboxing, contenedores, DMZ) · *Validate Input* (sanitizar contra SQLi/XSS) · *Change Credential Settings* (expiración/rotación de claves) | Autenticar, autorizar, cifrar y limitar exposición. **Para E1, la táctica central es *autorizar actores*** (`Powers, pág. 373`) |
| **3. Reaccionar ante ataques** (*React*) | *Revoke Access* (invalidar sesiones/tokens sospechosos) · *Restrict Login* (rate limiting / lockout ante fallos reiterados) · *Inform Actors* (notificar a administradores/usuarios) | Revocar sesiones, restringir e informar |
| **4. Recuperarse de ataques** (*Recover*) | *Audit* (logs inalterables para auditoría y trazabilidad forense) · *Nonrepudiation* (firmas digitales para impedir negación de acciones) + tácticas de disponibilidad del cap. 4 para restaurar servicios (`Bass cap. 11, pág. 224`) | Usar evidencia y restaurar servicios y datos |

En `Bass cap. 11, págs. 230–231` se destacan cuatro **patrones de seguridad**:

- **Intercepting Validator**: *wrapper* entre origen y destino de mensajes que encapsula sobre todo tácticas de detección (*Verify Message Integrity*, *Detect Intrusion*, etc.); agrega latencia y exige mantener al día las firmas.
- **Intrusion Prevention System (IPS)**: elemento autónomo que analiza patrones globales de uso (no sólo mensajes aislados), cubriendo gran parte de *detect* y *react*; tiene costo de rendimiento y mantenimiento de reglas.
- **Compartmentalization** y **Distributed Responsibility**: ambos combinan *Limit Access* y *Limit Exposure*, el primero aislando información y el segundo aislando actividades (`Bass cap. 11, pág. 231`).

## Autenticación, autorización sobre cada pedido y operación segura

- **Autenticación y protección de sesión** (`Powers, pág. 374`): autenticar es comprobar la identidad declarada usando un proveedor o framework actualizado, aplicando **MFA** en accesos sensibles y protegiendo, expirando y revocando el contexto de sesión.
- **Autorización por objeto y acción** (`Powers, pág. 374`):

```text
actor = validarSesion(solicitud)
exigirRol(actor, CLIENTE)
pedido = buscarConParametros(id = idSolicitado, cliente_id = actor.id)
si pedido no existe: responder 404 genérico
devolver soloCamposPermitidos(pedido)
```

  La identidad sale exclusivamente de la sesión validada (nunca de un parámetro editable por el cliente); para cancelar se exige además estado pendiente (`Powers, pág. 374`).

- **Protección del servidor, datos y pruebas** (`Powers, pág. 375`):
  - **Host y dependencias**: mantener actualizados y ejecutar sin privilegios administrativos.
  - **Red y secretos**: exponer sólo lo necesario y separar credenciales del código.
  - **Registros**: proteger evidencia sin guardar contraseñas ni sesiones en logs.
  - **Recuperación**: aislar copias de respaldo y **ensayar** la restauración.
  - **Pruebas y compromisos**: probar tanto acceso permitido (Ana recibe los campos permitidos de `1042`) como denegado (Bruno o fallo de validación no devuelven datos ni modifican estado) y evaluar compromisos de diseño (**latencia**, **dependencia del proveedor** y **retención de registros**) (`Powers, pág. 375`).

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Atributos de calidad y tácticas](atributos-de-calidad-y-tacticas.md): estructura general de escenarios (6 partes), tácticas vs. patrones y modificabilidad/rendimiento.
- [Calidad de software](calidad-de-software.md): calidad y seguridad como *"dos caras de la misma moneda"* (bugs vs. flaws).
- [Arquitectura de software](arquitectura-de-software.md): vistas, estructuras y qué estilo arquitectónico favorece la seguridad.

