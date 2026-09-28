---
titulo: "Substitution"
tipo: concepto
tags: ["safety","tactica","hardware","sustitucion","proteccion"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [201,202,203,204,205,206,209,210]
veces_en_examen: 0
---

# Substitution

> Substitution es una táctica de safety que emplea mecanismos de protección, a menudo basados en hardware, para funciones de software potencialmente peligrosas.

Por ejemplo, se pueden usar dispositivos de protección por hardware como watchdogs, monitores e interlocks en lugar de versiones de software. Las versiones de software de estos mecanismos pueden quedarse sin recursos, mientras que un dispositivo de hardware separado provee y controla sus propios recursos. Substitution suele ser beneficiosa solo cuando la función reemplazada es relativamente simple.

## Relacionado

- [[unsafe-state-avoidance]]

## Lo mencionan

- [[unsafe-state-avoidance]]
