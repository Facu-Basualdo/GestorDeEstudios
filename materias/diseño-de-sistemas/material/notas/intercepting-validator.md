---
titulo: "Intercepting Validator"
tipo: concepto
tags: ["seguridad","patrones","intercepting-validator"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [230]
veces_en_examen: 0
---

# Intercepting Validator

> Patrón de seguridad que inserta un elemento de software (wrapper) entre el origen y el destino de los mensajes.

Su responsabilidad más común es implementar la táctica verify message integrity, pero también puede incorporar tácticas como detect intrusion y detect service denial (comparando mensajes con patrones de intrusión conocidos) o detect message delivery anomalies.

**Beneficios:**
- Según el validador que se cree y despliegue, puede cubrir la mayor parte de la categoría de tácticas 'detect attack' en un solo paquete.

**Tradeoffs:**
- Introducir un intermediario tiene un costo de performance.
- Los patrones de intrusión cambian y evolucionan con el tiempo, por lo que el componente debe mantenerse actualizado; esto impone una obligación de mantenimiento.

## Relacionado

- [[verify-message-integrity]]
- [[detect-message-delivery-anomalies]]
- [[detect-intrusion]]
- [[detect-service-denial]]

