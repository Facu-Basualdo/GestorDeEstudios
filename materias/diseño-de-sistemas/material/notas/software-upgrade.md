---
titulo: "Software Upgrade"
tipo: concepto
tags: ["actualizaciones","mantenimiento","tacticas","disponibilidad"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [81]
veces_en_examen: 0
---

# Software Upgrade

> Táctica cuyo objetivo es lograr actualizaciones en servicio de imágenes de código ejecutable sin afectar el servicio.

Entre sus estrategias están el function patch, el class patch y el hitless in-service software upgrade (ISSU). En la práctica, el function patch y el class patch se usan para entregar correcciones de errores, mientras que el hitless ISSU se usa para entregar nuevas funcionalidades y capacidades.

## Relacionado

- [[function-patch]]
- [[class-patch]]
- [[hitless-in-service-software-upgrade-issu]]

## Lo mencionan

- [[recover-from-faults]]
- [[function-patch]]
- [[class-patch]]
- [[hitless-in-service-software-upgrade-issu]]
