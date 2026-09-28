---
titulo: "Kill Abnormal Tasks"
tipo: concepto
tags: ["eficiencia-energetica","kill-abnormal-tasks","patron","movil"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [131]
veces_en_examen: 0
---

# Kill Abnormal Tasks

> Kill Abnormal Tasks monitorea el uso de energía de las aplicaciones e interrumpe o mata operaciones que consumen energía en exceso.

Patrón para sistemas móviles que ejecutan apps de procedencia desconocida.

- Monitorea el uso de energía de las apps e interrumpe o mata operaciones energy-greedy.
- Ejemplo: si una app emite una alerta audible y vibra el teléfono y el usuario no responde, después de un timeout predeterminado la tarea se mata.

Beneficio:
- Ofrece una opción “fail-safe” para gestionar el consumo de energía de apps con propiedades energéticas desconocidas.

Tradeoffs:
- El monitoreo agrega un pequeño overhead a la operación del sistema, que puede afectar el rendimiento y, en pequeña medida, el uso de energía.
- Matar tareas hambrientas de energía puede ser contrario a la intención del usuario.


