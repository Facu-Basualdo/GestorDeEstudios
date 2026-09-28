---
titulo: "Adhere to Standards"
tipo: concepto
tags: ["estandares","integrabilidad","interoperabilidad","normalizacion"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [142]
veces_en_examen: 0
---

# Adhere to Standards

> Adhere to Standards es una táctica que consiste en estandarizar la implementación de los sistemas para habilitar la integrabilidad y la interoperabilidad entre plataformas y proveedores.

Los estándares varían en el alcance de lo que prescriben: algunos se centran en definir sintaxis y semántica de datos; otros incluyen descripciones más ricas, como protocolos con semántica conductual y temporal. También varían en su alcance de aplicación o adopción: los estándares publicados por organizaciones reconocidas como IEEE, ISO y OMG tienen más probabilidades de adoptarse ampliamente; las convenciones locales de una organización pueden brindar beneficios similares como 'estándares locales', aunque con menos expectativa de beneficios al integrar componentes desde fuera del ámbito de adopción del estándar local.

Adoptar un estándar es una táctica de integrabilidad efectiva, pero su efectividad se limita a los beneficios basados en las dimensiones de diferencia que el estándar aborde y en la probabilidad de que los futuros proveedores de componentes se ajusten a él. Restringir la comunicación con un sistema S para exigir el uso del estándar suele reducir el número de dependencias potenciales. Según lo que defina el estándar, también puede abordar las dimensiones sintáctica, semántico-de-datos, semántico-conductual y temporal.


## Lo mencionan

- [[orchestrate]]
