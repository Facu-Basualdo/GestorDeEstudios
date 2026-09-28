---
titulo: "Quantum Teleportation"
tipo: concepto
tags: ["teleportacion","qubits","entrelazamiento","comunicacion-cuantica"]
temas: ["[[organizacion,-deuda-tecnica-y-temas-avanzados]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [474]
veces_en_examen: 0
---

# Quantum Teleportation

> Quantum teleportation es el nombre que recibe la copia indirecta del estado de un qubit a otro, con la destrucción del estado del qubit original.

Copiar un qubit a otro de forma directa no es posible; por eso se usan medios indirectos y se acepta la destrucción del estado del qubit original. El qubit receptor queda con el mismo estado que tenía el original destruido. No hay restricciones sobre la relación física entre el qubit original y el receptor, ni sobre la distancia que los separa; de este modo se puede transferir información a lo largo de cientos o miles de kilómetros.

El proceso utiliza tres qubits: A y B están entrelazados, y luego el qubit ψ se entrelaza con A. El qubit ψ se teleporta a la ubicación de B y su estado se convierte en el estado de B. Sus cuatro pasos son:

1. Entrelazar A y B; sus ubicaciones pueden estar físicamente separadas.
2. Preparar el “payload”: el qubit ψ, con el estado a teleportar, se prepara en la ubicación de A.
3. Propagar el payload: se transfieren dos bits clásicos a la ubicación de B; la propagación implica medir A y ψ, lo que destruye el estado de ambos.
4. Re-crear el estado de ψ en B.

La teleportación cuántica es un ingrediente esencial de la comunicación cuántica. Depende de transmitir dos bits por canales de comunicación convencionales y es inherentemente segura, porque un espía solo puede determinar los dos bits enviados por esos canales. NIST está considerando protocolos de comunicación cuántica como base de un protocolo de transporte llamado HTTPQ, pensado para reemplazar a HTTPS.

## Relacionado

- [[entanglement]]

## Lo mencionan

- [[entanglement]]
