---
titulo: "Resumen de las Ecuaciones del Secuenciador de Abacus"
tipo: concepto
tags: ["abacus","ecuaciones","secuenciador","senales-de-gobierno"]
temas: ["[[secuenciador-y-control]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [86]
veces_en_examen: 0
---

# Resumen de las Ecuaciones del Secuenciador de Abacus

> Lista completa de las ecuaciones lógicas que gobiernan las señales del secuenciador de Abacus.

Las ecuaciones de señales son las siguientes:

```
ENS = 𝜙0
ICM = 𝜙0
PACM = 𝜙0
LEC = 𝐼 + 𝑂 ⋅ 𝑎𝑙𝑚 + (𝐼 ⋅ 𝑂)
ESC = 𝑂 ⋅ 𝑎𝑙𝑚
SRM = 𝜃0 · 𝐼 + 𝑂 · 𝑎𝑙𝑚 + 𝐼𝑁𝐷 · 𝜃1 · (𝐼̅ · 𝑂̅)
TMS = 𝐼𝑁𝐷 ⋅ 𝐼 ⋅ 𝑂 ⋅ 𝜃1
ENI = 𝜙1 ⋅ 𝐼
INCP = 𝜙1 ⋅ 𝐼
SRD = 𝜃1 ⋅ 𝐼 ⋅ (𝑠𝑢𝑚 + 𝑠𝑢𝑠 + 𝑎𝑛𝑑 + 𝑜𝑟 + 𝑎𝑙𝑚 + 𝑠𝑎𝑝 ⋅ 𝐴𝑃 + 𝑠𝑎𝑖)
SRP = 𝜃1 ⋅ 𝐼 ⋅ (𝑝𝑎𝑐 + 𝑠𝑎𝑝 ⋅ 𝐴𝑁) + 𝜃1 ⋅ 𝑂
ENP = 𝜙0 ⋅ (𝑠𝑎𝑖 + 𝑠𝑎𝑝 ⋅ 𝐴𝑃)
SUM = 𝑠𝑢𝑚 ⋅ 𝑂
SUS = 𝑠𝑢𝑠 ⋅ 𝑂
AND = 𝑎𝑛𝑑 ⋅ 𝑂
OR = 𝑜𝑟 ⋅ 𝑂
ENA = 𝑂 ⋅ 𝑎𝑙𝑚
EAC = 𝑂 ⋅ 𝑎𝑙𝑚 ⋅ 𝜙0
PAC = 𝑝𝑎𝑐 ⋅ 𝜙0
SAC = 𝑂 ⋅ 𝜃0 ⋅ 𝑎𝑙𝑚
ENM = 𝑂 ⋅ 𝜙1 ⋅ 𝑎𝑙𝑚
SI = 𝜙0 ⋅ 𝑂
RI = 𝜙0 ⋅ 𝐼 ⋅ (𝑠𝑢𝑚 + 𝑠𝑢𝑠 + 𝑜𝑟 + 𝑎𝑛𝑑 + 𝑎𝑙𝑚)
SO = 𝐼𝑁𝐷 ⋅ 𝜙0 ⋅ 𝐼 ⋅ (𝑠𝑢𝑚 + 𝑠𝑢𝑠 + 𝑜𝑟 + 𝑎𝑛𝑑 + 𝑎𝑙𝑚) + 𝐼𝑁𝐷 ⋅ 𝜙0 ⋅ 𝐼 ⋅ 𝑂
RO = 𝜙0 ⋅ 𝑂
```

## Relacionado

- [[alm-en-abacus]]
- [[pac-en-abacus]]
- [[sap-en-abacus]]
- [[ind-en-abacus]]
- [[incp-en-phi1]]
- [[biestables-de-estado-en-abacus]]
- [[ecuaciones-para-biestables-de-estado-en-abacus]]

