# Lenguaje SQL avanzado
[← Índice Sistemas de Gestión de Bases de Datos](../INDICE.md)

> Tema 3 · Peso: 3/3 (estimado: es práctica directa y la Actividad 1 de U3 lo pide entero) · Fuente:
> *Clase 3y4 - SQL avanzado y programabilidad 2026* (parte 1, diap. 6–27) y la bitácora U3 Act. 3 del grupo.

## Preguntas de recuperación

- ¿Qué hay que definir antes de escribir la consulta "última compra de cada cliente"? :: Cobertura (¿entran los clientes sin compras?), empates (¿una fila o todas las de la fecha máxima?), criterio de desempate y columnas de salida. Muchas consultas incorrectas son sintácticamente válidas. [→ Definir el resultado primero](#Definir%20el%20resultado%20primero)
- ¿Qué devuelve `segmento = NULL` y cómo se pregunta por ausencia? :: Devuelve UNKNOWN (no TRUE), así que la fila no pasa el filtro. Se usa IS NULL o IS NOT NULL. [→ Expresiones portables](#Expresiones%20portables)
- ¿Para qué sirven COALESCE, CONCAT y EXTRACT? :: COALESCE: reemplazar NULL por un valor (COALESCE(segmento, 'SIN_SEGMENTO')). CONCAT: armar etiquetas con texto. EXTRACT(YEAR FROM fecha): sacar año o mes de forma portable. [→ Expresiones portables](#Expresiones%20portables)
- ¿Qué filas conserva INNER JOIN, LEFT JOIN y NOT EXISTS? :: INNER: sólo los clientes con una venta relacionada. LEFT: todos los clientes, con o sin ventas. NOT EXISTS: los clientes para los que no existe venta (anti-join). [→ JOIN subconsulta y EXISTS](#JOIN%20subconsulta%20y%20EXISTS)
- ¿Cuándo usar EXISTS en lugar de JOIN? :: Cuando sólo importa saber si hay al menos una fila relacionada, no traer sus columnas. Comunica la intención y deja que el optimizador decida cómo verificarla. [→ JOIN subconsulta y EXISTS](#JOIN%20subconsulta%20y%20EXISTS)
- ¿Qué diferencia hay entre GROUP BY y una función de ventana? :: GROUP BY resume: reduce filas (una por grupo). OVER() agrega un cálculo a cada fila sin perder el detalle. [→ Funciones de ventana](#Funciones%20de%20ventana)
- ¿Qué define cada parte de OVER(PARTITION BY … ORDER BY … ROWS …)? :: PARTITION BY: el grupo. ORDER BY: la secuencia dentro del grupo. ROWS/RANGE: el marco (frame), qué filas entran en el cálculo de la fila actual. [→ Funciones de ventana](#Funciones%20de%20ventana)
- ¿Cómo se escribe un acumulado por cliente ordenado por fecha? :: SUM(total) OVER (PARTITION BY cliente_id ORDER BY fecha, venta_id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW). [→ Funciones de ventana](#Funciones%20de%20ventana)
- ¿Por qué el acumulado ordena por fecha **y** venta_id? :: Para desempatar cuando hay ventas con la misma fecha; con ROWS y un segundo criterio, el orden queda determinado. [→ Funciones de ventana](#Funciones%20de%20ventana)
- Totales 300, 200, 200, 100: ¿qué numeración dan ROW_NUMBER, RANK y DENSE_RANK? :: ROW_NUMBER: 1, 2, 3, 4 (siempre distinto). RANK: 1, 2, 2, 4 (comparte y deja hueco). DENSE_RANK: 1, 2, 2, 3 (comparte sin hueco). [→ Ranking](#Ranking)
- ¿Cómo se obtiene la fila completa de la última venta de cada cliente? :: CTE con ROW_NUMBER() OVER (PARTITION BY cliente_id ORDER BY fecha DESC, venta_id DESC) AS rn y después WHERE rn = 1. [→ Ranking](#Ranking)
- ¿Qué es una CTE y cuánto dura? :: Una Common Table Expression (WITH nombre AS (…)) que le pone nombre a una etapa de la consulta. Dura lo que la sentencia: no crea una tabla persistente. [→ CTE](#CTE)
- ¿Una CTE es más rápida que una subconsulta derivada? :: No necesariamente. Mejora la legibilidad; el rendimiento se verifica con el plan. [→ CTE](#CTE)
- ¿Cuáles son las partes de una CTE recursiva y cuándo termina? :: Ancla (filas iniciales, ej. nodos sin responsable) + UNION ALL + paso recursivo (hijos de lo encontrado en la iteración anterior). Termina cuando una iteración no produce filas nuevas. [→ CTE recursiva](#CTE%20recursiva)
- ¿Cuándo tiene sentido una CTE recursiva? :: Con jerarquías de profundidad variable o desconocida: organigramas, categorías, desglose de materiales, árboles de permisos. Con profundidad fija y chica alcanzan self-joins. [→ CTE recursiva](#CTE%20recursiva)
- ¿Qué cambia entre MySQL y PostgreSQL al armar la ruta en una CTE recursiva? :: En MySQL conviene CAST(nombre AS CHAR(…)) en el ancla y después CONCAT; en PostgreSQL se castea a text y se concatena con el operador doble barra. [→ CTE recursiva](#CTE%20recursiva)
- ¿Por qué cargar 20.000 filas con LOAD DATA o COPY y no con INSERT? :: Porque 20.000 INSERT son 20.000 interacciones con overhead por fila; la carga por lote minimiza ese costo repetido. [→ Carga masiva](#Carga%20masiva)
- ¿Qué comando de carga masiva usa cada motor? :: MySQL: LOAD DATA LOCAL INFILE 'ventas.csv' INTO TABLE venta FIELDS TERMINATED BY ',' IGNORE 1 LINES. PostgreSQL: COPY venta FROM '/ruta/ventas.csv' WITH (FORMAT csv, HEADER true). [→ Carga masiva](#Carga%20masiva)
- ¿Por qué el total por cliente del laboratorio dejaba afuera al cliente 3 y cómo se arregló? :: Porque agrupaba sobre pedido y el cliente 3 no tenía pedidos. Se arregló con cliente LEFT JOIN pedido y COALESCE(SUM(p.total), 0), que devuelve 0. [→ JOIN subconsulta y EXISTS](#JOIN%20subconsulta%20y%20EXISTS)

## Cuestionario

1. Hay que listar **todos** los clientes con su total comprado, incluidos los que no compraron (con 0). ¿Qué consulta es correcta?
   - [x] `FROM cliente c LEFT JOIN venta v ON v.cliente_id = c.cliente_id` con `COALESCE(SUM(v.total), 0)`
   - [ ] `FROM cliente c JOIN venta v ON v.cliente_id = c.cliente_id` con `SUM(v.total)`
   - [ ] `FROM venta v GROUP BY v.cliente_id`
   - [ ] `FROM cliente c LEFT JOIN venta v ON v.cliente_id = c.cliente_id` con `SUM(v.total)` sin COALESCE
   > INNER y agrupar sobre venta pierden a los clientes sin compras; sin COALESCE devuelven NULL en vez de 0. Fue el error del laboratorio U3. [→ JOIN subconsulta y EXISTS](#JOIN%20subconsulta%20y%20EXISTS)
2. Clientes que **nunca** compraron. ¿Qué construcción expresa mejor la intención?
   - [x] `WHERE NOT EXISTS (SELECT 1 FROM venta v WHERE v.cliente_id = c.cliente_id)`
   - [ ] `INNER JOIN venta` con `WHERE v.total IS NULL`
   - [ ] `WHERE EXISTS (SELECT 1 FROM venta)`
   - [ ] `GROUP BY cliente_id HAVING COUNT(*) = 0` sobre venta
   > NOT EXISTS es el anti-join. Agrupando sobre venta nunca aparece un cliente con 0 filas. [→ JOIN subconsulta y EXISTS](#JOIN%20subconsulta%20y%20EXISTS)
3. `WHERE segmento = NULL` sobre una tabla con segmentos nulos devuelve:
   - [x] Ninguna fila, porque la comparación da UNKNOWN
   - [ ] Las filas con segmento nulo
   - [ ] Todas las filas
   - [ ] Un error de sintaxis
   > Para probar ausencia se usa IS NULL. [→ Expresiones portables](#Expresiones%20portables)
4. Hay que mostrar cada venta con el acumulado del cliente hasta esa venta. ¿Qué herramienta corresponde?
   - [x] Una función de ventana: SUM(total) OVER (PARTITION BY cliente_id ORDER BY fecha, venta_id …)
   - [ ] GROUP BY cliente_id
   - [ ] Una CTE recursiva
   - [ ] Un trigger
   > GROUP BY resume y pierde el detalle; OVER() conserva cada fila. [→ Funciones de ventana](#Funciones%20de%20ventana)
5. Totales 300, 200, 200, 100. ¿Qué devuelve RANK()?
   - [x] 1, 2, 2, 4
   - [ ] 1, 2, 3, 4
   - [ ] 1, 2, 2, 3
   - [ ] 1, 1, 2, 3
   > RANK comparte la posición y deja un hueco; DENSE_RANK daría 1, 2, 2, 3; ROW_NUMBER, 1, 2, 3, 4. [→ Ranking](#Ranking)
6. Se pide **una sola** venta (la última) por cliente aunque haya dos con la misma fecha. ¿Qué se usa?
   - [x] ROW_NUMBER() con ORDER BY fecha DESC, venta_id DESC y filtrar rn = 1
   - [ ] RANK() con ORDER BY fecha DESC y filtrar rank = 1
   - [ ] MAX(fecha) con GROUP BY cliente_id
   - [ ] DENSE_RANK() con ORDER BY fecha DESC
   > RANK y DENSE_RANK dejarían las dos empatadas en 1; MAX(fecha) da la fecha, no la fila completa. [→ Ranking](#Ranking)
7. En OVER(), ¿qué define el marco ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW?
   - [x] Que el cálculo toma desde la primera fila del grupo hasta la actual
   - [ ] El grupo de filas
   - [ ] El orden de las filas
   - [ ] Que se toman todas las filas de la tabla
   > El grupo lo da PARTITION BY y el orden ORDER BY; el frame es la tercera decisión. [→ Funciones de ventana](#Funciones%20de%20ventana)
8. ¿Qué afirmación sobre las CTE es correcta?
   - [x] Organizan la consulta en etapas con nombre y duran lo que dura la sentencia
   - [ ] Crean una tabla temporal persistente
   - [ ] Siempre son más rápidas que una subconsulta derivada
   - [ ] Sólo existen en PostgreSQL
   > La mejora de rendimiento no se asume: se revisa el plan. [→ CTE](#CTE)
9. Un organigrama de profundidad desconocida. ¿Qué herramienta corresponde?
   - [x] CTE recursiva (WITH RECURSIVE)
   - [ ] Una cantidad fija de self-joins
   - [ ] Una función de ventana
   - [ ] LOAD DATA
   > Con profundidad variable, un número fijo de joins deja de servir. [→ CTE recursiva](#CTE%20recursiva)
10. ¿Cuándo termina una CTE recursiva?
    - [x] Cuando una iteración no produce filas nuevas
    - [ ] Al llegar a 100 niveles
    - [ ] Cuando el ancla devuelve cero filas
    - [ ] Cuando se ejecuta el UNION ALL por primera vez
    > La terminación es implícita: el paso recursivo se queda sin hijos para agregar. [→ CTE recursiva](#CTE%20recursiva)
11. Hay que cargar un CSV de 20.000 ventas en PostgreSQL. ¿Qué conviene?
    - [x] COPY venta FROM '…' WITH (FORMAT csv, HEADER true)
    - [ ] 20.000 INSERT desde la aplicación
    - [ ] LOAD DATA LOCAL INFILE
    - [ ] Un trigger AFTER INSERT
    > LOAD DATA es el equivalente de MySQL. El principio es minimizar el costo por fila. [→ Carga masiva](#Carga%20masiva)

## Definir el resultado primero

SQL avanzado no es "más comandos": es **elegir la construcción que preserve la semántica del resultado**. Antes de escribir, preguntarse qué filas tienen que sobrevivir.

Caso "última compra de cada cliente":
- **Cobertura**: ¿se incluyen los clientes sin compras?
- **Empates**: ¿una fila o todas las de la fecha máxima?
- **Desempate**: ¿qué criterio define una única fila?
- **Salida**: ¿qué columnas conserva?

## Expresiones portables

Primero SQL estándar; después, funciones específicas del motor si aportan.

```sql
SELECT COALESCE(segmento, 'SIN_SEGMENTO') AS segmento,
       CONCAT(nombre, ' - ', ciudad)      AS etiqueta,
       EXTRACT(YEAR FROM fecha)           AS anio
FROM cliente;
```

- **NULL**: cualquier comparación con NULL da **UNKNOWN**. Se usa `IS NULL` / `IS NOT NULL`.
- **COALESCE** devuelve el primer valor no nulo.

## JOIN subconsulta y EXISTS

| Construcción | Conserva | Natural cuando |
|---|---|---|
| INNER JOIN | Filas con pareja en la otra tabla | Hay que combinar columnas de ambas |
| LEFT JOIN | Todas las filas de la izquierda | Hay que conservar las que no tienen relación |
| EXISTS | Filas para las que existe al menos una relacionada | Sólo importa la existencia |
| NOT EXISTS | Filas sin relacionada (anti-join) | "Nunca", "ninguno" |
| Subconsulta | — | La interna produce un valor o conjunto para la externa |

```sql
SELECT c.cliente_id, c.nombre
FROM cliente c
WHERE EXISTS (SELECT 1 FROM venta v
              WHERE v.cliente_id = c.cliente_id AND v.total > 100000);
```

Formas lógicamente equivalentes no son idénticas: se comparan por intención, legibilidad y plan.

**Error real del laboratorio U3**: `total_cliente()` agrupaba sobre `pedido` y dejaba afuera al cliente sin pedidos. Se corrigió con `cliente LEFT JOIN pedido` + `COALESCE(SUM(p.total), 0)`.

## Funciones de ventana

GROUP BY **resume** (4 ventas → 2 filas por cliente). OVER() **agrega contexto** a cada fila sin perder el detalle.

```sql
SUM(v.total) OVER (
  PARTITION BY v.cliente_id                                 -- grupo
  ORDER BY v.fecha, v.venta_id                              -- secuencia
  ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW          -- marco
) AS acumulado
```

- Para un acumulado **mensual**: `PARTITION BY cliente_id, EXTRACT(YEAR FROM fecha), EXTRACT(MONTH FROM fecha)`.
- El marco importa en acumulados y promedios móviles.
- ROWS + un segundo criterio de orden evita la ambigüedad de los empates.

## Ranking

| cliente | total | ROW_NUMBER | RANK | DENSE_RANK |
|---|---|---|---|---|
| A | 300 | 1 | 1 | 1 |
| B | 200 | 2 | 2 | 2 |
| C | 200 | 3 | 2 | 2 |
| D | 100 | 4 | 4 | 3 |

- **ROW_NUMBER**: siempre distinto.
- **RANK**: comparte y deja huecos.
- **DENSE_RANK**: comparte sin huecos.

La elección depende de qué significa un empate.

**Última fila de cada grupo**:

```sql
WITH ventas_ordenadas AS (
  SELECT v.*, ROW_NUMBER() OVER (
           PARTITION BY cliente_id
           ORDER BY fecha DESC, venta_id DESC) AS rn
  FROM venta v
)
SELECT * FROM ventas_ordenadas WHERE rn = 1;
```

## CTE

Una **Common Table Expression** pone nombre a una etapa. Dura lo que la sentencia: no es una tabla persistente.

```sql
WITH totales AS (
  SELECT c.cliente_id, c.segmento, COALESCE(SUM(v.total), 0) AS total_vendido
  FROM cliente c LEFT JOIN venta v ON v.cliente_id = c.cliente_id
  GROUP BY c.cliente_id, c.segmento
)
SELECT cliente_id, segmento, total_vendido,
       DENSE_RANK() OVER (PARTITION BY segmento ORDER BY total_vendido DESC) AS posicion
FROM totales;
```

Etapa 1: totalizar por cliente. Etapa 2: rankear dentro del segmento. Una subconsulta derivada (`FROM (SELECT …) etapa`) es equivalente; la CTE hace visible la estructura. **No asumir que la CTE es más rápida.**

## CTE recursiva

Para jerarquías de profundidad desconocida: **ancla** + `UNION ALL` + **paso recursivo**. Termina cuando una iteración no agrega filas.

```sql
WITH RECURSIVE jerarquia AS (
  SELECT cliente_id, nombre, responsable_id, 0 AS nivel, <ruta_inicial> AS ruta
  FROM cliente WHERE responsable_id IS NULL                      -- ancla
  UNION ALL
  SELECT c.cliente_id, c.nombre, c.responsable_id, j.nivel + 1, <ruta_siguiente>
  FROM cliente c JOIN jerarquia j ON c.responsable_id = j.cliente_id   -- paso
)
SELECT * FROM jerarquia;
```

- **MySQL**: `CAST(nombre AS CHAR(200))` en el ancla y `CONCAT(j.ruta, ' > ', c.nombre)`.
- **PostgreSQL**: castear el nombre a `text` y concatenar con `||`.

Sí: organigramas, categorías, BOM, dependencias, árboles de permisos. No necesariamente: profundidad conocida y chica, datos que conviene precalcular.

## Carga masiva

20.000 INSERT individuales son 20.000 interacciones con overhead por fila. Una operación **bulk** carga el lote de una vez.

```sql
-- MySQL
LOAD DATA LOCAL INFILE 'ventas.csv' INTO TABLE venta
FIELDS TERMINATED BY ',' IGNORE 1 LINES;

-- PostgreSQL
COPY venta FROM '/ruta/ventas.csv' WITH (FORMAT csv, HEADER true);
```

Antes de cargar: formato, tipos, manejo de errores, transacción y validación posterior.
