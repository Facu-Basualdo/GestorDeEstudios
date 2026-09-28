---
titulo: "Playing Dumb"
tipo: concepto
tags: ["entrevistas","stakeholders","elicitation","requisitos","tecnicas"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [344]
veces_en_examen: 0
---

# Playing Dumb

> Técnica para entrevistar a stakeholders que dicen no saber un requerimiento: proponer un valor deliberadamente absurdo para que, al rechazarlo, revelen un rango aceptable.

Cuando un stakeholder responde "no sé" ante un requerimiento, conviene extraer lo que sí sabe. Por ejemplo, si se pregunta cuán rápido debe responder el sistema y no sabe, se puede decir "¿24 horas estaría bien?". La respuesta suele ser un "¡No!" indignado. Luego se prueba con 1 hora, 5 minutos y 10 segundos, hasta que el stakeholder admite un valor que tolera.

Ese rango de valores aceptables es suficiente para elegir mecanismos arquitectónicos: 24 horas, 10 minutos, 10 segundos y 100 ms implican enfoques arquitectónicos muy distintos.

## Relacionado

- [[gathering-asrs-by-interviewing-stakeholders]]

