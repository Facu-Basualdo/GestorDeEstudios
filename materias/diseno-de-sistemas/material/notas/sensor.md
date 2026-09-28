---
titulo: "Sensor"
tipo: concepto
tags: ["sensor","movil","hardware","entorno","sistemas-moviles","transductor"]
temas: ["[[sistemas-moviles-y-restricciones-de-recursos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [329,330]
veces_en_examen: 0
---

# Sensor

> Un sensor es un dispositivo que detecta características físicas de su entorno y las traduce a una representación electrónica.

Un dispositivo móvil obtiene datos ambientales para guiar su propio funcionamiento (como el altímetro en un dron) o para reportarlos a un usuario (como la brújula magnética en un smartphone). En esta sección, el término "sensor" se usa para abarcar también a los transductores, y se asume que la representación electrónica es digital.

Dentro del sistema móvil, el software abstrae algunas características del entorno. Esta abstracción puede mapearse directamente a un sensor (como la medición de temperatura o presión) o integrar la entrada de varios sensores (como la identificación de peatones en un controlador de automóvil autónomo).

## Relacionado

- [[transducer]]
- [[sensor-hub]]

## Lo mencionan

- [[sensor-fusion]]
- [[transducer]]
- [[sensor-hub]]
- [[actuator]]
- [[degraded-operation]]
- [[sensor-stack]]
- [[reading-raw-data]]
- [[smoothing-data]]
- [[converting-data]]
- [[offloading-functionality-to-the-cloud]]
