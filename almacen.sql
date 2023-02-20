-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-02-2023 a las 23:32:35
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `almacen`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `precio` double NOT NULL,
  `existencias` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `existencias`) VALUES
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

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
