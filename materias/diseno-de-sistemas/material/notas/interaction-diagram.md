---
titulo: "interaction diagram"
tipo: concepto
tags: ["diagram","interaction","uml","design-patterns","notacion","secuencia","interaccion"]
temas: ["[[principios-de-diseno-orientado-a-objetos]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [88,95]
veces_en_examen: 0
---

# interaction diagram

> Un interaction diagram muestra el orden en que se ejecutan las solicitudes entre objetos.

El tiempo fluye de arriba abajo en un interaction diagram. Una línea vertical sólida indica la vida de un objeto. Si el objeto no se instancia hasta después del inicio, su línea aparece punteada hasta el momento de creación. Un rectángulo vertical indica que un objeto está activo manejando una solicitud. Las solicitudes se muestran con flechas horizontales apuntando al objeto receptor, con el nombre de la solicitud arriba. Una solicitud de creación se muestra con una línea punteada con flecha. Una solicitud al mismo objeto apunta de vuelta al emisor. Ver Figure B.3.

## Relacionado

- [[request]]
- [[object]]

