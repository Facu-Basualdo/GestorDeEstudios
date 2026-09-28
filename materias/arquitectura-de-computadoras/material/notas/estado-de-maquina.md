---
titulo: "Estado de Máquina"
tipo: concepto
tags: ["estado-de-maquina","secuenciador","abacus","indicadores"]
temas: ["[[secuenciador-y-control]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [72]
veces_en_examen: 0
---

# Estado de Máquina

> Es la información que el secuenciador usa para tomar decisiones sobre el curso de acción de determinadas instrucciones.

Como mínimo incluye dos elementos:
- **Indicador de Fase**: permite saber si el secuenciador está en fase de instrucción o de búsqueda del operando, porque son muy parecidas.
- **Indicador de Signo del AC**: permite identificar el signo del AC, porque hay instrucciones basadas en el signo del AC. Ejemplo: salto si AC < 0.

## Relacionado

- [[secuenciador]]

## Lo mencionan

- [[entorno-de-un-secuenciador]]
