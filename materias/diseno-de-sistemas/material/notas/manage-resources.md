---
titulo: "Manage Resources"
tipo: concepto
tags: ["tactica","rendimiento","recursos","gestion-de-recursos","concurrencia","integrabilidad","resource-manager","intermediary","performance","tacticas","gestion"]
temas: ["[[atributos-de-calidad-y-tacticas]]","[[tacticas-de-arquitectura]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [146,181]
veces_en_examen: 0
---

# Manage Resources

> Táctica de integrabilidad que gobierna el acceso a recursos informáticos por medio de un resource manager, al que los componentes deben solicitar los recursos.

Un resource manager es una forma específica de intermediary que gobierna el acceso a recursos informáticos; es similar a la táctica restrict communication paths. Con esta táctica, los componentes de software no pueden acceder directamente a algunos recursos (por ejemplo, threads o bloques de memoria), sino que solicitan esos recursos a un resource manager. Los resource managers suelen ser responsables de asignar el acceso a los recursos entre múltiples componentes de manera que se preserven invariantes (por ejemplo, evitar agotamiento de recursos o uso concurrente), de aplicar alguna política de acceso justo, o ambas. Ejemplos de resource managers incluyen los sistemas operativos, los mecanismos de transacción en bases de datos, el uso de thread pools en sistemas empresariales y el uso del estándar ARINC 653 para particionamiento de espacio y tiempo en sistemas de seguridad crítica. La táctica manage resources funciona reduciendo la resource distance entre un sistema S y un componente C, exponiendo claramente los requisitos de recursos y gestionando su uso común.

## Relacionado

- [[control-resource-demand]]
- [[increase-resources]]
- [[introduce-concurrency]]
- [[maintain-multiple-copies-of-computations]]
- [[maintain-multiple-copies-of-data]]
- [[bound-queue-sizes]]
- [[schedule-resources]]

## Lo mencionan

- [[performance]]
- [[schedule-resources]]
- [[control-resource-demand]]
- [[increase-resources]]
- [[introduce-concurrency]]
- [[maintain-multiple-copies-of-computations]]
- [[maintain-multiple-copies-of-data]]
- [[bound-queue-sizes]]
