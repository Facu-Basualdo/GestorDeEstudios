---
titulo: "Decorator"
tipo: concepto
tags: ["patron-de-diseno","estructural","patron","decorator","embellecimiento","dinamico","responsabilidad","patron de diseno","estructura","decoracion","envoltorio","patron-estructural","decorador","responsabilidades-dinamicas","objetos-ligeros","structural-pattern","design-pattern","object-composition","transparente"]
temas: ["[[patrones-estructurales]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [17,48,71,193,194,195,196,197,199,200]
veces_en_examen: 0
---

# Decorator

> Decorator es un patrón de diseño estructural que permite añadir responsabilidades a un objeto de forma dinámica, envolviéndolo en objetos decorador que comparten su interfaz.

## Participantes
- **Component** (VisualComponent): define la interfaz para objetos que pueden tener responsabilidades añadidas dinámicamente.
- **ConcreteComponent** (TextView): define un objeto al cual se le pueden adjuntar responsabilidades adicionales.
- **Decorator**: mantiene una referencia a un objeto Component y define una interfaz que se ajusta a la interfaz de Component.
- **ConcreteDecorator** (BorderDecorator, ScrollDecorator): añade responsabilidades al componente.

## Colaboraciones
- Decorator reenvía peticiones a su objeto Component. Puede realizar operaciones adicionales antes y después de reenviar la petición.

## Consecuencias
**Beneficios:**
1. Mayor flexibilidad que la herencia estática: las responsabilidades se pueden añadir y quitar en tiempo de ejecución.
2. Evita clases con muchas funcionalidades en niveles altos de la jerarquía: se puede empezar con una clase simple y añadir funcionalidad incrementalmente.
**Desventajas:**
3. Un decorador y su componente no son idénticos: desde el punto de vista de la identidad de objetos, un componente decorado no es idéntico al componente mismo.
4. Muchos objetos pequeños: el diseño suele resultar en sistemas compuestos por muchos objetos pequeños que se diferencian solo en cómo están interconectados, lo que puede dificultar el aprendizaje y la depuración.

## Implementación
1. **Conformidad de interfaz**: la interfaz del decorador debe ajustarse a la del componente que decora.
2. **Omisión de la clase abstracta Decorator**: si solo se necesita añadir una responsabilidad, se puede fusionar la responsabilidad de reenvío en el ConcreteDecorator.
3. **Mantener las clases Component ligeras**: la clase común debe definir solo la interfaz, no almacenar datos, para evitar que los decoradores sean demasiado pesados.
4. **Cambiar la piel vs. cambiar las entrañas**: el patrón Strategy es una alternativa para cambiar el comportamiento interno del objeto, útil cuando la clase Component es intrínsecamente pesada.

## Código de ejemplo (C++)
Se define una clase `VisualComponent` con operaciones como `Draw()` y `Resize()`. Luego una clase `Decorator` que hereda de `VisualComponent` y mantiene un puntero a `VisualComponent`, reenviando las operaciones por defecto. Subclases como `BorderDecorator` agregan comportamiento específico (ej. dibujar un borde). Se pueden componer decoradores anidados, por ejemplo: `new BorderDecorator(new ScrollDecorator(textView), 1)`.

## Relacionado

- [[strategy]]
- [[adapter]]
- [[composite]]
- [[facade]]
- [[transparent-enclosure]]
- [[monoglyph]]

## Lo mencionan

- [[model-view-controller]]
- [[composite]]
- [[bridge]]
- [[prototype]]
- [[proxy]]
- [[design-pattern-classification]]
- [[interface]]
- [[relating-run-time-and-compile-time-structures]]
- [[extender-funcionalidad-mediante-subclases]]
- [[incapacidad-de-alterar-clases-convenientemente]]
- [[design-aspects-that-design-patterns-let-you-vary]]
- [[structural-patterns]]
