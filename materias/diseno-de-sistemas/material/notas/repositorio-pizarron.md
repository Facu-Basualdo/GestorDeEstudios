---
titulo: "Repositorio / Pizarrón"
tipo: concepto
tags: ["repositorio","pizarron","blackboard","arquitectura","patron-arquitectonico"]
temas: ["[[patrones-arquitectonicos]]"]
fuente: "arquitectura_compressed.pdf"
paginas: [41]
veces_en_examen: 0
---

# Repositorio / Pizarrón

> Es un patrón arquitectónico en el que un componente central contiene los datos de otros componentes, y la comunicación entre ellos se realiza a través de ese repositorio.

La forma de comunicación entre los componentes es a través del repositorio; no hay comunicación directa entre los componentes.

- Cuando el componente central es pasivo (no emite señal ni trata de comunicarse) se conoce como **Repositorio**.
- Cuando ese componente toma un rol activo se conoce como modelo de **Pizarrón**.

**Cuándo se usa:**
- En sistemas donde haya grandes volúmenes de información que se deban almacenar durante mucho tiempo.
- En sistemas guiados por datos donde la inclusión de datos en el repositorio central activa un trigger o algo.

**Ventajas:**
- Los componentes son independientes, no necesitan conocerse entre sí, y los cambios que realiza un componente se pueden propagar a todos los demás.
- Todos los datos se manejan de forma consistente y es más fácil hacer backup porque todo está en un mismo lugar.

**Desventajas:**
- El repositorio es un punto único de fallo: los problemas en el repositorio afectan a todo el sistema.
- Puede haber ineficiencias en la organización de toda la comunicación a través del repositorio (cuello de botella).
- Distribuir el repositorio en varios ordenadores puede resultar difícil.

**Ejemplo:** editores en diferentes lenguajes y analizadores o reportes basados en los datos. Es un patrón que da soporte a operaciones no determinísticas. El libro POSA amplía este tema, pero no se da en la materia.


