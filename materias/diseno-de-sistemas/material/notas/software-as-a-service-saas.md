---
titulo: "Software as a Service (SaaS)"
tipo: concepto
tags: ["saas","modelo-entrega","nube","software"]
temas: ["[[servicios-y-microservicios]]"]
fuente: "arq. sistemas distribuidos.pdf"
paginas: [29]
veces_en_examen: 0
---

# Software as a Service (SaaS)

> Modelo de entrega y negocio en el que el software se hostea de forma remota y los usuarios acceden desde internet, no un patrón de arquitectura.

No es lo mismo que SOA. La idea es hostear un software de forma remota y que los usuarios accedan desde internet. Por lo general se despliega en la nube, no en una PC local. El software es controlado por el dueño del mismo más que por las organizaciones que lo usan. A veces hay que pagar suscripción o es gratis (aceptando términos), depende del distribuidor. Beneficios: no se pagan más licencias por tener software en distintos dispositivos porque no se ejecuta directamente en dispositivos distintos; es más barato actualizar y arreglar bugs porque se actualiza el servicio en la nube; si un cliente tiene distintas computadoras, no necesita pagar licencia en todas, basta con tener cuenta habilitada. Desventajas: la principal es el uso de red, porque todo es virtual y se produce una gran carga en la red de transferencia de datos; otra desventaja es que el cliente tiene que lidiar con las actualizaciones y evolución sin control del software. SaaS se implementa utilizando componentes más que utilizando servicios. Algunos SaaS como Google Docs ofrecen experiencias genéricas para todos los usuarios; para empresas que desean versiones específicas, lo ideal es desarrollar una buena configuración para que cada uno la adapte.

## Relacionado

- [[orientada-a-servicios-soa]]
- [[componentes-distribuidos]]

