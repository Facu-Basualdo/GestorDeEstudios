---
titulo: "Discover"
tipo: concepto
tags: ["descubrimiento","servicios","direcciones","registro","dependencias"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [144]
veces_en_examen: 0
---

# Discover

> Discover es una táctica que usa un servicio de descubrimiento, un catálogo de direcciones relevantes, para que las aplicaciones y servicios se localicen entre sí.

Un servicio de descubrimiento es un catálogo de direcciones relevantes que resulta útil cuando hay que traducir de una forma de dirección a otra, cuando la dirección objetivo puede haber sido enlazada dinámicamente, o cuando hay múltiples objetivos. Es el mecanismo por el cual las aplicaciones y servicios se localizan entre sí. También puede usarse para enumerar variantes de elementos particulares utilizados en diferentes productos.

Las entradas en el servicio de descubrimiento existen porque fueron registradas. El registro puede ser estático o dinámico, cuando se instancia un servicio. Las entradas deberían darse de baja cuando ya no son relevantes; esto puede hacerse estáticamente (como con un servidor DNS) o dinámicamente. La baja dinámica puede manejarla el propio servicio de descubrimiento realizando health checks de sus entradas, o un software externo que sabe cuándo una entrada del catálogo ya no es relevante.

Un servicio de descubrimiento puede incluir entradas que son a su vez servicios de descubrimiento, y las entradas pueden tener atributos adicionales que una consulta puede referenciar. Por ejemplo, un servicio de descubrimiento meteorológico puede tener un atributo 'costo del pronóstico', y se le puede pedir un servicio que provea pronósticos gratuitos.

La táctica funciona reduciendo las dependencias entre servicios cooperantes, que deberían escribirse sin conocimiento mutuo. Esto permite flexibilidad en el enlace entre servicios, y también en el momento en que ese enlace ocurre.


## Lo mencionan

- [[use-an-intermediary]]
