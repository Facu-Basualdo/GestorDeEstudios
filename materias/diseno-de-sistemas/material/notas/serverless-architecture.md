---
titulo: "Serverless Architecture"
tipo: concepto
tags: ["serverless","containers","cloud","faas","stateless"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [301]
veces_en_examen: 0
---

# Serverless Architecture

> La serverless architecture es un enfoque de diseño de sistemas en el que los containers se asignan dinámicamente por cada solicitud y se desasignan al terminar, dejando los servidores y motores de runtime en la infraestructura.

En vez de asignar VMs en máquinas físicas, se asignan containers en container runtime engines. Los tiempos de carga de un container son muy cortos: unos segundos para un cold start y unos milisegundos para reasignarlo. Como la asignación de un container es rápida, no es necesario dejar el container corriendo entre solicitudes: cuando el servicio termina de procesar una solicitud, el container se detiene y se desasigna. A pesar del nombre, no es realmente serverless: hay servidores que hospedan los container runtime engines, pero como se asignan dinámicamente con cada solicitud, forman parte de la infraestructura. El desarrollador no es responsable de asignarlos ni desasignarlos. Una consecuencia es que estos containers de corta vida deben ser stateless: cualquier estado necesario para la coordinación debe almacenarse en un servicio de infraestructura del proveedor o pasarse como parámetro.

## Relacionado

- [[container]]
- [[container-runtime-engine]]
- [[virtual-machine]]
- [[function-as-a-service-faas]]

## Lo mencionan

- [[function-as-a-service-faas]]
