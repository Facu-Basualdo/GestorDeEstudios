---
titulo: "Qubit"
tipo: concepto
tags: ["computacion-cuantica","qubit","informacion-cuantica","superposicion"]
temas: ["[[organizacion,-deuda-tecnica-y-temas-avanzados]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [472]
veces_en_examen: 0
---

# Qubit

> Un qubit es la unidad fundamental de información en una computadora cuántica, caracterizada por las probabilidades de medir 0 o 1 y por una phase que describe una rotación.

Una computadora cuántica es un procesador que manipula qubits. En la época de publicación, la mejor computadora cuántica contenía varios cientos de qubits.

Un qubit se caracteriza por tres números: la probabilidad de que una medición devuelva 1, la probabilidad de que devuelva 0 y la phase. La medición devuelve 0 o 1 con las probabilidades designadas y destruye el valor actual del qubit, reemplazándolo por el valor medido. Cuando ambas probabilidades son no nulas, el qubit está en superposición.

Las amplitudes se designan |α|² y |β|². Si |α|² es 40% y |β|² es 60%, de diez mediciones cuatro serán 0 y seis serán 1. Consecuencias: |α|² + |β|² = 1, y no hay copiado de un qubit porque la lectura es destructiva y no preserva probabilidades ni phases.

## Relacionado

- [[superposition]]
- [[phase]]
- [[qpu]]

## Lo mencionan

- [[superposition]]
- [[phase]]
- [[qpu]]
- [[operations-on-qubits]]
- [[cnot]]
- [[entanglement]]
