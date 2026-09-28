---
titulo: "Service-Oriented Architecture Pattern"
tipo: concepto
tags: ["soa","arquitectura","servicios","integrabilidad","patron"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [151]
veces_en_examen: 0
---

# Service-Oriented Architecture Pattern

> Patrón de arquitectura que describe una colección de componentes distribuidos que proveen y/o consumen servicios.

En una SOA, los componentes proveedores de servicios y los consumidores de servicios pueden usar diferentes lenguajes de implementación y plataformas. Los servicios son en gran medida entidades independientes: los proveedores y consumidores de servicios suelen desplegarse de forma independiente y a menudo pertenecen a sistemas u organizaciones diferentes. Los componentes tienen interfaces que describen los servicios que solicitan de otros componentes y los servicios que proveen. Los atributos de calidad de un servicio pueden especificarse y garantizarse con un service level agreement (SLA), que a veces puede ser legalmente vinculante. Los componentes realizan sus cálculos solicitando servicios entre sí. La comunicación entre los servicios suele realizarse usando estándares de web services como WSDL (Web Services Description Language) o SOAP (Simple Object Access Protocol). El patrón SOA se relaciona con el patrón de microservice architecture: las arquitecturas de microservicios se asumen para componer un solo sistema y ser gestionadas por una sola organización, mientras que las SOA proveen componentes reutilizables que se asumen heterogéneos y gestionados por organizaciones distintas. Beneficios: los servicios se diseñan para ser usados por una variedad de clientes, lo que los hace más genéricos; los servicios son independientes — el único método de acceso es a través de su interfaz y mensajes sobre una red; y pueden implementarse de manera heterogénea. Tradeoff: las SOA, debido a su heterogeneidad y propiedad distinta, incorporan muchas características de interoperabilidad como WSDL y SOAP, lo que agrega complejidad y overhead.

## Relacionado

- [[microservice-architecture]]
- [[service-level-agreement]]

## Lo mencionan

- [[service-level-agreement]]
