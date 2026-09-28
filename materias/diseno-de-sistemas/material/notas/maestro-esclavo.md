---
titulo: "Maestro-Esclavo"
tipo: concepto
tags: ["arquitectura","maestro-esclavo","sistemas-distribuidos","rendimiento","bases-de-datos"]
temas: ["[[otros-estilos-arquitectonicos]]"]
fuente: "arq. sistemas distribuidos.pdf"
paginas: [7]
veces_en_examen: 0
---

# Maestro-Esclavo

> Estilo arquitectónico con un componente central (maestro) y procesos esclavos que se encargan del funcionamiento, planteado como patrón para aumentar el rendimiento.

Hay un componente central que es el maestro. Las partes son procesos: como mínimo un proceso o servicio corriendo de manera separada. Esa separación puede darse en la misma memoria o en distintas computadoras; lo esencial es que son dos procesos distintos.

El libro lo plantea como un patrón para aumentar el rendimiento. Los procesos esclavos se encargan del funcionamiento. Se usa sobre todo para tener los datos distribuidos en diferentes lugares, ya sea por confiabilidad o por performance, con datos duplicados en distintos lugares.

Los esclavos van enviando información al maestro y cada tanto el maestro a veces envía información a los esclavos. La idea es que tenga tolerancias específicas. Los esclavos no necesariamente se conocen entre sí.

## Relacionado

- [[estilos-arquitectonicos]]
- [[sistema-distribuido]]

## Lo mencionan

- [[estilos-arquitectonicos]]
- [[cliente-servidor]]
- [[arquitectura-de-sistemas-distribuidos]]
