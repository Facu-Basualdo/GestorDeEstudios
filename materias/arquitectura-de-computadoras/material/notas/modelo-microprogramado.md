---
titulo: "Modelo Microprogramado"
tipo: concepto
tags: ["secuenciador","microprogramado","microprograma","memoria-de-control","cisc"]
temas: ["[[secuenciador-y-control]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [74,75,76,77,78,79,80,81,82,83,84,85,86,87]
veces_en_examen: 0
---

# Modelo Microprogramado

> Modelo de secuenciador que, en lugar de circuitos lógicos, usa una memoria de control que almacena el microprograma de microórdenes de gobierno para cada operación.

En lugar de circuitos lógicos, posee una memoria de control que almacena para cada operación el conjunto de microórdenes de gobierno llamado microprograma. El texto afirma que esta supera a la Cache en la pirámide de memorias.

Un microprograma puede generar las microórdenes que gobiernan la ejecución de una instrucción. Una microorden puede generar microinstrucciones. Se tienen programas que comparten microinstrucciones para no tener que repetir sentencias; por ejemplo, una microinstrucción para búsqueda del operando se utiliza para todas las instrucciones de la familia IBO.

Es ideal para muchas instrucciones y para instrucciones complejas de máquina. Responde a la arquitectura CISC.

Ventajas:
- Es flexible y alterable; es posible reprogramar una vez implementado.
- Ocupa poco espacio al aumentar su volumen.
- Ocupa menor consumo de energía.
- Es más eficiente en términos de hardware o recursos computacionales.

Desventajas:
- Es más lento.
- Mayor complejidad: es más difícil que diseñar circuitos.
- Es más costoso: puede requerir una inversión inicial más alta en términos de desarrollo y diseño.

## Relacionado

- [[secuenciador-de-logica-cableada]]
- [[familia-ibo-en-abacus]]

## Lo mencionan

- [[secuenciador-microprogramado-modelo-wilkes]]
