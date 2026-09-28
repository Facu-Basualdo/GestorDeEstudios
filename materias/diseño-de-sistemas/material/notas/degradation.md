---
titulo: "Degradation"
tipo: concepto
tags: ["safety","tactica","degradacion","tolerancia-a-fallas"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [204]
veces_en_examen: 0
---

# Degradation

> Táctica que mantiene las funciones más críticas del sistema ante fallas de componentes, eliminando o reemplazando funcionalidad de manera controlada.

Permite que las fallas de componentes individuales reduzcan la funcionalidad del sistema de forma gradual, planificada, deliberada y segura, en lugar de causar una falla completa. Por ejemplo, un sistema de navegación de un auto puede seguir operando con un algoritmo de dead reckoning (menos preciso) en un túnel largo donde perdió la señal GPS.


## Lo mencionan

- [[rollback]]
- [[reconfiguration]]
- [[limit-consequences]]
