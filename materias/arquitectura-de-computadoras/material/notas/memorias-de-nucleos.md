---
titulo: "Memorias de Núcleos"
tipo: concepto
tags: ["memoria","nucleos","ferrita","magnetismo","memorias","nucleos magneticos","anillos","lectura destructiva"]
temas: ["[[memoria-y-almacenamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [54,55,56,57,58,59,60,61]
veces_en_examen: 0
---

# Memorias de Núcleos

> Memorias que usan núcleos de ferrita con dos estados estables de imantación para representar el 0 y el 1.

Cuando una corriente eléctrica de intensidad suficiente I atraviesa el núcleo, éste se imanta en el sentido dado por la regla de la mano derecha. Esta magnetización tiene un límite propio del material (punto A) denominado punto de saturación, y permanece imantada incluso ante la ausencia de corriente (punto B), denominado punto de inducción remanente o retentividad. Si se envía un impulso -I (fuerza coercitiva), el núcleo se imanta en el otro sentido (punto C), y ante la ausencia de corriente permanece imantado (punto D). A esta inversión del sentido de imantación se la llama basculamiento del núcleo.

El núcleo de ferrita presenta dos estados estables: punto B y punto D. Por convenio, el núcleo está en estado 1 en el punto B y en estado 0 en el punto D.

Esta técnica planteó un gran problema: es inviable. Una memoria de 1 KB con palabras de 8 bits tendría 8.192 anillos y, con dos hilos por cada anillo, necesitaría 16.384 hilos con sus 16.384 circuitos para controlarlos. La solución se busca reduciendo el número de hilos.

## Relacionado

- [[ciclo-de-histeresis]]
- [[anillos-de-ferrita]]

## Lo mencionan

- [[implementacion-2d-seleccion-lineal]]
- [[anillos-de-ferrita]]
- [[implementacion-3d-seleccion-por-corrientes-coincidentes]]
- [[implementacion-2-5d]]
- [[memorias-de-semiconductores]]
