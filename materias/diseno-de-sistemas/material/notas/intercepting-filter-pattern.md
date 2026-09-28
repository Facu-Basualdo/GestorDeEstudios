---
titulo: "Intercepting Filter Pattern"
tipo: concepto
tags: ["intercepting-filter","testability","patron","filtros"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [247]
veces_en_examen: 0
---

# Intercepting Filter Pattern

> El Intercepting Filter Pattern inyecta procesamiento previo y posterior a un request o response entre un cliente y un servicio.

Se pueden definir y aplicar cualquier cantidad de filtros, en un orden arbitrario, al request antes de pasarlo al servicio final. Por ejemplo, los servicios de logging y autenticación suelen ser útiles para implementar una vez y aplicar universalmente. Los filtros de prueba se pueden insertar de esta manera sin perturbar el resto del procesamiento del sistema.

**Beneficios**:
- Hace las clases más simples, al no poner toda la lógica de pre- y post-procesamiento en la clase.
- Puede motivar la reutilización y reducir drásticamente el tamaño de la base de código.

**Tradeoffs**:
- Si se pasa una gran cantidad de datos al servicio, el patrón puede ser muy ineficiente y agregar una latencia no trivial, porque cada filtro hace un recorrido completo sobre toda la entrada.

## Relacionado

- [[strategy]]

## Lo mencionan

- [[patterns-for-testability]]
