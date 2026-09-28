---
titulo: "Restrict Login"
tipo: concepto
tags: ["seguridad","tacticas","login","reaccion"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [223]
veces_en_examen: 0
---

# Restrict Login

> Táctica de reacción que limita el acceso desde una computadora ante intentos de inicio de sesión fallidos repetidos.

Muchos sistemas limitan el acceso desde una computadora si hay intentos fallidos repetidos para acceder a una cuenta desde esa computadora. Los usuarios legítimos pueden equivocarse al iniciar sesión, por lo que la limitación puede durar solo un período. En algunos casos, el sistema duplica el período de bloqueo después de cada intento fallido.


## Lo mencionan

- [[react-to-attacks]]
