---
titulo: "Processing Time"
tipo: concepto
tags: ["tiempo-de-procesamiento","rendimiento","recursos","latencia"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [177]
veces_en_examen: 0
---

# Processing Time

> Es el tiempo durante el cual el sistema está trabajando para responder a un evento y consumiendo recursos activamente.

El procesamiento consume recursos, lo que toma tiempo. Los eventos se manejan mediante la ejecución de uno o más componentes, cuyo tiempo invertido es un recurso. Los recursos de hardware incluyen CPU, almacenes de datos, ancho de banda de red y memoria. Los recursos de software incluyen entidades definidas por el sistema en diseño, como thread pools y buffers; el acceso a secciones críticas debe hacerse secuencial. El texto da un ejemplo: un mensaje generado por un componente puede pasar por la red, un buffer, transformaciones, procesamiento algorítmico y luego continuar; cada paso contribuye a la latencia total y al consumo de recursos.

## Relacionado

- [[blocked-time]]

## Lo mencionan

- [[performance-tactics]]
- [[blocked-time]]
