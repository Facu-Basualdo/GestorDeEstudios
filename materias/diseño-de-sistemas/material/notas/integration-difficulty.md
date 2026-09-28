---
titulo: "Integration Difficulty"
tipo: concepto
tags: ["integracion","dependencias","riesgo","arquitectura","evaluacion"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [135]
veces_en_examen: 0
---

# Integration Difficulty

> La dificultad de integración puede pensarse como una función del tamaño y la "distancia" entre las interfaces de {Ci} y S, donde el tamaño es la cantidad de dependencias potenciales y la distancia es la dificultad de resolver las diferencias en cada dependencia.

Las dependencias suelen medirse sintácticamente: el módulo A depende del componente B si A llama a B, si A hereda de B o si A usa B. Pero hay dependencias que no son detectables por ninguna relación sintáctica: dos componentes pueden estar acoplados temporalmente o a través de recursos porque comparten y compiten por un recurso finito en runtime (memoria, ancho de banda, CPU), comparten el control de un dispositivo externo o tienen una dependencia de timing. También pueden estar acoplados semánticamente porque comparten conocimiento del mismo protocolo, formato de archivo, unidad de medida, metadata u otro aspecto.

Estas distinciones importan porque las dependencias temporales y semánticas no suelen estar bien entendidas, reconocidas explícitamente o documentadas. La falta de conocimiento implícito es un riesgo para proyectos grandes y de larga vida, e inevitablemente aumenta los costos y riesgos de la integración y del testing de integración.

La tendencia hacia servicios y microservicios busca desacoplar componentes para reducir el número y la distancia de sus dependencias. Los servicios solo se conocen entre sí mediante sus interfaces publicadas y, si esa interfaz es una abstracción apropiada, los cambios en un servicio tienen menos posibilidades de propagarse. Sin embargo, la orientación a servicios por sí sola reduce solo los aspectos sintácticos de la dependencia; no aborda los aspectos temporales ni semánticos. Los componentes supuestamente desacoplados que tienen conocimiento detallado y hacen suposiciones sobre los demás están en realidad fuertemente acoplados.

## Relacionado

- [[distance]]

