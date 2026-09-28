---
titulo: "Relaciones entre los elementos"
tipo: concepto
tags: ["relaciones","elementos","cliente-servidor","rendimiento","arquitectura"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [367,368,369,370,371,372,373]
veces_en_examen: 0
---

# Relaciones entre los elementos

> Decisiones que se toman al crear estructuras sobre cómo se relacionan los elementos entre sí y con sus propiedades.

La creación de estructuras requiere decidir las relaciones que existen entre los elementos y sus propiedades.

Por ejemplo, al instanciar el patrón cliente-servidor hay que decidir:
- qué clientes se comunican con qué servidores,
- a través de qué puertos y protocolos,
- si la comunicación es síncrona o asíncrona,
- quién inicia las interacciones,
- cuánta información se transfiere y a qué ritmo.

Estas decisiones pueden tener un impacto significativo en el logro de atributos de calidad como el rendimiento.

## Relacionado

- [[propiedades-de-los-elementos]]

## Lo mencionan

- [[design-rationale]]
