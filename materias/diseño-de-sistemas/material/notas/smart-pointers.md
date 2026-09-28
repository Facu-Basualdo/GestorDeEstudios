---
titulo: "Smart Pointers"
tipo: concepto
tags: ["disponibilidad","prevencion-de-fallas","smart-pointers","tacticas"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [85,86,94,95,96,97,98,99]
veces_en_examen: 0
---

# Smart Pointers

> Táctica de prevención de fallas que evita excepciones mediante la verificación de límites de los punteros y la liberación automática de recursos.

Los smart pointers evitan excepciones haciendo bounds checking sobre los punteros y asegurando que los recursos se desasignen automáticamente cuando ningún dato los referencia, evitando así resource leaks. Se usan frente a fallas como dangling pointers o violaciones de acceso a semáforos.


## Lo mencionan

- [[exception-prevention]]
