---
titulo: "Mediator"
tipo: concepto
tags: ["patron-de-diseno","comportamental","patron","comportamiento","mediator","acoplamiento","indireccion","patron de diseno","mediador","acoplamiento debil","patron-de-disenio","integrabilidad","runtime","planificacion","interfaces","extension","arquitectura"]
temas: ["[[atributos-de-calidad-y-tacticas]]","[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [17,71,258,261,262,263,266,267]
veces_en_examen: 0
---

# Mediator

> Un objeto que encapsula cómo interactúa un conjunto de objetos, promoviendo un acoplamiento débil al evitar que los objetos se refieran explícitamente entre sí.

El patrón Mediator define un objeto mediador que centraliza y controla las interacciones entre un grupo de objetos (colegas). Los colegas solo conocen al mediador, reduciendo el número de interconexiones. El mediador puede variar la interacción de forma independiente. Ejemplo: FontDialogDirector como mediador entre widgets de un cuadro de diálogo. La motivación surge cuando hay muchas conexiones entre objetos que dificultan la reutilización y el cambio de comportamiento. Se aplica cuando un conjunto de objetos se comunica de formas complejas, cuando reutilizar un objeto es difícil porque se refiere a muchos otros, o cuando un comportamiento distribuido debe ser personalizable sin mucha subclasificación. La estructura incluye una clase abstracta Mediator y ConcreteMediator que conoce y mantiene a los colegas. Los colegas se comunican con el mediador en lugar de directamente. Consecuencias: limita la subclasificación, desacopla colegas, simplifica protocolos de objetos, abstrae cómo cooperan los objetos y centraliza el control (puede volverse monolito). Implementación: se puede omitir la clase abstracta Mediator si solo hay un mediador; la comunicación colega-mediador puede implementarse con el patrón Observer o con una interfaz de notificación especializada.

## Relacionado

- [[observer]]
- [[facade]]
- [[change-manager]]
- [[bridge]]
- [[wrapper]]
- [[extension]]
- [[interface]]

## Lo mencionan

- [[chain-of-responsibility]]
- [[facade]]
- [[design-pattern-classification]]
- [[delegation]]
- [[acoplamiento-fuerte]]
- [[design-aspects-that-design-patterns-let-you-vary]]
- [[behavioral-patterns]]
- [[change-manager]]
- [[rolling-upgrade]]
- [[interface-mismatch]]
- [[wrapper]]
- [[bridge]]
- [[extension]]
