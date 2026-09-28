---
titulo: "Direccionamiento Relativo"
tipo: concepto
tags: ["direccionamiento","relativo","registro-base","memoria","modos"]
temas: ["[[arquitectura-8086-y-modos-de-direccionamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [64]
veces_en_examen: 0
---

# Direccionamiento Relativo

> Modo de direccionamiento que sitúa la información en relación a una dirección de referencia almacenada en un Registro Base.

No indica la posición absoluta en memoria, sino que la sitúa en relación a una dirección de referencia. La dirección efectiva se obtiene sumando la dirección relativa con la dirección de referencia.

Generalmente se usa cuando la longitud de la palabra de memoria es insuficiente para direccionar toda la memoria física.

Ventaja:
- Permite acceder a todo el espacio de memoria usando un número de bits menor al necesario para direccionar toda la memoria.

Desventaja:
- Se requiere sumar las direcciones relativa y de referencia para obtener la dirección efectiva, lo que supone un retraso adicional pequeño comparado con un ciclo de lectura de memoria; por eso el tiempo de ejecución de la instrucción no se ve penalizado.

## Relacionado

- [[modos-de-direccionamiento]]

## Lo mencionan

- [[direccionamiento-relativo-por-base-y-desplazamiento]]
- [[direccionamiento-relativo-por-referencia-al-programa]]
- [[direccionamiento-relativo-por-pagina-o-yuxtaposicion]]
