---
titulo: "Modelo Cableado vs Microprogramado de Wilkes"
tipo: concepto
tags: ["unidad-de-control","microprogramacion","wilkes","modelo-cableado","arquitectura"]
temas: ["[[secuenciador-y-control]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [88]
veces_en_examen: 0
---

# Modelo Cableado vs Microprogramado de Wilkes

> Comparación entre dos formas de implementar la unidad de control: el modelo cableado es más rápido, mientras que el microprogramado de Wilkes reduce la complejidad de construir el set de instrucciones.

El modelo cableado tiende a ser más rápido, mientras que el modelo de Wilkes reduce la complejidad de construir el set de instrucciones. Las memorias del modelo Wilkes suelen ser más costosas y necesitan cablear los saltos, pero valen la pena en arquitecturas CISC, donde hay cientos de instrucciones distintas entre condiciones de salto, bifurcaciones y demás.

**Ventajas**
- Prescinde de ecuaciones lógicas complejas.
- Disminuye la cantidad de componentes y circuitos → menor costo.
- Disminuye el consumo energético y tiene menor temperatura.
- Flexibilidad: grabando eléctricamente se puede grabar toda la microprogramación en minutos; permite probar con un chip y pasar a producción si funciona → menor tiempo de desarrollo.

**Desventajas**
- Es más lento que el modelo cableado.
- Aumenta en tamaño y longitud a medida que crece el conjunto del microprograma, complicando el diseño de la memoria.
- Desperdicio de bits: a veces no se utilizan todos.

**Desventaja clave**
Radica en la codificación de cada microorden: asignar un bit para cada compuerta de la ruta de datos amplifica la complejidad y el tamaño de la memoria. La falta de codificación eficiente hace que la longitud de palabra sea directamente proporcional a la cantidad de compuertas. Además, cada microorden está vinculada a la siguiente microinstrucción, sin gobierno independiente.

**Solución → Codificación de las Microinstrucciones**. Uso actual: memorias flash.

## Relacionado

- [[cisc]]

## Lo mencionan

- [[cisc]]
- [[risc]]
