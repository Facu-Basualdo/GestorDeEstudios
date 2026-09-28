---
titulo: "Exception Handling"
tipo: concepto
tags: ["excepciones","manejo-de-errores","tacticas","disponibilidad"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [81]
veces_en_examen: 0
---

# Exception Handling

> Táctica que maneja una excepción una vez que ha sido detectada.

La opción más simple es que el sistema se detenga (crash), pero eso es perjudicial para la disponibilidad, la usabilidad y la testabilidad. El mecanismo depende del entorno de programación: puede ir desde códigos de retorno de funciones (códigos de error) hasta clases de excepción que contienen información para la correlación de fallas, como el nombre, el origen y la causa de la excepción. El software puede usar esa información para enmascarar o reparar la falla.


## Lo mencionan

- [[recover-from-faults]]
- [[exception-prevention]]
- [[increase-competence-set]]
