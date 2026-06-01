CREATE DATABASE practica2;
USE practica2;

CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    nombre VARCHAR(100) NOT NULL, 
    descripcion VARCHAR(255), 
    createdAt DATETIME NOT NULL DEFAULT current_timestamp(), 
    updatedAt DATETIME NOT NULL DEFAULT current_timestamp() 
); 

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2),
    categoria_id INT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

INSERT INTO categorias (nombre, descripcion) VALUES 
('Electrónica',  'Dispositivos electrónicos y gadgets'),
('Oficina',      'Material y accesorios de oficina'),
('Hogar',        'Artículos para el hogar y decoración'),
('Deportes',     'Equipos y accesorios deportivos'),
('Ropa',         'Prendas de vestir para toda la familia'),
('Juguetes',     'Juguetes educativos y de entretenimiento');

INSERT INTO productos (nombre, precio, categoria_id) VALUES
-- Electrónica
('Laptop HP 15"',           4500.00, 1),
('Audífonos Bluetooth',      350.00, 1),
('Mouse Inalámbrico',        120.00, 1),
('Teclado Mecánico',         280.00, 1),
-- Oficina
('Silla Ergonómica',        1200.00, 2),
('Escritorio de Madera',    2500.00, 2),
('Archivador Metálico',      800.00, 2),
-- Hogar
('Lámpara de Pie',           450.00, 3),
('Cojines Decorativos',      150.00, 3),
('Espejo Circular',          320.00, 3),
-- Deportes
('Bicicleta de Montaña',    3200.00, 4),
('Guantes de Box',           180.00, 4),
('Pelota de Fútbol',          90.00, 4),
-- Ropa
('Camiseta Deportiva',        85.00, 5),
('Zapatillas Running',       450.00, 5),
-- Juguetes
('LEGO Clásico 500 piezas',  320.00, 6),
('Muñeca Articulada',         95.00, 6),
('Auto a Control Remoto',    220.00, 6);