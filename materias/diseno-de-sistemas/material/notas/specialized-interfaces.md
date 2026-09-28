---
titulo: "Specialized Interfaces"
tipo: concepto
tags: ["testability","interfaces","pruebas","control","observabilidad"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [239]
veces_en_examen: 0
---

# Specialized Interfaces

> Interfaces de prueba especializadas que permiten controlar o capturar valores de variables de un componente, ya sea mediante un test harness o durante la ejecución normal.

Incluyen:
- Métodos set y get para variables, modos o atributos importantes.
- Un método report que devuelve el estado completo del objeto.
- Un método reset que fija el estado interno a un estado especificado.
- Un método para activar salida verbosa, niveles de event logging, instrumentación de performance o monitoreo de recursos.

Estas interfaces deben identificarse claramente o mantenerse separadas de las interfaces de funcionalidad requerida, para poder eliminarlas si es necesario. En sistemas de performance crítica o safety-critical es problemático distribuir código distinto al probado, por lo que esta estrategia es más efectiva en otros tipos de sistemas.

## Relacionado

- [[control-and-observe-system-state]]
- [[test-harness]]

## Lo mencionan

- [[control-and-observe-system-state]]
