---
titulo: "Puntero de Instrucciones"
tipo: concepto
tags: ["ip","puntero","instrucciones","registro","cs","flujo"]
temas: ["[[arquitectura-8086-y-modos-de-direccionamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [93]
veces_en_examen: 0
---

# Puntero de Instrucciones

> El Puntero de Instrucción (IP) especifica la próxima instrucción de código máquina a ejecutarse, relativa al segmento localizado por CS.

Raramente se accede directamente a IP; en su lugar se usan instrucciones para cambiar IP y alterar la localización de la siguiente instrucción, cambiando así el flujo del programa. Se representa como `[CS:IP]`.

## Relacionado

- [[registros-de-segmento]]

## Lo mencionan

- [[segmentacion-de-memoria]]
