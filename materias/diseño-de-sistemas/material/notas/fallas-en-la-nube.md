---
titulo: "Fallas en la nube"
tipo: concepto
tags: ["cloud","fallas","disponibilidad"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [309]
veces_en_examen: 0
---

# Fallas en la nube

> Las fallas en la nube son eventos casi seguros en data centers con decenas de miles de computadoras físicas, donde al menos un componente falla a diario.

Según Amazon, en un data center con alrededor de 64.000 computadoras, cada una con dos discos giratorios, fallan aproximadamente 5 computadoras y 17 discos por día. Google reporta estadísticas similares. Además de fallas de computadoras y discos, los switches de red pueden fallar; el data center puede sobrecalentarse y hacer fallar todas las computadoras; o un desastre natural puede dejar fuera de servicio todo el data center. Aunque el proveedor de nube tenga pocas interrupciones totales, la computadora física en la que corre una VM específica puede fallar. Si la disponibilidad es importante, hay que decidir con cuidado qué nivel de disponibilidad se quiere alcanzar y cómo lograrlo. En este contexto se tratan dos conceptos especialmente relevantes: timeouts y long tail latency.

## Relacionado

- [[cloud-data-center]]
- [[timeout]]
- [[long-tail-latency]]

