---
titulo: "Publicador-suscriptor"
tipo: concepto
tags: ["patron-arquitectonico","eventos","mensajes-asincronos","invocacion-implicita","bajo-acoplamiento"]
temas: ["[[patrones-arquitectonicos]]"]
fuente: "arquitectura_compressed.pdf"
paginas: [25]
veces_en_examen: 0
---

# Publicador-suscriptor

> Publicador-suscriptor es un patrón arquitectónico en el que los componentes se comunican mediante mensajes asíncronos (eventos o temas), con publicadores que desconocen a los suscriptores.

Los componentes se comunican principalmente mediante mensajes asíncronos, a veces llamados «eventos» o «temas». Se basa en la invocación implícita: el componente que publica un mensaje no invoca directamente a ningún otro componente.

Elementos:
- Componente publicador: envía (publica) mensajes.
- Componente suscriptor: se suscribe a los mensajes y los recibe.
- Bus de eventos: gestiona las suscripciones y el envío de mensajes como parte de la infraestructura de ejecución.

Cuando se publica un mensaje, el bus notifica a todos los elementos que registraron interés en el evento o tema. Esto produce un bajo acoplamiento entre publicadores y suscriptores.

Ventajas:
- Publicadores y suscriptores son independientes y están débilmente acoplados; agregar o cambiar suscriptores no requiere cambios en el publicador.
- El comportamiento del sistema se puede modificar cambiando el evento o tema de un mensaje, y así qué suscriptores lo reciben.
- Los eventos se pueden grabar y reproducir, lo que ayuda a reproducir condiciones de error.

Desventajas:
- Algunas implementaciones pueden afectar el rendimiento (latencia); la coordinación distribuida puede mitigar esa degradación.
- El rendimiento y la gestión de recursos son más difíciles de predecir; un componente no sabe cuánto tardará en recibir un mensaje.
- Puede afectar el determinismo de sistemas síncronos porque el orden de invocación de los métodos puede variar.
- Puede afectar la capacidad de realizar pruebas: cambios pequeños en el bus pueden tener gran impacto.
- Algunas implementaciones limitan la seguridad (integridad) flexible; como editores y suscriptores se desconocen, el cifrado de extremo a extremo es limitado.


## Lo mencionan

- [[diseno-arquitectonico]]
- [[decisiones-diseno-arquitectonico]]
