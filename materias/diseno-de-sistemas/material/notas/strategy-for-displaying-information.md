---
titulo: "Strategy for Displaying Information"
tipo: concepto
tags: ["interfaz","resolucion","mobile","mvc"]
temas: ["[[sistemas-moviles-y-restricciones-de-recursos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [332]
veces_en_examen: 0
---

# Strategy for Displaying Information

> La estrategia para mostrar información está ligada a la resolución de pantalla disponible y define cuánta información se puede presentar al usuario.

Es posible hacer un mapeo estilo GPS en una pantalla de 320 × 320 píxeles, pero requiere un gran esfuerzo para minimizar la información mostrada. Con una resolución de 1280 × 720 hay más píxeles y la presentación puede ser más rica. Poder cambiar la información en pantalla es un motivador para un patrón como MVC (ver Capítulo 13), de modo que la vista se pueda intercambiar según las características de la pantalla.


