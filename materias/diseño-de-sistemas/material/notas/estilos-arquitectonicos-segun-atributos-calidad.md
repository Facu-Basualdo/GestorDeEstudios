---
titulo: "Estilos arquitectónicos según atributos de calidad"
tipo: concepto
tags: ["atributos-de-calidad","performance","security","safety","availability","maintainability"]
temas: ["[[diseno-arquitectonico]]"]
fuente: "arquitectura_compressed.pdf"
paginas: [36]
veces_en_examen: 0
---

# Estilos arquitectónicos según atributos de calidad

> Criterios para elegir un estilo de arquitectura según el atributo de calidad o requisito no funcional que priorice el sistema.

1. Performance: minimizar operaciones críticas en pocos componentes y en una misma computadora antes que en la red.
2. Security: estructura en capas, con la capa intermedia más protegida.
3. Safety: operaciones en un solo componente o en un número reducido, para poder apagar el sistema ante fallas.
4. Availability: varios componentes repetidos para que un duplicado cumpla la función si uno se cae.
5. Maintainability: componentes fácilmente reemplazables, separando productores de datos de quienes los usan.

Si hay conflictos entre arquitecturas, se resuelven aplicando patrones y tácticas para cumplir con todos los atributos de calidad.

## Relacionado

- [[load-balancer]]

