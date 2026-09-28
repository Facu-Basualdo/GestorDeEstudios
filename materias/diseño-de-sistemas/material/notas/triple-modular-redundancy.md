---
titulo: "Triple Modular Redundancy"
tipo: concepto
tags: ["disponibilidad","redundancia","votacion","patron"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [94]
veces_en_examen: 0
---

# Triple Modular Redundancy

> Patrón de disponibilidad que emplea tres componentes que hacen lo mismo y un votador que detecta inconsistencias entre sus salidas.

Triple modular redundancy (TMR) es una implementación ampliamente usada de la voting tactic. Emplea tres componentes que hacen lo mismo. Cada componente recibe entradas idénticas y envía su salida a la lógica de votación, que detecta cualquier inconsistencia entre los tres estados de salida. Ante una inconsistencia, el votador reporta una falla y decide qué salida usar; diferentes instanciaciones usan diferentes reglas de decisión, como dejar que la mayoría gobierne o elegir un promedio calculado de las salidas dispares. También son posibles versiones con 5, 19 o 53 componentes redundantes, aunque en la mayoría de los casos 3 componentes son suficientes para asegurar un resultado confiable.


