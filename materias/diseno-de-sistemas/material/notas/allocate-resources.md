---
titulo: "Allocate Resources"
tipo: concepto
tags: ["eficiencia-energetica","asignacion-de-recursos","tacticas","arquitectura"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [126]
veces_en_examen: 0
---

# Allocate Resources

> Allocate Resources asigna recursos para realizar trabajo de una manera que tiene en cuenta el consumo de energía.

Las tácticas de asignación de recursos son **reduce usage**, **discovery** y **schedule resources**.

- **Reduce usage**: reduce el consumo a nivel de dispositivo (p. ej., bajar la frecuencia de refresco de una pantalla u oscurecer el fondo) o desactiva recursos cuando ya no se necesitan (apagar discos, CPUs o servidores, correr CPUs a menor velocidad, cortar la corriente a bloques de procesador no usados, consolidar VMs en la menor cantidad de servidores físicos, o enviar parte del cómputo a la nube en apps móviles).
- **Discovery**: permite anotar la solicitud de servicio con información energética para elegir un proveedor según sus características de energía.
- **Schedule resources**: asigna tareas a recursos computacionales considerando el consumo de energía, restricciones y prioridades.

## Relacionado

- [[reduce-usage]]
- [[discovery]]
- [[schedule-resources]]

## Lo mencionan

- [[reduce-usage]]
- [[discovery]]
- [[schedule-resources]]
