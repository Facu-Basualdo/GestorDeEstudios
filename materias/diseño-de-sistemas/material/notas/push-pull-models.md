---
titulo: "Push and Pull Models"
tipo: concepto
tags: ["observer","update","notification","push","pull"]
temas: ["[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [281]
veces_en_examen: 0
---

# Push and Pull Models

> Two alternatives for how a subject notifies its observers: the push model sends detailed information about the change, while the pull model sends only a minimal notification and lets observers query for details.

The Observer pattern's update mechanism can follow two extremes:

- **Push model**: The subject sends observers detailed information about the change, whether they want it or not. This makes observers less reusable because subject classes make assumptions about observer classes.
- **Pull model**: The subject sends nothing but the most minimal notification, and observers ask for details explicitly thereafter. This emphasizes the subject's ignorance of its observers but may be inefficient because observers must ascertain what changed without help from the subject.

The choice depends on the trade-off between reusability and efficiency.

## Relacionado

- [[observer]]

