-- ============================================================
-- U3A2 - Grupo 06 - Tanda B: una cuenta no puede quedar negativa
-- Objetos bajo prueba: ck_cuenta_saldo_no_negativo, sp_transferir
-- Caso valido, caso invalido y caso limite; B3 es el segundo
-- invalido que sostiene la decision tecnica (ver README.md).
-- ============================================================

SET search_path TO sgbd_u4_act2;

--
-- --------------------------------------------------------------------------
-- B0 | ESTADO DE PARTIDA
-- Esperado: tres UPDATE 1, y el SELECT devuelve
--           cuenta 1 = 100000.00, cuenta 2 = 50000.00, cuenta 3 = 10000.00.
--

UPDATE cuenta SET saldo = 100000 WHERE cuenta_id = 1;
UPDATE cuenta SET saldo =  50000 WHERE cuenta_id = 2;
UPDATE cuenta SET saldo =  10000 WHERE cuenta_id = 3;

SELECT * FROM cuenta ORDER BY cuenta_id;

--
-- --------------------------------------------------------------------------
-- B1 | VALIDO | transferencia normal de 50000 de la cuenta 1 a la 2
-- Esperado: CALL sin error, y el SELECT muestra
--           cuenta 1 = 50000.00 y cuenta 2 = 100000.00.
--           Los dos saldos se mueven en un solo bloque atomico.
--

CALL sp_transferir(1, 2, 50000);

SELECT * FROM cuenta ORDER BY cuenta_id;

--
-- --------------------------------------------------------------------------
-- B2 | INVALIDO | transferir mas de lo que hay
-- Esperado: ERROR P0001
--           Saldo insuficiente en la cuenta 3: disponible 10000.00,
--           solicitado 999999
--           Lo frena el PROCEDIMIENTO, antes de tocar la tabla, con un
--           mensaje que dice cuanto habia y cuanto se pidio.
--

CALL sp_transferir(3, 1, 999999);

--
-- --------------------------------------------------------------------------
-- B3 | INVALIDO | el mismo debito por fuera del procedimiento
-- Esperado: ERROR 23514 check_violation
--           new row for relation "cuenta" violates check constraint
--           "ck_cuenta_saldo_no_negativo"
--           Lo frena la RESTRICCION. Es la prueba de por que no alcanza
--           con el procedimiento: quien escribe SQL directo no pasa por
--           el, pero no puede esquivar el CHECK.
--

UPDATE cuenta SET saldo = saldo - 999999 WHERE cuenta_id = 3;

--
-- --------------------------------------------------------------------------
-- B4 | LIMITE | vaciar la cuenta 3 dejandola exactamente en 0
-- Esperado: CALL sin error, y el SELECT muestra cuenta 3 = 0.00.
--           La restriccion es >= 0, asi que el cero es valido: quedarse
--           sin plata no es lo mismo que quedar en descubierto.
--

CALL sp_transferir(3, 1, 10000);

SELECT * FROM cuenta ORDER BY cuenta_id;
