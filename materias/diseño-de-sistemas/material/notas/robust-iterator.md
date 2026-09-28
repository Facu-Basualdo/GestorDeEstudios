---
titulo: "Robust Iterator"
tipo: concepto
tags: ["iterator","patron-de-diseno","robustez","iteracion"]
temas: ["[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [247]
veces_en_examen: 0
---

# Robust Iterator

> Iterador que asegura que inserciones y eliminaciones en el agregado no interfieran con la travesía, sin necesidad de copiar el agregado.

Un robust iterator mantiene su integridad ante modificaciones del agregado durante la iteración. La mayoría de las implementaciones se basan en registrar el iterador con el agregado; al insertar o eliminar, el agregado ajusta el estado interno de los iteradores producidos o mantiene información interna para garantizar una travesía correcta. Kofler y Murray discuten implementaciones en ET++ y USL StandardComponents.

## Relacionado

- [[iterator]]

