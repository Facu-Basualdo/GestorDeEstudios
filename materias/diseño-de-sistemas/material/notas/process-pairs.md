---
titulo: "Process Pairs"
tipo: concepto
tags: ["disponibilidad","checkpointing","rollback","patron"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [94]
veces_en_examen: 0
---

# Process Pairs

> Patrón de disponibilidad que emplea checkpointing y rollback para que el backup esté listo para tomar el control cuando ocurre una falla.

Process pairs emplea checkpointing y rollback. En caso de falla, el backup ha estado haciendo checkpointing y, si es necesario, rollback a un estado seguro, por lo que está listo para tomar el control cuando ocurre una falla.

## Relacionado

- [[rollback]]

