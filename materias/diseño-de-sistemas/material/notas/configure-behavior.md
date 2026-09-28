---
titulo: "Configure Behavior"
tipo: concepto
tags: ["configuracion","integrabilidad","comportamiento","componentes"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [145]
veces_en_examen: 0
---

# Configure Behavior

> Configure Behavior es una táctica que implementa componentes de software configurables de maneras prescriptas para que puedan interactuar más fácilmente con un rango de componentes.

El comportamiento de un componente puede configurarse durante la fase de build (recompilar con una bandera distinta), durante la inicialización del sistema (leer un archivo de configuración o traer datos de una base de datos), o durante el runtime (especificar una versión de protocolo como parte de las solicitudes). Un ejemplo simple es configurar un componente para que soporte diferentes versiones de un estándar en sus interfaces.

Asegurar que haya múltiples opciones disponibles aumenta las probabilidades de que los supuestos de S y de un futuro C coincidan. Construir comportamiento configurable en partes de S es una táctica de integrabilidad que permite que S soporte un rango más amplio de C potenciales. Esta táctica puede abordar las dimensiones de distancia sintáctica, semántica de datos, semántica conductual y temporal.


