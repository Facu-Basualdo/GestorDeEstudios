---
titulo: "Observer"
tipo: concepto
tags: ["patron","comportamiento","patron-de-diseno","comportamental","observer","dependencia","notificacion","patron de diseno","dependents","publish-subscribe","subject","mvc","sujeto","suscriptor","usabilidad","patrones","arquitectura"]
temas: ["[[atributos-de-calidad-y-tacticas]]","[[patrones-de-comportamiento]]","[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [14,17,71,278,279,280]
veces_en_examen: 0
---

# Observer

> Define una dependencia de uno a muchos entre objetos, de modo que cuando un objeto cambia de estado, todos sus dependientes son notificados y actualizados automáticamente.

## Motivación
Un efecto secundario común de dividir un sistema en una colección de clases cooperantes es la necesidad de mantener consistencia entre objetos relacionados. No se quiere lograr consistencia haciendo que las clases estén fuertemente acopladas, porque eso reduce su reutilización.
Por ejemplo, muchos toolkits de interfaz gráfica separan los aspectos de presentación de los datos de la aplicación subyacente. Las clases que definen datos de aplicación y presentaciones pueden reutilizarse de forma independiente. También pueden trabajar juntas. Tanto un objeto de hoja de cálculo como un objeto de gráfico de barras pueden representar información en el mismo objeto de datos de aplicación usando diferentes presentaciones. La hoja de cálculo y el gráfico de barras no se conocen entre sí, permitiendo reutilizar solo el que se necesita. Pero se comportan como si se conocieran. Cuando el usuario cambia la información en la hoja de cálculo, el gráfico de barras refleja los cambios inmediatamente, y viceversa.
Este comportamiento implica que la hoja de cálculo y el gráfico de barras dependen del objeto de datos y, por lo tanto, deben ser notificados de cualquier cambio en su estado. Y no hay razón para limitar el número de objetos dependientes a dos; puede haber cualquier número de interfaces de usuario diferentes para los mismos datos.
El patrón Observer describe cómo establecer estas relaciones. Los objetos clave en este patrón son subject y observer. Un subject puede tener cualquier número de observers dependientes. Todos los observers son notificados cuando el subject sufre un cambio de estado. En respuesta, cada observer consultará al subject para sincronizar su estado con el estado del subject.
Este tipo de interacción también se conoce como publish-subscribe. El subject es el publicador de notificaciones. Envía estas notificaciones sin tener que saber quiénes son sus observers. Cualquier número de observers puede suscribirse para recibir notificaciones.

## Aplicabilidad
Use el patrón Observer en cualquiera de las siguientes situaciones:
- Cuando una abstracción tiene dos aspectos, uno dependiente del otro. Encapsular estos aspectos en objetos separados permite variarlos y reutilizarlos independientemente.
- Cuando un cambio en un objeto requiere cambiar otros, y no se sabe cuántos objetos necesitan ser cambiados.
- Cuando un objeto debe poder notificar a otros objetos sin hacer suposiciones sobre quiénes son esos objetos. En otras palabras, no se quiere que estos objetos estén fuertemente acoplados.

## Estructura y Participantes
- **Subject**: conoce a sus observers. Cualquier número de objetos Observer puede observar un subject. Proporciona una interfaz para adjuntar y desadjuntar objetos Observer.
- **Observer**: define una interfaz de actualización para objetos que deben ser notificados de cambios en un subject.
- **ConcreteSubject**: almacena el estado de interés para los objetos ConcreteObserver. Envía una notificación a sus observers cuando su estado cambia.
- **ConcreteObserver**: mantiene una referencia a un objeto ConcreteSubject. Almacena el estado que debe mantenerse consistente con el del subject. Implementa la interfaz de actualización de Observer para mantener su estado consistente con el del subject.

## Colaboraciones
- ConcreteSubject notifica a sus observers cada vez que ocurre un cambio que podría hacer que el estado de sus observers sea inconsistente con el suyo propio.
- Después de ser informado de un cambio en el concrete subject, un objeto ConcreteObserver puede consultar al subject para obtener información. ConcreteObserver usa esta información para reconciliar su estado con el del subject.

## Consecuencias
El patrón Observer permite variar subjects y observers de forma independiente. Se pueden reutilizar subjects sin reutilizar sus observers, y viceversa. Permite agregar observers sin modificar el subject u otros observers.
Beneficios y desventajas adicionales incluyen:
1. **Acoplamiento abstracto entre Subject y Observer**. Todo lo que un subject sabe es que tiene una lista de observers, cada uno conforme a la interfaz simple de la clase abstracta Observer. El subject no conoce la clase concreta de ningún observer. Por lo tanto, el acoplamiento entre subjects y observers es abstracto y mínimo. Como Subject y Observer no están fuertemente acoplados, pueden pertenecer a diferentes capas de abstracción en un sistema. Un subject de bajo nivel puede comunicarse e informar a un observer de alto nivel, manteniendo intacta la estratificación del sistema.
2. **Soporte para comunicación broadcast**. A diferencia de una solicitud ordinaria, la notificación que un subject envía no necesita especificar su receptor. La notificación se transmite automáticamente a todos los objetos interesados que se suscribieron a ella. El subject no le importa cuántos objetos interesados existan; su única responsabilidad es notificar a sus observers. Esto da la libertad de agregar y eliminar observers en cualquier momento. Depende del observer manejar o ignorar una notificación.
3. **Actualizaciones inesperadas**. Debido a que los observers no tienen conocimiento de la presencia de los demás, pueden ser ciegos al costo último de cambiar el subject. Una operación aparentemente inocua en el subject puede causar una cascada de actualizaciones a los observers y sus objetos dependientes. Además, los criterios de dependencia que no están bien definidos o mantenidos generalmente conducen a actualizaciones espurias, que pueden ser difíciles de rastrear. Este problema se agrava por el hecho de que el protocolo de actualización simple no proporciona detalles sobre qué cambió en el subject. Sin un protocolo adicional para ayudar a los observers a descubrir qué cambió, pueden verse obligados a trabajar duro para deducir los cambios.

## Relacionado

- [[command]]
- [[iterator]]
- [[patrones-de-comportamiento]]
- [[model-view-controller]]

## Lo mencionan

- [[model-view-controller]]
- [[mediator]]
- [[state]]
- [[design-pattern-classification]]
- [[relating-run-time-and-compile-time-structures]]
- [[acoplamiento-fuerte]]
- [[extender-funcionalidad-mediante-subclases]]
- [[design-aspects-that-design-patterns-let-you-vary]]
- [[behavioral-patterns]]
- [[common-design-vocabulary]]
- [[push-pull-models]]
- [[digital-clock]]
- [[patrones-de-comportamiento]]
- [[patterns-for-usability]]
