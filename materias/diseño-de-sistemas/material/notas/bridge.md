---
titulo: "Bridge"
tipo: concepto
tags: ["patron-de-diseno","estructural","patron","bridge","abstraccion","implementacion","structural-pattern","design-pattern","decoupling","abstraction","implementation","desacoplamiento","estructura","patron de diseno","separacion de responsabilidades","jerarquias paralelas","integrabilidad","traduccion","interfaz"]
temas: ["[[atributos-de-calidad-y-tacticas]]","[[patrones-estructurales]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [17,57,71,144,145,146,147,148,151,152]
veces_en_examen: 0
---

# Bridge

> Bridge decouple an abstraction from its implementation so that the two can vary independently.

El patrón Bridge aborda el problema de cuando una abstracción puede tener varias implementaciones. La herencia tradicional liga permanentemente la abstracción a su implementación, lo que dificulta modificar, extender y reutilizar abstracciones e implementaciones de forma independiente. Por ejemplo, al implementar una abstracción de ventana portable (Window) para X Window System y Presentation Manager, usar herencia obliga a crear una subclase por cada combinación de tipo de ventana y plataforma, lo que genera una proliferación de clases y hace que el código cliente dependa de la plataforma. Bridge resuelve esto separando la jerarquía de abstracciones (Window, IconWindow, TransientWindow) de la jerarquía de implementaciones (WindowImp, XWindowImp, PMWindowImp). La abstracción mantiene una referencia a un objeto Implementor y delega en él las operaciones primitivas.

**Aplicabilidad**
- Evitar un enlace permanente entre abstracción e implementación (p. ej., para seleccionar o cambiar la implementación en tiempo de ejecución).
- Que tanto abstracciones como implementaciones sean extensibles mediante subclases.
- Que los cambios en la implementación no afecten a los clientes (evitar recompilación).
- En C++, ocultar completamente la implementación de los clientes.
- Cuando hay proliferación de clases (generalizaciones anidadas).
- Cuando se quiere compartir una implementación entre varios objetos (p. ej., con conteo de referencias).

**Estructura**
- **Abstraction** (Window): define la interfaz de la abstracción y mantiene una referencia a un objeto Implementor.
- **RefinedAbstraction** (IconWindow): extiende la interfaz definida por Abstraction.
- **Implementor** (WindowImp): define la interfaz para las clases de implementación, que normalmente provee operaciones primitivas.
- **ConcreteImplementor** (XWindowImp, PMWindowImp): implementa la interfaz Implementor.

**Colaboraciones**
- Abstraction reenvía las peticiones de los clientes a su objeto Implementor.

**Consecuencias**
1. Desacopla interfaz e implementación: la implementación puede configurarse y cambiarse en tiempo de ejecución; elimina dependencias en tiempo de compilación; fomenta la estratificación.
2. Mejora la extensibilidad: se pueden extender las jerarquías de abstracción e implementación de forma independiente.
3. Oculta detalles de implementación a los clientes (p. ej., el uso compartido de objetos implementadores y el conteo de referencias).

**Implementación**
- Solo un Implementor: si solo hay una implementación, no es necesario crear una clase Implementor abstracta, pero la separación sigue siendo útil para evitar recompilación.
- Creación del objeto Implementor adecuado: la abstracción puede decidir qué implementación instanciar según parámetros, o delegar en un objeto fábrica (Abstract Factory).
- Compartir implementadores: el idiom Handle/Body usa conteo de referencias para compartir implementaciones entre varios objetos.
- Herencia múltiple: en C++ se puede heredar públicamente de Abstraction y privadamente de ConcreteImplementor, pero esto liga permanentemente la implementación, por lo que no es un Bridge verdadero.

## Relacionado

- [[adapter]]
- [[decorator]]
- [[proxy]]
- [[factory-method]]
- [[abstract-factory]]
- [[singleton]]
- [[composite]]
- [[wrapper]]
- [[mediator]]

## Lo mencionan

- [[design-pattern-classification]]
- [[delegation]]
- [[dependencia-en-plataforma-hardware-y-software]]
- [[dependencia-en-representaciones-o-implementaciones-de-objetos]]
- [[acoplamiento-fuerte]]
- [[extender-funcionalidad-mediante-subclases]]
- [[design-aspects-that-design-patterns-let-you-vary]]
- [[structural-patterns]]
- [[wrapper]]
- [[mediator]]
