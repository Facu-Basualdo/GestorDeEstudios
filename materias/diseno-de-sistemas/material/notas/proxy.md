---
titulo: "Proxy"
tipo: concepto
tags: ["patron-de-diseno","estructural","patron","proxy","indireccion","patron de diseno","acceso","sustituto","virtual proxy","remote proxy","protection proxy","patron estructural","control de acceso","remoto","proteccion"]
temas: ["[[patrones-estructurales]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [17,71,297,298,299,302,305,306]
veces_en_examen: 0
---

# Proxy

> Proxy provee un sustituto o placeholder para otro objeto para controlar el acceso a él.

## Motivación

Un motivo para controlar el acceso a un objeto es diferir el costo completo de su creación e inicialización hasta que realmente se necesite. Por ejemplo, en un editor de documentos que puede incrustar objetos gráficos, algunos objetos como imágenes de gran tamaño son costosos de crear. Abrir un documento debe ser rápido, por lo que se evita crear todos los objetos costosos al mismo tiempo. Se usa un proxy de imagen que actúa como sustituto y crea la imagen real solo cuando es necesario (por ejemplo, cuando se invoca su operación Draw). El proxy mantiene el nombre del archivo como referencia a la imagen en disco, y también almacena el tamaño (extent) para responder a solicitudes de tamaño sin instanciar la imagen real.

## Aplicabilidad

Proxy es aplicable cuando se necesita una referencia más versátil o sofisticada que un simple puntero. Situaciones comunes:
1. **Proxy remoto**: proporciona un representante local para un objeto en un espacio de direcciones diferente.
2. **Proxy virtual**: crea objetos costosos bajo demanda (ej. ImageProxy).
3. **Proxy de protección**: controla el acceso al objeto original, útil cuando diferentes derechos de acceso son necesarios.
4. **Referencia inteligente**: reemplazo de un puntero que realiza acciones adicionales al acceder al objeto, como contar referencias para liberación automática, cargar un objeto persistente al ser referenciado, o verificar que el objeto esté bloqueado antes de acceder.

## Participantes

- **Proxy** (ImageProxy): mantiene una referencia que permite acceder al sujeto real; proporciona una interfaz idéntica a la de Subject para que pueda sustituirse; controla el acceso y puede ser responsable de crear y eliminar el sujeto real; otras responsabilidades dependen del tipo de proxy (remoto, virtual, protección).
- **Subject** (Graphic): define la interfaz común para RealSubject y Proxy.
- **RealSubject** (Image): define el objeto real que el proxy representa.

## Colaboraciones

Proxy reenvía peticiones a RealSubject cuando corresponde, dependiendo del tipo de proxy.

## Consecuencias

El patrón Proxy introduce un nivel de indirección al acceder a un objeto, lo que proporciona varios beneficios:
1. Un proxy remoto puede ocultar que el objeto reside en otro espacio de direcciones.
2. Un proxy virtual puede realizar optimizaciones como crear objetos bajo demanda.
3. Tanto los proxies de protección como las referencias inteligentes permiten tareas adicionales de mantenimiento al acceder al objeto.
4. **Copy-on-write**: optimización que pospone la copia de un objeto pesado hasta que se modifica. El proxy cuenta referencias; al copiar el proxy solo se incrementa la referencia, y la copia real se hace solo cuando se solicita una operación que modifique el sujeto.

## Implementación

1. **Sobrecarga del operador de acceso a miembros en C++**: sobrecargando `operator->` se puede ejecutar trabajo adicional al desreferenciar. Ejemplo: `ImagePtr` que carga la imagen solo cuando se accede a sus métodos mediante `->`, pero no distingue entre operaciones (no es adecuado si se necesita cargar la imagen solo al invocar Draw y no en otros accesos). En esos casos se debe implementar manualmente cada operación del proxy.
2. **Uso de doesNotUnderstand: en Smalltalk**: redefiniendo este método, el proxy puede reenviar automáticamente los mensajes al sujeto. Sin embargo, no funciona con mensajes especiales manejados por la máquina virtual (como `==`), y es lento porque fue diseñado para manejo de errores.
3. **Proxy sin conocer el tipo concreto**: si el proxy trata al sujeto solo mediante una interfaz abstracta, no necesita una clase Proxy para cada RealSubject; puede tratar con todos uniformemente. Pero si debe instanciar el sujeto (proxy virtual), necesita conocer la clase concreta.

## Relacionado

- [[adapter]]
- [[decorator]]
- [[iterator]]
- [[flyweight]]

## Lo mencionan

- [[bridge]]
- [[factory-method]]
- [[design-pattern-classification]]
- [[interface]]
- [[dependencia-en-representaciones-o-implementaciones-de-objetos]]
- [[design-aspects-that-design-patterns-let-you-vary]]
- [[structural-patterns]]
- [[class-diagram]]
- [[polymorphic-iterator]]
