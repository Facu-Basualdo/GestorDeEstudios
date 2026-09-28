---
titulo: "Caching to improve performance"
tipo: concepto
tags: ["composite","cache","rendimiento"]
temas: ["[[patrones-estructurales]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [185]
veces_en_examen: 0
---

# Caching to improve performance

> El almacenamiento en caché puede mejorar el rendimiento al evitar recorridos o búsquedas innecesarias en composiciones.

Si es necesario recorrer o buscar composiciones con frecuencia, la clase Composite puede almacenar en caché información de recorrido o búsqueda sobre sus hijos. El Composite puede almacenar en caché resultados reales o solo información que le permita acortar el recorrido o la búsqueda. Por ejemplo, la clase Picture del ejemplo de Motivación podría almacenar en caché el cuadro delimitador de sus hijos. Durante el dibujo o la selección, este cuadro delimitador en caché permite que Picture evite dibujar o buscar cuando sus hijos no son visibles en la ventana actual. Los cambios en un componente requerirán invalidar los cachés de sus padres. Esto funciona mejor cuando los componentes conocen a sus padres. Por lo tanto, si se usa almacenamiento en caché, se debe definir una interfaz para indicar a los composites que sus cachés no son válidos.


