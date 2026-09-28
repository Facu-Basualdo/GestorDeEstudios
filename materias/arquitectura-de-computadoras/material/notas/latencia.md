---
titulo: "Latencia"
tipo: concepto
tags: ["latencia","cache","memoria","rendimiento"]
temas: ["[[memoria-y-almacenamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [51]
veces_en_examen: 0
---

# Latencia

> Tiempo que le lleva al sistema llegar a la información requerida en la cadena de consultas entre cachés y memoria RAM.

Cuando un procesador busca instrucciones y datos que necesita, primero recurre a la memoria caché L1; si no encuentra nada, recurre a la caché L2 y finalmente a la caché L3. En caso de que ninguna de las cachés contenga lo que está buscando, no tiene más opción que recurrir a la memoria RAM, y si tampoco está en ella tiene que realizar un ciclo de trabajo completo. Esta cadena de consultas se llama latencia, que es el tiempo que le lleva al sistema llegar a la información requerida.

## Relacionado

- [[cache-l1]]
- [[cache-l2]]
- [[cache-l3]]
- [[memorias-ram]]

## Lo mencionan

- [[memorias-cache]]
- [[ram-dinamica-o-dram]]
