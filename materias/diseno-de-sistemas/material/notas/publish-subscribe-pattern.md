---
titulo: "Publish-Subscribe Pattern"
tipo: concepto
tags: ["patron-arquitectonico","modificabilidad","eventos","publicador-suscriptor","invocacion-implicita"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [168,169]
veces_en_examen: 0
---

# Publish-Subscribe Pattern

> El patrón publish-subscribe es un patrón arquitectónico en el que los componentes se comunican principalmente mediante mensajes asincrónicos (eventos o topics) y los publicadores no conocen a los suscriptores.

Los componentes se comunican principalmente mediante mensajes asincrónicos, a veces llamados eventos o topics. Los publicadores no conocen a los suscriptores, y los suscriptores solo conocen los tipos de mensaje. El sistema depende de la invocación implícita: el componente que publica un mensaje no invoca directamente a ningún otro.

Elementos:
- Publisher component: envía (publica) mensajes.
- Subscriber component: se suscribe y luego recibe mensajes.
- Event bus: gestiona suscripciones y despacho de mensajes como parte de la infraestructura de runtime.

Cuando se publica un mensaje, el bus de eventos notifica a todos los elementos registrados en ese evento o topic. La publicación provoca una invocación implícita de métodos en otros componentes. Esto produce un acoplamiento débil entre publicadores y suscriptores.

Beneficios:
- Los publicadores y suscriptores son independientes y están débilmente acoplados. Agregar o cambiar suscriptores solo requiere registrarse en un evento y no produce cambios en el publicador.
- El comportamiento del sistema se puede cambiar fácilmente cambiando el evento o topic de un mensaje publicado; esto puede activar o desactivar funciones agregando o suprimiendo mensajes.
- Los eventos se pueden registrar fácilmente para permitir grabación y reproducción, lo que ayuda a reproducir condiciones de error difíciles de recrear manualmente.

Tradeoffs:
- Algunas implementaciones impactan negativamente el rendimiento (latencia); el uso de un mecanismo de coordinación distribuida puede mejorar esa degradación.
- En algunos casos, un componente no puede saber cuánto tardará en recibir un mensaje. En general, el rendimiento y la gestión de recursos son más difíciles de razonar en sistemas publish-subscribe.
- El patrón puede afectar negativamente el determinismo de sistemas síncronos: el orden en que se invocan los métodos puede variar según la implementación.
- Puede afectar la testabilidad: cambios pequeños en el event bus, como qué componentes están asociados a qué eventos, pueden tener un amplio impacto en el comportamiento y la calidad de servicio.
- Algunas implementaciones limitan los mecanismos para implementar seguridad (integridad). Como los publicadores no conocen la identidad de los suscriptores (y viceversa), el cifrado de extremo a extremo es limitado. Los mensajes del publicador al bus y del bus al suscriptor se pueden cifrar por separado, pero la comunicación cifrada de extremo a extremo requiere que todos los involucrados compartan la misma clave.

## Relacionado

- [[implicit-invocation]]
- [[event-bus]]

## Lo mencionan

- [[implicit-invocation]]
- [[event-bus]]
- [[architectural-approaches]]
- [[step-4-identify-the-architectural-approaches]]
