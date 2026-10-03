-- ============================================================
-- U3A2 - Grupo 06 - Tanda C: auditar los cambios de precio
-- Objetos bajo prueba: trigger tg_auditar_precio, fn_auditar_precio
-- Valido, invalido, limite y verificacion de auditoria; C1 y C2
-- son los que sostienen la clausula WHEN (ver README.md).
-- ============================================================

SET search_path TO sgbd_u4_act2;

--
-- --------------------------------------------------------------------------
-- C0 | ESTADO DE PARTIDA | precios conocidos y auditoria vacia
-- Esperado: dos UPDATE 1, TRUNCATE TABLE, y el conteo da 0.
--

UPDATE producto SET nombre = 'Servicio Base',    precio = 1000 WHERE producto_id = 1;
UPDATE producto SET nombre = 'Servicio Premium', precio = 5000 WHERE producto_id = 2;
TRUNCATE auditoria_precio RESTART IDENTITY;

SELECT count(*) AS filas_auditoria FROM auditoria_precio;

--
-- --------------------------------------------------------------------------
-- C1 | cambio que NO toca el precio
-- Esperado: UPDATE 1, y el conteo sigue en 0.
--           El trigger es AFTER UPDATE OF precio: un cambio de nombre
--           no lo dispara.
--

UPDATE producto SET nombre = 'Servicio Base v2' WHERE producto_id = 1;

SELECT count(*) AS filas_auditoria FROM auditoria_precio;

--
-- --------------------------------------------------------------------------
-- C2 | UPDATE de precio al mismo valor
-- Esperado: UPDATE 1, y el conteo sigue en 0.
--           UPDATE OF precio si dispara, porque precio esta en el SET,
--           pero la clausula WHEN (OLD.precio IS DISTINCT FROM
--           NEW.precio) lo filtra. Sin el WHEN quedaria una fila basura
--           con precio_anterior = precio_nuevo.
--

UPDATE producto SET precio = precio WHERE producto_id = 1;

SELECT count(*) AS filas_auditoria FROM auditoria_precio;

--
-- --------------------------------------------------------------------------
-- C3 | VALIDO | cambio real de precio
-- Esperado: UPDATE 1, y el SELECT devuelve 1 fila
--           auditoria_id 1 | producto 1 | 1000.00 -> 1500.00 | fecha_cambio
--

UPDATE producto SET precio = 1500 WHERE producto_id = 1;

SELECT * FROM auditoria_precio ORDER BY auditoria_id;

--
-- --------------------------------------------------------------------------
-- C4 | LIMITE | un UPDATE que toca las dos filas de producto
-- Esperado: UPDATE 2, y el conteo pasa de 1 a 3.
--           FOR EACH ROW: un registro por fila modificada, no uno por
--           sentencia. Los dos registros nuevos comparten fecha_cambio.
--

UPDATE producto SET precio = precio * 1.10;

SELECT count(*) AS filas_auditoria FROM auditoria_precio;

--
-- --------------------------------------------------------------------------
-- C5 | INVALIDO | cambio de precio rechazado por el CHECK
-- Esperado: ERROR 23514, y el conteo sigue en 3.
--           El trigger es AFTER, asi que ni llega a ejecutarse; y
--           aunque lo hiciera, su INSERT vive en la misma transaccion
--           que se revierte. Una operacion fallida no deja rastro.
--

UPDATE producto SET precio = -1 WHERE producto_id = 2;

SELECT count(*) AS filas_auditoria FROM auditoria_precio;

--
-- --------------------------------------------------------------------------
-- C6 | VERIFICACION DE AUDITORIA | registro completo generado
-- Esperado: 3 filas
--           1 | prod 1 | 1000.00 -> 1500.00
--           2 | prod 2 | 5000.00 -> 5500.00   <- las dos del UPDATE de C4,
--           3 | prod 1 | 1500.00 -> 1650.00      con la misma fecha_cambio
--

SELECT * FROM auditoria_precio ORDER BY auditoria_id;
