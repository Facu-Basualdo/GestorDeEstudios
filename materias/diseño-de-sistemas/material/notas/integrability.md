---
titulo: "Integrability"
tipo: concepto
tags: ["integracion","arquitectura","calidad","dependencias","planificacion"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [134]
veces_en_examen: 0
---

# Integrability

> La integrabilidad es la capacidad de ser integrado, pero en sistemas de software prácticos implica preocuparse por los costos y riesgos técnicos de las tareas de integración futuras, anticipadas o no, más allá de lograr que componentes desarrollados por separado cooperen.

El problema de integración se representa de forma abstracta: un proyecto necesita integrar una unidad de software C, o un conjunto C1, C2, …, Cn, en un sistema S. S puede ser una plataforma o un sistema existente que ya contiene algunos componentes. Se asume control sobre S, pero los Ci pueden estar fuera de control, por ejemplo si son provistos por vendedores externos; el nivel de entendimiento de cada Ci puede variar.

S no es estático sino que evoluciona, y esa evolución puede requerir reanálisis. La integrabilidad es desafiante porque se trata de planificar para un futuro con información incompleta: algunas integraciones serán más simples porque fueron anticipadas y acomodadas en la arquitectura, y otras serán más complejas porque no lo fueron.

**Analogía:** conectar un enchufe norteamericano (un Ci) a un tomacorriente norteamericano (una interfaz del sistema eléctrico S) es una integración trivial. Integrar ese enchufe a un tomacorriente británico requiere un adaptador. El dispositivo puede funcionar solo a 110 voltios y requerir más adaptación para un tomacorriente británico de 220 voltios. Si el componente fue diseñado para 60 Hz y el sistema provee 70 Hz, puede no operar como se espera aunque el enchufe encaje. Las decisiones arquitectónicas de S y Ci—adaptadores de enchufe, adaptadores de voltaje o hacer que el componente opere igual en distintas frecuencias—afectan el costo y el riesgo de la integración.

## Relacionado

- [[modifiability]]

## Lo mencionan

- [[reduce-coupling]]
