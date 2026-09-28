---
titulo: "Data Coordination in a Distributed System"
tipo: concepto
tags: ["datos","coordinacion","distribuidos","consenso"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [318]
veces_en_examen: 0
---

# Data Coordination in a Distributed System

> Coordinación del acceso a datos compartidos entre máquinas distribuidas, mediante mecanismos como locks distribuidos y algoritmos de consenso.

Un problema típico es crear un resource lock compartido entre máquinas distribuidas. En un solo proceso, los locks son operaciones de memoria atómicas; en un sistema distribuido surgen problemas de latencia, fallos de mensajes y fallos de las instancias.
La solución son algoritmos de coordinación distribuida como Paxos, que dependen de un mecanismo de consenso. Implementarlos es difícil, por lo que se recomienda usar paquetes existentes como Apache ZooKeeper, Consul o etcd.
Cuando las instancias de un servicio necesitan compartir información, la guardan en un servicio que usa un mecanismo de coordinación distribuida para asegurar que todas vean los mismos valores.

## Relacionado

- [[distributed-lock]]
- [[race-condition]]
- [[paxos]]
- [[consensus-mechanism]]

## Lo mencionan

- [[race-condition]]
- [[distributed-lock]]
- [[consensus-mechanism]]
- [[paxos]]
