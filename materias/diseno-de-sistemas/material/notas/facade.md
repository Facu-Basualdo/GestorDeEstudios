---
titulo: "Facade"
tipo: concepto
tags: ["patron-de-diseno","estructural","patron","fachada","subsistema","structural-pattern","design-pattern","subsystem","interface","estructura","interfaz-unificada"]
temas: ["[[patrones-estructurales]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [17,22,71,202,203,204,205,207,209]
veces_en_examen: 0
---

# Facade

> Facade proporciona una interfaz unificada para un conjunto de interfaces de un subsistema, definiendo una interfaz de más alto nivel que facilita el uso del subsistema.

**Intención:** Proporcionar una interfaz unificada para un conjunto de interfaces de un subsistema. Facade define una interfaz de más alto nivel que hace que el subsistema sea más fácil de usar.

**Motivación:** Para reducir la complejidad, se introduce un objeto facade que ofrece una interfaz única y simplificada a las funcionalidades generales de un subsistema. Por ejemplo, un entorno de programación puede tener un subsistema de compilador con clases como Scanner, Parser, ProgramNode, BytecodeStream y ProgramNodeBuilder. La mayoría de los clientes solo quieren compilar código, por lo que una clase Compiler actúa como facade, proporcionando una interfaz simple.

**Aplicabilidad:**
- Se quiere proporcionar una interfaz simple a un subsistema complejo.
- Hay muchas dependencias entre clientes y las clases de implementación.
- Se quiere organizar los subsistemas en capas.

**Participantes:**
- **Facade** (Compiler): conoce qué clases del subsistema son responsables de una solicitud y delega las peticiones a los objetos del subsistema adecuados.
- **Clases del subsistema** (Scanner, Parser, ProgramNode, etc.): implementan la funcionalidad del subsistema y realizan el trabajo asignado por el Facade; no conocen al facade.

**Colaboraciones:**
- Los clientes se comunican con el subsistema enviando solicitudes al Facade, que las reenvía a los objetos del subsistema apropiados. El facade puede necesitar traducir su interfaz a las interfaces del subsistema.
- Los clientes que usan el facade no tienen que acceder directamente a los objetos del subsistema.

**Consecuencias:**
1. Protege a los clientes de los componentes del subsistema, reduciendo la cantidad de objetos con los que tratan.
2. Promueve un acoplamiento débil entre el subsistema y sus clientes, facilitando la variación de componentes sin afectar a los clientes. Los facades ayudan a organizar en capas y eliminar dependencias complejas o circulares.
3. No impide que las aplicaciones usen clases del subsistema si lo necesitan.

**Implementación:**
- Reducción del acoplamiento: se puede hacer que Facade sea una clase abstracta con subclases concretas, o configurar un objeto Facade con distintos objetos de subsistema.
- Clases públicas vs. privadas: el subsistema tiene una interfaz pública (que incluye el Facade y a veces otras clases como Parser y Scanner) y una privada. Pocos lenguajes soportan hacer privadas las clases del subsistema; C++ puede usar espacios de nombres.

## Relacionado

- [[abstract-factory]]
- [[mediator]]
- [[singleton]]
- [[builder]]
- [[composite]]
- [[visitor]]
- [[strategy]]

## Lo mencionan

- [[decorator]]
- [[flyweight]]
- [[mediator]]
- [[design-pattern-classification]]
- [[object-granularity]]
- [[acoplamiento-fuerte]]
- [[design-aspects-that-design-patterns-let-you-vary]]
- [[structural-patterns]]
