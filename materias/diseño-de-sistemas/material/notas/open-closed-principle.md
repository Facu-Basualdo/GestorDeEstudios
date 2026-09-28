---
titulo: "Open/Closed Principle"
tipo: concepto
tags: ["principios solid","ocp","abierto-cerrado","herencia","polimorfismo","extension","solid","open-closed","diseno"]
temas: ["[[principios-solid]]"]
fuente: "SOLID y GRASP - Buenas practicas hacia el exito en el desarrollo de software (1).pdf"
paginas: [9,10,11]
veces_en_examen: 0
---

# Open/Closed Principle

> Las entidades de software deberían estar abiertas a la extensión pero cerradas a la modificación.

**Enunciado original:** "Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification."

**Traducción literal:** "Las entidades de software (clases, módulos, funciones, etc.) deberían estar abiertas a la extensión pero cerradas a la modificación."

**Interpretación:** Cambia el comportamiento de una clase mediante herencia, polimorfismo y composición. Anticípate al cambio, prepara el código para que los posibles cambios se implementen mediante herencia y composición.

**Ejemplo que no cumple OCP:**
Un `EditorGrafico` tiene un método `DibujarForma` que usa un `switch` sobre el tipo de forma (rectángulo o círculo). Para añadir una nueva forma, hay que modificar el método y agregar un método privado, violando OCP y SRP.

```csharp
public interface IForma
{
    int GetTipo();
}

public class Rectangulo : IForma { public int GetTipo() { return 1; } }
public class Circulo : IForma { public int GetTipo() { return 2; } }

public class EditorGrafico
{
    public void DibujarForma(IForma forma)
    {
        switch (forma.GetTipo())
        {
            case 1: DibujaUnRectangulo((Rectangulo)forma); break;
            case 2: DibujaUnCirculo((Circulo)forma); break;
        }
    }
    private void DibujaUnRectangulo(Rectangulo r) { /* pinta rectángulo */ }
    private void DibujaUnCirculo(Circulo c) { /* pinta círculo */ }
}
```

**Solución:**
Usar una clase abstracta `Forma` con un método abstracto `Dibujar`. Cada forma concreta implementa su propio dibujado. El `EditorGrafico` solo llama a `forma.Dibujar()`, quedando abierto a extensión (nuevas formas) y cerrado a modificación.

```csharp
public abstract class Forma
{
    public abstract void Dibujar();
    protected void DibujarComun() { /* código común */ }
}

public class Rectangulo : Forma
{
    public override void Dibujar() { DibujarComun(); /* dibuja rectángulo */ }
}

public class Circulo : Forma
{
    public override void Dibujar() { DibujarComun(); /* dibuja círculo */ }
}

public class EditorGrafico
{
    public void DibujarForma(Forma forma)
    {
        forma.Dibujar();
    }
}
```

Así, añadir una nueva forma solo requiere crear una nueva clase que herede de `Forma`, sin modificar el `EditorGrafico`.

## Relacionado

- [[single-responsibility-principle]]

## Lo mencionan

- [[solid]]
- [[single-responsibility-principle]]
