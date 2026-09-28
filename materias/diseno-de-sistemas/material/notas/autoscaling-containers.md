---
titulo: "Autoscaling Containers"
tipo: concepto
tags: ["autoscaling","containers","vm","cloud"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [321]
veces_en_examen: 0
---

# Autoscaling Containers

> Autoscaling Containers es el escalado automático de containers que requiere una decisión de dos niveles: si se necesita un container adicional y dónde asignarlo.

Como los containers se ejecutan en runtime engines que están alojados en VMs, escalar containers requiere una decisión de dos niveles:
1. Decidir si se necesita un container (o Pod) adicional para la carga actual.
2. Decidir si ese container se puede asignar a un runtime engine existente o si hace falta una instancia nueva; y si hace falta, verificar si hay una VM con capacidad suficiente o si se debe asignar una VM adicional.
El software que controla el escalado de containers es independiente del que controla el escalado de VMs, lo que permite portabilidad entre cloud providers. Si se integran ambos tipos de escalado, se puede crear una dependencia con el cloud provider difícil de romper.

## Relacionado

- [[autoscaling]]
- [[autoscaling-vms]]
- [[vm]]
- [[container]]

## Lo mencionan

- [[autoscaling]]
