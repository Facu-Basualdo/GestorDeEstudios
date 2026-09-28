---
titulo: "Reduce Computational Overhead"
tipo: concepto
tags: ["rendimiento","overhead","computacional","tacticas","performance","sobrecarga","recursos","limpieza"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [179,183]
veces_en_examen: 0
---

# Reduce Computational Overhead

> Táctica de performance que reduce la cantidad de eventos procesados y la sobrecarga requerida para procesarlos.

Una forma de reducir la sobrecarga es realizar una limpieza periódica de recursos que se volvieron ineficientes; por ejemplo, las tablas hash y los mapas de memoria virtual pueden requerir recálculo y reinicialización. Muchos administradores de sistemas e incluso usuarios comunes hacen un reinicio periódico de sus sistemas por esta razón. En la analogía vial, reducir la sobrecarga computacional equivale a manejar más cerca del auto de adelante o cargar más personas en el mismo vehículo (carpooling).

## Relacionado

- [[reduce-indirection]]
- [[co-locate-communicating-resources]]
- [[periodic-cleaning]]
- [[control-resource-demand]]
- [[modifiability]]

## Lo mencionan

- [[reduce-resource-demand]]
- [[control-resource-demand]]
- [[reduce-indirection]]
- [[co-locate-communicating-resources]]
- [[periodic-cleaning]]
