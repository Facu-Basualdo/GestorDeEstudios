--06_rollback_v2.sql

/*
DOCUMENTACIÓN DE REVERSIBILIDAD Y PÉRDIDA DE DATOS:
La ejecución de este script de rollback revierte la estructura a la versión v1.
Cambios no reversibles sin pérdida de datos:
1. Historial de auditoría: Al eliminar la tabla 'auditoria_estado_pedido', se destruye todo el registro de cambios de estado.
2. Estado de los pedidos: Al eliminar la columna 'estado' de la tabla 'pedido', se pierde la información de si un pedido estaba pagado, enviado o cancelado.
*/

-- 1. Eliminar los triggers y funciones (Programabilidad)
DROP TRIGGER IF EXISTS trg_auditoria_estado ON pedido;
DROP FUNCTION IF EXISTS registrar_auditoria_estado();
DROP FUNCTION IF EXISTS total_cliente();

-- 2. Eliminar las restricciones (Validaciones)
ALTER TABLE detalle_pedido DROP CONSTRAINT IF EXISTS chk_precio_positivo;
ALTER TABLE pedido DROP CONSTRAINT IF EXISTS chk_total_positivo;
ALTER TABLE pedido DROP CONSTRAINT IF EXISTS chk_estado_pedido;

-- 3. Eliminar las tablas nuevas
DROP TABLE IF EXISTS auditoria_estado_pedido;

-- 4. Revertir las modificaciones en las tablas de la v1
ALTER TABLE pedido DROP COLUMN IF EXISTS estado;
