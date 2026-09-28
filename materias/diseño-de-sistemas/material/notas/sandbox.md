---
titulo: "Sandbox"
tipo: concepto
tags: ["testability","sandbox","simulacion","virtualizacion","pruebas"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [239]
veces_en_examen: 0
---

# Sandbox

> Táctica de testability que aísla una instancia del sistema del mundo real para permitir experimentación sin consecuencias permanentes.

El sandboxing permite operar el sistema sin consecuencias permanentes o con consecuencias que pueden revertirse. Se usa para análisis de escenarios, entrenamiento y simulación. Una forma común es virtualizar recursos: por ejemplo, abstraer el tiempo del sistema del tiempo de reloj para probar en límites temporales críticos. Stubs, mocks y dependency injection son formas simples de virtualización.

## Relacionado

- [[control-and-observe-system-state]]

## Lo mencionan

- [[control-and-observe-system-state]]
