-- ============================================================
-- U3A2 - Grupo 06 - Tanda D: clasificar cliente por total anual
-- Objeto bajo prueba: fn_clasificar_cliente(cliente_id, anio)
-- Caso valido, caso invalido y caso limite. No modifica datos:
-- el caso limite va dentro de un ROLLBACK.
-- Umbrales: 0 = SIN OPERACIONES | >= 100000 = PREMIUM
--           >= 20000 = MEDIO    | resto     = BASICO
-- ============================================================

SET search_path TO sgbd_u4_act2;

--
-- --------------------------------------------------------------------------
-- D0 | ESTADO DE PARTIDA | total anual por cliente y anio
-- Esperado: 4 filas
--           cliente 1 | 2026 | 100000.00   <- justo el minimo de PREMIUM
--           cliente 2 | 2026 |  20000.00   <- justo el minimo de MEDIO
--           cliente 3 | 2025 | 500000.00
--           cliente 3 | 2026 |   5000.00
--

SELECT cliente_id,
       EXTRACT(YEAR FROM fecha)::INT AS anio,
       SUM(monto) AS total_anual
FROM venta
GROUP BY cliente_id, EXTRACT(YEAR FROM fecha)
ORDER BY cliente_id, anio;

--
-- --------------------------------------------------------------------------
-- D1 | VALIDO | la funcion usada DENTRO de una consulta
-- Esperado: 3 filas
--           1 | Norte SA    | PREMIUM
--           2 | Sur SRL     | MEDIO
--           3 | Cliente Uno | BASICO
--           Esto es lo que un procedimiento no puede hacer: no se lo
--           puede invocar desde un SELECT, solo con CALL. Es la razon
--           por la que la regla se resolvio con una funcion.
--

SELECT c.cliente_id,
       c.nombre,
       fn_clasificar_cliente(c.cliente_id, 2026) AS clasificacion
FROM cliente c
ORDER BY c.cliente_id;

--
-- --------------------------------------------------------------------------
-- D2 | LIMITE | un centavo por debajo y justo en el umbral de PREMIUM
-- Esperado: el primer SELECT devuelve  99999.99 | MEDIO
--           el segundo devuelve       100000.00 | PREMIUM
--           El umbral es >=, asi que el borde exacto entra.
--           Todo dentro de una transaccion que termina en ROLLBACK,
--           asi que no queda nada cargado.
--

BEGIN;

INSERT INTO venta (cliente_id, fecha, monto) VALUES (2, DATE '2026-08-01', 79999.99);

SELECT SUM(monto) AS total_2026, fn_clasificar_cliente(2, 2026) AS clasificacion
FROM venta
WHERE cliente_id = 2 AND fecha >= DATE '2026-01-01' AND fecha < DATE '2027-01-01';

INSERT INTO venta (cliente_id, fecha, monto) VALUES (2, DATE '2026-08-02', 0.01);

SELECT SUM(monto) AS total_2026, fn_clasificar_cliente(2, 2026) AS clasificacion
FROM venta
WHERE cliente_id = 2 AND fecha >= DATE '2026-01-01' AND fecha < DATE '2027-01-01';

ROLLBACK;

--
-- --------------------------------------------------------------------------
-- D3 | INVALIDO | cliente inexistente
-- Esperado: ERROR P0001
--           El cliente 999 no existe
--           Devolver SIN OPERACIONES seria mentir: no es que no opero,
--           es que no existe.
--

SELECT fn_clasificar_cliente(999, 2026);
