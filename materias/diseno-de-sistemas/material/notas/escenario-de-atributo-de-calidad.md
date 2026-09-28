---
titulo: "Escenario de atributo de calidad"
tipo: concepto
tags: ["atributos","calidad","escenarios","evaluacion","arquitectura"]
temas: ["[[atributos-de-calidad]]"]
fuente: "arquitectura_compressed.pdf"
paginas: [14]
veces_en_examen: 0
---

# Escenario de atributo de calidad

> Un escenario de atributo de calidad es una especificación precisa de un atributo de calidad con el objetivo de evaluar la arquitectura.

Que un sistema sea modificable no dice nada por sí solo; hay que ser específico al referirse a los atributos de calidad. Las partes de un escenario de atributo de calidad son:
- Fuente: de donde proviene el estímulo, la falla o lo que sea.
- Artefacto: el elemento en el que impacta; puede ser el sistema completo, una organización o un componente.
- Entorno: puede estar funcionando normalmente, ya tener fallas, o incluso no estar andando.
- Estímulo: lo recibe algún artefacto; conviene ser preciso porque no es lo mismo cambiar algo de la interfaz que de la lógica de respuesta o cálculo.
- Respuesta: cómo va a responder el sistema ante una falla; el estímulo se procesa y se genera una respuesta según las responsabilidades asignadas.
- Medición: si no se puede medir, no se puede saber si la decisión tomada es correcta.

El objetivo del escenario es evaluar la arquitectura.

## Relacionado

- [[atributos-de-calidad]]
- [[componente]]
- [[arquitectura-de-software]]

