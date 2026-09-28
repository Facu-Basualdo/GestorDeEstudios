---
titulo: "Interface Documentation"
tipo: concepto
tags: ["documentacion","interfaz","contrato","stakeholders","arquitectura"]
temas: ["[[diseno-de-interfaces-y-comunicacion]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [286]
veces_en_examen: 0
---

# Interface Documentation

> La documentación de una interfaz es el subconjunto de la interacción con el entorno que un elemento decide exponer, indicando lo que otros desarrolladores necesitan saber para usarla.

Documentar una interfaz no implica escribir todos los aspectos de la interacción. Se expone solo lo que los actores necesitan saber para interactuar con el elemento; es la información que es permisible y apropiada que las personas asuman sobre el elemento.

La documentación indica a otros desarrolladores lo que necesitan saber para usar la interfaz en combinación con otros elementos. Un desarrollador puede observar propiedades que son manifestación de cómo está implementado el elemento, pero que no forman parte de la documentación; como no están documentadas, están sujetas a cambio y usarlas es bajo su propio riesgo.

Distintas personas necesitan distinta información. Los roles de interesados en la interfaz son:
- Desarrollador del elemento: necesita conocer el contrato que su interfaz debe cumplir; solo puede probar la información de la descripción.
- Mantenedor: desarrollador especial que hace cambios asignados minimizando la disrupción de los actores existentes.
- Desarrollador de un elemento que usa la interfaz: necesita entender el contrato y cómo usarla; puede aportar casos de uso.
- Integrador y probador de sistemas: necesita información detallada de todos los recursos y funcionalidades que el elemento provee y requiere.
- Analista: depende del tipo de análisis; un analista de performance, por ejemplo, necesita una garantía de service level agreement (SLA).
- Arquitecto que busca activos para reutilizar: examina interfaces de sistemas previos o del mercado; le interesan las capacidades, atributos de calidad y variabilidad.

Describir una interfaz es hacer afirmaciones de las que otros elementos pueden depender. Documentar la interfaz implica describir qué servicios y propiedades son parte del contrato; es una promesa a los actores de que el elemento cumplirá ese contrato. Toda implementación que no viole el contrato es válida.

Hay una distinción entre la interfaz y su documentación: lo que se puede observar sobre un elemento (por ejemplo, cuánto tarda una operación) es parte de la interfaz; la documentación cubre un subconjunto de ese comportamiento.

La 'Hyrum's law' advierte que, con suficientes usuarios de una interfaz, no importa lo que se prometa en el contrato: todo comportamiento observable del sistema será dependido por alguien. Aun así, un actor que depende de lo que no se publica sobre la interfaz lo hace bajo su propio riesgo.

## Relacionado

- [[interface]]
- [[hyrms-law]]

## Lo mencionan

- [[interface]]
- [[hyrms-law]]
- [[development-team]]
- [[testers-and-integrators]]
- [[designers-of-other-systems]]
