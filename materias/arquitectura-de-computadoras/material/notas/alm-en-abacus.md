---
titulo: "ALM en Abacus"
tipo: concepto
tags: ["alm","instruccion","abacus","memoria","instruccion-alm","almacenamiento","acumulador"]
temas: ["[[arquitectura-abacus]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [69,80]
veces_en_examen: 0
---

# ALM en Abacus

> Instrucción que almacena el contenido del registro AC en la palabra de memoria designada por la dirección del registro I.

No es de la familia IBO; por lo tanto, no debe realizar la búsqueda del operando.

- **Primer ciclo**: idéntico al de la suma (búsqueda de la instrucción).
- **Segundo ciclo**: se selecciona la palabra designada por la dirección de la instrucción y se escribe en ella el valor de AC.
  - `(D) → S`: enviar al Reg. S la dirección de memoria en la cual se quiere almacenar el contenido del Acumulador.
  - `(AC) → M`: cargar el contenido del Acumulador en el Reg. M. Ya se envía la señal `ESC` de escritura, porque la escritura se hace con previa puesta a cero y dura 2 batidos de clock.
  - `(M) → (S)`: realizar la escritura sobre la memoria del contenido del Reg. M en la dirección indicada por el campo Dir.

## Relacionado

- [[suma-en-abacus]]
- [[familias-de-instrucciones]]

## Lo mencionan

- [[secuenciador-tratamiento-de-las-instrucciones]]
- [[secuenciador-cableado-sincrono]]
- [[secuenciador-tratamiento-de-los-indicadores-de-estado]]
- [[ecuaciones-para-biestables-de-estado-en-abacus]]
- [[ind-en-abacus]]
- [[resumen-de-las-ecuaciones-del-secuenciador-de-abacus]]
