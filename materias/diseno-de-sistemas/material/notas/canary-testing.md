---
titulo: "Canary Testing"
tipo: concepto
tags: ["despliegue","canary-testing","pruebas","produccion","canary","testing","usuarios","dns"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [118,119,120,121,122,124,125,126]
veces_en_examen: 0
---

# Canary Testing

> Práctica de despliegue continuo que prueba una nueva versión del software en el ambiente de producción con un conjunto limitado de usuarios antes del lanzamiento general.

Es el análogo en despliegue continuo del beta testing. Se designa un conjunto pequeño de usuarios para que prueben la nueva versión. Pueden ser power users o preview-stream users externos, o testers internos de la organización desarrolladora (por ejemplo, empleados de Google). Los usuarios pueden saber o no que actúan como canarios. El enrutamiento hacia la versión correspondiente se hace mediante DNS settings o discovery-service configuration. Una vez terminadas las pruebas, todos los usuarios se dirigen a la versión nueva o a la vieja, y las instancias de la versión deprecada se destruyen.

Beneficios:
- Permite que usuarios reales ejerciten el software de maneras que las pruebas simuladas no pueden, recolectando datos de uso y haciendo experimentos controlados con bajo riesgo.
- Costos de desarrollo adicionales mínimos, porque el sistema probado ya está en camino a producción.
- Minimiza el número de usuarios expuestos a un defecto serio.

Tradeoffs:
- Requiere planificación y recursos adicionales, y una estrategia para evaluar los resultados.
- Si se apunta a power users, hay que identificarlos y enrutarles la nueva versión.

Cuando el foco está en determinar qué tan bien se aceptan las nuevas funcionalidades, se usa una variante llamada dark launch.

## Relacionado

- [[partial-replacement-of-services]]
- [[dark-launch]]
- [[blue-green-deployment]]
- [[rolling-upgrade]]

## Lo mencionan

- [[partial-replacement-of-services]]
- [[dark-launch]]
- [[ab-testing]]
- [[service-mesh]]
