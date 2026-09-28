---
titulo: "Nonlocal change"
tipo: concepto
tags: ["cambios","no-local","modificabilidad"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [46]
veces_en_examen: 0
---

# Nonlocal change

> Un nonlocal change es un cambio que requiere modificar varios elementos pero deja intacto el enfoque arquitectónico subyacente.

Un ejemplo es agregar una nueva regla de negocio a un módulo de lógica de precios, luego agregar nuevos campos a la base de datos que esa regla requiere y revelar los resultados de aplicarla en la interfaz de usuario. Los nonlocal changes no son tan deseables como los locales, pero tienen la virtud de que generalmente pueden escalonarse de manera ordenada en el tiempo.

## Relacionado

- [[modifiability]]
- [[local-change]]

## Lo mencionan

- [[modifiability]]
- [[architectural-change]]
