---
titulo: "Principio de sustitución de Liskov"
tipo: concepto
tags: ["liskov","solid","herencia","polimorfismo","subclases"]
temas: ["[[principios-solid]]"]
fuente: "SOLID y GRASP - Buenas practicas hacia el exito en el desarrollo de software (1).pdf"
paginas: [13,14,15,16]
veces_en_examen: 0
---

# Principio de sustitución de Liskov

> Las funciones que utilicen punteros o referencias a clases base deben ser capaces de usar objetos de clases derivadas sin saberlo.

Enunciado original: "Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it."

Traducción literal: "Las funciones que utilicen punteros o referencias a clases base deben ser capaces de usar objetos de clases derivadas sin saberlo."

Interpretación: Las subclases deben comportarse adecuadamente cuando sean usadas en lugar de sus clases base.

Ejemplo: Se presenta el caso de un cuadrado que hereda de rectángulo, pero al modificar alto y ancho por separado, el cuadrado no se comporta correctamente (porque sus lados se igualan). La solución es crear una interfaz común (IRectangular) de la que hereden tanto rectángulo como cuadrado, evitando la herencia problemática.


