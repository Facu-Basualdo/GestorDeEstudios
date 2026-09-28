---
titulo: "Architecture Allows Incorporation of Independently Developed Elements"
tipo: concepto
tags: ["arquitectura-software","integracion","componentes","open-system"]
temas: ["[[fundamentos-de-la-arquitectura-de-software]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [54]
veces_en_examen: 0
---

# Architecture Allows Incorporation of Independently Developed Elements

> La arquitectura permite componer o ensamblar elementos que probablemente fueron desarrollados por separado, definiendo cómo interactúan con su entorno, cómo reciben y ceden control, qué datos consumen y producen, cómo acceden a datos y qué protocolos usan.

A diferencia de los paradigmas anteriores centrados en la programación y medidos en líneas de código, el desarrollo basado en arquitectura a menudo se enfoca en componer o ensamblar elementos desarrollados independientemente. Esto es posible porque la arquitectura define los elementos que pueden incorporarse al sistema y constriñe los reemplazos o adiciones.

Ejemplos de elementos desarrollados independientemente:

- Componentes comerciales off-the-shelf
- Software de código abierto
- Aplicaciones públicas disponibles
- Servicios en red

Beneficios: menor tiempo de mercado, mayor confiabilidad, menor costo y flexibilidad.

La complejidad de integrar muchos elementos independientes dio origen a herramientas como Apache Ant, Apache Maven, MSBuild y Jenkins. Un open system es uno que define estándares para los elementos de software; su meta es evitar el vendor lock-in.

## Relacionado

- [[open-system]]
- [[vendor-lock-in]]

