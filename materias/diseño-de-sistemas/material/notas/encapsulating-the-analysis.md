---
titulo: "Encapsulating the Analysis"
tipo: concepto
tags: ["encapsulacion","analisis","separacion","recorrido"]
temas: ["[[estudio-de-caso-editor-lexi]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [66]
veces_en_examen: 0
---

# Encapsulating the Analysis

> Principio de encapsular el análisis en un objeto separado, que se usa junto con un iterador para realizar una pieza del análisis en cada punto del recorrido.

Se crea una clase por análisis, y una instancia de esta clase es 'llevada' por el iterador a cada glifo en la estructura. El objeto de análisis acumula información de interés. Se evita el uso de type tests o downcasts mediante la introducción de una operación abstracta como CheckMe en Glyph, que llama a una operación específica en el objeto de análisis. Este enfoque permite tratar objetos de forma especial sin recurrir a casts. Luego, se generaliza dando a todas las clases de análisis la misma interfaz, permitiendo su uso polimórfico. Esto lleva al patrón Visitor.

## Relacionado

- [[iterator]]

