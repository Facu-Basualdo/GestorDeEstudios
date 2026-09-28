---
titulo: "Validate Input"
tipo: concepto
tags: ["seguridad","tacticas","validacion","entrada"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [222]
veces_en_examen: 0
---

# Validate Input

> Táctica que limpia y verifica la entrada al sistema como una línea temprana de defensa.

Se implementa con un framework de seguridad o clase de validación que realiza acciones como filtrado, canonicalización y sanitización de la entrada. Es la principal forma de defensa contra ataques como SQL injection (inserción de código malicioso en sentencias SQL) y cross-site scripting (XSS) (código malicioso de un servidor que se ejecuta en un cliente).


## Lo mencionan

- [[resist-attacks]]
