---
titulo: "Calidad de servicio"
tipo: concepto
tags: ["qos","sistemas-distribuidos","calidad","diseno"]
temas: ["[[calidad-y-gestion-de-fallos]]"]
fuente: "arq. sistemas distribuidos.pdf"
paginas: [3]
veces_en_examen: 0
---

# Calidad de servicio

> Capacidad de un sistema distribuido para prestar sus servicios de forma fiable, con un tiempo de respuesta y un rendimiento aceptables para sus usuarios.

Es uno de los puntos de diseño de los sistemas distribuidos. Idealmente, los requisitos de QoS deberían especificarse con antelación y el sistema debería diseñarse y configurarse para ofrecer esa QoS.

Esto no siempre es factible por dos razones:

1. Puede no ser rentable diseñar y configurar el sistema para ofrecer alta calidad durante los picos de carga; este problema se mitiga con la computación en la nube, donde se pueden alquilar servidores y agregarlos a medida que aumenta la demanda.
2. Los parámetros de QoS pueden ser mutuamente contradictorios: por ejemplo, una mayor fiabilidad puede implicar menor capacidad de procesamiento debido a los procedimientos de verificación.

La calidad del servicio es especialmente importante cuando el sistema maneja datos críticos en tiempo real, como transmisiones de audio o video.

## Relacionado

- [[sistema-distribuido]]

## Lo mencionan

- [[sistema-distribuido]]
