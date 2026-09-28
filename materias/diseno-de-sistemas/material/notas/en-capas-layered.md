---
titulo: "En Capas (Layered)"
tipo: concepto
tags: ["capas","layered","arquitectura","patron-arquitectonico","modificabilidad"]
temas: ["[[patrones-arquitectonicos]]"]
fuente: "arquitectura_compressed.pdf"
paginas: [41]
veces_en_examen: 0
---

# En Capas (Layered)

> Separa el sistema en capas con funcionalidades relacionadas, donde cada capa provee servicios a la capa superior y las capas de nivel inferior representan los servicios más importantes del sistema.

En cada capa existen elementos con responsabilidades similares. Normalmente arriba de todo está la capa de presentación, en el medio va aplicación o lógica de negocio y al final la capa de datos. Cada capa de arriba depende inmediatamente de la capa inferior, pero no a la inversa; esto permite que una capa se pueda remover y ser reemplazada sin problema, y favorece el desarrollo incremental. Las interfaces deben estar bien especificadas.

**Cuándo se usa (Somerville):**
- Cuando se desean construir nuevas características por encima de sistemas que ya existen.
- Cuando el desarrollo está dividido en varios equipos y cada uno es responsable de una capa de funcionalidad.
- Cuando la seguridad como atributo de calidad es crucial.

**Ventajas:**
- Es ventajoso para sistemas multiplataforma porque solo las capas ligadas al sistema operativo deberán ser reemplazadas.

**Desventajas:**
- No siempre se logra una separación tan estricta entre capas; en la práctica es muy complicado y puede haber comunicación directa entre capas superiores e inferiores.
- El rendimiento puede ser un problema por la latencia entre capas.

**Ejemplo:** capa de lógica del negocio (bien hecha no debería depender de la base de datos asociada) y capa de soporte (más vinculada al sistema operativo, base de datos, etc.).

Del libro: el número de capas es arbitrario; cualquier capa de la figura podría dividirse en dos o más capas.

Además, *Tier* normalmente se asocia a capa física y *layer* a capa lógica.

## Relacionado

- [[patron-arquitectonico]]

