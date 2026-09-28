---
titulo: "Client-Server Pattern"
tipo: concepto
tags: ["patron","arquitectura","cliente-servidor","distribuidos"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [165]
veces_en_examen: 0
---

# Client-Server Pattern

> El patron client-server consiste en un servidor que provee servicios simultaneamente a multiples clientes distribuidos.

El ejemplo mas comun es un servidor web que provee informacion a multiples usuarios simultaneos de un sitio web. Las interacciones siguen esta secuencia:

**Discovery**:
- La comunicacion la inicia un cliente, que usa un servicio de discovery para determinar la ubicacion del servidor.
- El servidor responde al cliente usando un protocolo acordado.

**Interaction**:
- El cliente envia solicitudes al servidor.
- El servidor procesa las solicitudes y responde.

Puntos a notar:
- El servidor puede tener multiples instancias si el numero de clientes crece mas alla de la capacidad de una instancia.
- Si el servidor es stateless respecto de los clientes, cada solicitud se trata de forma independiente.
- Si el servidor mantiene estado respecto de los clientes, cada solicitud debe identificar al cliente; el cliente debe enviar un mensaje de 'fin de sesion' para que el servidor libere recursos; y el servidor puede hacer timeout si el cliente no envia una solicitud en un tiempo especificado.

**Beneficios**:
- La conexion entre servidor y clientes se establece dinamicamente; el servidor no conoce a sus clientes a priori, hay bajo acoplamiento entre servidor y clientes.
- No hay acoplamiento entre los clientes.
- El numero de clientes puede escalar facilmente, limitado solo por la capacidad del servidor; la funcionalidad del servidor tambien puede escalar.
- Los clientes y los servidores pueden evolucionar de forma independiente.
- Los servicios comunes pueden compartirse entre multiples clientes.
- La interaccion con el usuario queda aislada en el cliente.

**Tradeoffs**:
- La comunicacion ocurre a traves de una red, quizas Internet; los mensajes pueden demorarse por congestion de red, degradando o volviendo impredecible el rendimiento.
- Para clientes que se comunican con el servidor a traves de una red compartida por otras aplicaciones, deben tomarse provisiones especiales para lograr seguridad (especialmente confidencialidad) y mantener la integridad.

## Relacionado

- [[discovery]]
- [[patterns-for-modifiability]]
- [[coupling]]

## Lo mencionan

- [[patterns-for-modifiability]]
