---
titulo: "Fases de la Suma"
tipo: concepto
tags: ["fases","suma","abacus","microordenes","secuenciador"]
temas: ["[[arquitectura-abacus]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [67,68]
veces_en_examen: 0
---

# Fases de la Suma

> Son las cuatro fases en que se organiza la ejecución de la suma en Abacus: búsqueda de la instrucción, búsqueda del operando, ejecución de la suma y preparación de la próxima instrucción.

**Fase 1: Búsqueda de la Instrucción**
- `(P) → S`: la dirección de la próxima instrucción se envía al Reg. S.
- `((S)) → M`: la instrucción propiamente dicha se envía al Reg. M.
- Las señales `ICM` y `PACM` se lanzan en θ1 para ganar tiempo; no pueden lanzarse en θ0 porque el Reg. S debe estar cargado.
- LEC necesita dos ciclos de memoria: uno para leer la información y otro para regenerar lo que perdió, porque la lectura es destructiva en memorias de núcleos magnéticos.

**Fase 2: Búsqueda del Operando**
- `(M) → I`: se envía el contenido del Reg. M al Reg. I.
- `(D) → S`: el Deco CO decodifica el CO, detecta que es de la familia IBO y envía la dirección del operando (campo Dir) al Reg. S.
- `((S)) → M`: se envía el operando al Reg. M para su posterior envío a la ALU; se hace una previa puesta a cero del Reg. M y luego la lectura del operando.
- LEC en la suma dura 4 batidos: 2 para leer la instrucción y 2 para leer el operando.

**Fase 3: Ejecución de la Suma**
- `(M) + (AC) → AC`: se suma el contenido del Reg. AC con el contenido del Reg. M, sobrescribiendo el Reg. AC.
- Dura 2 batidos porque no es posible bajar el contenido de M, estabilizarlo sobre el bus M y realizar la suma simultáneamente; se necesita 1 batido y algo más, que equivale a 2 batidos.
- Como la ALU no tiene registro propio, no puede almacenar la información del operando y liberar al Bus M; debe realizar la suma apenas reciba la información, si no esta se pierde.
- Aunque se agregara un registro a la ALU, la lectura destructiva sigue necesitando 1 batido extra para regenerar.

**Fase 4: Preparación de la Próxima Instrucción**
- `(P) + 1 → P`: se incrementa el contenido del Reg. P.
- `(P) → S`: se envía el contenido del Reg. P al Reg. S; este contiene la dirección de la próxima instrucción.
- Con la Fase 1 solo tienen en común la acción `(P) → S` y las señales de gobierno `SRP` y `ENS`; dichas señales se solapan, coinciden en un punto y no se hacen dos veces.
- Esta fase se conecta con la fase 1: si se disponen los cronogramas en forma de cilindro, las señales de gobierno se superponen.

## Relacionado

- [[suma-en-abacus]]
- [[familias-de-instrucciones]]
- [[secuenciador]]

