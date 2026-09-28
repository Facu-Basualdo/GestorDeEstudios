---
titulo: "Creational Patterns"
tipo: concepto
tags: ["patron-de-diseno","creacional","instanciacion"]
temas: ["[[patrones-de-creacion]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [71]
veces_en_examen: 0
---

# Creational Patterns

> Los creational patterns abstraen el proceso de instanciación, ayudando a que un sistema sea independiente de cómo se crean, componen y representan sus objetos.

Los patrones creacionales se vuelven importantes a medida que los sistemas evolucionan para depender más de la composición de objetos que de la herencia de clases. Enfatizan el encapsulamiento del conocimiento sobre qué clases concretas usa el sistema y ocultan cómo se crean y ensamblan las instancias. Existen dos temas recurrentes: encapsulan el conocimiento sobre las clases concretas y ocultan la creación y ensamblaje de objetos. Los patrones creacionales de clase usan herencia para variar la clase que se instancia, mientras que los patrones creacionales de objeto delegan la instanciación a otro objeto. A veces son competidores (por ejemplo, Prototype y Abstract Factory) y a veces son complementarios (Builder puede usar otros patrones).

## Relacionado

- [[abstract-factory]]
- [[builder]]
- [[factory-method]]
- [[prototype]]
- [[singleton]]

