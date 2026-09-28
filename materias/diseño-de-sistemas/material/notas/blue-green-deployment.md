---
titulo: "Blue/Green Deployment"
tipo: concepto
tags: ["despliegue","blue-green","patron","alta-disponibilidad"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [115]
veces_en_examen: 0
---

# Blue/Green Deployment

> Patrón de despliegue que crea N instancias nuevas (green) del servicio, conmuta el DNS o discovery service hacia ellas y solo elimina las instancias originales (blue) después de verificar que las nuevas funcionan correctamente.

En un despliegue blue/green se crean N instancias nuevas del Servicio A (green). Una vez instaladas, el DNS server o discovery service apunta a la nueva versión. Cuando se determina que las instancias nuevas funcionan satisfactoriamente, y solo entonces, se eliminan las N instancias originales. Antes de ese punto de corte, si se detecta un problema en la nueva versión, se puede volver a las instancias originales (blue) con poca o ninguna interrupción.

Beneficios:
- Permite reemplazar por completo versiones desplegadas sin sacar el sistema de servicio, aumentando la disponibilidad.

Tradeoffs:
- El uso máximo de recursos es 2N instancias.
- Si se descubre un error en la nueva versión después de eliminar las originales, el rollback puede llevar tiempo considerable.
- Desde la perspectiva del cliente, en cualquier momento solo está activa una versión (la nueva o la original), no ambas.

## Relacionado

- [[complete-replacement-of-services]]
- [[rolling-upgrade]]

## Lo mencionan

- [[entornos-del-deployment-pipeline]]
- [[complete-replacement-of-services]]
- [[rolling-upgrade]]
- [[canary-testing]]
