---
titulo: "Restrict Dependencies"
tipo: concepto
tags: ["modificabilidad","acoplamiento","dependencias","arquitectura-en-capas"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [162]
veces_en_examen: 0
---

# Restrict Dependencies

> Restrict dependencies es una tactica que limita los modulos con los que un modulo interactua o de los que depende.

En la practica se implementa restringiendo la visibilidad de un modulo (cuando los desarrolladores no pueden ver una interfaz, no pueden usarla) y mediante autorizacion (restringiendo el acceso solo a modulos autorizados). La tactica se ve en arquitecturas en capas, en las que una capa solo puede usar capas inferiores (a veces solo la siguiente), y con wrappers, donde las entidades externas solo pueden ver (y por lo tanto depender de) el wrapper, y no la funcionalidad interna que envuelve.

## Relacionado

- [[reduce-coupling]]
- [[wrapper]]

## Lo mencionan

- [[reduce-coupling]]
