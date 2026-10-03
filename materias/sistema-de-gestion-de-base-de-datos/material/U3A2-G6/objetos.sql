-- ============================================================
-- SGBD - UTN FRRe 2026 - Unidad 3, Actividad 2 - Grupo 06
-- Motor: PostgreSQL 18.6
--
-- Objetos creados para llevar al SGBD las reglas de negocio.
-- Requiere haber ejecutado antes actividad2_postgresql_base.sql.
-- Re-ejecutable: cada objeto se elimina antes de crearse.
-- Las pruebas estan en pruebas.sql; las decisiones, en README.md.
-- ============================================================

SET search_path TO sgbd_u4_act2;


-- ------------------------------------------------------------
-- 0. Tabla de apoyo `venta`.
--    No forma parte del script de la catedra. Se agrega porque la
--    regla de clasificacion pide un "total anual" y el esquema base
--    no registra ninguna operacion con importe y fecha.
-- ------------------------------------------------------------
DROP TABLE IF EXISTS venta;

CREATE TABLE venta (
  venta_id   INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  cliente_id INTEGER       NOT NULL REFERENCES cliente(cliente_id),
  fecha      DATE          NOT NULL,
  monto      NUMERIC(12,2) NOT NULL
);

INSERT INTO venta (cliente_id, fecha, monto) VALUES
  (1, DATE '2026-03-10',  60000.00),
  (1, DATE '2026-07-22',  40000.00),
  (2, DATE '2026-02-05',  12000.00),
  (2, DATE '2026-06-18',   8000.00),
  (3, DATE '2026-05-30',   5000.00),
  (3, DATE '2025-11-11', 500000.00);


-- ------------------------------------------------------------
-- 1. Restriccion declarativa: el precio de un producto debe ser > 0.
--    Regla simple resuelta sin trigger (lo exige la consigna).
-- ------------------------------------------------------------
ALTER TABLE producto DROP CONSTRAINT IF EXISTS ck_producto_precio_positivo;

ALTER TABLE producto ADD CONSTRAINT ck_producto_precio_positivo
  CHECK (precio > 0);


-- ------------------------------------------------------------
-- 2. Restriccion declarativa: una cuenta no puede quedar en negativo.
--    Es la garantia de la regla: vale para cualquier UPDATE, venga
--    del procedimiento, de la aplicacion o de un psql suelto.
-- ------------------------------------------------------------
ALTER TABLE cuenta DROP CONSTRAINT IF EXISTS ck_cuenta_saldo_no_negativo;

ALTER TABLE cuenta ADD CONSTRAINT ck_cuenta_saldo_no_negativo
  CHECK (saldo >= 0);


-- ------------------------------------------------------------
-- 3. Procedimiento sp_transferir: proceso de varios pasos sobre el
--    saldo (validar, bloquear, verificar, debitar, acreditar).
--    No reemplaza al CHECK del punto 2: lo complementa.
-- ------------------------------------------------------------
DROP PROCEDURE IF EXISTS sp_transferir(INTEGER, INTEGER, NUMERIC);

CREATE PROCEDURE sp_transferir(p_origen INTEGER, p_destino INTEGER, p_monto NUMERIC)
LANGUAGE plpgsql
SET search_path = sgbd_u4_act2, pg_temp
AS $$
DECLARE
  v_cuentas      INTEGER;
  v_saldo_origen NUMERIC(12,2);
BEGIN
  IF p_monto IS NULL OR p_monto <= 0 THEN
    RAISE EXCEPTION 'El monto a transferir debe ser mayor a cero (recibido: %)', p_monto;
  END IF;

  IF p_origen = p_destino THEN
    RAISE EXCEPTION 'La cuenta origen y la destino no pueden ser la misma (%)', p_origen;
  END IF;

  -- Se bloquean las dos filas en orden ascendente de cuenta_id para que
  -- dos transferencias cruzadas simultaneas no se traben entre si.
  PERFORM cuenta_id
  FROM cuenta
  WHERE cuenta_id IN (p_origen, p_destino)
  ORDER BY cuenta_id
  FOR UPDATE;

  GET DIAGNOSTICS v_cuentas = ROW_COUNT;

  IF v_cuentas <> 2 THEN
    RAISE EXCEPTION 'Alguna de las cuentas no existe (origen: %, destino: %)',
                    p_origen, p_destino;
  END IF;

  SELECT saldo INTO v_saldo_origen FROM cuenta WHERE cuenta_id = p_origen;

  IF v_saldo_origen < p_monto THEN
    RAISE EXCEPTION 'Saldo insuficiente en la cuenta %: disponible %, solicitado %',
                    p_origen, v_saldo_origen, p_monto;
  END IF;

  UPDATE cuenta SET saldo = saldo - p_monto WHERE cuenta_id = p_origen;
  UPDATE cuenta SET saldo = saldo + p_monto WHERE cuenta_id = p_destino;
END;
$$;


-- ------------------------------------------------------------
-- 4. Trigger de auditoria de precio.
--    AFTER: el cambio ya paso por el CHECK del punto 1.
--    FOR EACH ROW: hacen falta OLD y NEW de cada fila.
--    UPDATE OF precio + WHEN: solo se audita un cambio real de precio.
-- ------------------------------------------------------------
DROP TRIGGER  IF EXISTS tg_auditar_precio ON producto;
DROP FUNCTION IF EXISTS fn_auditar_precio();

CREATE FUNCTION fn_auditar_precio() RETURNS trigger
LANGUAGE plpgsql
SET search_path = sgbd_u4_act2, pg_temp
AS $$
BEGIN
  INSERT INTO auditoria_precio (producto_id, precio_anterior, precio_nuevo)
  VALUES (OLD.producto_id, OLD.precio, NEW.precio);
  RETURN NULL;
END;
$$;

CREATE TRIGGER tg_auditar_precio
AFTER UPDATE OF precio ON producto
FOR EACH ROW
WHEN (OLD.precio IS DISTINCT FROM NEW.precio)
EXECUTE FUNCTION fn_auditar_precio();


-- ------------------------------------------------------------
-- 5. Funcion fn_clasificar_cliente: clasifica por total anual.
--    STABLE y sin efectos, para poder usarla dentro de un SELECT.
--    El filtro por anio es un rango sobre `fecha`, no EXTRACT(YEAR),
--    para que pueda apoyarse en un indice.
-- ------------------------------------------------------------
DROP FUNCTION IF EXISTS fn_clasificar_cliente(INTEGER, INTEGER);

CREATE FUNCTION fn_clasificar_cliente(p_cliente_id INTEGER, p_anio INTEGER)
RETURNS TEXT
LANGUAGE plpgsql
STABLE
SET search_path = sgbd_u4_act2, pg_temp
AS $$
DECLARE
  v_total NUMERIC(12,2);
BEGIN
  IF NOT EXISTS (SELECT 1 FROM cliente WHERE cliente_id = p_cliente_id) THEN
    RAISE EXCEPTION 'El cliente % no existe', p_cliente_id;
  END IF;

  SELECT COALESCE(SUM(monto), 0) INTO v_total
  FROM venta
  WHERE cliente_id = p_cliente_id
    AND fecha >= make_date(p_anio, 1, 1)
    AND fecha <  make_date(p_anio + 1, 1, 1);

  RETURN CASE
           WHEN v_total =      0 THEN 'SIN OPERACIONES'
           WHEN v_total >= 100000 THEN 'PREMIUM'
           WHEN v_total >=  20000 THEN 'MEDIO'
           ELSE                        'BASICO'
         END;
END;
$$;
