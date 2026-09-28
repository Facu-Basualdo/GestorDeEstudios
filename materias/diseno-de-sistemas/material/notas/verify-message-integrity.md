---
titulo: "Verify Message Integrity"
tipo: concepto
tags: ["seguridad","integridad","validacion","checksum","hash","tacticas","deteccion"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [221,222,223,224,225,230,231,232]
veces_en_examen: 0
---

# Verify Message Integrity

> Táctica que emplea técnicas como checksums o hash values para verificar la integridad de mensajes, archivos de recursos, archivos de despliegue y archivos de configuración.

Un checksum es un mecanismo de validación en el que el sistema mantiene por separado información redundante para archivos y mensajes, y usa esa información redundante para verificar el archivo o mensaje. Un hash value es una cadena única generada por una función hash, cuya entrada pueden ser archivos o mensajes; incluso un cambio leve en los archivos o mensajes originales produce un cambio significativo en el valor hash.

## Relacionado

- [[checksum]]
- [[hash-value]]
- [[integrity]]

## Lo mencionan

- [[detect-attacks]]
- [[checksum]]
- [[hash-value]]
- [[intercepting-validator]]
