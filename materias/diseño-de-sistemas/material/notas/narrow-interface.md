---
titulo: "Narrow Interface"
tipo: concepto
tags: ["adapter","diseno","interfaz","pluggable-adapter"]
temas: ["[[patrones-estructurales]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [137]
veces_en_examen: 0
---

# Narrow Interface

> Una narrow interface es el subconjunto más pequeño de operaciones del adaptee que permite realizar la adaptación, facilitando la creación de adaptadores pluggables.

En el contexto de los pluggable adapters, se busca una interfaz estrecha con solo unas pocas operaciones. Por ejemplo, para `TreeDisplay`, la interfaz estrecha del adaptee (cualquier estructura jerárquica) podría incluir solo dos operaciones: una para presentar gráficamente un nodo y otra para obtener sus hijos. Una interfaz pequeña es más fácil de adaptar que una con docenas de operaciones.

## Relacionado

- [[pluggable-adapter]]

## Lo mencionan

- [[pluggable-adapter]]
