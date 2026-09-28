---
titulo: "Low Coupling"
tipo: concepto
tags: ["grasp","acoplamiento","cambio","mantenibilidad","diseno-oo","diseno","responsabilidades","patron"]
temas: ["[[patrones-grasp]]"]
fuente: "Cap17-UMLyPatrones.pdf"
paginas: [14,29,32]
veces_en_examen: 0
---

# Low Coupling

> Patrón (principio) de GRASP que asigna una responsabilidad de modo que el acoplamiento entre elementos se mantenga bajo.

Problema: cómo soportar baja dependencia, bajo impacto ante cambios y mayor reutilización.

Solución: asignar una responsabilidad de modo que el acoplamiento se mantenga bajo; usar este principio para evaluar alternativas.

Ejemplo: en el caso NextGen, para crear una instancia de Payment y asociarla a Sale, Creator sugiere Register como candidato. Register podría enviar `addPayment(p)` a Sale. Pero esa asignación agrega acoplamiento de Register hacia Payment. Una alternativa es que Sale cree el Payment: no aumenta el acoplamiento porque Sale ya debe acoplarse a Payment. Desde el punto de vista del acoplamiento, se prefiere la opción en la que Sale crea el Payment.

Discusión:

- Low Coupling es un principio para tener en cuenta durante todas las decisiones de diseño; es un objetivo subyacente a considerar continuamente.
- En la práctica, el nivel de acoplamiento no puede considerarse aislado de otros principios como Expert y High Cohesion.
- Una subclase está fuertemente acoplada a su superclase; hay que pensar cuidadosamente cualquier decisión de derivar de una superclase. Por ejemplo, crear una superclase abstracta `PersistentObject` acopla fuertemente los objetos de dominio a un servicio técnico particular y mezcla distintos intereses arquitectónicos, aunque tiene la ventaja de la herencia automática del comportamiento de persistencia.
- No se puede obtener una medida absoluta de cuándo el acoplamiento es demasiado alto; lo importante es poder medir el grado actual y evaluar si incrementarlo traerá problemas.
- Las clases inherentemente genéricas y con alta probabilidad de reutilización deberían tener un acoplamiento especialmente bajo.
- El caso extremo de Low Coupling (sin acoplamiento entre clases) ofende la metáfora central de la tecnología de objetos: un sistema de objetos conectados que se comunican mediante mensajes. Llevado al exceso, produce un mal diseño con pocos objetos activos incohesivos, complejos y sobrecargados, y muchos objetos pasivos con acoplamiento cero que actúan como repositorios de datos.

Contraindicaciones: el acoplamiento alto a elementos estables y generalizados rara vez es un problema. Por ejemplo, una aplicación J2EE puede acoplarse de forma segura a las bibliotecas de Java (`java.util`, etc.), porque son estables y están muy difundidas.

Beneficios:

- No ser afectado por cambios en otros componentes.
- Simple de entender aisladamente.
- Conveniente de reutilizar.

Contexto: el acoplamiento y la cohesión son principios fundamentales en diseño; Larry Constantine, también fundador del diseño estructurado en los años 1970, fue el principal responsable en los años 1960 de identificar y comunicar el acoplamiento y la cohesión como principios críticos [Constantine68, CMS74].

## Relacionado

- [[information-expert]]
- [[uml]]
- [[coupling]]
- [[creator]]
- [[high-cohesion]]
- [[grasp]]

## Lo mencionan

- [[grasp]]
- [[information-expert]]
- [[creator]]
- [[controller]]
- [[cohesion]]
- [[high-cohesion]]
- [[coupling]]
- [[pick-your-battles]]
