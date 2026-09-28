---
titulo: "Step 3: Choose One or More Elements of the System to Refine"
tipo: concepto
tags: ["add","paso-3","elementos","refinamiento"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [358]
veces_en_examen: 1
---

# Step 3: Choose One or More Elements of the System to Refine

> El Paso 3 de ADD consiste en elegir uno o más elementos del sistema, como módulos o componentes, que se van a refinar para satisfacer los drivers seleccionados.

Satisfacer los drivers requiere tomar decisiones de diseño que se manifiestan en estructuras arquitectónicas. Estas estructuras están compuestas por elementos interrelacionados—módulos y/o componentes—que generalmente se obtienen refinando otros elementos identificados en iteraciones anteriores. Refinar puede significar descomponer en elementos más finos (top-down), combinar elementos en elementos más gruesos (bottom-up) o mejorar elementos previamente identificados. En desarrollo greenfield se puede comenzar estableciendo el contexto del sistema y seleccionando el único elemento disponible, el sistema mismo, para refinarlo por descomposición. En sistemas existentes, normalmente se refinan elementos identificados en iteraciones previas; puede ser necesario entender la arquitectura as-built mediante “detective work”, ingeniería reversa o conversaciones con desarrolladores. En algunos casos puede invertirse el orden de los pasos 2 y 3.

## Relacionado

- [[architectural-driver]]
- [[design-iteration]]

## Lo mencionan

- [[examen-55]]
