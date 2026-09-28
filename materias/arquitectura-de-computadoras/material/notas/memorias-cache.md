---
titulo: "Memorias Caché"
tipo: concepto
tags: ["cache","memoria","cpu","localidad","velocidad"]
temas: ["[[memoria-y-almacenamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [51]
veces_en_examen: 0
---

# Memorias Caché

> Unidades de almacenamiento de alta velocidad y baja capacidad, vinculadas entre la RAM y la CPU, que operan según el principio de localidad almacenando datos de uso frecuente.

Opera según el principio de localidad, almacenando datos que la CPU utiliza con frecuencia. Cuando la CPU solicita datos, la caché es la primera en verificar si los tiene almacenados. Si está presente (aciertos en caché), se proporciona directamente a la CPU, ahorrando tiempo. En caso contrario (fallo en caché), se recupera de la memoria principal y se almacena en la caché para futuros accesos. Este proceso de anticipación y almacenamiento eficiente mejora la velocidad general del sistema al reducir la necesidad de acceder repetidamente a la memoria principal más lenta.

Este nivel puede tener dos tipos:
- Caché ON CHIP: integrada en el circuito; por razones físicas es más rápida.
- Caché ON BOARD: en la placa pero fuera del circuito.

La subjerarquía de cachés se compone de Caché L1, L2 y L3, que se diferencian por cercanía al núcleo, capacidad y velocidad. Cuando un procesador busca instrucciones y datos, primero recurre a la L1; si no encuentra, a la L2 y finalmente a la L3. Si ninguna de las cachés contiene lo que busca, recurre a la memoria RAM. Esta cadena de consultas se llama latencia.

## Relacionado

- [[cache-on-chip]]
- [[cache-on-board]]
- [[cache-l1]]
- [[cache-l2]]
- [[cache-l3]]
- [[memorias-ram]]
- [[latencia]]

## Lo mencionan

- [[cache-l2]]
- [[cache-l3]]
- [[cache-on-chip]]
- [[cache-on-board]]
- [[cache-l1]]
- [[ram-estatica-o-sram]]
