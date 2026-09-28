---
titulo: "Interface Mismatch"
tipo: concepto
tags: ["despliegue","interface-mismatch","interfaz","mediator"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [115]
veces_en_examen: 0
---

# Interface Mismatch

> Problema que ocurre cuando la interfaz de la nueva versión de un servicio difiere de la de la versión antigua, de modo que los clientes no actualizados producen resultados impredecibles.

Si la interfaz de la nueva versión es diferente de la de la versión antigua, las invocaciones de clientes que no se han actualizado producen resultados impredecibles. Se puede prevenir extendiendo la interfaz sin modificar la interfaz existente y usando el mediator pattern para traducir desde la interfaz extendida a una interfaz interna que produzca el comportamiento correcto.

## Relacionado

- [[rolling-upgrade]]
- [[mediator]]

## Lo mencionan

- [[rolling-upgrade]]
