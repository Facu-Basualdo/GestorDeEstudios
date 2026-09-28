---
titulo: "Paxos"
tipo: concepto
tags: ["paxos","consenso","distribuidos","lamport"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [318]
veces_en_examen: 0
---

# Paxos

> Algoritmo de coordinación distribuida, desarrollado por Leslie Lamport, que fue uno de los primeros en resolver el problema del consenso.

Paxos y otros algoritmos de coordinación distribuida se basan en un consensus mechanism. Son algoritmos complicados de diseñar correctamente, y aun implementar uno ya probado es difícil.
Por eso se recomienda no implementar la coordinación distribuida uno mismo y usar paquetes existentes como Apache ZooKeeper, Consul o etcd.

## Relacionado

- [[consensus-mechanism]]
- [[data-coordination-distributed-system]]

## Lo mencionan

- [[data-coordination-distributed-system]]
- [[distributed-lock]]
- [[consensus-mechanism]]
