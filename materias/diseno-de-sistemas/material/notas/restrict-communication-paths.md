---
titulo: "Restrict Communication Paths"
tipo: concepto
tags: ["comunicacion","integrabilidad","soa","autorizacion"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [142]
veces_en_examen: 0
---

# Restrict Communication Paths

> Restrict Communication Paths es una táctica que restringe el conjunto de elementos con los cuales un elemento dado puede comunicarse.

En la práctica, esta táctica se implementa restringiendo la visibilidad de un elemento (cuando los desarrolladores no pueden ver una interfaz, no pueden emplearla) y mediante autorización, es decir, restringiendo el acceso solo a elementos autorizados.

Esta táctica se observa en las arquitecturas orientadas a servicios (SOA), donde se desaconsejan los pedidos punto a punto y se fuerza a que todos los pedidos pasen por un bus de servicios empresarial (enterprise service bus), de modo que el ruteo y el preprocesamiento se hagan de manera consistente.


## Lo mencionan

- [[use-an-intermediary]]
