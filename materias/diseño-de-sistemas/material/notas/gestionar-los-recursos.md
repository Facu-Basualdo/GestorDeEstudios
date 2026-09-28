---
titulo: "Gestionar los Recursos"
tipo: concepto
tags: ["rendimiento","recursos","concurrencia","cache","colas"]
temas: ["[[tacticas-de-arquitectura]]"]
fuente: "arquitectura_compressed.pdf"
paginas: [33,34,35,36,37,38,39]
veces_en_examen: 0
---

# Gestionar los Recursos

> Conjunto de estrategias para mejorar el rendimiento de un sistema aumentando, mejorando, reservando o gestionando de otra forma sus recursos.

Algunas formas de gestionar recursos son:
- Aumentar o mejorar los recursos.
- Introducir concurrencia o paralelismo.
- Tener varias instancias que calculan lo mismo cuando ese cálculo es muy requerido.
- Mantener copias de los datos mediante caché o memoria para evitar volver a buscar datos.
- Implementar colas de menor tamaño.
- Agendar o reservar recursos (puede producir deadlock).


