# Programabilidad: funciones, procedimientos, triggers y migraciones
[← Índice Sistemas de Gestión de Bases de Datos](../INDICE.md)

> Tema 4 · Peso: 3/3 (estimado: Actividades 2 y 3 de U3 y el cronograma lo pone como tema propio) · Fuente:
> *Clase 3y4 - SQL avanzado y programabilidad 2026* (parte 2, diap. 29–47) y la bitácora U3 Act. 3 del grupo
> (release v2.0 en PostgreSQL).

## Preguntas de recuperación

- ¿Dónde puede vivir una regla de negocio y cuándo conviene cada lugar? :: Aplicación: experiencia de usuario y reglas de un canal. Capa media: reglas compartidas por varios canales y orquestación. Base de datos: integridad que se tiene que cumplir siempre, cerca del dato (a costa de acoplarse al motor). [→ Dónde vive la lógica](#Dónde%20vive%20la%20lógica)
- ¿Qué mecanismo corresponde a cada necesidad: validar una fila, calcular y reutilizar, proceso explícito, reacción automática, cambiar la estructura? :: CHECK o constraint; función; procedimiento; trigger; migración de esquema. [→ Elegir el mecanismo](#Elegir%20el%20mecanismo)
- ¿Cuál es la regla para elegir el mecanismo? :: El más simple que garantice la regla. Poder hacerlo con un trigger no significa que haya que hacerlo con un trigger. [→ Elegir el mecanismo](#Elegir%20el%20mecanismo)
- ¿Cómo se implementa "el saldo no puede ser negativo"? :: Con un CHECK: ALTER TABLE cuenta ADD CONSTRAINT chk_cuenta_saldo CHECK (saldo >= 0). Acepta 1000 y 0, rechaza -1. [→ Elegir el mecanismo](#Elegir%20el%20mecanismo)
- ¿Qué diferencia una función de un procedimiento? :: La función devuelve un valor y se usa dentro de una expresión (cálculos, clasificaciones); conviene pequeña y predecible. El procedimiento se invoca explícitamente con CALL, coordina varios pasos y puede modificar datos. Valor contra proceso. [→ Función y procedimiento](#Función%20y%20procedimiento)
- ¿Con qué se invoca un procedimiento en MySQL y en PostgreSQL? :: Con CALL en los dos: CALL cambiar_estado_pedido(10, 'pagado'). [→ Función y procedimiento](#Función%20y%20procedimiento)
- ¿Para qué sirve DELIMITER // en MySQL? :: Para cambiar el delimitador mientras se define el cuerpo, así los ; internos no cortan la sentencia CREATE. Al final se vuelve con DELIMITER ;. [→ Función y procedimiento](#Función%20y%20procedimiento)
- ¿Qué elementos de programación comparten los motores aunque cambie la sintaxis? :: Parámetros, variables, IF/CASE, sentencias SQL, manejo de errores y transacción. [→ Función y procedimiento](#Función%20y%20procedimiento)
- ¿Cuál es el esquema de un trigger? :: Evento → condición → acción. No se llama: el motor lo ejecuta cuando ocurre el evento, dentro de la misma transacción que lo causó. [→ Triggers](#Triggers)
- ¿Qué tienen OLD y NEW en INSERT, UPDATE y DELETE? :: INSERT: sólo NEW. UPDATE: OLD y NEW. DELETE: sólo OLD. [→ Triggers](#Triggers)
- ¿Cuándo conviene BEFORE y cuándo AFTER? :: BEFORE: validar o transformar antes de persistir. AFTER: registrar o reaccionar una vez aplicada la modificación (auditoría). [→ Triggers](#Triggers)
- ¿Qué diferencia hay entre un trigger de MySQL y uno de PostgreSQL? :: En MySQL la lógica va dentro del trigger. En PostgreSQL el trigger invoca una función que RETURNS TRIGGER (EXECUTE FUNCTION fn()). [→ Triggers](#Triggers)
- En la auditoría de precio, ¿por qué el IF compara OLD.precio con NEW.precio? :: Para insertar en la auditoría sólo si el precio cambió de verdad, y no cuando se actualiza otra columna. En PostgreSQL se usa IS DISTINCT FROM, que también trata bien los NULL. [→ Triggers](#Triggers)
- ¿Por qué en el laboratorio el trigger fue FOR EACH ROW y no por sentencia? :: Porque hacía falta OLD y NEW de cada fila para comparar el estado; un trigger por sentencia no los da fila por fila. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
- ¿Cuál es la secuencia segura para agregar una columna obligatoria a una tabla con datos? :: Expandir (ADD COLUMN NULL) → completar históricos (backfill) → validar v1 contra v2 → endurecer (CHECK + NOT NULL) → programar (trigger o función). [→ Migraciones](#Migraciones)
- ¿Por qué ADD COLUMN estado NOT NULL sin DEFAULT falla en una tabla con filas? :: Porque las filas existentes quedarían con NULL. En el laboratorio se resolvió con ADD COLUMN … DEFAULT 'pendiente' NOT NULL, que completa los registros viejos. [→ Lo que hicimos en el laboratorio](#Lo%20que%20hicimos%20en%20el%20laboratorio)
- ¿Por qué un rollback (DOWN) no siempre recupera todo? :: Porque revertir la estructura destruye la información creada en la versión nueva: un DROP COLUMN estado pierde los estados y un DROP de la auditoría pierde el historial. Puede requerir copia, backup o migración inversa. [→ Migraciones](#Migraciones)
- ¿Qué aportan los scripts de migración versionados (V001__…, V002__…)? :: Orden (qué se aplica antes), trazabilidad (qué cambió y cuándo) y repetibilidad (el mismo despliegue en todos los ambientes). [→ Migraciones](#Migraciones)
- ¿Qué aporta CI/CD a una base de datos? :: Hace repetibles las validaciones y el despliegue antes de llegar a producción. No elimina el riesgo. [→ Migraciones](#Migraciones)
- ¿Cuál es el criterio profesional que cierra la clase? :: Requisito → SQL u objeto → prueba → evidencia → decisión. Que funcione es necesario; justificarlo y poder evolucionarlo es ingeniería. [→ Elegir el mecanismo](#Elegir%20el%20mecanismo)

## Cuestionario

1. Regla: "el total de un pedido no puede ser negativo". ¿Qué mecanismo corresponde?
   - [x] Un CHECK (total >= 0)
   - [ ] Un trigger BEFORE INSERT que valide
   - [ ] Un procedimiento que haga los INSERT
   - [ ] Validarlo sólo en la aplicación
   > Regla simple sobre una fila: integridad declarativa antes que código. [→ Elegir el mecanismo](#Elegir%20el%20mecanismo)
2. Regla: "registrar el precio anterior y el nuevo cada vez que cambia el precio de un producto". ¿Qué mecanismo corresponde?
   - [x] Un trigger AFTER UPDATE FOR EACH ROW
   - [ ] Un CHECK sobre precio
   - [ ] Una función que se llama desde un SELECT
   - [ ] Una vista materializada
   > Hay que reaccionar automáticamente ante un UPDATE y usar OLD y NEW. [→ Triggers](#Triggers)
3. "Clasificar a un cliente en BRONCE, PLATA u ORO según su total anual" y usarlo en reportes. ¿Qué conviene?
   - [x] Una función que devuelve la categoría
   - [ ] Un procedimiento invocado con CALL
   - [ ] Un trigger AFTER INSERT sobre venta
   - [ ] Un CHECK sobre cliente
   > Un cálculo reutilizable como expresión es una función. [→ Función y procedimiento](#Función%20y%20procedimiento)
4. En un trigger sobre DELETE, ¿qué registro está disponible?
   - [x] Sólo OLD
   - [ ] Sólo NEW
   - [ ] OLD y NEW
   - [ ] Ninguno
   > INSERT tiene NEW; UPDATE tiene los dos; DELETE sólo OLD. [→ Triggers](#Triggers)
5. ¿Cómo se ejecuta un trigger?
   - [x] Automáticamente cuando ocurre el evento, dentro de la transacción que lo causó
   - [ ] Con CALL nombre_trigger()
   - [ ] Con EXECUTE TRIGGER
   - [ ] En una transacción aparte, después del COMMIT
   > Un trigger no se llama: lo dispara el motor. [→ Triggers](#Triggers)
6. En PostgreSQL, ¿cómo se arma un trigger de auditoría?
   - [x] Una función que RETURNS TRIGGER y un CREATE TRIGGER … EXECUTE FUNCTION que la invoca
   - [ ] Todo el código dentro de CREATE TRIGGER, entre BEGIN y END
   - [ ] Un procedimiento llamado con CALL desde la aplicación
   - [ ] Con DELIMITER //
   > La lógica dentro del trigger y DELIMITER son de MySQL. [→ Triggers](#Triggers)
7. ¿Para qué sirve un trigger BEFORE?
   - [x] Para validar o transformar los valores antes de que se guarden
   - [ ] Para auditar después del cambio
   - [ ] Para ejecutar algo antes del COMMIT de toda la transacción
   - [ ] Para hacer backup antes del cambio
   > AFTER es para registrar o reaccionar ya aplicado el cambio. [→ Triggers](#Triggers)
8. Hay que agregar `estado` obligatorio a `pedido`, que ya tiene datos en producción. ¿Qué secuencia es la segura?
   - [x] Agregar la columna, completar los históricos, validar y recién después poner NOT NULL y CHECK
   - [ ] Recrear la tabla con la columna nueva y volver a cargar los datos
   - [ ] ADD COLUMN estado NOT NULL sin default
   - [ ] Crear primero el trigger y después la columna
   > Expandir → completar → validar → endurecer → programar. Migrar no es recrear. [→ Migraciones](#Migraciones)
9. El script DOWN de la v2 hace `DROP COLUMN estado` y `DROP TABLE auditoria_estado_pedido`. ¿Qué riesgo tiene?
   - [x] Se pierde de forma irreversible la información generada en la v2
   - [ ] Ninguno: el rollback siempre devuelve el estado anterior completo
   - [ ] Que se pierden los pedidos de la v1
   - [ ] Que el motor no permite DROP COLUMN
   > Un rollback seguro puede requerir copia o backup previo. [→ Migraciones](#Migraciones)
10. ¿Qué aportan los scripts versionados V001, V002, V003…? (varias correctas)
    - [x] Orden de aplicación
    - [x] Trazabilidad de los cambios
    - [x] Despliegue repetible en distintos ambientes
    - [ ] Eliminar el riesgo del despliegue
    > CI/CD y versionado hacen repetibles los controles; el riesgo no desaparece. [→ Migraciones](#Migraciones)
11. ¿Cuándo conviene poner una regla en la base de datos y no en la aplicación?
    - [x] Cuando es integridad que tiene que cumplirse siempre, entre por donde entre el dato
    - [ ] Cuando depende de la experiencia de usuario de un canal
    - [ ] Cuando hay que orquestar varios servicios
    - [ ] Nunca: la lógica va siempre en la aplicación
    > El costo es acoplarse al motor; el beneficio, que nadie la saltea accediendo por afuera. [→ Dónde vive la lógica](#Dónde%20vive%20la%20lógica)

## Dónde vive la lógica

| Lugar | Conviene cuando | Pregunta |
|---|---|---|
| Aplicación | Experiencia de usuario, reglas de un canal | ¿Cómo evito duplicarla en otros canales? |
| Capa media / servicios | Regla compartida, orquestación | ¿Qué pasa si alguien accede por fuera del servicio? |
| Base de datos | Integridad que debe cumplirse siempre | ¿Cuánto acoplamiento al motor acepto? |

Debate de la clase: "una transferencia no puede superar el límite diario" o "el saldo no puede ser negativo": ¿dónde va y por qué?

## Elegir el mecanismo

| Necesidad | Mecanismo |
|---|---|
| Validar una fila | CHECK / constraint |
| Calcular y reutilizar | Función |
| Proceso explícito | Procedimiento |
| Reacción automática | Trigger |
| Cambiar la estructura | Migración |

Van de menor a mayor dificultad. **Se elige el más simple que garantice la regla.**

```sql
ALTER TABLE cuenta ADD CONSTRAINT chk_cuenta_saldo CHECK (saldo >= 0);
-- saldo = 1000 → acepta · saldo = 0 → acepta · saldo = -1 → rechaza
```

- Caso A, saldo ≥ 0: **CHECK**.
- Caso B, auditar precio: **TRIGGER**.

Criterio profesional: **requisito → SQL u objeto → prueba → evidencia → decisión**.

## Función y procedimiento

| Función | Procedimiento |
|---|---|
| Devuelve un resultado | Se invoca explícitamente (CALL) |
| Se usa como expresión | Coordina varios pasos |
| Cálculos y clasificaciones | Puede modificar datos |
| Pequeña y predecible | Encapsula una operación |

Ejemplo de función: `clasificar_cliente(cliente_id, anio)` → BRONCE (< 2M), PLATA (2M–50M), ORO (> 50M).

Elementos comunes: parámetros (entrada y salida), variables, IF/CASE, SQL, manejo de errores y transacción.

```sql
-- MySQL
DELIMITER //
CREATE PROCEDURE cambiar_estado_pedido(IN p_pedido_id INT, IN p_estado VARCHAR(12))
BEGIN
  UPDATE pedido SET estado = p_estado WHERE pedido_id = p_pedido_id;
END//
DELIMITER ;

-- PostgreSQL
CREATE PROCEDURE cambiar_estado_pedido(p_pedido_id INTEGER, p_estado VARCHAR(12))
LANGUAGE plpgsql AS $$
BEGIN
  UPDATE pedido SET estado = p_estado WHERE pedido_id = p_pedido_id;
END; $$;

CALL cambiar_estado_pedido(10, 'pagado');   -- igual en los dos
```

## Triggers

**Evento → condición → acción**. Ejemplo: UPDATE en producto → ¿cambió el precio? → INSERT en auditoría.

| Evento | OLD | NEW |
|---|---|---|
| INSERT | — | ✓ |
| UPDATE | ✓ | ✓ |
| DELETE | ✓ | — |

- **BEFORE**: validar o transformar antes de persistir.
- **AFTER**: registrar o reaccionar después.

```sql
-- MySQL: la lógica va en el trigger
DELIMITER //
CREATE TRIGGER trg_precio_aud AFTER UPDATE ON producto
FOR EACH ROW
BEGIN
  IF OLD.precio <> NEW.precio THEN
    INSERT INTO auditoria_precio (producto_id, precio_anterior, precio_nuevo)
    VALUES (OLD.producto_id, OLD.precio, NEW.precio);
  END IF;
END//
DELIMITER ;

-- PostgreSQL: función + trigger
CREATE FUNCTION fn_precio_aud() RETURNS TRIGGER AS $$
BEGIN
  IF OLD.precio IS DISTINCT FROM NEW.precio THEN
    INSERT INTO auditoria_precio (producto_id, precio_anterior, precio_nuevo)
    VALUES (OLD.producto_id, OLD.precio, NEW.precio);
  END IF;
  RETURN NEW;
END; $$ LANGUAGE plpgsql;

CREATE TRIGGER trg_precio_aud AFTER UPDATE ON producto
FOR EACH ROW EXECUTE FUNCTION fn_precio_aud();
```

En los dos motores se ejecuta **dentro de la transacción** que causó el UPDATE. **Automático no es mejor por defecto.**

## Migraciones

La base también tiene versiones: el esquema evoluciona con la aplicación. **Migrar no es recrear.**

Secuencia segura para una columna obligatoria:
1. **Expandir**: `ADD COLUMN estado NULL`.
2. **Completar**: backfill de los históricos.
3. **Validar**: controles v1 contra v2.
4. **Endurecer**: CHECK + NOT NULL.
5. **Programar**: trigger o función.

**Forward y rollback**: UP lleva v1 → v2, DOWN v2 → v1. Revertir la estructura no siempre recupera la información: `DROP COLUMN estado` destruye lo creado en v2. Un rollback seguro puede requerir copia, backup o migración inversa.

**Scripts versionados**: `V001__modelo_inicial.sql`, `V002__estado_pedido.sql`, `V003__auditoria_estado.sql`… Dan orden, trazabilidad y repetibilidad. **CI/CD** automatiza las validaciones antes de producción; no elimina el riesgo.

Una release de base de datos termina cuando se puede demostrar continuidad, funcionamiento y reversibilidad.

## Lo que hicimos en el laboratorio

U3 Act. 3 del grupo, release v2.0 en PostgreSQL (scripts `01_schema_v1` a `06_rollback_v2`):

- `ALTER TABLE pedido ADD COLUMN estado … DEFAULT 'pendiente' NOT NULL`: sin DEFAULT fallaba por los nulos de los pedidos 1001–1003; sin NOT NULL quedaban datos incompletos.
- CHECK: `estado IN (…)`, `total >= 0`, `precio_unitario >= 0`. En el motor y no en la aplicación, para que rebote el dato inválido al instante.
- `auditoria_estado_pedido` con `GENERATED ALWAYS AS IDENTITY`, FK a pedido y `DEFAULT CURRENT_TIMESTAMP`.
- **Error**: la tabla de auditoría quedaba vacía, porque el motor no audita solo. Se resolvió con la función `registrar_estado()` y un trigger `AFTER UPDATE ON pedido FOR EACH ROW` con `OLD.estado IS DISTINCT FROM NEW.estado`.
- **Error**: `total_cliente()` dejaba afuera al cliente sin pedidos → `LEFT JOIN` + `COALESCE`.
- Se descartó el trigger por sentencia (no da OLD y NEW por fila).
- Pruebas: válido (`estado = 'enviado'` → UPDATE 1 y fila en auditoría), inválido (`total = -1000` → rechazado por CHECK), límite (cliente sin pedidos → 0).
- Rollback: borrar la auditoría y la columna estado pierde el historial y los estados de forma irreversible.
