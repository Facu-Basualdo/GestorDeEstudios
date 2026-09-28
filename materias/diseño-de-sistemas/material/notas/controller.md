---
titulo: "Controller"
tipo: concepto
tags: ["grasp","patron","diseno","responsabilidad","ui","capa-dominio","delegacion","controller"]
temas: ["[[controladores-y-arquitectura-en-capas]]"]
fuente: "Cap17-UMLyPatrones.pdf"
paginas: [16,32]
veces_en_examen: 0
---

# Controller

> En GRASP, Controller es el primer objeto más allá de la capa de interfaz que recibe o maneja un mensaje de operación de sistema, y normalmente delega el trabajo a otros objetos en lugar de hacerlo él mismo.

**Problema**: ¿Qué primer objeto más allá de la capa de UI recibe y coordina una operación de sistema?

**Solución**: asignar la responsabilidad a una clase que represente una de estas opciones:
- El "sistema" general, un "objeto raíz", un dispositivo en el que corre el software o un subsistema mayor (variaciones de un *facade controller*).
- Un escenario de caso de uso dentro del cual ocurre el evento de sistema, a menudo llamado `<UseCaseName>Handler`, `<UseCaseName>Coordinator` o `<UseCaseName>Session` (*use case controller* o *session controller*).

Corolario: las clases "window", "view" y "document" no están en esa lista; no deben cumplir las tareas asociadas a eventos de sistema, sino recibir los eventos y delegarlos a un controller.

Es un patrón de delegación: los objetos de la capa de UI delegan los pedidos de trabajo a otra capa. Normalmente un controller no hace el trabajo por sí mismo; coordina o controla la actividad y delega el trabajo a otros objetos.

Se recomienda usar la misma clase controller para todos los eventos de sistema de un mismo caso de uso, para mantener información sobre el estado del caso de uso (por ejemplo, detectar operaciones fuera de secuencia como `makePayment` antes de `endSale`).

Un defecto común es sobre-asignar responsabilidades al controller, lo que genera baja cohesión y viola el principio de High Cohesion.

**Beneficios**: mayor potencial de reutilización e interfaces conectables, y oportunidad de razonar sobre el estado del caso de uso.

El controller de GRASP no debe confundirse con el "controller" del patrón Web-MVC: el de Web-MVC forma parte de la capa de UI y controla la interacción y el flujo de páginas; el de GRASP pertenece a la capa de dominio y coordina el manejo del pedido de trabajo.

## Relacionado

- [[information-expert]]
- [[low-coupling]]
- [[high-cohesion]]
- [[system-sequence-diagrams]]
- [[system-operation]]
- [[facade-controller]]
- [[use-case-controller]]
- [[boundary-control-entity]]

## Lo mencionan

- [[grasp]]
- [[information-expert]]
- [[creator]]
- [[high-cohesion]]
- [[facade-controller]]
- [[use-case-controller]]
- [[system-operation]]
- [[boundary-control-entity]]
- [[bloated-controller]]
- [[ui-layer-does-not-handle-system-events]]
- [[message-handling-systems]]
