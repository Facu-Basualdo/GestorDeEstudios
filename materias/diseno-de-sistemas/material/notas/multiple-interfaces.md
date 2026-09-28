---
titulo: "Multiple Interfaces"
tipo: concepto
tags: ["interfaces","separacion-de-concerns","acceso","seguridad"]
temas: ["[[diseno-de-interfaces-y-comunicacion]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [274]
veces_en_examen: 0
---

# Multiple Interfaces

> División de una interfaz única en múltiples interfaces, cada una con un propósito lógico relacionado y para una clase distinta de actores.

Las interfaces múltiples proveen una especie de separación de concerns. Una clase específica de actor puede requerir solo un subconjunto de la funcionalidad disponible; esa funcionalidad puede ser provista por una de las interfaces. A la inversa, el proveedor de un elemento puede querer otorgar a los actores diferentes derechos de acceso, como lectura o escritura, o implementar una política de seguridad. Las interfaces múltiples soportan diferentes niveles de acceso.

Por ejemplo, un elemento puede exponer su funcionalidad a través de su interfaz principal y dar acceso a datos de debugging o monitoreo de performance, o a funciones administrativas, mediante interfaces separadas. Puede haber interfaces públicas de solo lectura para actores anónimos e interfaces privadas que permiten a actores autenticados y autorizados modificar el estado de un elemento.

## Relacionado

- [[interface]]

