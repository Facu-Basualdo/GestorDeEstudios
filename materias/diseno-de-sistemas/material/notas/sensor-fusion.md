---
titulo: "Sensor Fusion"
tipo: concepto
tags: ["eficiencia-energetica","sensor-fusion","patron","movil","iot","sensores","sistemas-moviles","automovil"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [130,330]
veces_en_examen: 0
---

# Sensor Fusion

> Sensor Fusion usa datos de sensores de bajo consumo para inferir si es necesario recolectar datos de sensores de mayor consumo.

Patrón usado en apps móviles y sistemas IoT que recolectan datos del entorno con múltiples sensores.

- Los datos de sensores de bajo consumo se usan para inferir si hace falta recolectar datos de sensores de mayor consumo.
- Ejemplo típico en teléfonos: usar datos del acelerómetro para evaluar si el usuario se movió y, si se movió, actualizar la ubicación del GPS.
- Asume que acceder al sensor de bajo consumo es mucho más barato, en energía, que acceder al de mayor consumo.

Beneficio:
- Minimiza el uso de dispositivos más intensivos en energía de forma inteligente, en lugar de solo reducir la frecuencia de consulta del sensor más costoso.

Tradeoffs:
- Consultar y comparar múltiples sensores agrega complejidad inicial.
- El sensor de mayor consumo entrega datos de mayor calidad y más rápido, porque usarlo solo toma menos tiempo que consultar primero un sensor secundario.
- Si la inferencia resulta frecuentemente en acceder al sensor de mayor consumo, el patrón puede terminar usando más energía en total.

## Relacionado

- [[sensor]]

## Lo mencionan

- [[sensor-stack]]
