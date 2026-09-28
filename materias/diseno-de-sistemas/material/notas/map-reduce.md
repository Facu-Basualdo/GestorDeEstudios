---
titulo: "Map-Reduce"
tipo: concepto
tags: ["mapreduce","big-data","paralelismo","ordenacion","analisis","patron","rendimiento","procesamiento-distribuido"]
temas: ["[[atributos-de-calidad-y-tacticas]]","[[patrones-arquitectonicos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [191]
veces_en_examen: 0
---

# Map-Reduce

> Patrón que ejecuta de manera distribuida y paralela el ordenamiento y análisis de un gran conjunto de datos, con dos funciones programadas llamadas map y reduce.

Ejecuta eficientemente un ordenamiento distribuido y paralelo de un gran conjunto de datos y proporciona al programador una forma simple de especificar el análisis. Está diseñado específicamente para ordenar y analizar un conjunto de datos masivo. Tiene tres partes:
- Una infraestructura especializada que asigna software a los nodos de hardware en un entorno masivamente paralelo y maneja el ordenamiento de los datos. Un nodo puede ser una máquina virtual, un procesador independiente o un núcleo en un chip multi-core.
- La función map toma como entrada una clave y un conjunto de datos. Usa la clave para hashear los datos en buckets y también sirve para filtrar registros, determinando si un registro participa en el procesamiento o se descarta. El rendimiento de la fase map mejora al tener múltiples instancias map, cada una procesando una porción distinta del archivo de entrada, sin necesidad de comunicación entre ellas. Ejemplo: con 1 billón de cartas, cada carta puede examinarse de forma aislada; las instancias map reparten las cartas en buckets según el palo. Luego la infraestructura shuflea los buckets y los asigna a nuevos nodos para la fase reduce.
- La función reduce realiza el análisis pesado. El número de instancias reduce corresponde al número de buckets que produce la función map. Hace un análisis especificado por el programador y emite los resultados. El conjunto de salida casi siempre es mucho más pequeño que el de entrada, de ahí el nombre "reduce".

Beneficios:
- Los conjuntos de datos extremadamente grandes y desordenados se analizan eficientemente mediante el paralelismo.
- La falla de una instancia tiene poco impacto en el procesamiento, porque el conjunto de entrada se divide en muchos subconjuntos más pequeños, cada uno asignado a su propia instancia.

Tradeoffs:
- Si no se tienen conjuntos de datos grandes, el overhead del patrón no se justifica.
- Si no se puede dividir el conjunto en subconjuntos de tamaño similar, se pierden las ventajas del paralelismo.
- Las operaciones que requieren múltiples reduces son complejas de orquestar.


## Lo mencionan

- [[relating-structures-to-each-other]]
- [[patterns-for-performance]]
