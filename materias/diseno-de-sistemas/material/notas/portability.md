---
titulo: "Portability"
tipo: concepto
tags: ["portabilidad","plataforma","dependencias","virtual-machine"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [156]
veces_en_examen: 0
---

# Portability

> Portability es la facilidad con la que un software construido para ejecutarse en una plataforma puede cambiarse para ejecutarse en una plataforma diferente.

Se logra minimizando las dependencias de plataforma, aislando las dependencias en lugares bien identificados y escribiendo el software para ejecutarse en una "virtual machine" (por ejemplo, una Java Virtual Machine) que encapsula todas las dependencias de plataforma. Los escenarios de portability tratan sobre mover el software a una nueva plataforma con no más de cierto nivel de esfuerzo o contando la cantidad de lugares que tendrían que cambiar. Los enfoques arquitectónicos de portability están entrelazados con los de deployability.

## Relacionado

- [[deployability]]

## Lo mencionan

- [[modifiability]]
