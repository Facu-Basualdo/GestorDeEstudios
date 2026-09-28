---
titulo: "Deployability"
tipo: concepto
tags: ["deployability","despliegue","atributo-de-calidad","continuous-deployment","releases","arquitectura","rollback"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [100,104]
veces_en_examen: 0
---

# Deployability

> Deployability (desplegabilidad) es el atributo de calidad que hace que la transición del software al entorno de producción sea tan ordenada, efectiva y rápida como sea posible, habilitando el despliegue continuo.

La transición del software al "mundo real" ocurre muchas veces, no una sola, porque hay cambios y actualizaciones. El objetivo de este atributo es que esa transición sea lo más ordenada, efectiva y rápida posible.

Antes los releases eran poco frecuentes: se agrupaban muchos cambios en releases programados, normalmente uno por mes, trimestre o año. Las presiones competitivas —lideradas por el e-commerce— llevaron a ciclos de release mucho más cortos. En esos contextos, los releases pueden ocurrir en cualquier momento, quizás cientos por día, y cada uno puede ser iniciado por un equipo distinto.

Poder liberar con frecuencia permite que las correcciones de bugs no esperen al próximo release programado y que las nuevas funcionalidades se pongan en producción en cualquier momento.

Sin embargo, no es deseable ni posible en todos los dominios. Los sistemas con muchas dependencias en un ecosistema complejo, los sistemas embebidos, los que están en ubicaciones de difícil acceso y los que no están conectados a la red son malos candidatos.

El capítulo se centra en los sistemas donde los lanzamientos just-in-time de funcionalidades son una ventaja competitiva significativa y las correcciones just-in-time son esenciales para la seguridad o la operación continua. Estos suelen ser sistemas basados en microservicios y en la nube, aunque las técnicas no se limitan a esas tecnologías.

## Relacionado

- [[continuous-deployment]]
- [[quality-attribute]]
- [[deployability-general-scenario]]
- [[testability]]

## Lo mencionan

- [[continuous-deployment]]
- [[deployability-general-scenario]]
- [[tactics-based-questionnaire-for-deployability]]
- [[patterns-for-deployability]]
- [[portability]]
- [[location-independence]]
