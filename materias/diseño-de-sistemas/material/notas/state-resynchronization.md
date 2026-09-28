---
titulo: "State Resynchronization"
tipo: concepto
tags: ["reintroduccion","sincronizacion","redundancia","tacticas"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [81]
veces_en_examen: 0
---

# State Resynchronization

> Táctica de reintroducción que se asocia con la táctica de redundant spare para volver a sincronizar el estado de un componente que se reincorpora.

Cuando se usa con redundancia activa, la resincronización ocurre orgánicamente porque los componentes activo y standby reciben y procesan entradas idénticas en paralelo; en la práctica, sus estados se comparan periódicamente mediante un cálculo de cyclic redundancy check (checksum) o, en sistemas de servicios críticos para la seguridad, mediante un message digest (una función hash de un solo sentido). Cuando se usa con la versión de redundancia pasiva, la resincronización se basa únicamente en información de estado periódica transmitida de los componentes activos a los standby, típicamente mediante checkpointing.

## Relacionado

- [[redundant-spare]]
- [[active-redundancy]]
- [[passive-redundancy]]
- [[checksum]]

## Lo mencionan

- [[recover-from-faults]]
