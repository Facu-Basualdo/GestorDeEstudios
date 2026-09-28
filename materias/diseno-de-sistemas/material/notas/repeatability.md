---
titulo: "Repeatability"
tipo: concepto
tags: ["repetibilidad","build","testing","pipeline","artefactos"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [101]
veces_en_examen: 0
---

# Repeatability

> Repeatability (repetibilidad) es obtener el mismo resultado al ejecutar la misma acción con los mismos artefactos.

No es tan fácil como parece. Por ejemplo, si el build process busca la última versión de una librería, la próxima vez que se ejecute puede haber salido una versión nueva. Otro ejemplo: si un test modifica valores en la base de datos y no restaura los valores originales, los tests siguientes pueden no producir los mismos resultados.

## Relacionado

- [[deployment-pipeline]]

