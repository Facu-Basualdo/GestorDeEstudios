---
titulo: "Dependency Injection Pattern"
tipo: concepto
tags: ["dependency-injection","inversion-of-control","testability","patron"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [246]
veces_en_examen: 0
---

# Dependency Injection Pattern

> El Dependency Injection Pattern separa las dependencias de un cliente de su comportamiento, inyectándolas desde una fuente externa mediante inversión de control.

En este patrón hay cuatro roles:
- **Service**: el servicio que se quiere poner a disposición de forma amplia.
- **Client**: el cliente del servicio.
- **Interface**: la interfaz usada por el cliente e implementada por el servicio.
- **Injector**: el que crea una instancia del servicio y la inyecta en el cliente.

Cuando el servicio se crea y se inyecta en el cliente, el cliente se escribe sin conocimiento de una implementación concreta; todos los detalles de implementación se inyectan, típicamente en tiempo de ejecución.

**Beneficios**:
- Se pueden inyectar instancias de prueba en lugar de instancias de producción; esas instancias de prueba pueden gestionar y monitorear el estado del servicio. Así, el cliente puede escribirse sin saber cómo va a ser probado. Así se implementan muchos frameworks de testing modernos.

**Tradeoffs**:
- Hace menos predecible el rendimiento en tiempo de ejecución, porque puede cambiar el comportamiento que se está probando.
- Agrega una pequeña complejidad inicial y puede requerir reentrenar a los desarrolladores para pensar en términos de inversión de control.

## Relacionado

- [[inversion-of-control]]

## Lo mencionan

- [[patterns-for-testability]]
- [[inversion-of-control]]
