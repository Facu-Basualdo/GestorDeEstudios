---
titulo: "Esquema ALU con Operadores de Carácter Combinacional"
tipo: concepto
tags: ["alu","esquema","coma-flotante","combinacional","punto-flotante","hardware"]
temas: ["[[arquitectura-abacus]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [42,43,44,45,46,47,48,49,50,51]
veces_en_examen: 0
---

# Esquema ALU con Operadores de Carácter Combinacional

> Esquema de ALU que trabaja con operandos representados por signo (S), exponente (E) y mantisa (M), más un contador/descontador (CD) y un registro de desplazamientos (RD).

Campos de los operandos:

- **S**: signo del operando: 0 es positivo y 1 es negativo.
- **E**: exponente.
- **M**: mantisa (negativos por complemento a 2).

Componentes:

- **CD**: Contador/Descontador con banderas **D** (Desborde) y **Z** (Indicador de Cero). Si Z=1 indica resultado 0; si Z=0 se analiza D: D=1 → Resultado Ea – Eb < 0; D=0 → Resultado Ea – Eb > 0.
- **RD**: Registro de Desplazamientos a derecha e izquierda, con **DE** como bit de desborde.

## Relacionado

- [[alu]]
- [[numeros-binarios-con-coma-flotante]]

