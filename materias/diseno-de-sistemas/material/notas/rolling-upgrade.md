---
titulo: "Rolling Upgrade"
tipo: concepto
tags: ["despliegue","rolling-upgrade","patron","disponibilidad"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [115]
veces_en_examen: 0
---

# Rolling Upgrade

> Patrón de despliegue que reemplaza las instancias de un servicio por la nueva versión de a una por vez (o en fracciones pequeñas), manteniendo el resto de las instancias activas.

Pasos:
1. Asignar recursos para una nueva instancia del Servicio A (por ejemplo, una máquina virtual).
2. Instalar y registrar la nueva versión del Servicio A.
3. Comenzar a dirigir requests a la nueva versión.
4. Elegir una instancia de la versión antigua, permitir que complete el procesamiento activo y destruirla.
5. Repetir hasta reemplazar todas las instancias de la versión antigua.

La Figura 5.4 muestra el proceso implementado por la herramienta Asgard de Netflix en la plataforma EC2 de Amazon.

Beneficios:
- Permite reemplazar por completo versiones desplegadas sin sacar el sistema de servicio.

Tradeoffs:
- El uso máximo de recursos es N + 1 instancias.
- Puede descubrirse un error en la nueva versión mientras todavía hay instancias de la versión antigua disponibles.
- Ambas versiones están activas simultáneamente, lo que puede causar temporal inconsistency e interface mismatch.

## Relacionado

- [[complete-replacement-of-services]]
- [[blue-green-deployment]]
- [[temporal-inconsistency]]
- [[interface-mismatch]]
- [[mediator]]

## Lo mencionan

- [[entornos-del-deployment-pipeline]]
- [[complete-replacement-of-services]]
- [[blue-green-deployment]]
- [[temporal-inconsistency]]
- [[interface-mismatch]]
- [[canary-testing]]
