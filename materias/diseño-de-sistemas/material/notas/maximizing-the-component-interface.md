---
titulo: "Maximizing the Component interface"
tipo: concepto
tags: ["composite","interfaz","component"]
temas: ["[[patrones-estructurales]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [185]
veces_en_examen: 0
---

# Maximizing the Component interface

> Maximizar la interfaz de Component permite que los clientes ignoren si están usando objetos Leaf o Composite.

Uno de los objetivos del patrón Composite es hacer que los clientes no sean conscientes de las clases Leaf o Composite específicas que están usando. Para lograr esto, la clase Component debe definir tantas operaciones comunes para las clases Composite y Leaf como sea posible. La clase Component generalmente proporciona implementaciones predeterminadas para estas operaciones, y las subclases Leaf y Composite las redefinirán. Sin embargo, este objetivo a veces entra en conflicto con el principio de diseño de jerarquías de clases que dice que una clase solo debe definir operaciones que sean significativas para sus subclases. A veces se puede implementar una operación que parecería tener sentido solo para Composites para todos los Components moviéndola a la clase Component. Por ejemplo, la interfaz para acceder a los hijos es una parte fundamental de una clase Composite, pero no necesariamente de las clases Leaf. Si vemos un Leaf como un Component que nunca tiene hijos, podemos definir una operación predeterminada para el acceso a hijos en la clase Component que nunca devuelva ningún hijo. Las clases Leaf pueden usar la implementación predeterminada, pero las clases Composite la redefinirán para devolver sus hijos.


