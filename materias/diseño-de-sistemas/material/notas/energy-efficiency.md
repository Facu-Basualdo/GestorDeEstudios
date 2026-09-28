---
titulo: "Energy Efficiency"
tipo: concepto
tags: ["calidad","energia","arquitectura","sostenibilidad","iot","nube"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [121,122]
veces_en_examen: 0
---

# Energy Efficiency

> Es un atributo de calidad que se refiere a la utilización efectiva de los recursos computacionales para reducir el consumo de energía del sistema.

La eficiencia energética se ha vuelto un atributo de calidad relevante por la dominancia de los dispositivos móviles, la adopción del Internet of Things (IoT) y la ubicuidad de los servicios en la nube. En 2016 se reportó que los data centers a nivel global consumían más energía (por 40%) que todo el Reino Unido, alrededor del 3% de la energía consumida mundialmente; estimaciones más recientes la ubican hasta en 10%. Los arquitectos deben balancear la eficiencia energética con performance, disponibilidad, modificabilidad y tiempo al mercado.

Es importante considerarla como atributo de primera clase por estas razones:

1. Un enfoque arquitectónico es necesario para controlar cualquier atributo de calidad importante.
2. La mayoría de los arquitectos y desarrolladores no la reconocen como atributo de calidad ni saben cómo reunir sus requisitos y analizarlos.
3. Faltan conceptos de diseño adecuados (modelos, patrones, tácticas) para diseñar y gestionar la eficiencia energética en runtime.

En la nube, el escalado dinámico es una competencia central y la energía no suele ser una preocupación salvo en escenarios de desastre; en dispositivos móviles y algunos IoT es una preocupación diaria. En todos los contextos hay tradeoffs entre eficiencia energética y performance, disponibilidad, usabilidad, buildability y modificabilidad.

## Relacionado

- [[performance]]
- [[availability]]
- [[modifiability]]

## Lo mencionan

- [[energy-efficiency-general-scenario]]
- [[system-quality-attributes]]
