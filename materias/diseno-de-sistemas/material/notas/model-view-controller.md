---
titulo: "Model-View-Controller"
tipo: concepto
tags: ["patron","arquitectura","smalltalk","interfaz-de-usuario","usabilidad","patrones","mvc"]
temas: ["[[atributos-de-calidad-y-tacticas]]","[[introduccion-y-fundamentos-de-patrones]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [258]
veces_en_examen: 0
---

# Model-View-Controller

> Model-View-Controller (MVC) es un patrón de usabilidad que separa la lógica de negocio (model) de su realización en una o más vistas (views), con un controller que interpreta las interacciones del usuario.

MVC es probablemente el patrón de usabilidad más conocido. Tiene muchas variantes, como MVP (model-view-presenter), MVVM (model-view-view-model), MVA (model-view-adapter), etc.

En el MVC original:

* El **model** envía actualizaciones a la **view**, que el usuario ve e interactúa.
* Las interacciones del usuario (teclas, clics, movimientos del mouse) se transmiten al **controller**.
* El controller las interpreta como operaciones sobre el model y se las envía al model, que cambia su estado.

También existía el camino inverso: el model podía cambiar y el controller enviaba actualizaciones a la view.

El envío de actualizaciones depende de si MVC está en un solo proceso o distribuido entre procesos (potencialmente a través de la red):

* En un solo proceso, las actualizaciones se envían con el patrón observer.
* En MVC distribuido, se usa a menudo el patrón publish-subscribe.

**Beneficios:**

* La separación de concerns hace que cambios en un aspecto (por ejemplo, el layout de la UI) a menudo no tengan consecuencias en el model ni en el controller.
* Permite que los desarrolladores trabajen en model, view y controller de forma relativamente independiente y en paralelo; también pueden probarse en paralelo.
* Un model puede usarse en sistemas con diferentes views, o una view puede usarse en sistemas con diferentes models.

**Tradeoffs:**

* Puede volverse pesado para UIs complejas, porque la información suele estar dispersa en varios componentes; por ejemplo, si hay múltiples views del mismo model, un cambio en el model puede requerir cambios en varios componentes no relacionados.
* Para UIs simples, MVC agrega complejidad inicial que puede no compensarse.
* MVC agrega una pequeña latencia a las interacciones del usuario, lo que puede ser problemático en aplicaciones que requieren latencia muy baja.

## Relacionado

- [[observer]]
- [[composite]]
- [[strategy]]
- [[factory-method]]
- [[decorator]]
- [[patterns-for-usability]]

## Lo mencionan

- [[strategy]]
- [[patterns-for-usability]]
- [[observer]]
