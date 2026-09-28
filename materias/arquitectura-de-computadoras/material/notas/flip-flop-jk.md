---
titulo: "Flip-Flop JK"
tipo: concepto
tags: ["flip-flop","jk","set","reset","conmutacion","clock"]
temas: ["[[circuitos-digitales-y-sistemas-logicos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [26]
veces_en_examen: 0
---

# Flip-Flop JK

> Modificación del FF RS donde J = Set y K = Reset, que soluciona la indeterminación del RS: si J = K = 1 se complementa el valor almacenado.

Es una modificación del FF RS, donde J = Set y K = Reset. Soluciona la indeterminación del RS, si J = K = 1 se realiza una función de conmutación, donde se complementa el contenido lógico almacenado. La retroalimentación entre ~Q con J y Q con K se activan solo en este caso, produciendo que las salidas actúen sobre las entradas complementando el valor almacenado.

Si bien hay versiones Latch, los más utilizados son los sincrónicos, ya que son más previsibles al trabajar sincronizados por el ‘Clock’ de la máquina, lo cual garantiza el rango de funcionamiento.

Tabla de Funcionamiento:
- Si J = K = 0 ➔ Q(t + 1) = Q(t) → Mantiene.
- Si J = 1 y K = 0 ➔ Q(t + 1) = 1 → Set.
- Si J = 0 y K = 1 ➔ Q(t + 1) = 0 → Reset.
- Si J = K = 1 ➔ Q(t + 1) = ~Qt → Complementa.

## Relacionado

- [[flip-flop-rs-asincrona]]
- [[flip-flop-rs-sincrona]]

## Lo mencionan

- [[flip-flop-t]]
- [[astable]]
- [[registros-contadores]]
