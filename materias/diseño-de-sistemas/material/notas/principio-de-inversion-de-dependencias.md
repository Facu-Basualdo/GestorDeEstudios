---
titulo: "Principio de Inversión de Dependencias"
tipo: concepto
tags: ["solid","dependencias","inyeccion-de-dependencias","abstracciones"]
temas: ["[[principios-solid]]"]
fuente: "SOLID y GRASP - Buenas practicas hacia el exito en el desarrollo de software (1).pdf"
paginas: [20,21,22]
veces_en_examen: 0
---

# Principio de Inversión de Dependencias

> Los módulos de alto nivel no deberían depender de módulos de bajo nivel. Ambos deberían depender de abstracciones. Las abstracciones no deberían depender de los detalles. Los detalles deberían depender de las abstracciones.

Enunciado original: "A. High level modules should not depend upon low level modules. Both should depend upon abstractions. B. Abstractions should not depend upon details. Details should depend upon abstractions."

Traducción literal: "A. Módulos de alto nivel no deberían depender de módulos de bajo nivel. Ambos deberían depender de abstracciones. B. Las abstracciones no deberían depender de los detalles. Los detalles deberían depender de las abstracciones."

Interpretación: Para conseguir robustez y flexibilidad y para posibilitar la reutilización haz que tu código dependa de abstracciones y no de concreciones, utiliza muchas interfaces y clases abstractas y expón por constructor o por parámetros las dependencias.

Ejemplo: Clase House que depende directamente de Door y Window concretas. Solución: usar interfaces IDoor e IWindow e inyectar las dependencias por constructor (Dependency Injection).


