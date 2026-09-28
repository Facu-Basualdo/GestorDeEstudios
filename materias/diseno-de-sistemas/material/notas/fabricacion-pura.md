---
titulo: "Fabricación Pura"
tipo: concepto
tags: ["grasp","fabricacion-pura","desacoplamiento","cohesion","reutilizacion"]
temas: ["[[patrones-de-asignacion-de-responsabilidades-grasp]]"]
fuente: "SOLID y GRASP - Buenas practicas hacia el exito en el desarrollo de software (1).pdf"
paginas: [35]
veces_en_examen: 0
---

# Fabricación Pura

> Patrón GRASP que consiste en crear una clase artificial que no representa una entidad del dominio del problema, con el fin de reducir acoplamiento, aumentar cohesión y potenciar reutilización.

La fabricación pura se da en clases que no representan un ente real del dominio, sino que se crean intencionadamente para disminuir el acoplamiento, aumentar la cohesión y/o potenciar la reutilización. Surge cuando una clase tiene poca cohesión y no hay otra clase natural donde implementar ciertos métodos. Se crea una clase 'inventada' que mejora la estructura.

Contraindicación: abusar puede llevar a clases función (un solo método).

Ejemplo: en Angry Birds, separar Mostrar() de PajaroEnfadado creando PajaroEnfadadoPresenter y PajaroEnfadadoView, desacoplando la lógica de negocio de la interfaz de usuario. Esto es la base de arquitecturas MVC, MVP, MVVM.


