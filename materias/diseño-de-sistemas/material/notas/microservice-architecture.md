---
titulo: "Microservice Architecture"
tipo: concepto
tags: ["arquitectura","microservicios","despliegue","patron"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [113]
veces_en_examen: 0
---

# Microservice Architecture

> Patrón de arquitectura que estructura el sistema como una colección de servicios pequeños e independientemente desplegables que se comunican únicamente mediante mensajes a través de interfaces de servicio.

El patrón no permite ninguna otra forma de comunicación entre procesos: ni enlace directo, ni lecturas directas del almacén de datos de otro equipo, ni modelo de memoria compartida, ni back-doors. Los servicios suelen ser stateless y relativamente pequeños porque los desarrolla un equipo único y pequeño. En Amazon, la regla de las "dos pizzas" limita el tamaño del equipo: no debe ser más grande de lo que se puede alimentar con dos pizzas. Las dependencias entre servicios son acíclicas. Una parte integral del patrón es un discovery service para enrutar mensajes apropiadamente.

Beneficios:
- Se reduce el time to market: una modificación a un servicio puede desplegarse sin coordinarse con otros equipos.
- Cada equipo puede elegir su propia tecnología, siempre que soporte paso de mensajes.
- Los servicios se escalan más fácilmente que las aplicaciones de grano grueso.

Tradeoffs:
- Mayor overhead que la comunicación en memoria, porque toda comunicación es por red.
- Menos adecuado para transacciones complejas por la dificultad de sincronizar sistemas distribuidos.
- Costo de mantener tecnologías heterogéneas y la base de experiencia requerida.
- El control intelectual del sistema total puede ser difícil por la cantidad de microservicios.
- Diseñar responsabilidades y granularidad apropiadas es una tarea formidable.
- La arquitectura debe diseñarse para permitir el despliegue independiente de versiones.

Organizaciones que lo emplearon: Google, Netflix, PayPal, Twitter, Facebook y Amazon.

## Relacionado

- [[service-mesh]]

## Lo mencionan

- [[continuous-deployment]]
- [[service-oriented-architecture-pattern]]
