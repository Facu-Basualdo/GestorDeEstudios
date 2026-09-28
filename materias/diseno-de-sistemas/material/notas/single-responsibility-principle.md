---
titulo: "Single Responsibility Principle"
tipo: concepto
tags: ["principios solid","responsabilidad unica","srp","buenas practicas","tdd","solid","responsabilidad-unica","cohesion","diseno"]
temas: ["[[principios-solid]]"]
fuente: "SOLID y GRASP - Buenas practicas hacia el exito en el desarrollo de software (1).pdf"
paginas: [7,8]
veces_en_examen: 0
---

# Single Responsibility Principle

> No debería haber nunca más de una razón para cambiar una clase.

**Enunciado original:** "There should never be more than one reason for a class to change."

**Traducción literal:** "No debería haber nunca más de una razón para cambiar una clase."

**Interpretación:** Una clase debería concentrarse solo en hacer una cosa, de tal forma que cuando cambie algún requisito, dicho cambio solo afecte a esa clase por una razón.

**Ejemplo que no cumple SRP:**
Se tiene una interfaz `ICorreoElectronico` con métodos `SetEmisor`, `SetReceptor` y `SetContenido`. La clase `CorreoElectronico` la implementa. Si cambia el contenido (p.ej., nuevos tipos) o el protocolo (nuevos campos), la clase debe modificarse. Hay más de un motivo de cambio.

**Solución:**
Separar responsabilidades: `ICorreoElectronico` solo define emisor y receptor, mientras que el contenido se maneja mediante una interfaz `IContenido`.

```csharp
interface ICorreoElectronico
{
    void SetEmisor(String emisor);
    void SetReceptor(String receptor);
    void SetContenido(IContenido content);
}

interface IContenido
{
    String GetContenidoSerializado();
}

class CorreoElectronico : ICorreoElectronico
{
    public void SetEmisor(String sender) { }
    public void SetReceptor(String receiver) { }
    public void SetContenido(IContenido content) { }
}
```

Ahora solo hay un motivo para cambiar `CorreoElectronico` (cambios en emisor/receptor), mientras que los cambios en contenido afectan solo a `IContenido` y sus implementaciones.

## Relacionado

- [[open-closed-principle]]

## Lo mencionan

- [[solid]]
- [[open-closed-principle]]
- [[experto-en-informacion]]
