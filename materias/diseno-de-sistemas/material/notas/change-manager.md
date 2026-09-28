---
titulo: "ChangeManager"
tipo: concepto
tags: ["observer","subject","mediator","update","dependency"]
temas: ["[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [281]
veces_en_examen: 0
---

# ChangeManager

> An object that encapsulates complex update semantics between subjects and observers, mapping subjects to observers and defining an update strategy.

The ChangeManager is an instance of the Mediator pattern. Its three responsibilities are:

1. Map a subject to its observers and provide an interface to maintain this mapping.
2. Define a particular update strategy.
3. Update all dependent observers at the request of a subject.

Two specializations are:
- **SimpleChangeManager**: Always updates all observers of each subject. Fine when multiple updates aren't an issue.
- **DAGChangeManager**: Handles directed-acyclic graphs of dependencies to avoid redundant updates when an observer observes more than one subject.

Typically, there is only one ChangeManager, known globally (can use Singleton pattern).

## Relacionado

- [[mediator]]
- [[singleton]]

## Lo mencionan

- [[mediator]]
