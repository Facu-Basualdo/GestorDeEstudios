---
titulo: "MVC (Modelo-Vista-Controlador)"
tipo: concepto
tags: ["mvc","modelo-vista-controlador","arquitectura","patron-arquitectonico"]
temas: ["[[patrones-arquitectonicos]]"]
fuente: "arquitectura_compressed.pdf"
paginas: [41]
veces_en_examen: 0
---

# MVC (Modelo-Vista-Controlador)

> Separa la presentación de la interacción con los datos del sistema, estructurando el sistema en modelo, vista y controlador.

El sistema se estructura en:

- **Modelo**: maneja los datos del sistema y las operaciones relacionadas con esos datos.
- **Vista**: define cómo se presenta la información al usuario.
- **Controlador**: maneja la interacción entre el usuario y la Vista y el Modelo.

**Cuándo se usa:**
- Cuando hay múltiples maneras de ver e interactuar con los datos.
- Cuando los futuros requerimientos para interacción y presentación de datos sean desconocidos.

**Ventajas:** permite separar los datos de su presentación, es decir, permite que los datos sean presentados de distintas maneras.

**Desventajas:** puede involucrar código y complejidad adicional en datos e interacciones simples.


