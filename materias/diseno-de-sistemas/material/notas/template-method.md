---
titulo: "Template Method"
tipo: concepto
tags: ["patron-de-diseno","comportamental","patron","comportamiento","template-method","algoritmo","herencia","patron de diseno","reutilizacion","patron de diseño"]
temas: ["[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [17,71,332,334,336]
veces_en_examen: 0
---

# Template Method

> Define el esqueleto de un algoritmo en una operación, delegando algunos pasos a subclases. Permite que las subclases redefinan ciertos pasos del algoritmo sin cambiar su estructura.

El patrón Template Method se utiliza para implementar las partes invariantes de un algoritmo una vez y dejar que las subclases implementen el comportamiento que puede variar. También es útil cuando el comportamiento común entre subclases debe factorizarse en una clase común para evitar duplicación de código, y para controlar las extensiones de las subclases definiendo puntos de enganche (hook operations).

**Motivación:**
Considere un framework de aplicación con clases `Application` y `Document`. La clase `Application` define el algoritmo para abrir y leer un documento en su operación `OpenDocument`, que es un template method: verifica si el documento puede abrirse, crea el objeto `Document` específico, lo agrega a su conjunto y lo lee. Las subclases de `Application` definen los pasos `CanOpenDocument` y `DoCreateDocument`; las subclases de `Document` definen `DoRead`. El template method fija el orden de estos pasos, pero permite que las subclases varíen los detalles.

**Participantes:**
- `AbstractClass` (Application): define operaciones primitivas abstractas que las subclases concretas implementan, e implementa un template method que define el esqueleto del algoritmo. El template method llama a operaciones primitivas, a operaciones definidas en AbstractClass o a operaciones de otros objetos.
- `ConcreteClass` (MyApplication): implementa las operaciones primitivas para llevar a cabo los pasos específicos de la subclase.

**Colaboraciones:**
- `ConcreteClass` depende de `AbstractClass` para implementar los pasos invariantes del algoritmo.

**Consecuencias:**
- Los template methods son una técnica fundamental para la reutilización de código, especialmente en bibliotecas de clases.
- Conducen a una estructura de control invertida conocida como el principio de Hollywood: "No nos llames, nosotros te llamaremos". La clase padre llama a las operaciones de la subclase, no al revés.
- Los template methods pueden llamar a operaciones concretas, operaciones concretas de AbstractClass, operaciones primitivas (abstractas), factory methods (ver Factory Method), y hook operations (operaciones de enganche) que por defecto no hacen nada y pueden ser extendidas por las subclases.
- Es importante que los template methods especifiquen qué operaciones son hooks (pueden anularse) y cuáles son abstractas (deben anularse).

**Implementación:**
1. En C++, las operaciones primitivas pueden declararse protected para que solo sean llamadas por el template method. Las primitivas que deben anularse se declaran virtuales puras. El template method en sí mismo no debe anularse, por lo que puede ser una función miembro no virtual.
2. Minimizar el número de operaciones primitivas que la subclase debe anular.
3. Usar convenciones de nomenclatura, como prefijar con "Do-" (ej. DoCreateDocument).

**Código de ejemplo:**
La clase `View` (de NeXT's AppKit) usa un template method `Display` para asegurar que el dibujo ocurra solo después de establecer el foco. `Display` llama a `SetFocus`, luego a `DoDisplay` (hook operation), y finalmente a `ResetFocus`. Las subclases anulan `DoDisplay` para agregar su comportamiento de dibujo específico.

```cpp
void View::Display () {
    SetFocus();
    DoDisplay();
    ResetFocus();
}
```

## Relacionado

- [[factory-method]]
- [[strategy]]
- [[visitor]]

## Lo mencionan

- [[factory-method]]
- [[design-pattern-classification]]
- [[parameterized-type]]
- [[relating-run-time-and-compile-time-structures]]
- [[dependencias-algoritmicas]]
- [[design-aspects-that-design-patterns-let-you-vary]]
- [[behavioral-patterns]]
