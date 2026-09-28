---
titulo: "Step 5: Instantiate Architectural Elements, Allocate Responsibilities, and Define Interfaces"
tipo: concepto
tags: ["add","proceso","diseno","elementos","interfaces"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [359]
veces_en_examen: 0
---

# Step 5: Instantiate Architectural Elements, Allocate Responsibilities, and Define Interfaces

> Paso de ADD en el que se instancian elementos a partir de los design concepts seleccionados, se les asignan responsabilidades y se definen las interfaces que los conectan.

Una vez seleccionado un design concept, hay que decidir cómo instanciar elementos. Por ejemplo, si se elige el layers pattern, hay que decidir cuántas capas se usarán y sus relaciones permitidas, porque el patrón no las prescribe. Luego se asignan responsabilidades a cada elemento: en una app suelen estar las capas presentation, business y data; la capa presentation maneja las interacciones de usuario, la business maneja la lógica de aplicación y las reglas de negocio, y la data maneja la persistencia y consistencia de los datos. Los elementos además deben conectarse para colaborar: requieren relaciones e intercambio de información a través de una interfaz.

## Relacionado

- [[design-concept]]
- [[interface]]

## Lo mencionan

- [[step-6-sketch-views-and-record-design-decisions]]
- [[design-decision]]
