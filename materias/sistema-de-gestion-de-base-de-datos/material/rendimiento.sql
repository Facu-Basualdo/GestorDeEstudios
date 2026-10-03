-- MONITOREO DE RENDIMIENTO
-- performance_schema

USE performance_schema;


-- Verificar que esté habilitado
SHOW VARIABLES LIKE 'performance_schema';


-- Engine PERFORMANCE_SCHEMA
SELECT * FROM INFORMATION_SCHEMA.ENGINES
WHERE ENGINE='PERFORMANCE_SCHEMA'\G


-- Tablas de monitoreo
SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_SCHEMA = 'performance_schema';

SHOW TABLES FROM performance_schema;


-- Estructuras de tablas de performance_schema
SHOW CREATE TABLE performance_schema.setup_consumers\G


-- Habilitar características de monitoreo
UPDATE performance_schema.setup_instruments
       SET ENABLED = 'YES', TIMED = 'YES';
       
UPDATE performance_schema.setup_consumers
       SET ENABLED = 'YES';
       
       
-- Qué hace el servidor en este momento (actual):
SELECT *
FROM performance_schema.events_waits_current\G

-- Qué hizo el servidor hasta ahora (historial):
SELECT EVENT_ID, EVENT_NAME, TIMER_WAIT
FROM performance_schema.events_waits_history
WHERE THREAD_ID = 13
ORDER BY EVENT_ID;

-- Qué instrumentos se han ejecutado más veces o han tenido más tiempo 
-- de espera
SELECT EVENT_NAME, COUNT_STAR
FROM performance_schema.events_waits_summary_global_by_event_name
ORDER BY COUNT_STAR DESC LIMIT 10;

-- Enumeración de instancias de instrumentos para operaciones de E / S 
-- de archivos y sus archivos asociados
SELECT *
FROM performance_schema.file_instances\G

-- Conjunto de instrumentos para los que se pueden recopilar eventos y 
-- cuáles de ellos están habilitados:
SELECT NAME, ENABLED, TIMED
FROM performance_schema.setup_instruments;
       
-- Controlar si se recopilan eventos para un instrumento
UPDATE performance_schema.setup_instruments
SET ENABLED = 'NO'
WHERE NAME = 'wait/synch/mutex/sql/LOCK_mysql_create_db';

-- Consumidores disponibles y cuáles están habilitados:
SELECT * FROM performance_schema.setup_consumers;
