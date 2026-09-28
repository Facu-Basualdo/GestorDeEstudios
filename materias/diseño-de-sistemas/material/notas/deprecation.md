---
titulo: "Deprecation"
tipo: concepto
tags: ["interfaces","evolucion","deprecacion","mantenimiento"]
temas: ["[[diseno-de-interfaces-y-comunicacion]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [276]
veces_en_examen: 0
---

# Deprecation

> La deprecación es la técnica de evolución de interfaces que consiste en eliminar una interfaz, dando aviso previo a los actores.

La mejor práctica al deprecar una interfaz es dar aviso extenso a los actores para que tengan tiempo de ajustarse. En la práctica, muchos actores no se ajustan de antemano y descubren la deprecación recién cuando la interfaz se elimina. Una técnica es introducir un código de error que indique que la interfaz será deprecada en una fecha específica o que ya fue deprecada.

## Relacionado

- [[interface-evolution]]

## Lo mencionan

- [[interface-evolution]]
- [[versioning]]
