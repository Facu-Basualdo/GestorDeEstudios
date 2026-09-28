---
titulo: "Orientada a Servicios (SOA)"
tipo: concepto
tags: ["soa","servicios","arquitectura","web"]
temas: ["[[servicios-y-microservicios]]"]
fuente: "arq. sistemas distribuidos.pdf"
paginas: [21]
veces_en_examen: 0
---

# Orientada a Servicios (SOA)

> Tipo de arquitectura de sistemas distribuidos, según W3C, en la que servicios independientes pueden ser brindados por cualquier proveedor.

En esencia son servicios que pueden ser brindados por cualquier proveedor y fueron pensados para que los proveedores sean públicos y estén disponibles en cualquier parte de la web. Se abstrae del concepto de componentes para hablar de servicios independientes; una aplicación puede depender de varios servicios y cambiar de proveedor mientras se está ejecutando. Como gran parte de sus servicios se encuentran fuera, la aplicación resulta más liviana. SOA se centra en lo que hace, no en cómo lo hace, así que la entiende la gente del negocio. El servicio debe ser autocontenido (autodescribirse) y tener toda la información necesaria para que otras partes se conecten. Para realizar una petición primero hay que buscar el servicio. Se usó por muy poco tiempo: el que quería conectarse al servicio lo hacía directamente. Se refiere prácticamente a servicios web. En las capas de estándares, SOAP se encargaba del intercambio de mensajes; la interfaz es muy importante para saber qué datos se necesitan; UDDI permitía el descubrimiento de servicios como un catálogo y cayó en desuso rápido. Todavía existen implementaciones de servicios web, pero no está muy en boca. Hay una especialización de SOA que son los microservicios. SOA depende fundamentalmente de un estándar, por lo que no sufre incompatibilidades con las innovaciones tecnológicas.

## Relacionado

- [[microservicios]]
- [[componentes-distribuidos]]
- [[soap]]
- [[uddi]]

## Lo mencionan

- [[peer-to-peer-p2p]]
- [[soap]]
- [[uddi]]
- [[microservicios]]
- [[software-as-a-service-saas]]
