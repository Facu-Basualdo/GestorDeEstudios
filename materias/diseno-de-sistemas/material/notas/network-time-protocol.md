---
titulo: "Network Time Protocol (NTP)"
tipo: concepto
tags: ["ntp","tiempo","sincronizacion","redes"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [317]
veces_en_examen: 0
---

# Network Time Protocol (NTP)

> Protocolo utilizado para sincronizar la hora entre dispositivos conectados a una red local o de área amplia.

NTP intercambia mensajes entre un servidor de tiempo y los dispositivos cliente para estimar la latencia de la red y luego aplica algoritmos para sincronizar el reloj del cliente con el servidor.
Es exacto a alrededor de 1 milisegundo en redes locales y unos 10 milisegundos en redes públicas; la congestión puede causar errores de 100 milisegundos o más.

## Relacionado

- [[time-coordination-distributed-system]]

## Lo mencionan

- [[time-coordination-distributed-system]]
