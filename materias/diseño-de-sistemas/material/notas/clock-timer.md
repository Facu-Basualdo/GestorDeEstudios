---
titulo: "ClockTimer"
tipo: concepto
tags: ["observer","subject","concrete","example","timer"]
temas: ["[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [284]
veces_en_examen: 0
---

# ClockTimer

> A concrete subject that stores and maintains the time of day and notifies its observers every second.

ClockTimer inherits from Subject and provides an interface for retrieving individual time units: `GetHour()`, `GetMinute()`, `GetSecond()`. Its `Tick()` operation is called at regular intervals (e.g., by an internal timer) to update the internal time-keeping state and then calls `Notify()` to inform observers of the change.


## Lo mencionan

- [[digital-clock]]
