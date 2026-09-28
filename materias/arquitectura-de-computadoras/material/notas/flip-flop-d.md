---
titulo: "Flip-Flop D"
tipo: concepto
tags: ["flip-flop","d","datos","retardo","clock","memoria"]
temas: ["[[circuitos-digitales-y-sistemas-logicos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [25]
veces_en_examen: 0
---

# Flip-Flop D

> Biestable de datos con una única entrada D, que soluciona el caso R = S = 1 del FF RS uniendo las entradas Set y Reset mediante una compuerta NOT.

El problema del FF RS es que el caso R = S = 1 debe ser evitado, el FF D soluciona esto uniendo las entradas. Es decir, permite una única entrada. Se opta por unir las entradas Set y Reset a través de una compuerta lógica NOT, para garantizar que una sea opuesta a la otra.

El FF D se denomina biestable de datos porque es almacén de un bit de datos, el valor lógico presente en su entrada (cero o uno según corresponda). La salida es siempre igual al valor más reciente aplicado a la entrada. Por lo tanto, recuerda y produce la última entrada. También se le llama biestable de retardo, porque retrasa un cero o uno aplicado a la entrada durante un pulso de reloj.

Inconveniente: Debido a que la ausencia de entrada en D se interpreta como cero lógico, es necesario su diseño de tipo sincrónico, para evitar un Reset espontáneo.

La entrada de sincronismo ‘Clock’ es interpretada como ‘Carga’ en bancos de memoria. El ‘Clock’ es un ‘Write’. Es la línea de habilitación de escritura, ya que, al mandar un dato, es el ‘Clock’ quien lo almacena en el punto de memoria. De manera tal que el dato queda guardado hasta la próxima grabación.

Tabla de Funcionamiento:
- Si D = 0 ^ CK = 1 ➔ Q’ = 0 → Reset
- Si D = 1 ^ CK = 1 ➔ Q’ = 1 → Set

## Relacionado

- [[flip-flop-rs-asincrona]]
- [[flip-flop-rs-sincrona]]
- [[biestable]]

