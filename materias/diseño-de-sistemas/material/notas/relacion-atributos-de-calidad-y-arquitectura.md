---
titulo: "Relación atributos de calidad y arquitectura"
tipo: concepto
tags: ["atributos-de-calidad","arquitectura","security","safety","availability","maintainability"]
temas: ["[[diseno-arquitectonico]]"]
fuente: "arquitectura_compressed.pdf"
paginas: [40]
veces_en_examen: 0
---

# Relación atributos de calidad y arquitectura

> La prioridad de distintos atributos de calidad lleva a elegir distintas arquitecturas, y los conflictos entre esas arquitecturas se resuelven con patrones y tácticas.

- Si la **security** (frente a ataques o fallos intencionales) es prioridad, se usa una arquitectura en capas con la capa intermedia más protegida.
- Si la **safety** (fallos no intencionales) es prioridad, se usan las operaciones en un solo componente o en un número reducido de componentes: ante una falla el sistema puede apagarse y solo quedan afectados esos componentes.
- Si la **availability** es prioridad, conviene una arquitectura con varios componentes repetidos, para que si se cae uno exista un duplicado que cumpla su función.
- Si la **maintainability** es prioridad, los componentes deben ser fácilmente reemplazables; lo ideal es que los productores de datos estén separados de los que los utilizan.
- Existen conflictos entre arquitecturas; se solucionan aplicando **patrones y tácticas** (vistas en Bass) para cumplir con los atributos de calidad necesarios aunque estos hagan conflicto entre sí.


## Lo mencionan

- [[escenarios-4-1]]
