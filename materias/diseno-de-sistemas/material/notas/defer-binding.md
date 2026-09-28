---
titulo: "Defer Binding"
tipo: concepto
tags: ["modificabilidad","binding","flexibilidad","tactica"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [162,163]
veces_en_examen: 0
---

# Defer Binding

> Defer binding es la tactica de diferir la vinculacion de valores a fases mas tardias del ciclo de vida para abaratar el costo de los cambios.

Como el trabajo de las personas es casi siempre mas caro y mas propenso a errores que el de las computadoras, dejar que las computadoras manejen un cambio reduce su costo. Si se disenan artefactos con flexibilidad incorporada, ejercer esa flexibilidad suele ser mas barato que codificar a mano un cambio especifico. Los parametros son un mecanismo conocido: una funcion parametrizada f(a,b) es mas general que f(a), que asume b=0. Vincular el valor de algunos parametros en una fase distinta a la de definicion es diferir el binding. En general, cuanto mas tarde se puedan vincular valores, mejor; pero poner los mecanismos en su lugar tiende a ser mas caro, un tradeoff conocido. Tacticas para vincular valores en tiempo de compilacion o build:
- Component replacement (por ejemplo, en un build script o makefile)
- Compile-time parameterization
- Aspects

Para vincular valores en deployment, startup o initialization:
- Configuration-time binding
- Resource files

Para vincular valores en runtime:
- Discovery (ver capitulo 7)
- Interpret parameters
- Shared repositories
- Polymorphism

Separar la construccion del mecanismo de su uso permite que un stakeholder (generalmente un desarrollador) provea el mecanismo y otro stakeholder (un administrador o instalador) lo ejerza mas tarde. Instalar un mecanismo para que otro haga un cambio sin tocar codigo se llama externalizar el cambio.

## Relacionado

- [[binding-time]]
- [[tactics-for-modifiability]]
- [[component-replacement]]
- [[aspects]]
- [[discovery]]
- [[externalizing-the-change]]

## Lo mencionan

- [[tactics-for-modifiability]]
- [[binding-time]]
- [[externalizing-the-change]]
