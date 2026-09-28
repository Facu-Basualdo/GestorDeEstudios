---
titulo: "Condition Monitoring"
tipo: concepto
tags: ["disponibilidad","deteccion","condiciones","checksum","safety","tactica","monitoreo","aserciones"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [78,202]
veces_en_examen: 0
---

# Condition Monitoring

> Es una táctica que consiste en verificar condiciones en un proceso o dispositivo, o validar suposiciones hechas durante el diseño.

Al monitorear condiciones, esta táctica evita que el sistema produzca un comportamiento defectuoso. El cálculo de checksums es un ejemplo común. Sin embargo, el monitor debe ser en sí mismo simple (e idealmente demostrablemente correcto) para asegurar que no introduzca nuevos errores de software.

## Relacionado

- [[detect-faults]]
- [[predictive-model]]
- [[sanity-checking]]

## Lo mencionan

- [[detect-faults]]
- [[self-test]]
- [[predictive-model]]
- [[unsafe-state-detection]]
