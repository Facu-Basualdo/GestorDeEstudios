---
titulo: "Registros de Direcciones de Segmentos"
tipo: concepto
tags: ["8086","registros","segmentos","bius","memoria"]
temas: ["[[arquitectura-8086-y-modos-de-direccionamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [93]
veces_en_examen: 0
---

# Registros de Direcciones de Segmentos

> Conjunto de registros de segmento de 16 bits (CS, DS, ES, SS) de la BIU del 8086, usados para direccionar los segmentos de memoria.

La Unidad de Interfaz de Bus (BIU) contiene cuatro registros de propósito especial de 16 bits, llamados registros de segmento:
- **CS (Segmento de Código)**: direcciona la ubicación del segmento de código de la memoria, donde se almacena el programa ejecutable.
- **DS (Segmento de Datos)**: apunta al segmento de datos de la memoria, donde se almacenan los datos.
- **ES (Segmento Extra)**: se refiere a un segmento en la zona alta de la memoria disponible para almacenar información.
- **SS (Segmento de Pila)**: direcciona el segmento de pila de la memoria, usado para almacenar datos de pila.

## Relacionado

- [[arquitectura-8086]]

## Lo mencionan

- [[arquitectura-8086]]
- [[ciclo-fetch]]
- [[registros-indices]]
