---
titulo: "Design Assurance Level"
tipo: concepto
tags: ["seguridad","avionica","certificacion","do-178c"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [210,211]
veces_en_examen: 0
---

# Design Assurance Level

> Clasificación definida por DO-178C para cada función de software en sistemas aeronáuticos, determinada a partir de los efectos de una condición de falla en la aeronave, la tripulación y los pasajeros.

El patrón "separated safety" enfatiza dividir el sistema en porciones críticas y no críticas. En aviónica, la distinción es más fina. DO-178C, "Software Considerations in Airborne Systems and Equipment Certification", define un ranking llamado Design Assurance Level (DAL) para cada función de software. El DAL se determina a partir del proceso de evaluación de seguridad y del hazard analysis, examinando los efectos de una condición de falla en el sistema. Las condiciones de falla se clasifican por sus efectos en la aeronave, la tripulación y los pasajeros:

- **A: Catastrophic.** La falla puede causar muertes, usualmente con pérdida del avión.
- **B: Hazardous.** La falla tiene un gran impacto negativo en la seguridad o el rendimiento, o reduce la capacidad de la tripulación para operar la aeronave debido a distrés físico o mayor carga de trabajo, o causa lesiones serias o fatales entre los pasajeros.
- **C: Major.** La falla reduce significativamente el margen de seguridad o aumenta significativamente la carga de trabajo de la tripulación, y puede resultar en incomodidad de los pasajeros (o incluso lesiones menores).
- **D: Minor.** La falla reduce levemente el margen de seguridad o aumenta levemente la carga de trabajo. Ejemplos: incomodidad al pasajero o un cambio de plan de vuelo rutinario.
- **E: No effect.** La falla no tiene impacto en la seguridad, la operación de la aeronave o la carga de trabajo de la tripulación.

La validación y prueba de software es una tarea muy costosa con presupuestos limitados. Los DALs ayudan a decidir dónde poner los recursos de prueba limitados.

## Relacionado

- [[separated-safety]]

## Lo mencionan

- [[safety-integrity-level]]
