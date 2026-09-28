---
titulo: "A/B Testing"
tipo: concepto
tags: ["experimentacion","usuarios","marketing","testing","negocio"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [119]
veces_en_examen: 0
---

# A/B Testing

> Es una técnica de experimentación con usuarios reales que compara varias alternativas para determinar cuál produce los mejores resultados de negocio.

A/B testing es usado por marketers para realizar experimentos con usuarios reales. Un número pequeño pero significativo de usuarios recibe un tratamiento distinto al resto. La diferencia puede ser menor, como un cambio en el tamaño de fuente o el layout del formulario, o más significativa. Por ejemplo, HomeAway (hoy Vrbo) ha usado A/B testing para variar el formato, contenido y look-and-feel de sus sitios web, midiendo qué ediciones producían más alquileres. El "ganador" se conservaba, el "perdedor" se descartaba, y se diseñaba otro contendiente. Otro ejemplo es un banco que ofrece distintas promociones para abrir cuentas nuevas. También se cuenta que Google probó 41 tonos de azul para decidir cuál usar en los resultados de búsqueda.

Como en canary testing, los servidores DNS y la configuración del discovery service envían las solicitudes de los clientes a distintas versiones. En A/B testing, las distintas versiones se monitorean para ver cuál ofrece la mejor respuesta desde una perspectiva de negocio.

**Beneficios:**

- Permite a los equipos de marketing y desarrollo de producto ejecutar experimentos y recolectar datos de usuarios reales.
- Permite segmentar usuarios según un conjunto arbitrario de características.

**Tradeoffs:**

- Requiere implementar alternativas, una de las cuales será descartada.
- Hay que identificar de antemano las distintas clases de usuarios y sus características.

## Relacionado

- [[canary-testing]]

## Lo mencionan

- [[service-mesh]]
