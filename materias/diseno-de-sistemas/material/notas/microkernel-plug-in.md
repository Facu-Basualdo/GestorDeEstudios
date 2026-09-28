---
titulo: "Microkernel / Plug-in"
tipo: concepto
tags: ["microkernel","plug-in","arquitectura","patron-arquitectonico","extensiones"]
temas: ["[[patrones-arquitectonicos]]"]
fuente: "arquitectura_compressed.pdf"
paginas: [41]
veces_en_examen: 0
---

# Microkernel / Plug-in

> Es un patrón arquitectónico que cuenta con un sistema central con las funcionalidades básicas del software, que puede adaptarse a través de plug-ins.

Se parte de un núcleo central donde se van agregando cosas, a diferencia de un sistema central completo en el cual no se piensa en ir agregando cosas. Los plug-ins son llamados a través de funciones o invocaciones. Los basados en tiempo de ejecución permiten mayor modificabilidad porque no se debe volver a compilar todo el sistema para realizar un cambio. Este sistema central no es solo de datos.

**Ejemplos:**
- Chrome, a través de las extensiones que se le van agregando.
- Visual Studio.
- Un sistema de reclamos que se va separando por zona y se puede tener dividido en distintos plug-ins.


