---
titulo: "Monitor-Actuator"
tipo: concepto
tags: ["seguridad","patron","monitor","actuador","redundancia"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [210]
veces_en_examen: 0
---

# Monitor-Actuator

> Patrón de seguridad que separa el cálculo del valor a enviar a un actuador físico (realizado por el actuator controller) de la verificación de razonabilidad de ese valor (realizada por el monitor).

Se enfoca en dos elementos de software: un monitor y un actuator controller, que se emplean antes de enviar un comando a un actuador físico. El actuator controller realiza los cálculos necesarios para determinar los valores a enviar al actuador. El monitor verifica que esos valores sean razonables antes de enviarlos. Esto separa el cómputo del valor de la prueba del valor.

**Beneficios:**
- El monitor actúa como una verificación redundante de los cálculos del actuator controller.

**Tradeoffs:**
- El desarrollo y mantenimiento del monitor requiere tiempo y recursos.
- Debido a la separación entre control del actuador y monitoreo, este tradeoff es fácil de manipular haciendo el monitor tan simple (fácil de producir pero puede no detectar errores) o tan sofisticado (más complejo pero detecta más errores) como se requiera.


