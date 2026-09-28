---
titulo: "Redundant Sensors"
tipo: concepto
tags: ["seguridad","patron","redundancia","sensores"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [210]
veces_en_examen: 0
---

# Redundant Sensors

> Patrón de seguridad que replica los sensores cuyos datos son importantes para determinar un estado seguro o inseguro, protegiendo contra la falla de un solo sensor.

Si el dato producido por un sensor es importante para determinar si un estado es seguro o inseguro, ese sensor debe replicarse. Además, un software independiente debe monitorear cada sensor; en esencia, es la táctica "redundant spare" del Capítulo 4 aplicada a hardware crítico para la seguridad.

**Beneficios:**
- Esta forma de redundancia aplicada a sensores protege contra la falla de un solo sensor.

**Tradeoffs:**
- Los sensores redundantes agregan costo al sistema.
- Procesar las entradas de múltiples sensores es más complicado que procesar la entrada de un único sensor.


