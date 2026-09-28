---
titulo: "Principio de Segregación de Interfaces"
tipo: concepto
tags: ["solid","interfaces","segregacion","cohesion"]
temas: ["[[principios-solid]]"]
fuente: "SOLID y GRASP - Buenas practicas hacia el exito en el desarrollo de software (1).pdf"
paginas: [17,18,19]
veces_en_examen: 0
---

# Principio de Segregación de Interfaces

> Los clientes no deberían ser forzados a depender de interfaces que no utilizan.

Enunciado original: "Clients should not be forced to depend upon interfaces that they do not use."

Traducción literal: "Los clientes no deberían ser forzados a depender de interfaces que no utilizan."

Interpretación: Mantén las interfaces pequeñas y cohesivas, que puedan coexistir unas con otras.

Ejemplo: Se tiene una interfaz ITrabajador con métodos Trabajar, Descansar, Comer. Implementaciones como Robot se ven forzadas a implementar métodos que no necesitan. Solución: segregar la interfaz en interfaces más pequeñas (ITrabajar, IDescansar, IComer) que las clases implementan según necesidad.


