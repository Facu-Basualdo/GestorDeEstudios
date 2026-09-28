---
titulo: "Exception Prevention"
tipo: concepto
tags: ["excepciones","prevencion","punteros","tacticas"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [84]
veces_en_examen: 0
---

# Exception Prevention

> Táctica que agrupa técnicas para impedir que ocurran excepciones en el sistema.

Incluye el uso de clases de excepción, que permiten recuperarse transparentemente de excepciones del sistema. Otros ejemplos son el código de corrección de errores (usado en telecomunicaciones), los tipos de datos abstractos como los smart pointers y el uso de wrappers para prevenir fallas como punteros colgantes o violaciones de acceso a semáforos. Los smart pointers previenen excepciones haciendo bounds checking sobre los punteros y asegurando que los recursos se liberen automáticamente cuando ningún dato los referencia, evitando así pérdidas de recursos.

## Relacionado

- [[exception-handling]]
- [[smart-pointers]]
- [[wrapper]]

## Lo mencionan

- [[prevent-faults]]
