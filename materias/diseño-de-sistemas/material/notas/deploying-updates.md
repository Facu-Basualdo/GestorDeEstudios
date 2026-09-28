---
titulo: "Deploying Updates"
tipo: concepto
tags: ["actualizaciones","despliegue","movil","seguridad","consistencia","extensibilidad"]
temas: ["[[sistemas-moviles-y-restricciones-de-recursos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [336]
veces_en_examen: 0
---

# Deploying Updates

> Una actualización en un dispositivo móvil puede corregir problemas, aportar nueva funcionalidad o instalar características incompletas, y puede apuntar al software, a los datos o (menos frecuente) al hardware.

En los dispositivos móviles, las actualizaciones se obtienen por red o por interfaces USB (por ejemplo, en autos modernos). Más allá de proveer la capacidad de actualizar durante la operación, el despliegue de actualizaciones plantea estos problemas específicos:

- **Mantener la consistencia de datos**: en dispositivos de consumo las actualizaciones tienden a ser automáticas y unidireccionales (no se puede volver a una versión anterior); esto sugiere mantener los datos en la nube, pero entonces hay que probar todas las interacciones entre la nube y la aplicación.
- **Seguridad**: el arquitecto debe determinar qué estados del sistema pueden soportar una actualización de forma segura; por ejemplo, actualizar el software de control del motor mientras el auto circula por la autopista es mala idea. El sistema necesita ser consciente de los estados relevantes para la seguridad respecto de las actualizaciones.
- **Despliegue parcial del sistema**: re-desplegar una aplicación completa o un subsistema grande consume ancho de banda y tiempo. La aplicación o subsistema debe estar arquitecturado para que las porciones que cambian con frecuencia puedan actualizarse fácilmente; esto requiere un tipo específico de modificabilidad y atención a la desplegabilidad. Las actualizaciones deberían ser fáciles y automatizadas; acceder a porciones físicas de un dispositivo puede ser incómodo (actualizar el controlador del motor no debería requerir acceso al motor).
- **Extensibilidad**: los sistemas móviles en vehículos tienen vidas relativamente largas y probablemente necesiten retrofitting (agregar tecnología nueva a sistemas viejos, reemplazando o añadiendo componentes).

## Relacionado

- [[retrofitting]]

## Lo mencionan

- [[preocupaciones-del-arquitecto]]
- [[retrofitting]]
