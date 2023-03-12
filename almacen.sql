select * from almacen.Productos;

CREATE TABLE Productos (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  nombre VARCHAR(250) NOT NULL,
  descripcion VARCHAR(250) NOT NULL,
  precio DOUBLE NOT NULL,
  existencias INT NOT NULL
);

INSERT INTO `Productos` (`id`, `nombre`, `descripcion`, `precio`, `existencias`) VALUES
(1, 'Camiseta básica', 'Camiseta de algodón para hombre', 9.99, 50),
(2, 'Jeans slim fit', 'Pantalón vaquero para mujer', 39.99, 20),
(3, 'Zapatillas deportivas', 'Calzado deportivo para mujer', 29.99, 30),
(4, 'Reloj de pulsera', 'Reloj analógico para hombre', 79.99, 10),
(5, 'Gorra de béisbol', 'Gorra de algodón con visera curva', 14.99, 25),
(6, 'Camisa de vestir', 'Camisa de corte clásico para hombre', 34.99, 15),
(7, 'Abrigo de invierno', 'Abrigo acolchado para mujer', 89.99, 5),
(8, 'Sudadera con capucha', 'Sudadera de algodón para hombre', 24.99, 40),
(9, 'Botas de montaña', 'Calzado de senderismo para hombre', 59.99, 12),
(10, 'Vestido de noche', 'Vestido elegante para mujer', 79.99, 8),
(11, 'Cazadora de cuero', 'Cazadora de piel para hombre', 129.99, 7),
(12, 'Bolso de mano', 'Bolso de cuero para mujer', 49.99, 18),
(13, 'Gafas de sol', 'Gafas de sol polarizadas para hombre', 19.99, 30),
(14, 'Pantalones cortos', 'Pantalones cortos de deporte para mujer', 14.99, 22),
(15, 'Jersey de lana', 'Jersey de punto para hombre', 44.99, 16),
(16, 'Vestido playero', 'Vestido de verano para mujer', 29.99, 35),
(17, 'Polo de manga corta', 'Polo de algodón para hombre', 19.99, 28),
(18, 'Sandalias de cuero', 'Sandalias de tiras para mujer', 39.99, 10),
(19, 'Gorro de lana', 'Gorro de punto para hombre', 9.99, 50),
(20, 'Cinturón de cuero', 'Cinturón de hebilla para mujer', 24.99, 15),
(21, 'Chaqueta de cuero', 'Chaqueta de piel para mujer', 159.99, 5),
(22, 'Pantalón de vestir', 'Pantalón clásico para hombre', 49.99, 15),
(23, 'Zapatos de tacón', 'Zapatos de vestir para mujer', 89.99, 8),
(24, 'Sudadera estampada', 'Sudadera de algodón para hombre', 29.99, 30),
(25, 'Botines de cuero', 'Calzado casual para mujer', 69.99, 12),
(26, 'Camisa de manga corta', 'Camisa de algodón para hombre', 24.99, 20),
(27, 'Bañador de una pieza', 'Bañador de natación para mujer', 39.99, 7),
(28, 'Polo de manga larga', 'Polo de algodón para hombre', 24.99, 18),
(29, 'Bolso de hombro', 'Bolso de cuero para mujer', 69.99, 10),
(30, 'Pendientes de aro', 'Pendientes de plata para mujer', 9.99, 25),
(31, 'Camiseta de tirantes', 'Camiseta de algodón para hombre', 14.99, 40),
(32, 'Vestido de cóctel', 'Vestido elegante para mujer', 119.99, 6),
(33, 'Botas de piel', 'Calzado de invierno para hombre', 129.99, 8),
(34, 'Chaleco acolchado', 'Chaleco de plumas para mujer', 59.99, 10),
(35, 'Calcetines de deporte', 'Calcetines de algodón para hombre', 6.99, 50),
(36, 'Falda plisada', 'Falda de poliéster para mujer', 24.99, 20),
(37, 'Mochila de lona', 'Mochila casual unisex', 39.99, 12),
(38, 'Pulsera de plata', 'Pulsera de plata para mujer', 29.99, 15),
(39, 'Blusa estampada', 'Blusa de seda para mujer', 59.99, 7),
(40, 'Sombrero de lana', 'Sombrero de ala ancha para hombre', 19.99, 20),
(41, 'Camisa de cuadros', 'Camisa de algodón para hombre', 29.99, 20),
(42, 'Pantalón de mezclilla', 'Pantalón casual para mujer', 39.99, 15),
(43, 'Jersey de lana', 'Jersey de cuello alto para hombre', 49.99, 10),
(44, 'Zapatillas deportivas', 'Calzado de entrenamiento para mujer', 89.99, 7),
(45, 'Vestido de verano', 'Vestido ligero para mujer', 39.99, 12),
(46, 'Polo de rayas', 'Polo de algodón para hombre', 19.99, 25),
(47, 'Cartera de cuero', 'Cartera para hombre', 49.99, 10),
(48, 'Gorra de béisbol', 'Gorra ajustable para mujer', 14.99, 30),
(49, 'Botas de montaña', 'Calzado para senderismo para hombre', 129.99, 5),
(50, 'Chaqueta de plumas', 'Chaqueta acolchada para mujer', 99.99, 8),
(51, 'Sudadera con capucha', 'Sudadera de algodón para hombre', 34.99, 20),
(52, 'Vestido de noche', 'Vestido elegante para mujer', 149.99, 5),
(53, 'Zapatillas de lona', 'Calzado casual para hombre', 29.99, 15),
(54, 'Bolso de mano', 'Bolso de cuero para mujer', 79.99, 10),
(55, 'Bufanda de lana', 'Bufanda unisex', 19.99, 30),
(56, 'Collar de perlas', 'Collar de perlas para mujer', 39.99, 12),
(57, 'Pantalón corto de mezclilla', 'Pantalón corto casual para hombre', 24.99, 25),
(58, 'Sandalia de tacón', 'Calzado de verano para mujer', 59.99, 8),
(59, 'Abrigo de lana', 'Abrigo de invierno para hombre', 199.99, 4),
(60, 'Vestido de novia', 'Vestido de novia para mujer', 799.99, 2);

CREATE TABLE Usuarios (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(250) NOT NULL UNIQUE,
  password VARCHAR(250) NOT NULL,
  firstname VARCHAR(250) NOT NULL,
  lastname VARCHAR(250) NOT NULL,
  email VARCHAR(250) NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO `Usuarios` VALUES 
(1,'ricardohb','$2b$10$HzuAO6sinSY/3Z4/mJ0l0Ov2L9tdVqEm5VlxeD32ggqqRLzhls0dO','Ricardo','Huaripata','ricardohb@gmail.com','2023-03-03 20:24:23','2023-03-03 20:24:23'),
(2,'gregory166','$2b$10$aQ1NCZwCmwlMJtg7fVjmRezkPBCv8UD/uYDWGolxVTSNy.RYjZAcC','Gregory','Smith','gregory166@gmail.com','2023-03-03 20:26:12','2023-03-03 20:26:12'),
(3,'java','$2b$10$FSa4lj6Qi.O5t8dppxDH4.Ed8vjBN0QukACQtGkC0sE0TsjFX4bfO','java','java','java@gmail.com','2023-03-03 20:27:11','2023-03-03 20:27:11'),
(4,'angular','$2b$10$Hx1/ilokhOlgUlIy71fWBOjcCiXL1a96KyuW4XpCbjpkdEoacfiTq','angular','angular','angular@gmail.com','2023-03-03 20:28:22','2023-03-03 20:28:22'),
(5,'jgfjfgdfdgs','$2b$10$MCoxxhOYY1SsnrvVZOcWNueJwnNURnrlXg7RHBAmycvLi/t75NNv.','sdsd','sdsd','dssdsdda','2023-03-04 01:19:29','2023-03-04 01:19:29'),
(6,'rrrr','$2b$10$bD5foJUVZZ4URB52aSFMfeOCTuRLaBEwGoA/sRHfRWXt98Rj2PYdy','rrrr','rrrr','rrrr','2023-03-07 18:06:59','2023-03-07 18:06:59'),
(7,'wwww','$2b$10$A2wzLMhpKb4wOzA7NNcOceurTfXMM9IdtdGpXT/eooRTs1LKt7sfC','wwww','wwww','wwww','2023-03-07 18:32:14','2023-03-07 18:32:14');


select * from almacen.Usuarios;
select * from Usuarios where username = 'ricardohb';
use almacen;

drop table almacen.Usuarios;