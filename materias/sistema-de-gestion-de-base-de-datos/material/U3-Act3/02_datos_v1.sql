--02_datos_v1.sql
--Sentencias para ingresar los valores originales de la V1 de la Base de Datos
INSERT INTO cliente VALUES
(1,'Norte SA','norte@example.com'),
(2,'Sur SRL','sur@example.com'),
(3,'Cliente Uno',NULL);

INSERT INTO pedido VALUES
(1001,1,'2026-09-01',15000),
(1002,1,'2026-09-12',22000),
(1003,2,'2026-09-15',9000);

INSERT INTO detalle_pedido VALUES
(1,1001,'Servicio Base',1,15000),
(2,1002,'Servicio Premium',1,22000),
(3,1003,'Servicio Base',1,9000);
