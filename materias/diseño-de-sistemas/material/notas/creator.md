---
titulo: "Creator"
tipo: concepto
tags: ["grasp","creacion","objetos","responsabilidad","patron-diseno","patron","acoplamiento"]
temas: ["[[patrones-grasp]]"]
fuente: "Cap17-UMLyPatrones.pdf"
paginas: [11,12,21,22]
veces_en_examen: 0
---

# Creator

> Creator es un patrón GRASP que sugiere asignar la responsabilidad de crear una instancia a la clase que agrega, contiene o registra a esa instancia.

El patrón Creator guía la asignación de responsabilidades relacionadas con la creación de objetos. Su intención básica es encontrar un creador que, de todos modos, necesite estar conectado con el objeto creado; elegirlo como creador apoya el bajo acoplamiento.

- Si hay varias opciones, se prefiere una clase B que agregue o contenga a la clase A.
- Las relaciones habituales son: *Composite* agrega *Part*, *Container* contiene *Content* y *Recorder* registra *Recorded*; en todos los casos, la clase que envuelve, contiene o registra es buena candidata para crear lo contenido o registrado. Es solo una guía.
- Un objeto compuesto es un excelente candidato para crear sus partes.

En el ejemplo de NextGEN POS, `Sale` contiene (agrega) muchas instancias de `SalesLineItem`, por lo que `Sale` es una buena candidata para crearlas; para eso se define un método `makeLineItem` en `Sale`.

A veces también se identifica un creador buscando la clase que tiene los datos de inicialización que se pasarán durante la creación (por ejemplo, un constructor con parámetros); esto es un caso del patrón Expert. Por ejemplo, si una instancia de `Payment` necesita inicializarse con el total de la venta y `Sale` conoce el total, `Sale` es candidata a crear `Payment`.

**Contraindicaciones:** si la creación requiere complejidad significativa (instancias recicladas por rendimiento, creación condicional de una familia de clases similares, etc.), conviene delegar la creación en una clase auxiliar llamada *Concrete Factory* o *Abstract Factory*.

**Beneficios:** apoya el bajo acoplamiento, lo que implica menores dependencias de mantenimiento y mayores oportunidades de reutilización; el acoplamiento probablemente no aumenta porque la clase creada ya suele ser visible para la clase creadora debido a las asociaciones existentes.

## Relacionado

- [[bajo-acoplamiento]]
- [[information-expert]]
- [[low-coupling]]
- [[controller]]
- [[grasp]]
- [[domain-model]]

## Lo mencionan

- [[grasp]]
- [[experto-en-informacion]]
- [[information-expert]]
- [[low-coupling]]
- [[high-cohesion]]
