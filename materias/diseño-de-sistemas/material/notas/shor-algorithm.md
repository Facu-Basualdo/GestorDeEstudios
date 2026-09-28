---
titulo: "Shor's Algorithm"
tipo: concepto
tags: ["shor","factorizacion","criptografia","algoritmo-cuantico"]
temas: ["[[organizacion,-deuda-tecnica-y-temas-avanzados]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [475]
veces_en_examen: 0
---

# Shor's Algorithm

> El algoritmo de Shor es un algoritmo cuántico que factoriza el producto de dos números primos grandes con un tiempo de ejecución del orden de log (número de bits de p y q).

La criptografía moderna se basa en la dificultad de factorizar el producto de dos números primos grandes. Si p y q son dos primos distintos de más de 128 bits, su producto pq tiene aproximadamente 256 bits. Calcular pq es fácil si se conocen p y q, pero factorizar pq y recuperar p y q es computacionalmente muy difícil en una computadora clásica y está en la categoría NP-hard. El algoritmo de Shor es un algoritmo cuántico que puede factorizar pq con un tiempo de ejecución del orden de log (número de bits de p y q).


