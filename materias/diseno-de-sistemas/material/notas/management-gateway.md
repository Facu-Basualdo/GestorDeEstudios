---
titulo: "Management Gateway"
tipo: concepto
tags: ["cloud","management-gateway","vm","api"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [305]
veces_en_examen: 0
---

# Management Gateway

> El management gateway es una de las dos puertas de entrada principales a una nube pública y el punto donde se envían las peticiones para crear, monitorear y destruir instancias de VM.

Para solicitar una nueva VM se envía un request al management gateway. Los parámetros esenciales son la cloud region donde correrá la instancia, el instance type (por ejemplo, CPU y memoria) y el ID de una VM image. El management gateway es responsable de decenas de miles de computadoras físicas; identifica un hypervisor que pueda gestionar una VM adicional, le pide que cree la VM, y el hypervisor devuelve la IP al gateway, que se la envía al solicitante. También devuelve un hostname que refleja que la IP fue agregada al DNS de la nube. Además de asignar VMs, soporta recopilar información de facturación, monitorear y destruir la VM. Se accede a través de mensajes por Internet a su API; esos mensajes pueden venir de otro servicio, de un programa de línea de comandos o de una aplicación web del proveedor.

## Relacionado

- [[cloud-region]]
- [[vm-image]]
- [[hypervisor]]

## Lo mencionan

- [[hypervisor]]
- [[vm-image]]
