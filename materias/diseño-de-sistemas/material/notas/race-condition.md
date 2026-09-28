---
titulo: "Race Condition"
tipo: concepto
tags: ["race-condition","concurrencia","bugs","estado-compartido","datos","distribuidos"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [173,318]
veces_en_examen: 0
---

# Race Condition

> Es un fenómeno de interleaving que ocurre cuando dos hilos de control comparten estado y el resultado depende del orden de ejecución.

Ocurre cuando dos threads de control están presentes y hay estado compartido. En el ejemplo del texto, si dos threads ejecutan `x = 1; x++;`, el valor de x puede ser 2 o 3. Son de los bugs más difíciles de descubrir porque su aparición es esporádica y depende de diferencias mínimas de timing. Una técnica para prevenirlas es usar locks; otra es particionar el estado para que cada thread tenga su propia instancia (por ejemplo, dos instancias de x).

## Relacionado

- [[concurrency]]
- [[thread]]
- [[distributed-lock]]
- [[data-coordination-distributed-system]]

## Lo mencionan

- [[concurrency]]
- [[thread]]
- [[data-coordination-distributed-system]]
- [[distributed-lock]]
