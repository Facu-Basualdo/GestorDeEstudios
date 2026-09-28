---
titulo: "Instantiating Elements"
tipo: concepto
tags: ["instanciacion","patrones","tacticas","componentes","add"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [365]
veces_en_examen: 0
---

# Instantiating Elements

> Instantiating Elements es el proceso de adaptar un concepto de diseño a un problema específico, creando elementos y relaciones concretas.

La forma de instanciar depende del tipo de concepto de diseño:

- Reference architectures: la instanciación es una personalización que agrega o quita elementos de la estructura definida por la arquitectura de referencia.
- Patterns: se transforma la estructura genérica del patrón en una estructura específica adaptada al problema. Por ejemplo, en el patrón client-server hay que decidir cuántos clientes y servidores usar, su funcionalidad, qué clientes hablan con qué servidores, y el protocolo de comunicación.
- Tactics: no prescriben una estructura particular; se puede adaptar otro concepto de diseño que ya se esté usando para realizar la táctica, o utilizar uno que ya la realice sin adaptación.
- Externally developed components: la instanciación puede crear elementos nuevos (por ejemplo, clases que heredan de clases base de un framework) o no (por ejemplo, especificar opciones de configuración como la cantidad de threads en un thread pool).


## Lo mencionan

- [[associating-responsibilities-and-identifying-properties]]
