---
titulo: "Registros Independientes"
tipo: concepto
tags: ["registros","arquitectura","cableado","ruta-de-datos"]
temas: ["[[arquitectura-8086-y-modos-de-direccionamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [71]
veces_en_examen: 0
---

# Registros Independientes

> Son registros montados físicamente en la arquitectura, cableados de manera independiente y capaces de operar simultáneamente.

Están cableados de tal manera que desde el Reg. de Instrucción se puede acceder de manera directa y leer o modificar su contenido.

Su dirección debe ser decodificada para seleccionarlos.

- **Ventaja**: posibilidad de operar con ellos de manera simultánea.
- **Costo**: muy grande, porque tienen que estar cableados de manera independiente, lo cual encarece la cantidad de puntos de entrada y salida.

Están más orientados a arquitecturas de PC con memorias RAM grandes y con muchos métodos de direccionamiento. Aplicación: Sistemas Operativos.


