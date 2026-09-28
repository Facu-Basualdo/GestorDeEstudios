---
titulo: "Emulator"
tipo: concepto
tags: ["emulacion","qemu","virtualizacion","cross-processor"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [292]
veces_en_examen: 0
---

# Emulator

> Un emulator lee el código binario del procesador objetivo o invitado y simula la ejecución de las instrucciones del invitado en el procesador anfitrión.

Es una tecnología relacionada con los hypervisors que soporta ejecución entre procesadores distintos. A diferencia del hypervisor, que no traduce ni simula instrucciones, el emulator simula también dispositivos de I/O del invitado. Por ejemplo, el emulador open source QEMU puede emular un sistema PC completo, incluyendo BIOS, procesador x86 y memoria, tarjeta de sonido, tarjeta gráfica y hasta una disquetera.

Los hosted/Type 2 hypervisors y los emuladores permiten al usuario interactuar con las aplicaciones que corren dentro de la VM a través de la pantalla, teclado y mouse/touchpad de la máquina anfitriona.

## Relacionado

- [[hypervisor]]
- [[hosted-hypervisor]]
- [[virtual-machine]]

## Lo mencionan

- [[hypervisor]]
- [[hosted-hypervisor]]
