---
titulo: "Failure"
tipo: concepto
tags: ["calidad","falla","requisitos","disponibilidad","especificacion","observabilidad","fallo","fault","servicio"]
temas: ["[[aseguramiento-de-la-calidad-y-metricas]]","[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [73,78,79,80,81]
veces_en_examen: 0
---

# Failure

> Desviación del sistema respecto de su especificación, donde esa desviación es externamente visible.

Una failure (falla) es la desviación del sistema de su especificación, donde esa desviación es externamente visible. Determinar que ocurrió una failure requiere algún observador externo en el entorno. La noción de observabilidad es crítica: si una falla pudo haber sido observada, entonces es una failure, haya sido observada o no. Si el código que contiene un fault se ejecuta pero el sistema es capaz de recuperarse del fault sin desviación observable del comportamiento especificado, decimos que no ocurrió ninguna failure.

## Relacionado

- [[software-reliability]]
- [[fault]]
- [[availability-tactics]]

## Lo mencionan

- [[software-reliability]]
- [[availability]]
- [[fault]]
- [[error]]
- [[steady-state-availability]]
- [[availability-tactics]]
