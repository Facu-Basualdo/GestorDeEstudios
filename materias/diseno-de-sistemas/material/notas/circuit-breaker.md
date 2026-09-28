---
titulo: "Circuit Breaker"
tipo: concepto
tags: ["disponibilidad","circuit-breaker","retry","patron"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [94]
veces_en_examen: 0
---

# Circuit Breaker

> Patrón de disponibilidad que interrumpe el ciclo infinito de reintentos cuando el sistema está lidiando con una falla, haciendo que las invocaciones posteriores regresen de inmediato hasta que se restablezca.

Ante un timeout o falla al invocar un servicio, el invocador suele reintentar una y otra vez. Un circuit breaker evita que el invocador intente incontables veces esperando una respuesta que nunca llega; rompe el ciclo interminable de reintentos cuando considera que el sistema está lidiando con una falla. Esa es la señal para que el sistema comience a manejar la falla. Hasta que el circuit break se “resetee”, las invocaciones posteriores regresarán de inmediato sin pasar la solicitud al servicio.

Beneficios:
- Quita de los componentes individuales la política sobre cuántos reintentos permitir antes de declarar una falla.
- En el peor caso, los reintentos infinitos e inútiles harían que el componente invocador quede tan inservible como el componente invocado que falló. Esto es especialmente agudo en sistemas distribuidos, donde muchos llamadores pueden quedar fuera de servicio y causar fallas en cascada. El circuit breaker, junto con software que lo escucha e inicia procedimientos de recuperación, previene ese problema.

Tradeoffs:
- Hay que elegir cuidadosamente los valores de timeout (o retry). Si el timeout es demasiado largo, se agrega latencia innecesaria. Si es demasiado corto, el circuit breaker se dispara cuando no hace falta—una especie de “falso positivo”—lo que puede bajar la disponibilidad y el rendimiento de los servicios.

## Relacionado

- [[retry]]

## Lo mencionan

- [[patterns-for-performance]]
