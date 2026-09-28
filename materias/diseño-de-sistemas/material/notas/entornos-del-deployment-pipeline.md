---
titulo: "Entornos del deployment pipeline"
tipo: concepto
tags: ["entornos","deployment-pipeline","despliegue","staging","produccion"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [101]
veces_en_examen: 0
---

# Entornos del deployment pipeline

> Los entornos del deployment pipeline son las etapas aisladas por las que un sistema avanza desde el desarrollo hasta la producción.

Cada etapa se desarrolla en un entorno establecido para aislar la etapa y realizar las acciones apropiadas.

- **Development environment**: el código se desarrolla para un módulo individual y se somete a unit tests standalone. Cuando pasa las pruebas y la revisión, se commitea al sistema de control de versiones, lo que dispara las actividades de build en el entorno de integración.
- **Integration environment**: se construye una versión ejecutable del servicio. Un continuous integration server compila el código nuevo o modificado junto con las versiones compatibles del resto del servicio y construye una imagen ejecutable. Las pruebas incluyen unit tests de los módulos contra el sistema construido e integration tests del sistema completo. Si pasan, el servicio se promueve a staging.
- **Staging environment**: se prueban cualidades del sistema total: performance, seguridad, conformidad de licencias y posiblemente pruebas de usuario. En sistemas embebidos se usan simuladores del entorno físico con entradas sintéticas. Si pasa todas las pruebas (que pueden incluir field testing), se despliega a producción con un modelo blue/green o un rolling upgrade. A veces se usan despliegues parciales para control de calidad o para probar la respuesta del mercado.
- **Production environment**: el servicio se monitorea de cerca hasta que todas las partes tienen confianza en su calidad; a partir de ahí pasa a ser una parte normal del sistema.

Las pruebas se expanden de unit testing de un módulo en development, a functional testing de todos los componentes del servicio en integration, y terminan con pruebas amplias de calidad en staging y monitoreo de uso en production.

## Relacionado

- [[deployment-pipeline]]
- [[blue-green-deployment]]
- [[rolling-upgrade]]

## Lo mencionan

- [[deployment-pipeline]]
- [[environment-parity]]
