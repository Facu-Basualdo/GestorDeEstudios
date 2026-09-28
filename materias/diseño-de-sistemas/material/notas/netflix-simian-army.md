---
titulo: "Netflix's Simian Army"
tipo: concepto
tags: ["netflix","testing","disponibilidad","fault-injection","nube"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [233]
veces_en_examen: 0
---

# Netflix's Simian Army

> El Simian Army de Netflix es un conjunto de servicios que prueban el sistema en producción provocando fallas y monitoreando aspectos especializados.

Netflix aloja sus servicios en Amazon EC2 y utiliza estos servicios como parte de su proceso de testing. Comenzó con Chaos Monkey, que mataba procesos aleatoriamente en el sistema en ejecución para monitorear el efecto de fallas de procesos y asegurar que el sistema no falle ni se degrade seriamente.

El Simian Army incluye, además del Chaos Monkey:

- **Latency Monkey**: inducía demoras artificiales en la comunicación de red para simular degradación del servicio y medir si los servicios upstream respondían apropiadamente.
- **Conformity Monkey**: identificaba instancias que no seguían las mejores prácticas y las apagaba.
- **Doctor Monkey**: usaba health checks y otras señales externas de salud (como carga de CPU) para detectar instancias no saludables.
- **Janitor Monkey**: buscaba y eliminaba recursos no utilizados para que el entorno cloud estuviera libre de desorden y desperdicio.
- **Security Monkey**: extensión del Conformity Monkey; encontraba violaciones o vulnerabilidades de seguridad, como grupos de seguridad mal configurados, y terminaba las instancias ofensoras; también verificaba certificados SSL y DRM.
- **10-18 Monkey**: detectaba problemas de configuración y runtime en instancias que servían a múltiples regiones geográficas con distintos idiomas y conjuntos de caracteres. El nombre viene de L10n-i18n (localization-internationalization).

Algunos miembros usaban fault injection para colocar fallas en el sistema en ejecución de forma controlada y monitoreada; otros monitoreaban aspectos especializados del sistema y su entorno. El Simian Army reflejaba la determinación de Netflix de que las fallas atacadas eran las más serias por su impacto. La estrategia ilustra que algunos sistemas son demasiado complejos y adaptativos para probarse completamente, porque algunos comportamientos son emergentes.

## Relacionado

- [[test-harness]]
- [[fault-injection]]
- [[testability]]

## Lo mencionan

- [[testability]]
- [[test-harness]]
- [[fault-injection]]
