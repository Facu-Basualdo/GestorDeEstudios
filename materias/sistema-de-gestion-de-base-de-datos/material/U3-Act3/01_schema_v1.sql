--01_schema_v1.sql
--Sentencias para crear las tablas de la V1 de la Base de Datos
DROP SCHEMA IF EXISTS sgbd_u34_act3 CASCADE;
CREATE SCHEMA sgbd_u34_act3;
SET search_path TO sgbd_u34_act3;

CREATE TABLE cliente (
  cliente_id INTEGER PRIMARY KEY,
  nombre VARCHAR(80) NOT NULL,
  email VARCHAR(120)
);

CREATE TABLE pedido (
  pedido_id INTEGER PRIMARY KEY,
  cliente_id INTEGER NOT NULL REFERENCES cliente(cliente_id),
  fecha DATE NOT NULL,
  total NUMERIC(12,2) NOT NULL
);

CREATE TABLE detalle_pedido (
  detalle_id INTEGER PRIMARY KEY,
  pedido_id INTEGER NOT NULL REFERENCES pedido(pedido_id),
  producto VARCHAR(80) NOT NULL,
  cantidad INTEGER NOT NULL,
  precio_unitario NUMERIC(12,2) NOT NULL
);
