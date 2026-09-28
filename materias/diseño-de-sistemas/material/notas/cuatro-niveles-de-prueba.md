---
titulo: "Cuatro niveles de prueba"
tipo: concepto
tags: ["testing","niveles-de-prueba","transporte","industrial","automotive-spice"]
temas: ["[[sistemas-moviles-y-restricciones-de-recursos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [334]
veces_en_examen: 0
---

# Cuatro niveles de prueba

> Las pruebas para sistemas de transporte o industriales tienden a ocurrir en cuatro niveles: componente de software, función, dispositivo y sistema.

Los niveles y los límites entre ellos pueden variar según el sistema, pero están implícitos en varios procesos y estándares de referencia, como Automotive SPICE.

Ejemplo: función de *lane keep assist* en un auto (mantenerse en el carril definido por las marcas de la ruta sin intervención del conductor):

1. **Software component**: se prueba un componente de detección de carril mediante técnicas habituales de pruebas unitarias y end-to-end, validando estabilidad y corrección.
2. **Function**: el componente se ejecuta junto con otros componentes de la función (por ejemplo, un componente de mapeo para identificar salidas de autopista) en un entorno simulado; se validan la interconexión y la concurrencia segura.
3. **Device**: la función completa se despliega en su ECU objetivo y se prueba allí su rendimiento y estabilidad, con el entorno simulado mediante entradas externas simuladas (mensajes de otras ECUs, sensores, etc.) conectadas a los puertos de la ECU.
4. **System**: en la integración final, todos los dispositivos con todas las funciones y componentes se integran en configuraciones de tamaño completo, primero en un laboratorio y luego en un prototipo. La función puede probarse junto con sus acciones sobre la dirección y la aceleración/frenado, alimentada con una imagen proyectada o un video de la ruta. El objetivo es confirmar que los subsistemas integrados funcionan juntos y entregan la funcionalidad y atributos de calidad deseados.

## Relacionado

- [[test-traceability]]

## Lo mencionan

- [[testing]]
- [[test-traceability]]
