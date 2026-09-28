---
titulo: "Variaciones protegidas"
tipo: concepto
tags: ["variaciones protegidas","grasp","proteccion frente al cambio","polimorfismo","indireccion"]
temas: ["[[patrones-de-asignacion-de-responsabilidades-grasp]]"]
fuente: "SOLID y GRASP - Buenas practicas hacia el exito en el desarrollo de software (1).pdf"
paginas: [40,41]
veces_en_examen: 0
---

# Variaciones protegidas

> Principio fundamental de protegerse frente al cambio, envolviendo lo susceptible de modificación en una interfaz y usando polimorfismo para crear varias implementaciones.

El cambio debe ser bienvenido, pero no debe ser motivo de desesperación. Variaciones protegidas es el principio fundamental de protegerse frente al cambio. Esto quiere decir que lo que veamos en un análisis previo que es susceptible de modificaciones lo envolvamos en una interfaz y utilicemos el polimorfismo para crear varias implementaciones y posibilitar implementaciones futuras de manera que quede lo menos ligado posible a nuestro sistema. De esta forma, cuando se produzca la variación o el cambio que esperamos, dicho cambio nos repercuta lo mínimo. Este principio está muy relacionado con el polimorfismo y la indirección.

Ejemplo:
```csharp
public class ImagenJpeg {
    public void Redimensionar(int nuevoAlto, int nuevoAncho) { /* Resize */ }
}
public class MostrarImagenController {
    public void BotonRedimensionarClicked(ImagenJpeg image) { image.Redimensionar(10, 20); }
}
```
¿Qué problemas pueden surgir? Puede suceder que en vez de una imagen jpeg nos manden otro tipo de imagen. La solución es añadir una interfaz IImagen:

```csharp
public interface IImagen {
    void Redimensionar(int nuevoAlto, int nuevoAncho);
}
public class ImagenJpeg : IImagen {
    public void Redimensionar(int nuevoAlto, int nuevoAncho) { /* Resize */ }
}
public class MostrarImagenController {
    public void BotonRedimensionarClicked(IImagen image) { image.Redimensionar(10, 20); }
}
```
Ya no nos tendría que importar que cambiara el tipo de imagen a redimensionar, al menos a este nivel en nuestra aplicación.

## Relacionado

- [[polimorfismo]]
- [[indireccion]]

