---
titulo: "División Sin Restauración"
tipo: concepto
tags: ["division","hardware","comparador","sustractor"]
temas: ["[[arquitectura-abacus]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [47,48]
veces_en_examen: 0
---

# División Sin Restauración

> Método de división que ocupa la misma estructura que la multiplicación, con un sumador/sustractor paralelo y un comparador que decide si colocar 1 o 0 en MC0.

Cambios respecto de la multiplicación:

- En lugar de un sumador hay un sustractor paralelo; como la resta es una suma complementada, no requiere cambiar piezas: el circuito es sumador/sustractor.
- Tiene un comparador que compara el dividendo (AC) con el divisor (B):
  - Si AC ≥ B, se coloca un 1 en MC0 y se resta AC – B.
  - Si AC < B, se coloca un 0 en MC0.

Procedimiento:
1. Colocar el dividendo en AC.
2. Hacer un desplazamiento completo hacia la derecha para mandar todo el contenido de AC hacia MC.
3. El divisor se coloca en B.
4. Hacer un desplazamiento a izquierda del conjunto AC y MC para colocar el bit de mayor peso de MC en la primer posición de AC.
5. En el bit de menor peso de MC queda un espacio vacío; se llena siguiendo la lógica del comparador.
6. Repetir hasta que se haya desplazado todo el contenido de AC hacia la izquierda.

Desventajas:
- El comparador hace perder tiempo y es muy difícil de implementar por complejidad y costo.
- Al inicio, las primeras dos o tres veces siempre se da AC < B. Se puede calcular: Cant_bits_significativos_divisor – 1 = Cant_desplazamientos_de_inicio.

Como solución surge la División Con Restauración.

## Relacionado

- [[multiplicacion-en-punto-flotante]]
- [[division-con-restauracion]]

## Lo mencionan

- [[division-con-restauracion]]
