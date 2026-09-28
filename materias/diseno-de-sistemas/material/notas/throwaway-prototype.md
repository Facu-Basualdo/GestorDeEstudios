---
titulo: "Throwaway Prototype"
tipo: concepto
tags: ["prototipo","descarte","seleccion","componentes","riesgo"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [363]
veces_en_examen: 0
---

# Throwaway Prototype

> Un Throwaway Prototype (prototipo descartable) es un prototipo temprano que se crea sin consideraciones de mantenibilidad, reutilización u otros objetivos para ayudar a seleccionar componentes desarrollados externamente.

Se utiliza cuando las técnicas de análisis previas no permiten seleccionar adecuadamente conceptos de diseño. No debe tomarse como base para desarrollo posterior. Para decidir si conviene crearlo, el equipo debe considerar:

- ¿El proyecto incorpora tecnologías emergentes?
- ¿La tecnología es nueva en la empresa?
- ¿Hay drivers, en particular atributos de calidad, cuya satisfacción con la tecnología seleccionada presenta riesgos?
- ¿Falta información confiable, interna o externa, que dé certeza sobre la utilidad de la tecnología?
- ¿Hay opciones de configuración asociadas a la tecnología que necesiten probarse?
- ¿No está claro si la tecnología puede integrarse fácilmente con otras tecnologías del proyecto?

Si la mayoría de las respuestas son afirmativas, se debe considerar seriamente la creación de un throwaway prototype.

## Relacionado

- [[value-of-information]]

## Lo mencionan

- [[value-of-information]]
