--05_pruebas_v2.sql
--Pruebas de que los datos de V1 siguen existiendo luego de migrar
--Tienen que aparecer los 3 clientes originales Norte SA, Sur SRL y Cliente Uno
select *
from cliente;

--Tienen que aparecer los 3 pedidos originales 1001, 1002 y 1003 
select *
from pedido;

--Tienen que aparecer los 3 detalles originales 1, 2 y 3
select *
from detalle_pedido;

---------------------------------------------------------------------------------------------------------------------
--Pruebas de que los estados funcionan

--Serie de sentencias update para cambiar los estados de la tabla pedido
update pedido
set estado = 'enviado'
where pedido_id = 1001;

update pedido
set estado = 'cancelado'
where pedido_id = 1003;

--sentencias update invalidas para probar las restricciones de datos
update pedido
set estado = 'bloqueado'
where pedido_id = 1002;

update pedido
set total = -1000
where pedido_id = 1002;

update detalle_pedido
set precio_unitario = -25000
where detalle_id = 2;

--sentencia select * para ver los cambios 
select *
from pedido;

---------------------------------------------------------------------------------------------------------------------
--Prueba de auditoria 

--validamos que la tabla de auditoria funcione correctamente y registre los cambios relevantes
select * from auditoria_estado_pedido;
---------------------------------------------------------------------------------------------------------------------
--Prueba de datos verificables

select * from total_cliente();

---------------------------------------------------------------------------------------------------------------------
