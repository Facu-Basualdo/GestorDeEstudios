---
titulo: "Escalating Restart"
tipo: concepto
tags: ["reintroduccion","reinicio","tacticas","disponibilidad"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [81]
veces_en_examen: 0
---

# Escalating Restart

> Táctica de reintroducción que permite recuperarse de fallas variando la granularidad de los componentes reiniciados y minimizando el nivel de afectación del servicio.

Un sistema puede soportar cuatro niveles de reinicio, numerados 0 a 3. El nivel 0 tiene el menor impacto en los servicios y emplea redundancia pasiva (warm spare): mata y recrea todos los hilos hijos del componente fallido, liberando y reinicializando solo los datos asociados a esos hilos. El nivel 1 libera y reinicializa toda la memoria no protegida; la memoria protegida no se toca. El nivel 2 libera y reinicializa toda la memoria, protegida y no protegida, forzando a todas las aplicaciones a recargarse y reinicializarse. El nivel 3 implica recargar y reinicializar completamente la imagen ejecutable y los segmentos de datos asociados. El soporte para esta táctica es particularmente útil para el concepto de graceful degradation.

## Relacionado

- [[redundant-spare]]
- [[graceful-degradation]]

## Lo mencionan

- [[recover-from-faults]]
