---
titulo: "Reduce Usage"
tipo: concepto
tags: ["eficiencia-energetica","reduce-usage","tacticas","consumo-energetico"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [126]
veces_en_examen: 0
---

# Reduce Usage

> Reduce Usage reduce el consumo de energía disminuyendo la actividad de los dispositivos o desactivando recursos cuando ya no se necesitan.

Es una de las tácticas de asignación de recursos.

- A nivel de dispositivo: reducir la frecuencia de refresco de la pantalla, oscurecer el fondo, etc.
- Otra vía: remover o desactivar recursos cuando la demanda ya no los requiere: apagar discos, CPUs o servidores, correr CPUs a menor clock rate, o cortar la corriente a bloques del procesador no usados.
- Puede incluir consolidar VMs en el mínimo número de servidores físicos y apagar los recursos ociosos.
- En aplicaciones móviles, se puede enviar parte del cómputo a la nube si el consumo de energía de la comunicación es menor que el del cómputo.

## Relacionado

- [[allocate-resources]]

## Lo mencionan

- [[allocate-resources]]
- [[reduce-resource-demand]]
