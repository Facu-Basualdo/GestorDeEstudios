---
titulo: "DigitalClock"
tipo: concepto
tags: ["observer","concrete","example","clock"]
temas: ["[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [284]
veces_en_examen: 0
---

# DigitalClock

> A concrete observer that displays the time digitally, inheriting from both Widget and Observer.

DigitalClock takes a ClockTimer as subject in its constructor, attaches itself to the subject, and in the destructor detaches. Its `Update` operation checks that the notifying subject is its own subject and then calls `Draw()`. The `Draw()` method retrieves the current time from the subject (via `GetHour()`, `GetMinute()`, etc.) and draws the digital clock face. This class demonstrates the Observer pattern by reacting to timer ticks.

## Relacionado

- [[observer]]
- [[clock-timer]]

