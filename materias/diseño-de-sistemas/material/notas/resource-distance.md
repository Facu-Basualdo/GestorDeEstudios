---
titulo: "Resource Distance"
tipo: concepto
tags: ["distancia","recursos","dependencias","integracion"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [135]
veces_en_examen: 0
---

# Resource Distance

> La distancia de recursos es la que existe cuando los elementos que cooperan deben acordar suposiciones sobre recursos compartidos, como dispositivos, memoria o capacidad de comunicación.

Ejemplos de distancia de recursos: un elemento requiere acceso exclusivo a un dispositivo mientras que otro espera acceso compartido; un elemento necesita 12 GB de memoria para operar de forma óptima y otro necesite 10 GB, pero la CPU objetivo tiene solo 16 GB de memoria física; o tres elementos producen datos simultáneamente a 3 Mbps cada uno, pero el canal de comunicación ofrece una capacidad pico de solo 5 Mbps.

Aunque esta distancia puede verse relacionada con la distancia de comportamiento, debe analizarse conscientemente.

## Relacionado

- [[behavioral-semantic-distance]]

## Lo mencionan

- [[distance]]
