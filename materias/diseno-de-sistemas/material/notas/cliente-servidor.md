---
titulo: "Cliente/Servidor"
tipo: concepto
tags: ["arquitectura","cliente-servidor","sistemas-distribuidos","balanceo-de-carga","patron","distribucion","escalabilidad","distribuidos","servicios"]
temas: ["[[cliente-servidor-y-sus-variantes]]","[[patrones-arquitectonicos]]"]
fuente: "arquitectura_compressed.pdf"
paginas: [22,41]
veces_en_examen: 0
---

# Cliente/Servidor

> Patrón arquitectónico en el que un servidor proporciona servicios simultáneamente a múltiples clientes distribuidos.

El patrón cliente-servidor consiste en un servidor que proporciona servicios simultáneamente a múltiples clientes distribuidos. El ejemplo más común es un servidor web que proporciona información a múltiples usuarios simultáneos de un sitio web.

Las interacciones entre un servidor y sus clientes siguen esta secuencia:
- Descubrimiento: la comunicación la inicia un cliente, que utiliza un servicio de descubrimiento para determinar la ubicación del servidor. El servidor responde al cliente utilizando un protocolo acordado.
- Interacción: el cliente envía solicitudes al servidor. El servidor procesa las solicitudes y responde.

Puntos a destacar:
- El servidor puede tener múltiples instancias si el número de clientes crece más allá de la capacidad de una sola instancia.
- Si el servidor no mantiene estado con respecto a los clientes, cada solicitud se trata de forma independiente.
- Si el servidor mantiene estado, cada solicitud debe identificar al cliente, el cliente debe enviar un mensaje de «fin de sesión» para que el servidor elimine los recursos asociados, y el servidor puede agotar el tiempo de espera si el cliente no envía una solicitud en un tiempo determinado.

Ventajas:
- La conexión entre servidor y clientes se establece dinámicamente; el servidor no tiene conocimiento previo de sus clientes (bajo acoplamiento).
- No existe acoplamiento entre los clientes.
- El número de clientes puede escalar fácilmente y la funcionalidad del servidor también puede escalar.
- Los clientes y servidores pueden evolucionar de forma independiente.
- Los servicios comunes pueden compartirse entre varios clientes.
- La interacción con el usuario se limita al cliente.

Desventajas:
- La comunicación se produce a través de una red, posiblemente Internet; los mensajes pueden retrasarse por congestión y degradar o hacer imprevisible el rendimiento.
- Deben adoptarse medidas especiales para lograr la seguridad (confidencialidad) y mantener la integridad en redes compartidas por otras aplicaciones.

## Relacionado

- [[estilos-arquitectonicos]]
- [[maestro-esclavo]]
- [[escalabilidad]]
- [[performance]]

## Lo mencionan

- [[diagrama-de-despliegue]]
- [[arquitectura-de-sistemas-distribuidos]]
- [[estructuras-de-componentes-y-conectores]]
- [[diseno-arquitectonico]]
- [[decisiones-diseno-arquitectonico]]
