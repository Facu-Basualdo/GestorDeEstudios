---
titulo: "First-In/First-Out (FIFO)"
tipo: concepto
tags: ["scheduling","fifo","colas","performance"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [182]
veces_en_examen: 0
---

# First-In/First-Out (FIFO)

> Política de scheduling que trata todas las solicitudes de recursos como iguales y las satisface por turno.

Las colas FIFO tratan todos los pedidos de recursos como iguales y los satisfacen por turno. Una posibilidad es que un pedido quede atascado detrás de otro que tarda mucho en generar una respuesta. Mientras todos los pedidos sean verdaderamente iguales, esto no es un problema; pero si algunos pedidos tienen mayor prioridad que otros, se convierte en un desafío.

## Relacionado

- [[scheduling-policies]]

## Lo mencionan

- [[scheduling-policies]]
