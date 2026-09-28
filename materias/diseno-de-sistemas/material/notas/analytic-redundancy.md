---
titulo: "Analytic Redundancy"
tipo: concepto
tags: ["disponibilidad","deteccion","votacion","redundancia","avionica","safety","tactica","diversidad"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [78,203]
veces_en_examen: 0
---

# Analytic Redundancy

> Es un esquema de voting que permite diversidad no solo en los lados privados de los componentes, sino también en sus entradas y salidas.

Está pensado para tolerar errores de especificación mediante el uso de especificaciones de requerimientos separadas. En sistemas embebidos, la analytic redundancy ayuda cuando algunas fuentes de entrada probablemente no estén disponibles en ciertos momentos. Por ejemplo, los programas de aviónica tienen múltiples formas de calcular la altitud de la aeronave: usando presión barométrica, con el altímetro de radar, y geométricamente usando la distancia en línea recta y el ángulo de visión hacia un punto en el suelo. El mecanismo de votación usado con analytic redundancy necesita ser más sofisticado que solo dejar que decida la mayoría o calcular un promedio simple; puede tener que entender qué sensores son confiables (o no) y puede producir un valor de mayor fidelidad que cualquier componente individual, mezclando y suavizando valores individuales a lo largo del tiempo.

## Relacionado

- [[voting]]

## Lo mencionan

- [[voting]]
- [[redundancy]]
