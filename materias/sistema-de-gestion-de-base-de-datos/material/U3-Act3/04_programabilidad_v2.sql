--04_programabilidad_v2.sql
--Funcion que calcula el total de pedidos por cliente
create or replace function total_cliente()
returns table (id_cliente integer, total_cliente numeric) as $$
begin
	return query
	select c.cliente_id, coalesce (sum(p.total),0)
	from cliente c left join pedido p
	on c.cliente_id = p.cliente_id
	group by c.cliente_id
	order by c.cliente_id asc;

end;
$$ language plpgsql;
---------------------------------------------------------------------------------------------------------------------
--Funcion para registrar los cambios de estado en la tabla de auditoria
create or replace function registrar_estado()
returns trigger as $$
begin
	if old.estado is distinct from new.estado then
		insert into auditoria_estado_pedido (pedido_id, estado_ant,estado_nuev)
		values (new.pedido_id, old.estado, new.estado);
	end if;
	return new;
end;

$$ language plpgsql;

create trigger trg_auditoria_estado
after update on pedido
for each row execute function registrar_estado();
