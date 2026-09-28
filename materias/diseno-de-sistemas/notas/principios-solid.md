# Principios SOLID
[← Índice Diseño de Sistemas](../INDICE.md)

> Unidad 3 · Peso provisorio 2/3 (entra en IE3; 20 de las 74 preguntas de los cuestionarios
> semanales son de SOLID) · Fuentes: doc 1 *SOLID y GRASP — Buenas prácticas* (pp. 6–22) y
> doc 10 *solid y grasp* (filminas, pp. 5–7), vía el export de Faro. Las preguntas marcadas
> *(cátedra)* salen de los cuestionarios semanales 10 y 11.

## Preguntas de recuperación

- ¿Qué es SOLID, quién lo enunció y cuándo? :: Un acrónimo de cinco principios básicos de diseño orientado a objetos, enunciados por Robert C. Martin alrededor del año 2000. [→ Qué es SOLID](#Qué%20es%20SOLID)
- ¿Qué se logra aplicando SOLID en conjunto? :: Que sea más probable un sistema fácil de mantener y ampliar. No mejora el rendimiento ni elimina la necesidad de refactorizar o testear. [→ Qué es SOLID](#Qué%20es%20SOLID)
- ¿Qué dice SRP? :: "No debería haber nunca más de una razón para cambiar una clase": cada clase se concentra en una sola cosa. [→ S — Responsabilidad única](#S%20—%20Responsabilidad%20única)
- ¿Por qué `CorreoElectronico` viola SRP y cómo se arregla? :: Cambia por dos motivos: el contenido y el protocolo. Se saca el contenido a una interfaz `IContenido`. [→ S — Responsabilidad única](#S%20—%20Responsabilidad%20única)
- ¿Qué dice OCP? :: Las entidades de software deben estar abiertas a la extensión y cerradas a la modificación. [→ O — Abierto-cerrado](#O%20—%20Abierto-cerrado)
- ¿Con qué mecanismos se extiende una clase sin modificarla (OCP)? :: Herencia, polimorfismo y composición. [→ O — Abierto-cerrado](#O%20—%20Abierto-cerrado)
- ¿Qué principios viola el `EditorGrafico` con un `switch` por tipo de forma, y cuál es la solución? :: OCP (hay que modificarlo por cada forma nueva) y SRP. Solución: clase abstracta `Forma` con `Dibujar()`; el editor sólo llama a `forma.Dibujar()`. [→ O — Abierto-cerrado](#O%20—%20Abierto-cerrado)
- ¿Qué dice LSP? :: Las funciones que usan referencias a la clase base deben poder usar objetos de las derivadas sin saberlo: donde se espera al padre, el hijo tiene que funcionar igual. [→ L — Sustitución de Liskov](#L%20—%20Sustitución%20de%20Liskov)
- ¿Por qué Cuadrado heredando de Rectángulo viola LSP y cuál es la solución? :: Al cambiar alto y ancho por separado, el cuadrado iguala sus lados y no se comporta como un rectángulo. Solución: una interfaz común `IRectangular` que implementan los dos. [→ L — Sustitución de Liskov](#L%20—%20Sustitución%20de%20Liskov)
- ¿Qué dice ISP? :: Los clientes no deben ser forzados a depender de interfaces que no usan: interfaces chicas y cohesivas. [→ I — Segregación de interfaces](#I%20—%20Segregación%20de%20interfaces)
- ¿Qué problema tiene `Robot` con `ITrabajador` (Trabajar, Descansar, Comer)? :: Tiene que implementar métodos que no necesita (Descansar, Comer). Se parte en `ITrabajar`, `IDescansar` e `IComer`. [→ I — Segregación de interfaces](#I%20—%20Segregación%20de%20interfaces)
- ¿Qué dice DIP? :: Los módulos de alto nivel no dependen de los de bajo nivel: ambos dependen de abstracciones. Las abstracciones no dependen de los detalles; los detalles, de las abstracciones. [→ D — Inversión de dependencias](#D%20—%20Inversión%20de%20dependencias)
- ¿Qué es un inyector de dependencias? :: Un módulo que instancia los objetos y se los provee a quienes los necesitan. Es la solución más común para cumplir DIP. [→ D — Inversión de dependencias](#D%20—%20Inversión%20de%20dependencias)
- ¿Qué dice la Ley de Demeter? :: Principio del mínimo conocimiento: un objeto sólo habla con sus "amigos inmediatos" (lo propio, lo que crea o recibe), nunca con objetos encadenados a través de otros. [→ Ley de Demeter](#Ley%20de%20Demeter)

## Cuestionario

1. ¿Cuáles de las siguientes afirmaciones sobre los principios SOLID son correctas? *(cátedra)*
   - [ ] Garantizan que un sistema nunca requerirá refactorización
   - [ ] Se aplican únicamente a proyectos que usan lenguajes funcionales
   - [x] Representan cinco principios básicos de la programación orientada a objetos y el diseño
   - [x] Fueron enunciados por Robert C. Martin alrededor del año 2000
   > SOLID facilita el mantenimiento, no lo hace innecesario: la refactorización sigue existiendo. [→ Qué es SOLID](#Qué%20es%20SOLID)
2. ¿Qué se logra al aplicar los principios SOLID en conjunto? *(cátedra)*
   - [x] Es más probable crear un sistema fácil de mantener y ampliar en el tiempo
   - [ ] Se elimina la necesidad de realizar pruebas de software
   - [ ] Se garantiza automáticamente un mejor rendimiento en tiempo de ejecución
   - [ ] Se reduce a cero la cantidad de clases necesarias en el sistema
   > SOLID apunta a la mantenibilidad, no a la performance. [→ Qué es SOLID](#Qué%20es%20SOLID)
3. ¿Quién enunció los principios SOLID? *(cátedra)*
   - [ ] Martin Fowler, en su libro sobre refactorización
   - [ ] Kent Beck, como parte de la metodología XP
   - [ ] Erich Gamma, junto al resto del Gang of Four
   - [x] Robert C. Martin, alrededor del año 2000
   > Fowler es el de la refactorización, Beck el de XP y Gamma uno de los GoF. [→ Qué es SOLID](#Qué%20es%20SOLID)
4. ¿Qué establece el Principio de Responsabilidad Única (SRP)? *(cátedra)*
   - [ ] Una clase debe estar abierta a la extensión pero cerrada a la modificación
   - [ ] Una clase debe implementar todas las interfaces posibles relacionadas con su dominio
   - [ ] Una clase debe depender de abstracciones y no de implementaciones concretas
   - [x] No debería haber nunca más de una razón para cambiar una clase
   > Las otras son OCP y DIP, o lo contrario de SRP (acumular responsabilidades). [→ S — Responsabilidad única](#S%20—%20Responsabilidad%20única)
5. En el ejemplo del correo electrónico que viola SRP, ¿por qué `CorreoElectronico` tenía más de una razón para cambiar? *(cátedra)*
   - [ ] Porque el método SetEmisor dependía de una clase abstracta externa
   - [ ] Porque la clase heredaba de múltiples clases base con responsabilidades distintas
   - [ ] Porque la clase no implementaba ninguna interfaz relacionada con el correo
   - [x] Porque un cambio en el contenido o en el protocolo del correo obligaba a modificar la misma clase
   > Dos motivos de cambio distintos (contenido y protocolo) caen en la misma clase. [→ S — Responsabilidad única](#S%20—%20Responsabilidad%20única)
6. ¿Qué establece el Principio Abierto/Cerrado (OCP)? *(cátedra)*
   - [ ] Las subclases deben poder sustituir a su clase base sin alterar el comportamiento esperado
   - [ ] Los módulos deben poder modificarse libremente para agregar nuevas funcionalidades
   - [ ] Una clase debe tener una única razón para cambiar en su ciclo de vida
   - [x] Las entidades de software deberían estar abiertas a la extensión pero cerradas a la modificación
   > La primera es LSP y la tercera SRP; modificar libremente es justo lo que OCP evita. [→ O — Abierto-cerrado](#O%20—%20Abierto-cerrado)
7. Según OCP, ¿mediante qué se puede cambiar el comportamiento de una clase sin modificar su código existente? *(cátedra)*
   - [ ] Modificación directa del método original
   - [x] Herencia
   - [x] Composición
   - [x] Polimorfismo
   > Herencia, polimorfismo y composición extienden sin tocar lo que ya anda. [→ O — Abierto-cerrado](#O%20—%20Abierto-cerrado)
8. En el `EditorGrafico` que usa un `switch` sobre el tipo de forma, ¿qué principios se violan al tener que modificar el método para agregar una forma? *(cátedra)*
   - [ ] Liskov Substitution Principle
   - [ ] Interface Segregation Principle
   - [x] Open/Closed Principle
   - [x] Single Responsibility Principle
   > Agregar una forma obliga a modificar el método (OCP) y el editor mezcla el dibujo de todas las formas (SRP). No hay interfaces sobrecargadas ni sustitución de subclases. [→ O — Abierto-cerrado](#O%20—%20Abierto-cerrado)
9. ¿Qué establece el Principio de Sustitución de Liskov (LSP)? *(cátedra)*
   - [ ] Las interfaces deben mantenerse pequeñas y cohesivas para cada tipo de cliente
   - [ ] Las funciones deben conocer explícitamente el tipo concreto de cada objeto derivado
   - [ ] Las clases derivadas deben implementar más métodos que sus clases base
   - [x] Las funciones que usan referencias a clases base deben poder usar objetos de clases derivadas sin saberlo
   > La sustitución tiene que ser transparente para el cliente. La primera opción es ISP. [→ L — Sustitución de Liskov](#L%20—%20Sustitución%20de%20Liskov)
10. En el ejemplo del cuadrado que hereda de rectángulo, ¿por qué se viola LSP? *(cátedra)*
    - [ ] Porque el rectángulo depende directamente de la clase cuadrado para funcionar
    - [ ] Porque el cuadrado no puede calcular su área correctamente en ningún caso
    - [ ] Porque la interfaz IRectangular no puede ser implementada por ninguna clase
    - [x] Porque al modificar alto y ancho por separado el cuadrado no se comporta correctamente, ya que sus lados se igualan
    > Cambiar un lado rompe la invariante del cuadrado. `IRectangular` es la solución, no el problema. [→ L — Sustitución de Liskov](#L%20—%20Sustitución%20de%20Liskov)
11. ¿Cuál es la solución propuesta para el cuadrado que hereda de rectángulo? *(cátedra)*
    - [ ] Hacer que cuadrado sobrescriba los métodos de ancho y alto para igualar siempre los lados
    - [ ] Eliminar la clase cuadrado del diseño del sistema por completo
    - [ ] Permitir que la clase rectángulo herede directamente de la clase cuadrado
    - [x] Crear una interfaz común (IRectangular) de la que hereden tanto rectángulo como cuadrado
    > Sobrescribir ancho y alto es justo lo que genera el problema. [→ L — Sustitución de Liskov](#L%20—%20Sustitución%20de%20Liskov)
12. ¿Qué establece el Principio de Segregación de Interfaces (ISP)? *(cátedra)*
    - [x] Los clientes no deberían ser forzados a depender de interfaces que no utilizan
    - [ ] Las interfaces deben concentrar todos los métodos posibles de un dominio en una sola definición
    - [ ] Las clases deben implementar únicamente interfaces con un solo método cada una
    - [ ] Las clases deben depender de abstracciones y no de implementaciones concretas
    > Concentrar todo en una interfaz es el problema que ISP resuelve; "un solo método" es exagerar; la última es DIP. [→ I — Segregación de interfaces](#I%20—%20Segregación%20de%20interfaces)
13. En la interfaz `ITrabajador` (Trabajar, Descansar, Comer), ¿cuál es el problema para una clase `Robot`? *(cátedra)*
    - [ ] Debía heredar de una clase abstracta que no existía en el sistema
    - [x] Se ve forzada a implementar métodos que no necesita, como Descansar o Comer
    - [ ] No puede implementar Trabajar por restricciones de herencia múltiple
    - [ ] No puede implementar ningún método de la interfaz ITrabajador
    > Sí puede implementarlos, pero no tienen sentido para un robot. [→ I — Segregación de interfaces](#I%20—%20Segregación%20de%20interfaces)
14. Una clase `House` crea adentro sus `Door` y `Window` concretas. ¿Qué principio viola y cómo se corrige?
    - [x] DIP: depender de `IDoor` e `IWindow` y recibirlas por el constructor
    - [ ] SRP: separar `House` en una clase por cada parte de la casa
    - [ ] LSP: hacer que `Door` herede de `Window`
    - [ ] ISP: juntar puertas y ventanas en una sola interfaz
    > Es el ejemplo de la cátedra para DIP: el módulo de alto nivel (`House`) depende de detalles concretos. Se invierte con abstracciones inyectadas. [→ D — Inversión de dependencias](#D%20—%20Inversión%20de%20dependencias)
15. ¿Qué consecuencia tiene NO aplicar DIP, según las filminas?
    - [x] No se puede testear la clase de forma aislada: no se sabe si el error está en ella o en sus dependencias
    - [ ] Las interfaces quedan demasiado chicas
    - [ ] Las subclases dejan de poder sustituir a la clase base
    - [ ] Se pierde la posibilidad de usar herencia
    > Sin DIP el núcleo depende de frameworks y bases de datos concretas: cualquier cambio externo obliga a tocar el dominio y no hay prueba aislada. [→ D — Inversión de dependencias](#D%20—%20Inversión%20de%20dependencias)
16. `pedido.getCliente().getDireccion().getCiudad()` dentro de una clase que sólo conoce a `Pedido`. ¿Qué se incumple?
    - [x] La Ley de Demeter
    - [ ] El principio de segregación de interfaces
    - [ ] El principio abierto/cerrado
    - [ ] El patrón Creador
    > Es una llamada encadenada a objetos que no son "amigos inmediatos". Demeter funciona como una alarma de acoplamiento mal distribuido. [→ Ley de Demeter](#Ley%20de%20Demeter)

## Contenido

### Qué es SOLID

- Acrónimo de cinco principios básicos de programación y diseño orientado a objetos, enunciados por **Robert C. Martin alrededor del año 2000**: **S**ingle responsibility, **O**pen/closed, **L**iskov substitution, **I**nterface segregation y **D**ependency inversion (doc 1, p. 6).
- Aplicados en conjunto, hacen **más probable** un sistema fácil de mantener y ampliar. Son guías para eliminar código sucio refactorizando hasta que sea legible y extensible.
- Van de la mano con **TDD** y el desarrollo ágil: preparan el código para los cambios sucesivos y facilitan testear clases aisladas (mocking).

| Letra | Principio | En una frase |
|---|---|---|
| S | Responsabilidad única (SRP) | Una sola razón para cambiar |
| O | Abierto/cerrado (OCP) | Extender sin modificar |
| L | Sustitución de Liskov (LSP) | El hijo reemplaza al padre sin que se note |
| I | Segregación de interfaces (ISP) | Interfaces chicas: nadie depende de lo que no usa |
| D | Inversión de dependencias (DIP) | Depender de abstracciones, no de concreciones |

### S — Responsabilidad única

- **Enunciado**: "There should never be more than one reason for a class to change" → no debería haber nunca más de una razón para cambiar una clase (doc 1, pp. 7–8).
- **Interpretación**: la clase se concentra en una sola cosa; cuando cambia un requisito, el cambio afecta a esa clase por un único motivo.
- **Ejemplo que no cumple**: `ICorreoElectronico` con `SetEmisor`, `SetReceptor` y `SetContenido`. Si cambia el contenido (tipos nuevos) o el protocolo (campos nuevos), hay que tocar `CorreoElectronico`: dos motivos de cambio.
- **Solución**: el contenido pasa a una interfaz propia.

```csharp
interface ICorreoElectronico {
    void SetEmisor(String emisor);
    void SetReceptor(String receptor);
    void SetContenido(IContenido content);
}
interface IContenido {
    String GetContenidoSerializado();
}
```

Ahora `CorreoElectronico` sólo cambia por emisor/receptor; los cambios de contenido quedan en `IContenido` y sus implementaciones.

### O — Abierto-cerrado

- **Enunciado**: "Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification" (doc 1, pp. 9–11).
- **Interpretación**: el comportamiento se cambia con **herencia, polimorfismo y composición**. Anticiparse al cambio: preparar el código para que lo nuevo se agregue, no se edite.
- **Ejemplo que no cumple**: `EditorGrafico.DibujarForma(IForma)` hace un `switch` sobre `GetTipo()` y llama a `DibujaUnRectangulo` o `DibujaUnCirculo`. Cada forma nueva obliga a modificar el método y agregar otro privado: viola **OCP y también SRP**.
- **Solución**: clase abstracta `Forma` con `abstract Dibujar()`; cada forma concreta se dibuja sola y el editor queda reducido a `forma.Dibujar()`.

```csharp
public abstract class Forma { public abstract void Dibujar(); }
public class Circulo : Forma { public override void Dibujar() { /* dibuja círculo */ } }
public class EditorGrafico {
    public void DibujarForma(Forma forma) { forma.Dibujar(); }
}
```

Agregar una forma = crear una clase nueva que herede de `Forma`, sin tocar `EditorGrafico`.

### L — Sustitución de Liskov

- **Enunciado**: "Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it" (doc 1, pp. 13–16).
- **Interpretación**: las subclases tienen que comportarse bien cuando se usan en lugar de la base. En las filminas: *donde se espera el padre, tiene que funcionar igual con el hijo* (doc 10, p. 5).
- **Ejemplo**: `Cuadrado` hereda de `Rectangulo`. Al fijar alto y ancho por separado, el cuadrado iguala los lados y el cliente obtiene un área que no espera.
- **Solución**: una interfaz común `IRectangular` que implementan los dos, sin herencia entre ellos.
- Las filminas remarcan que LSP **desmiente que la POO sea una representación de la realidad**: "un cuadrado *es un* rectángulo" en geometría, pero no en el código. Cuanto más se calca la realidad, más aparecen violaciones de LSP.

### I — Segregación de interfaces

- **Enunciado**: "Clients should not be forced to depend upon interfaces that they do not use" (doc 1, pp. 17–19).
- **Interpretación**: interfaces pequeñas y cohesivas, que puedan coexistir.
- **Ejemplo**: `ITrabajador` con `Trabajar`, `Descansar` y `Comer`; `Robot` queda obligado a implementar `Descansar` y `Comer`.
- **Solución**: segregar en `ITrabajar`, `IDescansar`, `IComer` y que cada clase implemente las que necesita.
- Beneficios (doc 10, p. 6): evita dependencias innecesarias y errores inesperados, y reutiliza código de forma más inteligente.

### D — Inversión de dependencias

- **Enunciado** (doc 1, pp. 20–22):
  - A. Los módulos de alto nivel no deberían depender de módulos de bajo nivel. Ambos deberían depender de abstracciones.
  - B. Las abstracciones no deberían depender de los detalles. Los detalles deberían depender de las abstracciones.
- **Interpretación**: depender de interfaces y clases abstractas, y **exponer las dependencias por constructor o por parámetros**.
- **Ejemplo**: `House` depende de `Door` y `Window` concretas → pasa a depender de `IDoor` e `IWindow`, inyectadas por constructor (*dependency injection*).
- **Si no se aplica** (doc 10, p. 6): el núcleo depende de factores externos (framework, base de datos); cualquier cambio obliga a tocar el dominio; no se puede testear aislado porque no se sabe si el error está en la clase o en sus dependencias.
- **Inyector de dependencias**: módulo que instancia los objetos y se los provee a quienes los necesitan. Es la solución más común.

### Ley de Demeter

También llamada **principio del mínimo conocimiento** (doc 10, p. 7). No es parte de SOLID, pero la cátedra la da junto con él.

- Un objeto sólo interactúa con sus **"amigos inmediatos"**: su propio estado y métodos, los objetos que crea y los que recibe. Nada encadenado (`a.getB().getC().hacer()`).
- Es un **detector de acoplamiento**: si se incumple, las relaciones están mal distribuidas. No hay una única forma de arreglarlo; en general se mueve la llamada adentro de cada clase para cortar la cadena.
- Con una buena arquitectura y el dominio claro, es difícil violarla.

## Dónde me equivoco

_Sin errores registrados todavía._ Trampas típicas en los cuestionarios: confundir el enunciado de un principio con el de otro (los distractores son los otros cuatro), y creer que SOLID mejora el rendimiento o elimina la refactorización.

## Ver también

- [Patrones GRASP](patrones-grasp.md): Experto en información es la "S" aplicada a la asignación de responsabilidades.
- [Principios de diseño orientado a objetos](principios-de-diseno-orientado-a-objetos.md): "programar para una interfaz" y "composición antes que herencia" (GoF).
- [Programación Extrema](programacion-extrema.md): SOLID prepara el código para el cambio continuo y el TDD.
