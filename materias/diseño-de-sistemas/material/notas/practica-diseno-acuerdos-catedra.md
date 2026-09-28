---
titulo: "Práctica de diseño - acuerdos de cátedra"
tipo: concepto
tags: ["practica","diseno","catedra","diagramas","caso-de-uso"]
temas: ["[[diseno-orientado-a-objetos]]"]
fuente: "proceso_unificado_compressed.pdf"
paginas: [53]
veces_en_examen: 0
---

# Práctica de diseño - acuerdos de cátedra

> Conjunto de convenciones de la cátedra para realizar los diagramas de diseño en la práctica.

Para cada realización de CU se debe poner solo las clases necesarias para ese caso de uso.
Incluye parte estática y dinámica: diagrama de clase completo, mecanismos de clase (no se realiza; tiene que ver con cómo las clases se pasan a una base de datos), tarjetas CRC y diagrama de secuencia.
Por cada realización de CU hay un controlador y una interfaz, con nombres dados por el CU.
Preguntas guía para agregar una clase al diagrama: ¿está dentro del dominio? ¿tiene un método que perjudica? ¿tiene relaciones o no?
La responsabilidad está dada por conocer y hacer; puede haber métodos sin responsabilidad asociada.
La clase Interfaz colabora solo con el controlador.

## Relacionado

- [[clase-control]]

