---
titulo: "Removal from Service"
tipo: concepto
tags: ["mantenimiento","tacticas","prevencion","rejuvenecimiento"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [84]
veces_en_examen: 0
---

# Removal from Service

> Táctica que consiste en colocar temporalmente un componente del sistema en estado fuera de servicio para mitigar posibles fallas del sistema.

Por ejemplo, un componente puede sacarse de servicio y reiniciarse para limpiar fallas latentes (como pérdidas de memoria, fragmentación o errores suaves en una caché sin protección) antes de que la acumulación de fallas alcance un nivel que afecte el servicio y produzca una falla del sistema. Otros términos son software rejuvenation y therapeutic reboot. Si la computadora se reinicia cada noche, se está practicando removal from service.


## Lo mencionan

- [[prevent-faults]]
