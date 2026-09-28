---
titulo: "Dependency Inversion Principle"
tipo: concepto
tags: ["solid","dependencias","interfaces","arquitectura"]
temas: ["[[principios-solid]]"]
fuente: "solid y grasp.pdf"
paginas: [6]
veces_en_examen: 0
---

# Dependency Inversion Principle

> Principio que permite que el código no dependa de factores externos (frameworks, base de datos, etc.) y utilice el objeto que ha implementado la interfaz.

También llamado Inversión de Dependencias.

- Podemos hacer que el código no tenga que depender de factores externos (frameworks usados, base de datos que utilice, etc.), sino que solamente utilice el objeto que ha implementado esa interfaz.
- Si no se aplica, no va a ser nada flexible: si cambia algo tendremos que cambiar el core, la lógica o el dominio.
- Va a costar más identificar si rompe otro principio.
- No se puede testear de forma aislada; no se va a saber si el problema está en la clase o en las dependencias.
- Lo más común para solucionar esto es utilizar un Inyector de Dependencias.

## Relacionado

- [[inyector-de-dependencias]]

## Lo mencionan

- [[solid]]
- [[inyector-de-dependencias]]
