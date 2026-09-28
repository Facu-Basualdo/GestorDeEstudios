---
titulo: "Location Independence"
tipo: concepto
tags: ["localizacion","independencia","sistemas-distribuidos","runtime","servicios","modificabilidad","ubicacion"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [156,159,160,161,162,163,165,166]
veces_en_examen: 0
---

# Location Independence

> Location independence es la situacion en la que dos piezas de software distribuido interactuan y la ubicacion de una o de ambas no se conoce antes de la ejecucion, o puede cambiar durante la ejecucion.

En los sistemas distribuidos, los servicios suelen desplegarse en ubicaciones arbitrarias y los clientes deben descubrir su ubicacion dinamicamente. Ademas, los servicios deben hacer descubrible su ubicacion una vez que se han desplegado. Disenar el sistema para lograr independencia de la ubicacion significa que la ubicacion sera facil de modificar con un impacto minimo en el resto del sistema.

## Relacionado

- [[deployability]]

## Lo mencionan

- [[modifiability]]
