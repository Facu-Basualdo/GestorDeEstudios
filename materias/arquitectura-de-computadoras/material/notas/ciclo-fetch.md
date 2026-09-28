---
titulo: "Ciclo FETCH (búsqueda)"
tipo: concepto
tags: ["8086","fetch","cola-de-instrucciones","bus","ejecucion"]
temas: ["[[arquitectura-8086-y-modos-de-direccionamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [91]
veces_en_examen: 0
---

# Ciclo FETCH (búsqueda)

> Ciclo de búsqueda de instrucciones del 8086 en el que la instrucción entra desde el bus externo, se almacena en una cola y luego se decodifica y ejecuta.

1. La instrucción ingresa a la Lógica de Control del Bus, encargada de comunicar al procesador con el exterior (memoria RAM). Recibe todas las instrucciones del bus externo y las envía a la Cola de Instrucciones.
2. La Cola de Instrucciones es una estructura FIFO de 6 palabras que almacena, en orden de llegada, cada instrucción (ciclo pre-Fetch).
3. El Sistema de Control de la Unidad de Ejecución saca las instrucciones de la cola, las decodifica y las ejecuta.
4. Las operaciones de la ALU generan eventos registrados en el Registro de Indicadores (resultado cero, negativo, acarreo, etc.), con un 1 si se produce el evento o un 0 si no.
5. Para realizar operaciones aritméticas, la ALU utiliza los Registros de Propósito General, que almacenan valores temporales.
6. Si la instrucción requiere acceso a un operando en memoria: Dirección Efectiva del Operando = Segmento + Offset. El Segmento es el valor del registro DS (dirección de inicio del segmento de datos) y el Offset es el campo Dir del Registro de Instrucción (desplazamiento).

## Relacionado

- [[arquitectura-8086]]
- [[registros-de-proposito-general]]
- [[registro-indicadores-o-de-banderas-flags]]
- [[registros-de-direcciones-de-segmentos]]

## Lo mencionan

- [[arquitectura-8086]]
