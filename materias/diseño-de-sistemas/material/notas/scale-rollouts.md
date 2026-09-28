---
titulo: "Scale Rollouts"
tipo: concepto
tags: ["deployability","despliegue-gradual","rollout","tactica"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [110]
veces_en_examen: 0
---

# Scale Rollouts

> Scale rollouts es una táctica de deployability que despliega una nueva versión de un servicio de forma gradual, a subconjuntos controlados de usuarios, en lugar de a toda la base de usuarios.

Los usuarios restantes continúan usando la versión anterior. Al liberar gradualmente, los efectos pueden monitorearse y medirse y, si es necesario, revertirse. Esta táctica minimiza el impacto negativo de un servicio defectuoso. Requiere un mecanismo arquitectónico (que no forma parte del servicio desplegado) para enrutar la solicitud de un usuario a la versión nueva o vieja según su identidad.

## Relacionado

- [[roll-back]]
- [[manage-deployment-pipeline]]
- [[tactics-for-deployability]]

## Lo mencionan

- [[tactics-for-deployability]]
- [[manage-deployment-pipeline]]
