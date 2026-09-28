---
titulo: "Composite"
tipo: concepto
tags: ["patron","estructura","patron-de-diseno","estructural","composicion","jerarquia","composite","design-patterns","structural","tree-structure","part-whole","uniform-treatment","patron de diseno","jerarquia parte-todo","estructura arbol"]
temas: ["[[patrones-estructurales]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [15,17,21,71,182,183,184,188,190]
veces_en_examen: 0
---

# Composite

> Compone objetos en estructuras de árbol para representar jerarquías parte-todo, permitiendo que los clientes traten de manera uniforme a objetos individuales y composiciones de objetos.

## Motivación
Las aplicaciones gráficas como editores de dibujo permiten construir diagramas complejos a partir de componentes simples. El usuario puede agrupar componentes para formar componentes más grandes, que a su vez se pueden agrupar. Una implementación simple definiría clases para primitivas gráficas (Text, Line) y clases contenedoras. Pero el código debe tratar primitivas y contenedores de forma diferente, aunque el usuario los trate igual. Composite resuelve esto mediante composición recursiva.

## Aplicabilidad
- Representar jerarquías parte-todo de objetos.
- Permitir que los clientes ignoren la diferencia entre composiciones y objetos individuales, tratando todos los objetos de la estructura de manera uniforme.

## Participantes
- **Component (Graphic)**: Declara la interfaz para los objetos de la composición. Implementa comportamiento por defecto. Declara interfaz para acceder y gestionar hijos. Opcionalmente define interfaz para acceder al padre.
- **Leaf (Rectangle, Line, Text, etc.)**: Representa objetos hoja sin hijos. Define comportamiento para objetos primitivos.
- **Composite (Picture)**: Define comportamiento para componentes con hijos. Almacena hijos. Implementa operaciones relacionadas con hijos.
- **Client**: Manipula objetos a través de la interfaz Component.

## Colaboraciones
- Los clientes usan la interfaz de Component para interactuar con los objetos. Si el destinatario es un Leaf, maneja la solicitud directamente. Si es un Composite, reenvía la solicitud a sus hijos, posiblemente realizando operaciones adicionales.

## Consecuencias
- Define jerarquías de clases con objetos primitivos y compuestos. Los primitivos se pueden componer recursivamente. Donde se espera un primitivo, también puede ir un compuesto.
- Simplifica el cliente: trata estructuras compuestas y objetos individuales uniformemente, sin necesidad de distinguir entre hoja y compuesto.
- Facilita agregar nuevos tipos de componentes: nuevas subclases de Composite o Leaf funcionan automáticamente con código existente.
- Puede hacer el diseño demasiado general: es difícil restringir los componentes de un composite, requiriendo verificaciones en tiempo de ejecución.

## Relacionado

- [[iterator]]
- [[interpreter]]
- [[chain-of-responsibility]]
- [[decorator]]
- [[flyweight]]
- [[visitor]]
- [[command]]

## Lo mencionan

- [[model-view-controller]]
- [[bridge]]
- [[chain-of-responsibility]]
- [[command]]
- [[decorator]]
- [[facade]]
- [[flyweight]]
- [[interpreter]]
- [[iterator]]
- [[prototype]]
- [[visitor]]
- [[design-pattern-classification]]
- [[relating-run-time-and-compile-time-structures]]
- [[extender-funcionalidad-mediante-subclases]]
- [[design-aspects-that-design-patterns-let-you-vary]]
- [[recursive-composition]]
- [[null-iterator]]
- [[traversal-vs-traversal-actions]]
- [[structural-patterns]]
- [[double-dispatch]]
- [[traversal-responsibility]]
