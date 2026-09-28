---
titulo: "Continuous Deployment"
tipo: concepto
tags: ["continuous-deployment","deployability","despliegue","releases","produccion","despliegue-continuo","automatizacion","deployment","devops","microservices"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [100,101]
veces_en_examen: 0
---

# Continuous Deployment

> Continuous Deployment (despliegue continuo) es el proceso de deployment totalmente automatizado, sin intervención humana, que va desde la codificación hasta que los usuarios reales interactúan con el sistema en producción.

Permite liberar correcciones de bugs y nuevas funcionalidades en cualquier momento, sin esperar a la próxima release programada ni empaquetarlas en una misma entrega. No es deseable ni posible en todos los dominios: en sistemas con un ecosistema complejo y muchas dependencias, en sistemas embebidos, en sistemas en ubicaciones de difícil acceso o en sistemas que no están conectados a una red, puede no ser viable. Este capítulo se enfoca en la creciente cantidad de sistemas donde las releases just-in-time de funcionalidades son una ventaja competitiva importante y las correcciones just-in-time son esenciales para la seguridad o la operación continua. A menudo son sistemas basados en microservices y en la nube, aunque las técnicas no se limitan a esas tecnologías. La adopción de continuous deployment también obliga a pensar antes en la infraestructura de testing, porque requiere testing automatizado continuo, y lleva a decisiones arquitectónicas sobre mecanismos como feature toggles y backward compatibility de interfaces.

## Relacionado

- [[deployability]]
- [[quality-attribute]]
- [[deployment]]
- [[continuous-delivery]]
- [[microservice-architecture]]
- [[feature-toggle]]

## Lo mencionan

- [[deployability]]
- [[deployment]]
- [[continuous-delivery]]
- [[cycle-time]]
- [[devops]]
