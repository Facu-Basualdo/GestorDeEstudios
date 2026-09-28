---
titulo: "Polimorfismo"
tipo: concepto
tags: ["polimorfismo","grasp","programacion orientada a objetos"]
temas: ["[[patrones-de-asignacion-de-responsabilidades-grasp]]"]
fuente: "SOLID y GRASP - Buenas practicas hacia el exito en el desarrollo de software (1).pdf"
paginas: [37,38]
veces_en_examen: 0
---

# Polimorfismo

> Permitir que varias clases se comporten de manera distinta dependiendo del tipo que sean.

Polimorfismo, en programación orientada a objetos, es un concepto muy simple: permitir que varias clases se comporten de manera distinta dependiendo del tipo que sean. Siempre que se tenga que llevar a cabo una responsabilidad que dependa de un tipo, se tiene que hacer uso del polimorfismo, asignando el mismo nombre a servicios implementados en diferentes objetos acordes con cada tipo.

Ejemplo de código mejorable:
```csharp
public enum TipoDeLog { Debug, Error }
public class Log {
    StreamWriter _ficheroLog;
    public void Registrar(string mensaje, TipoDeLog tipoDeLog) {
        switch (tipoDeLog) {
            case TipoDeLog.Debug:
                _ficheroLog.WriteLine("[DEBUG];{0}", mensaje);
                break;
            case TipoDeLog.Error:
                _ficheroLog.WriteLine("[ERROR]:{0}", mensaje);
                break;
        }
    }
}
```
Se ve claramente la dependencia de la clase Log y el método Registrar con el TipoDeLog. Podemos evitar esto creando una interfaz para el mensaje implementada de dos formas distintas, una por cada tipo, y solo tendremos que pedir a la clase Log que registre un IMensaje. Dependiendo de qué mensaje queramos registrar, quien sepa de qué tipo debe ser registrado (el experto en información) creará una instancia concreta y llamará a Log.Registrar.

```csharp
public interface IMensajeDelLog { string Valor { get; } }
public class MensajeDebug : IMensajeDelLog {
    readonly string _mensaje;
    public MensajeDebug(string mensaje) { _mensaje = mensaje; }
    public string Valor { get { return string.Format("[DEBUG];{0}", _mensaje); } }
}
public class MensajeError : IMensajeDelLog {
    readonly string _mensaje;
    public MensajeError(string mensaje) { _mensaje = mensaje; }
    public string Valor { get { return string.Format("[ERROR];{0}", _mensaje); } }
}
public class Log {
    StreamWriter _ficheroLog;
    public void Registrar(IMensajeDelLog message) {
        _ficheroLog.WriteLine(message.Valor);
    }
}
```


## Lo mencionan

- [[variaciones-protegidas]]
