---
titulo: "Secuenciador Microprogramado"
tipo: concepto
tags: ["secuenciador","microprogramado","cisc","microprograma","abacus"]
temas: ["[[secuenciador-y-control]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [73]
veces_en_examen: 0
---

# Secuenciador Microprogramado

> Es un modelo de secuenciador que usa una memoria de control con microprogramas para generar las microórdenes.

En lugar de circuitos lógicos, posee una memoria de control que almacena para cada operación el conjunto de microórdenes de gobierno llamado **microprograma**. Esta supera a la Cache en la pirámide de memorias.

Un microprograma puede generar las microórdenes que gobiernan la ejecución de una instrucción. Una microorden puede generar microinstrucciones.

Se tienen programas que comparten microinstrucciones para no repetir sentencias. Por ejemplo, una microinstrucción para búsqueda del operando se utiliza para todas las instrucciones de la familia IBO.

Ideal para muchas instrucciones y para instrucciones complejas de máquina. Responde a la arquitectura **CISC**.

**Ventajas:**
- Es flexible y alterable: es posible reprogramar una vez implementado.
- Ocupa poco espacio al aumentar su volumen.
- Ocupa menor consumo de energía.
- Es más eficiente en términos de hardware o recursos computacionales.

**Desventajas:**
- Es más lento.
- Mayor complejidad: es más difícil que diseñar circuitos.
- Es más costoso: puede requerir una inversión inicial más alta en términos de desarrollo y diseño.

## Relacionado

- [[secuenciador]]
- [[familias-de-instrucciones]]
- [[secuenciador-cableado]]

## Lo mencionan

- [[secuenciador-cableado]]
