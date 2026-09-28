---
titulo: "Representational State Transfer (REST)"
tipo: concepto
tags: ["rest","web","protocolo","http","arquitectura"]
temas: ["[[diseno-de-interfaces-y-comunicacion]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [280]
veces_en_examen: 0
---

# Representational State Transfer (REST)

> Representational State Transfer (REST) es un protocolo para servicios web que creció del protocolo original de la World Wide Web y comprende un conjunto de seis restricciones sobre las interacciones entre elementos.

Las seis restricciones son:
- **Uniform interface**: todas las interacciones usan la misma forma (típicamente HTTP). Los recursos se especifican mediante URIs. Las convenciones de nombres deben ser consistentes y, en general, se debe seguir el principio de menor sorpresa.
- **Client-server**: los actores son clientes y los proveedores de recursos son servidores, usando el patrón client-server.
- **Stateless**: todas las interacciones cliente-servidor son sin estado; el cliente no debe asumir que el servidor retiene información sobre la última solicitud. Por eso, la autorización se codifica en un token que se pasa con cada solicitud.
- **Cacheable**: se aplica caché a los recursos cuando corresponde, tanto del lado del servidor como del cliente.
- **Tiered system architecture**: el 'servidor' puede dividirse en múltiples elementos independientes, que pueden desplegarse de forma independiente; por ejemplo, la lógica de negocio y la base de datos.
- **Code on demand (opcional)**: el servidor puede proveer código al cliente para que lo ejecute; JavaScript es un ejemplo.

## Relacionado

- [[http]]
- [[principle-of-least-surprise]]

## Lo mencionan

- [[interaction-styles]]
- [[http]]
