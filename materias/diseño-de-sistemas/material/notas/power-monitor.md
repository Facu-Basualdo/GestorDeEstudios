---
titulo: "Power Monitor"
tipo: concepto
tags: ["eficiencia-energetica","power-monitor","patron","gestion-de-dispositivos"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [131]
veces_en_examen: 0
---

# Power Monitor

> Power Monitor monitorea y gestiona los dispositivos del sistema, minimizando el tiempo en que están activos.

Patrón que monitorea y gestiona dispositivos del sistema para minimizar el tiempo en que están activos.

- Intenta desactivar automáticamente dispositivos e interfaces que la aplicación no está usando activamente.
- Se usa desde hace mucho en circuitos integrados: se apagan bloques del circuito que no se están usando para ahorrar energía.

Beneficio:
- Permite ahorros inteligentes de energía con poco o ningún impacto para el usuario final, asumiendo que los dispositivos apagados no se necesitan.

Tradeoffs:
- Encender un dispositivo apagado agrega latencia antes de que responda, comparado con mantenerlo funcionando.
- En algunos casos, el arranque puede ser más caro en energía que un período de operación estable.
- El power monitor necesita conocer cada dispositivo y sus características de consumo, lo que agrega complejidad inicial al diseño.


