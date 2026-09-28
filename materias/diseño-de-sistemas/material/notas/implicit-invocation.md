---
titulo: "Implicit Invocation"
tipo: concepto
tags: ["invocacion-implicita","publish-subscribe","eventos","desacoplamiento"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [168]
veces_en_examen: 0
---

# Implicit Invocation

> La invocación implícita es el mecanismo por el cual la publicación de un mensaje provoca la invocación de métodos en otros componentes sin que el publicador los invoque directamente.

En el patrón publish-subscribe, el componente que publica un mensaje no invoca directamente a ningún otro componente. En su lugar, publica el mensaje en un evento o topic y el bus de eventos notifica a los componentes registrados. La publicación del mensaje causa así una invocación implícita de métodos en otros componentes.

## Relacionado

- [[publish-subscribe-pattern]]
- [[event-bus]]

## Lo mencionan

- [[publish-subscribe-pattern]]
