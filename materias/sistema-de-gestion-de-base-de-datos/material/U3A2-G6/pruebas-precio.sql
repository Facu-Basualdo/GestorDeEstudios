-- ============================================================
-- U3A2 - Grupo 06 - Tanda A: precio de producto mayor a cero
-- Objeto bajo prueba: restriccion ck_producto_precio_positivo
-- Caso valido, caso invalido y caso limite.
-- Cada bloque dice que espera; si espera un ERROR, que la
-- sentencia falle ES la prueba pasada. Ver README.md.
-- ============================================================

SET search_path TO sgbd_u4_act2;

--
-- --------------------------------------------------------------------------
-- A0 | ESTADO DE PARTIDA
-- Esperado: dos UPDATE 1, y el SELECT devuelve 2 filas:
--           producto 1 a 1000.00 y producto 2 a 5000.00.
--

UPDATE producto SET nombre = 'Servicio Base',    precio = 1000 WHERE producto_id = 1;
UPDATE producto SET nombre = 'Servicio Premium', precio = 5000 WHERE producto_id = 2;

SELECT * FROM producto ORDER BY producto_id;

--
-- --------------------------------------------------------------------------
-- A1 | VALIDO | subir el precio a un valor positivo
-- Esperado: UPDATE 1, y el SELECT muestra producto 1 a 1200.00.
--           La restriccion no molesta al caso normal.
--

UPDATE producto SET precio = 1200 WHERE producto_id = 1;

SELECT * FROM producto ORDER BY producto_id;

--
-- --------------------------------------------------------------------------
-- A2 | INVALIDO | precio negativo
-- Esperado: ERROR 23514 check_violation
--           new row for relation "producto" violates check constraint
--           "ck_producto_precio_positivo"
--

UPDATE producto SET precio = -50 WHERE producto_id = 1;

--
-- --------------------------------------------------------------------------
-- A3 | LIMITE | precio exactamente 0
-- Esperado: ERROR 23514. La restriccion es > 0, no >= 0, asi que el
--           cero tambien se rechaza. Es el borde que hay que mirar:
--           un producto gratis no es un precio valido.
--

UPDATE producto SET precio = 0 WHERE producto_id = 1;
