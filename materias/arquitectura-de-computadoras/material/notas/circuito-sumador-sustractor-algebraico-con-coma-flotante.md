---
titulo: "Circuito Sumador/Sustractor Algebraico Con Coma Flotante"
tipo: concepto
tags: ["coma-flotante","sumador","sustractor","alineamiento","normalizacion"]
temas: ["[[arquitectura-abacus]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [40]
veces_en_examen: 0
---

# Circuito Sumador/Sustractor Algebraico Con Coma Flotante

> Circuito que suma o resta números en coma flotante mediante tres fases: alineamiento de mantisas, ajuste de signos y normalización del resultado.

1ª FASE – Proceso de Alineamiento de Mantisas:
Si se quiere sumar/restar dos números con distintos exponentes, primero se alinean, es decir, ambos deben tener el mismo exponente. Se detecta el menor exponente y sobre él se realiza una doble operación: incremento del exponente en una unidad y desplazamiento de la mantisa una posición a la derecha. Se comparan nuevamente los exponentes y se repite hasta que sean iguales.

2ª FASE – Proceso de Ajuste de Signos:
En la sustracción A – B, si A < B se intercambian los operandos, se realiza B – A y al resultado se le cambia el signo. Se realiza mediante un swap interno entre los registros A y B, para lo cual se añade un registro Auxiliar. El proceso activa una bandera para que al final se detecte que es necesario invertir el signo del resultado.

3ª FASE – Normalización del Resultado:
- La SUMA puede producir desbordamiento de capacidad: se desplaza la mantisa una posición a la derecha, aumentando el exponente en una unidad. Al desplazar a la derecha se “sacrifica” el bit de menor peso.
- La RESTA puede producir resultados no normalizados: la diferencia de mantisas implica la formación de n ceros a la izquierda del resultado. Se desplaza la mantisa n posiciones a la izquierda y se decrementa el exponente simultáneamente hasta que el bit del signo sea distinto que el bit de mayor peso de la mantisa.

## Relacionado

- [[numeros-binarios-con-coma-flotante]]
- [[desbordamiento-o-sobrecapacidad]]

