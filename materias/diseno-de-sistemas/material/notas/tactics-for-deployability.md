---
titulo: "Tactics for Deployability"
tipo: concepto
tags: ["deployability","tacticas","arquitectura","ci-cd","despliegue"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [108,110]
veces_en_examen: 0
---

# Tactics for Deployability

> Las tactics for deployability son estrategias arquitectónicas cuyo objetivo es que un despliegue se realice dentro de restricciones aceptables de tiempo, costo y calidad.

Un despliegue es catalizado por el lanzamiento de un nuevo elemento de software o hardware; es exitoso si esos elementos se despliegan con restricciones aceptables. En muchos casos, estas tácticas son provistas, al menos en parte, por una infraestructura de CI/CD que se compra en lugar de construirse; el arquitecto elige y evalúa las tácticas adecuadas.

Se organizan en dos categorías: **manage deployment pipeline** y **manage deployed system**. Las seis tácticas son: scale rollouts, roll back, script deployment commands, manage service interactions, package dependencies y feature toggle.

## Relacionado

- [[manage-deployment-pipeline]]
- [[manage-deployed-system]]
- [[scale-rollouts]]
- [[roll-back]]
- [[script-deployment-commands]]
- [[manage-service-interactions]]
- [[package-dependencies]]
- [[feature-toggle]]

## Lo mencionan

- [[manage-deployment-pipeline]]
- [[manage-deployed-system]]
- [[scale-rollouts]]
- [[roll-back]]
- [[script-deployment-commands]]
- [[manage-service-interactions]]
- [[package-dependencies]]
- [[feature-toggle]]
- [[tactics-based-questionnaire-for-deployability]]
