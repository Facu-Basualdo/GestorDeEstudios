---
titulo: "Distributed Lock"
tipo: concepto
tags: ["lock","concurrencia","distribuidos","exclusion-mutua"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [318]
veces_en_examen: 0
---

# Distributed Lock

> Mecanismo para impedir que dos instancias de servicio accedan simultáneamente a un recurso compartido en un sistema distribuido.

Para evitar una race condition sobre un dato crítico, por ejemplo el saldo de una cuenta bancaria, se bloquea el dato: una instancia obtiene el lock, trabaja de forma aislada y luego lo libera; la otra espera.
En una sola máquina, los locks son operaciones de memoria rápidas y atómicas. En un sistema distribuido, el protocolo tradicional (two-phase commit) requiere múltiples mensajes que pueden fallar, y la instancia que tiene el lock puede fallar. Por eso se usan algoritmos de coordinación distribuida como Paxos.

## Relacionado

- [[race-condition]]
- [[paxos]]
- [[consensus-mechanism]]
- [[data-coordination-distributed-system]]

## Lo mencionan

- [[race-condition]]
- [[data-coordination-distributed-system]]
