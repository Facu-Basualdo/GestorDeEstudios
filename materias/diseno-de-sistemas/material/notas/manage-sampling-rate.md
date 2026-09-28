---
titulo: "Manage Sampling Rate"
tipo: concepto
tags: ["rendimiento","muestreo","latencia","senales"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [179]
veces_en_examen: 0
---

# Manage Sampling Rate

> Táctica que reduce la frecuencia de muestreo de los estímulos para mantener niveles predecibles de latencia, a costa de fidelidad.

Cuando el sistema no puede mantener niveles de respuesta adecuados, se puede reducir la frecuencia de muestreo de las entradas, por ejemplo la tasa de recepción de datos de un sensor o los frames por segundo de video que se procesan. El precio es la fidelidad del video o la información obtenida. Es viable si el resultado es "suficientemente bueno". Se usa en sistemas de procesamiento de señales, donde se eligen codecs con diferentes tasas de muestreo y formatos de datos. La decisión busca mantener latencia predecible: hay que elegir entre un flujo de datos de menor fidelidad pero consistente, o una latencia errática. Algunos sistemas ajustan la tasa de muestreo dinámicamente según la latencia o las necesidades de precisión.

## Relacionado

- [[manage-work-requests]]
- [[control-resource-demand]]

## Lo mencionan

- [[manage-work-requests]]
- [[bound-execution-times]]
