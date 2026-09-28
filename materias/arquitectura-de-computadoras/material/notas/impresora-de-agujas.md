---
titulo: "Impresora de Agujas"
tipo: concepto
tags: ["impresoras","matricial","perifericos","hardware"]
temas: ["[[entradasalida-y-perifericos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [117]
veces_en_examen: 0
---

# Impresora de Agujas

> Impresora matricial que emplea una serie de agujas o pines verticales activados por electroimanes para impactar una cinta entintada y crear puntos sobre el papel.

También conocidas como matriciales, emplean agujas dispuestas verticalmente que se activan mediante electroimanes, impactando en una cinta entintada presente entre la aguja y el papel. Los caracteres se forman a partir de puntos generados por el impacto de un número específico de agujas. La resolución está determinada por la cantidad de puntos que constituyen un carácter; son comunes las impresoras de 9, 18 y 24 agujas.

Funcionamiento:
1. La computadora envía caracteres al puerto de la impresora.
2. Los caracteres se almacenan en el buffer de la impresora.
3. El procesador de la impresora, usando una memoria ROM, identifica qué agujas deben activarse.
4. El cabezal se posiciona y el procesador envía señales eléctricas para activar las agujas; cada aguja tiene un pequeño martillo que la golpea mediante un electroimán.
5. La aguja golpea la cinta entintada, transfiriendo la tinta al papel, y vuelve a su posición original.
6. El cabezal activa combinaciones de agujas mientras se desplaza por la página.
7. Después de cada línea, el tambor que arrastra el papel gira para imprimir la siguiente.

Ventajas: trabajo con papel continuo, bajo costo de mantenimiento, fiabilidad y apta para grandes volúmenes sin alta calidad. Desventajas: baja velocidad, mucho ruido y calidad de impresión inferior.


## Lo mencionan

- [[impresora-de-tinta]]
