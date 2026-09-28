---
titulo: "Complete Replacement of Services"
tipo: concepto
tags: ["despliegue","reemplazo-completo","patrones","disponibilidad"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [115]
veces_en_examen: 0
---

# Complete Replacement of Services

> Estrategia de despliegue que reemplaza todas las instancias de una versión de un servicio por instancias de la nueva versión, sin dejar instancias de la versión original y sin reducir la calidad de servicio para los clientes.

Se supone que hay N instancias del Servicio A y se desea reemplazarlas por N instancias de la nueva versión, dejando cero instancias de la versión original. Debe haber siempre N instancias corriendo para no reducir la calidad de servicio. Existen dos patrones que realizan esta estrategia, ambos realizaciones de la tactic scale rollouts: Blue/green y Rolling upgrade.

## Relacionado

- [[blue-green-deployment]]
- [[rolling-upgrade]]

## Lo mencionan

- [[blue-green-deployment]]
- [[rolling-upgrade]]
