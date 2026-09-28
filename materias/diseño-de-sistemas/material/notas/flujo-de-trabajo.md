---
titulo: "Flujo de trabajo"
tipo: concepto
tags: ["flujo-de-trabajo","disciplina","proceso-unificado","prueba","proceso","testing"]
temas: ["[[estructura-del-proceso-unificado]]"]
fuente: "proceso_unificado_compressed.pdf"
paginas: [27,33,125]
veces_en_examen: 0
---

# Flujo de trabajo

> El flujo de trabajo de prueba describe las actividades que sigue cada tester para hacer la prueba correcta y luego evaluar los resultados.

Son generalidades. Después de hacer la prueba viene una actividad de evaluación.

1. **Planear la prueba**: busca hacer más eficiente la prueba, indicando qué recursos económicos, materiales y humanos se van a necesitar y a qué se le prestará mayor atención.
2. **Diseñar la prueba**: busca cubrir todo el código lo más posible sin solapamiento, probando la mayor cantidad. Usa todos los modelos menos el de implementación, los requisitos adicionales y la salida de la actividad anterior (el Plan de prueba). El único artefacto que no produce es el Componente de prueba.
   - **Diseñar las pruebas de sistema**: define la configuración de HW, la carga de sistema y la cantidad de actores; se priorizan los CU que van a poder funcionar en paralelo porque son los que pueden tener mayores inconvenientes.
   - **Diseñar los casos de prueba de regresión**: prueba el sistema hacia atrás; requiere un caso de prueba que pueda cambiar y convenga seguir probándolo, porque si al primer cambio queda obsoleto es costoso.
3. **Implementar la prueba**: usa los dos artefactos de la actividad anterior y el modelo de implementación preparado para probarse.
4. **Efectuar prueba de integración**: ejecuta la prueba de integración; con suerte no hay defectos. La entrada es la misma que la actividad anterior y se agrega la salida del anterior.
5. **Realizar prueba del sistema**: ejecuta la prueba del sistema. La entrada y salida es la misma que la actividad anterior.
6. **Evaluar la prueba**: se enfoca en la completitud de la prueba y en qué tan confiable es la prueba realizada. Se hace en base al plan que se tenía y los defectos que surgieron. La entrada es distinta: va a tener todo lo que se estuvo probando y sus defectos.

## Relacionado

- [[proceso-unificado]]
- [[flujos-de-trabajo-principales]]
- [[flujo-de-trabajo-de-requisitos]]
- [[plan-de-prueba]]
- [[componente-de-prueba]]
- [[caso-de-prueba]]
- [[defecto]]
- [[prueba-de-integracion]]
- [[prueba-de-sistema]]
- [[caso-de-uso]]
- [[caso-de-prueba-de-regresion]]

## Lo mencionan

- [[proceso-unificado]]
- [[disciplina]]
- [[flujos-de-trabajo-principales]]
- [[flujo-de-trabajo-de-requisitos]]
- [[plan-de-prueba]]
