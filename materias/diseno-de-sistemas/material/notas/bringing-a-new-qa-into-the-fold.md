---
titulo: "Dealing with \"X-Ability\": bringing a new QA into the fold"
tipo: concepto
tags: ["atributos-de-calidad","x-ability","metodo","arquitectura"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [267]
veces_en_examen: 0
---

# Dealing with "X-Ability": bringing a new QA into the fold

> Estrategia para trabajar con un atributo de calidad sin un cuerpo de conocimiento establecido, que combina captura de escenarios, modelado del QA y ensamblaje de enfoques de diseño.

Se aplica cuando un arquitecto debe lidiar con un QA como "development distributability", "manageability" o "Iowability", para los cuales no existe un portfolio consolidado como el de los capítulos 4-13.

El proceso tiene tres pasos:

1. **Capture scenarios for the new quality attribute**: entrevistar a los stakeholders, refinar el QA en subatributos, crear escenarios específicos y generalizarlos.
2. **Model the quality attribute**: construir o encontrar un modelo conceptual que identifique los parámetros a los que el QA es sensible y las características arquitectónicas que influyen en esos parámetros.
3. **Assemble design approaches for the new quality attribute**: enumerar los parámetros del modelo y, para cada uno, listar las características y mecanismos arquitectónicos que pueden afectarlo.

El resultado es una lista finita y razonablemente pequeña de mecanismos para controlar el QA.

## Relacionado

- [[capture-scenarios-for-the-new-quality-attribute]]
- [[quality-attribute-model]]
- [[assemble-design-approaches-for-the-new-quality-attribute]]

