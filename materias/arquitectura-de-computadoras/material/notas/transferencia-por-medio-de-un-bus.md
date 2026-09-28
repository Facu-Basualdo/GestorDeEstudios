---
titulo: "Transferencia por Medio de un Bus"
tipo: concepto
tags: ["bus","registros","transferencia","senales-de-gobierno"]
temas: ["[[circuitos-digitales-y-sistemas-logicos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [31]
veces_en_examen: 0
---

# Transferencia por Medio de un Bus

> Mecanismo de transferencia de información entre registros que utiliza un bus intermediario con señales de nivel e impulsionales.

Los registros situados entre dos buses tienen sus salidas desembocando sobre un bus; como varios registros pueden desembocar sobre el mismo bus, se les dota de puertas de salida gobernadas por señales de nivel.

Para transferir información entre registros: la señal de nivel SR1 permite hacer subir al bus intermediario los niveles de tensión dados por los biestables del registro R1. Una vez estabilizados estos niveles, se envía la señal impulsional ER2, que autoriza la carga en R2 del contenido del bus. Es necesario mantener la señal SR2 durante un intervalo de tiempo suficiente para que los niveles de tensión se estabilicen en el bus intermediario antes de enviar la señal ER2.

Un bus se dice que está maduro o completo cuando tiene el contenido de un registro copiado en su totalidad. En una máquina, estas señales están sincronizadas normalmente con un reloj productor de impulsos periódicos.

## Relacionado

- [[senales-de-gobierno]]
- [[bus]]
- [[registros]]

