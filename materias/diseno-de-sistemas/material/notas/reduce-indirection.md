---
titulo: "Reduce Indirection"
tipo: concepto
tags: ["rendimiento","indireccion","overhead","modificabilidad"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [179]
veces_en_examen: 0
---

# Reduce Indirection

> Táctica que elimina intermediarios en el procesamiento de eventos para reducir el overhead computacional y mejorar la latencia.

El uso de intermediarios, importante para la modificabilidad, aumenta el overhead computacional al procesar un flujo de eventos; eliminarlos mejora la latencia. Es un tradeoff clásico entre modificabilidad y rendimiento. La separación de preocupaciones también puede aumentar el overhead si lleva a que un evento sea atendido por una cadena de componentes en lugar de un solo componente. Se puede lograr lo mejor de ambos mundos con optimización de código: programar usando intermediarios e interfaces que favorecen la encapsulación (y mantienen la modificabilidad) pero reducir o eliminar la indirección costosa en tiempo de ejecución. Algunos brokers permiten comunicación directa entre cliente y servidor después de establecer la relación, eliminando la indirección en solicitudes posteriores.

## Relacionado

- [[reduce-computational-overhead]]
- [[modifiability]]

## Lo mencionan

- [[reduce-computational-overhead]]
