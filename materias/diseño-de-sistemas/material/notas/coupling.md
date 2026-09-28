---
titulo: "Coupling"
tipo: concepto
tags: ["coupling","dependence","software-engineering","design-patterns","acoplamiento","diseno","dependencias","objetos","modificabilidad"]
temas: ["[[atributos-de-calidad-y-tacticas]]","[[patrones-grasp]]","[[principios-de-diseno-orientado-a-objetos]]"]
fuente: "Cap17-UMLyPatrones.pdf"
paginas: [29]
veces_en_examen: 0
---

# Coupling

> Medida de cuán fuertemente un elemento está conectado, tiene conocimiento de, o depende de otros elementos.

Un elemento con acoplamiento bajo (débil) no depende de demasiados otros elementos; "demasiados" depende del contexto. Los elementos incluyen clases, subsistemas, sistemas, etc. Una clase con acoplamiento alto (fuerte) depende de muchas otras clases y puede sufrir estos problemas:

- Cambios locales forzados por cambios en clases relacionadas.
- Dificultad de entenderla aisladamente.
- Dificultad de reutilizarla porque requiere la presencia de las clases de las que depende.

En lenguajes orientados a objetos como C++, Java y C#, formas comunes de acoplamiento de TypeX a TypeY:

- TypeX tiene un atributo (miembro de datos o variable de instancia) que refiere a una instancia de TypeY, o a TypeY mismo.
- Un objeto TypeX llama a servicios de un objeto TypeY.
- TypeX tiene un método que referencia una instancia de TypeY, o TypeY mismo, por cualquier medio (parámetro, variable local, o retorno de un mensaje).
- TypeX es subclase directa o indirecta de TypeY.
- TypeY es una interfaz y TypeX la implementa.

## Relacionado

- [[low-coupling]]
- [[cohesion]]
- [[tactics-for-modifiability]]
- [[reduce-coupling]]

## Lo mencionan

- [[low-coupling]]
- [[pick-your-battles]]
- [[tactics-for-modifiability]]
- [[cohesion]]
- [[reduce-coupling]]
- [[client-server-pattern]]
- [[development-distributability]]
