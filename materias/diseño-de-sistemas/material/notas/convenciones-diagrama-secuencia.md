---
titulo: "Convenciones de diagrama de secuencia (cátedra)"
tipo: concepto
tags: ["diagrama-de-secuencia","diseno","convenciones","uml","practica"]
temas: ["[[diseno-orientado-a-objetos]]"]
fuente: "proceso_unificado_compressed.pdf"
paginas: [53]
veces_en_examen: 0
---

# Convenciones de diagrama de secuencia (cátedra)

> Reglas de la cátedra para dibujar diagramas de secuencia en la práctica de diseño.

Solamente se realiza el camino feliz, no los alternativos.
Si no se requiere filtro al devolver la lista, se puede enviar un mensaje con toda la lista.
Si devuelve un solo elemento, no hace falta recorrer la lista: se hace el get.
Los actores secundarios se ponen del lado derecho, al final, con el mismo formato que el actor de la izquierda; se les envía la solicitud de verificación.
Si es una persona, no requiere interfaz ni controlador, solo verificar lo que se necesite.
Una consulta simple puede no pasar por el sistema e ir directamente a la clase indicada.

## Relacionado

- [[diseno]]

