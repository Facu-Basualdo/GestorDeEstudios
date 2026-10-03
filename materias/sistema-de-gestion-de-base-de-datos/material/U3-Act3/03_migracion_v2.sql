--03_migracion_v2.sql
--Se añade la columna pedido.
--se define que cada pedido agregado va tener como valor predefinido = pendiente
alter table pedido
add column estado varchar(10) default 'pendiente' not null;

--Se añade la restriccion para bloquear datos invalidos en el campo de estado. 
--por la consigna
alter table pedido
add constraint chk_estado
check (estado in('pendiente', 'pagado', 'enviado', 'cancelado'));

--Creacion de la tabla de auditoria de los estados de pedidos.
create table auditoria_estado_pedido(
	auditoria_id integer generated always as identity primary key,
	pedido_id integer not null references pedido(pedido_id),
	estado_ant varchar(10),
	estado_nuev varchar(10) not null,
	fecha_cambio timestamp default current_timestamp
);

--Se agregran restricciones para bloquear totales o precios negativos.
alter table pedido
add constraint chk_total
check (total >= 0);

alter table detalle_pedido
add constraint chk_precio
check (precio_unitario >= 0);
