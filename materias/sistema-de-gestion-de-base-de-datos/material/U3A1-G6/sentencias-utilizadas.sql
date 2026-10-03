-- ============================================================
-- SGBD - UTN FRRe 2026 - Unidad 3, Actividad 1
-- Grupo 06 - PostgreSQL 18.6
--
-- Sentencias de los cinco desafios.
-- Validaciones y planes de ejecucion: validaciones-y-planes.sql
-- ============================================================

SET search_path TO sgbd_u3_act1;


-- ============================================================
-- 1. Ultima venta de cada cliente
-- ============================================================

WITH venta_ordenada AS (
    SELECT v.venta_id,
           v.cliente_id,
           v.fecha,
           v.total,
           v.canal,
           ROW_NUMBER() OVER (PARTITION BY v.cliente_id
                              ORDER BY v.fecha DESC, v.venta_id DESC) AS rn
    FROM venta v
)
SELECT c.cliente_id,
       c.nombre,
       c.segmento,
       vo.venta_id AS ultima_venta_id,
       vo.fecha    AS ultima_fecha,
       vo.total    AS ultimo_total,
       vo.canal    AS ultimo_canal
FROM cliente c
LEFT JOIN venta_ordenada vo
       ON vo.cliente_id = c.cliente_id
      AND vo.rn = 1
ORDER BY c.cliente_id;


-- ============================================================
-- 2. Acumulado mensual por cliente, conservando el detalle
-- ============================================================

SELECT v.cliente_id,
       c.nombre,
       to_char(v.fecha, 'YYYY-MM') AS mes,
       v.venta_id,
       v.fecha,
       v.total,
       COUNT(*)     OVER w AS nro_venta_del_mes,
       SUM(v.total) OVER w AS acumulado_mes,
       SUM(v.total) OVER (PARTITION BY v.cliente_id,
                                       date_trunc('month', v.fecha)) AS total_mes
FROM venta v
JOIN cliente c ON c.cliente_id = v.cliente_id
WINDOW w AS (PARTITION BY v.cliente_id, date_trunc('month', v.fecha)
             ORDER BY v.fecha, v.venta_id
             ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)
ORDER BY v.cliente_id, v.fecha, v.venta_id;


-- ============================================================
-- 3. Ranking de clientes por segmento segun el total vendido
-- ============================================================

WITH total_por_cliente AS (
    SELECT c.cliente_id,
           c.nombre,
           c.segmento,
           COUNT(v.venta_id)         AS cantidad_ventas,
           COALESCE(SUM(v.total), 0) AS total_vendido
    FROM cliente c
    LEFT JOIN venta v ON v.cliente_id = c.cliente_id
    GROUP BY c.cliente_id, c.nombre, c.segmento
)
SELECT COALESCE(segmento, '(SIN SEGMENTO)') AS segmento,
       cliente_id,
       nombre,
       cantidad_ventas,
       total_vendido,
       RANK()       OVER (PARTITION BY segmento ORDER BY total_vendido DESC) AS ranking,
       DENSE_RANK() OVER (PARTITION BY segmento ORDER BY total_vendido DESC) AS ranking_denso,
       ROW_NUMBER() OVER (PARTITION BY segmento ORDER BY total_vendido DESC, cliente_id) AS orden,
       ROUND(100 * total_vendido
             / NULLIF(SUM(total_vendido) OVER (PARTITION BY segmento), 0), 2) AS pct_del_segmento
FROM total_por_cliente
ORDER BY segmento NULLS LAST, total_vendido DESC, cliente_id;


-- ============================================================
-- 4. Recorrido jerarquico con CTE recursiva
-- ============================================================

WITH RECURSIVE jerarquia AS (
    SELECT c.cliente_id,
           c.nombre,
           c.segmento,
           c.responsable_id,
           1                   AS nivel,
           ARRAY[c.cliente_id] AS camino,
           c.nombre::TEXT      AS ruta
    FROM cliente c
    WHERE c.responsable_id IS NULL

    UNION ALL

    SELECT c.cliente_id,
           c.nombre,
           c.segmento,
           c.responsable_id,
           j.nivel + 1,
           j.camino || c.cliente_id,
           j.ruta || ' > ' || c.nombre
    FROM cliente c
    JOIN jerarquia j ON c.responsable_id = j.cliente_id
    WHERE NOT c.cliente_id = ANY (j.camino)     -- corte de ciclos
)
SELECT nivel,
       repeat('    ', nivel - 1) || nombre AS arbol,
       cliente_id,
       responsable_id,
       segmento,
       ruta
FROM jerarquia
ORDER BY camino;


-- 4.b Facturacion de cada responsable incluyendo su estructura

WITH RECURSIVE descendencia AS (
    SELECT cliente_id, cliente_id AS raiz, ARRAY[cliente_id] AS camino
    FROM cliente

    UNION ALL

    SELECT c.cliente_id, d.raiz, d.camino || c.cliente_id
    FROM cliente c
    JOIN descendencia d ON c.responsable_id = d.cliente_id
    WHERE NOT c.cliente_id = ANY (d.camino)
),
venta_por_cliente AS (
    SELECT cliente_id, SUM(total) AS total
    FROM venta
    GROUP BY cliente_id
)
SELECT r.cliente_id AS responsable_id,
       r.nombre     AS responsable,
       COUNT(*) FILTER (WHERE d.cliente_id <> r.cliente_id) AS clientes_a_cargo,
       COALESCE(SUM(vc.total) FILTER (WHERE d.cliente_id = r.cliente_id), 0) AS venta_propia,
       COALESCE(SUM(vc.total), 0) AS venta_con_estructura
FROM descendencia d
JOIN cliente r ON r.cliente_id = d.raiz
LEFT JOIN venta_por_cliente vc ON vc.cliente_id = d.cliente_id
GROUP BY r.cliente_id, r.nombre
HAVING COUNT(*) FILTER (WHERE d.cliente_id <> r.cliente_id) > 0
ORDER BY venta_con_estructura DESC;


-- ============================================================
-- 5. Comparacion entre alternativas
-- ============================================================

-- 5.a  Ultima venta: subconsulta MAX(fecha) vs CTE con ROW_NUMBER.
--      A duplica los clientes con dos ventas en su fecha maxima.

SELECT 'A: subconsulta MAX(fecha)' AS alternativa,
       c.cliente_id, c.nombre, v.venta_id, v.fecha, v.total
FROM cliente c
JOIN venta v ON v.cliente_id = c.cliente_id
WHERE v.fecha = (SELECT MAX(v2.fecha) FROM venta v2 WHERE v2.cliente_id = c.cliente_id)
  AND c.cliente_id = 18
ORDER BY v.venta_id;

WITH venta_ordenada AS (
    SELECT v.*, ROW_NUMBER() OVER (PARTITION BY v.cliente_id
                                   ORDER BY v.fecha DESC, v.venta_id DESC) AS rn
    FROM venta v
)
SELECT 'B: CTE + ROW_NUMBER' AS alternativa,
       c.cliente_id, c.nombre, vo.venta_id, vo.fecha, vo.total
FROM cliente c
JOIN venta_ordenada vo ON vo.cliente_id = c.cliente_id AND vo.rn = 1
WHERE c.cliente_id = 18;

SELECT (SELECT COUNT(*)
        FROM cliente c JOIN venta v ON v.cliente_id = c.cliente_id
        WHERE v.fecha = (SELECT MAX(v2.fecha) FROM venta v2 WHERE v2.cliente_id = c.cliente_id)
       ) AS filas_alternativa_A,
       (SELECT COUNT(*)
        FROM (SELECT ROW_NUMBER() OVER (PARTITION BY cliente_id
                                        ORDER BY fecha DESC, venta_id DESC) AS rn
              FROM venta) t
        WHERE rn = 1
       ) AS filas_alternativa_B,
       (SELECT COUNT(DISTINCT cliente_id) FROM venta) AS clientes_con_venta;


-- 5.b  Acumulado: frame RANGE (default) vs ROWS.
--      Con dos ventas el mismo dia, RANGE las trata como pares.

SELECT venta_id, fecha, total,
       SUM(total) OVER (PARTITION BY cliente_id, date_trunc('month', fecha)
                        ORDER BY fecha) AS acum_range_default,
       SUM(total) OVER (PARTITION BY cliente_id, date_trunc('month', fecha)
                        ORDER BY fecha, venta_id
                        ROWS UNBOUNDED PRECEDING) AS acum_rows
FROM venta
WHERE cliente_id = 14
  AND fecha >= DATE '2026-09-01' AND fecha < DATE '2026-10-01'
ORDER BY fecha, venta_id;


-- 5.c  Clientes con al menos una venta: JOIN + DISTINCT vs EXISTS.
--      Mismo resultado, distinto plan (ver validaciones-y-planes.sql).

SELECT COUNT(*) AS con_join_distinct
FROM (SELECT DISTINCT c.cliente_id
      FROM cliente c JOIN venta v ON v.cliente_id = c.cliente_id) t;

SELECT COUNT(*) AS con_exists
FROM cliente c
WHERE EXISTS (SELECT 1 FROM venta v WHERE v.cliente_id = c.cliente_id);
