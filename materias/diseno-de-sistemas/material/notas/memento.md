---
titulo: "Memento"
tipo: concepto
tags: ["patron-de-diseno","comportamental","patron-de-disenio","memento","comportamiento","patron de diseno","encapsulacion","deshacer","estado","usabilidad","patrones","undo"]
temas: ["[[atributos-de-calidad-y-tacticas]]","[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [17,269,270,271,272]
veces_en_examen: 0
---

# Memento

> Patrón de diseño de comportamiento que captura y externaliza el estado interno de un objeto sin violar su encapsulación, permitiendo restaurarlo a ese estado posteriormente.

## Participantes
- **Memento** (SolverState): almacena el estado interno del Originator. Tiene dos interfaces: una estrecha (para el Caretaker) y una amplia (para el Originator).
- **Originator** (ConstraintSolver): crea un memento con una instantánea de su estado actual y usa el memento para restaurar su estado.
- **Caretaker** (undo mechanism): responsable de la custodia del memento; nunca opera ni examina su contenido.

## Colaboraciones
- El Caretaker solicita un memento al Originator, lo conserva y luego se lo devuelve.
- Los mementos son pasivos: solo el Originator que los creó puede asignar o recuperar su estado.

## Consecuencias
1. Preserva los límites de encapsulación.
2. Simplifica el Originator, que delega la gestión del estado a los clientes.
3. Puede ser costoso si se copia mucha información.
4. Dificultad para definir interfaces estrecha y amplia en algunos lenguajes.
5. Costos ocultos de almacenamiento para el Caretaker.

## Implementación
- Soporte del lenguaje: en C++ se puede hacer al Originator friend de Memento y declarar la interfaz amplia como privada.
- Almacenamiento incremental: cuando los mementos se crean y devuelven en secuencia predecible, se puede guardar solo el cambio incremental.

## Código de ejemplo
- MoveCommand utiliza ConstraintSolverMemento para deshacer movimientos de objetos gráficos.

## Usos conocidos
- Unidraw (CSolver), colecciones de Dylan (IterationState), QOCA (mementos incrementales).

## Patrones relacionados
- Command: los comandos pueden usar mementos para mantener el estado de operaciones deshacibles.
- Iterator: los mementos pueden usarse para iteración.

## Relacionado

- [[command]]
- [[iterator]]
- [[undo]]
- [[performance]]

## Lo mencionan

- [[command]]
- [[design-pattern-classification]]
- [[interface]]
- [[dependencia-en-representaciones-o-implementaciones-de-objetos]]
- [[design-aspects-that-design-patterns-let-you-vary]]
- [[patterns-for-usability]]
