---
titulo: "Gateway"
tipo: concepto
tags: ["gateway","interfaces","patron","arquitectura"]
temas: ["[[diseno-de-interfaces-y-comunicacion]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [278]
veces_en_examen: 0
---

# Gateway

> Un gateway (a menudo llamado message gateway) traduce las solicitudes de los actores en solicitudes a los recursos del elemento o elementos objetivo, y se convierte en un actor del elemento objetivo.

Es un patrón común para restringir y mediar el acceso a los recursos de un elemento o grupo de elementos. Los gateways son útiles por varias razones:
- La granularidad de los recursos provista por un elemento puede ser distinta de la que el actor necesita; el gateway traduce entre ambos.
- Los actores pueden necesitar acceso a, o estar restringidos a, subconjuntos específicos de los recursos.
- Las características de los recursos —número, protocolo, tipo, ubicación y propiedades— pueden cambiar con el tiempo, y el gateway puede ofrecer una interfaz más estable.

## Relacionado

- [[interface-scope]]

## Lo mencionan

- [[interface-scope]]
