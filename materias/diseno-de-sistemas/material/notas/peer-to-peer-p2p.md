---
titulo: "Peer to Peer (P2P)"
tipo: concepto
tags: ["p2p","peer-to-peer","descentralizado","distribuidos"]
temas: ["[[otros-estilos-arquitectonicos]]"]
fuente: "arq. sistemas distribuidos.pdf"
paginas: [18]
veces_en_examen: 0
---

# Peer to Peer (P2P)

> Arquitectura descentralizada en la que cada nodo puede actuar como cliente y servidor al mismo tiempo.

Permite tener conectados varios nodos y lograr un sistema descentralizado, sin roles predefinidos. Los nodos se conectan entre sí y actúan como enrutadores: si un nodo quiere encontrar algo, les pregunta a sus vecinos, y así sucesivamente hasta encontrar el recurso. Se usaba mucho para piratería, aunque no era realmente para eso. SETI fue un proyecto de computación distribuida que permitía a voluntarios usar la potencia de sus computadoras para analizar datos de radiotelescopios en busca de inteligencia extraterrestre. El punto débil es que al ser descentralizado es más difícil de monitorizar. Ventajas: es altamente redundante y tolerante a fallos y a la desconexión de nodos. Desventajas: muchos nodos pueden procesar la misma búsqueda y existe sobrecarga en las comunicaciones replicadas entre pares. Un modelo alternativo es la arquitectura semicentralizada, donde uno o más nodos actúan como servidores para facilitar las comunicaciones y reducir tráfico. Surgió a fines de los 90, principios de los 2000. El padre sería la arquitectura orientada a servicios, y cuesta diferenciarlo de los componentes distribuidos.

## Relacionado

- [[orientada-a-servicios-soa]]
- [[componentes-distribuidos]]

