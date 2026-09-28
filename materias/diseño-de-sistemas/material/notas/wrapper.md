---
titulo: "Wrapper"
tipo: concepto
tags: ["patron","wrapper","encapsulacion","integrabilidad","tailor-interface"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [150]
veces_en_examen: 0
---

# Wrapper

> Forma de encapsulación en la que un componente se envuelve en una abstracción alternativa que es el único elemento autorizado para usarlo.

Un wrapper es el único elemento permitido para usar ese componente; todo el resto del software usa los servicios del componente pasando por el wrapper. El wrapper transforma los datos o la información de control para el componente que envuelve. Por ejemplo, un componente puede esperar entrada en medidas imperiales pero encontrarse en un sistema en el que todos los demás componentes producen medidas métricas. Los wrappers pueden:

- Traducir un elemento de la interfaz de un componente a un elemento alternativo.
- Ocultar un elemento de la interfaz de un componente.
- Preservar sin cambio un elemento de la interfaz base de un componente.

Los tres patrones de este grupo (wrappers, bridges y mediators) permiten acceder a un elemento sin forzar un cambio en el elemento o su interfaz. Crear cualquiera de estos patrones requiere trabajo de desarrollo previo e introduce algo de overhead de rendimiento, aunque normalmente es pequeño.

## Relacionado

- [[bridge]]
- [[mediator]]

## Lo mencionan

- [[exception-prevention]]
- [[bridge]]
- [[mediator]]
- [[restrict-dependencies]]
