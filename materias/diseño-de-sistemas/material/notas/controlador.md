---
titulo: "Controlador"
tipo: concepto
tags: ["grasp","controlador","mvc","capa de aplicacion","interfaz","sistema"]
temas: ["[[patrones-de-asignacion-de-responsabilidades-grasp]]","[[patrones-grasp]]"]
fuente: "SOLID y GRASP - Buenas practicas hacia el exito en el desarrollo de software (1).pdf"
paginas: [28,29]
veces_en_examen: 0
---

# Controlador

> El patrón Controlador sirve como intermediario entre la interfaz de usuario y la lógica de negocio, recibiendo datos del usuario y enviándolos a las clases correspondientes.

El controlador es el primer objeto llamado después de un cambio en la interfaz de usuario. Controla o ejecuta un caso de uso, pero no hace demasiado por sí solo, solo coordina. Pertenece a la capa de aplicación o de servicios. Se recomienda dividir los eventos del sistema en el mayor número de controladores para aumentar cohesión y disminuir acoplamiento.


## Lo mencionan

- [[grasp]]
