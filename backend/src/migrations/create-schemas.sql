DROP DATABASE test_daya_reka_digital;
CREATE DATABASE test_daya_reka_digital;

USE test_daya_reka_digital;

CREATE TABLE Customer (
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    address TEXT,
    is_deleted TIMESTAMP DEFAULT NULL,
    level ENUM("warga", "juragan", "sultan", "konglomerat") NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE (firstname, lastname) 
);

CREATE TABLE Product (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    count_bought INT DEFAULT 0,
    category ENUM("beverages","appetizer","main_course","dessert") NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Transaction (
    id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT NOT NULL,
    product_id INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES Customer(id),
    FOREIGN KEY (product_id) REFERENCES Product(id)
);

INSERT INTO Customer (firstname, lastname, phone_number, address, is_deleted, level) VALUES
('Agus', 'Wijaya', '081234567890', 'Jl. Merdeka No. 1, Jakarta', NULL, 'warga'),
('Siti', 'Nurhaliza', '082134567891', 'Jl. Sudirman No. 45, Bandung', NULL, 'juragan'),
('Budi', 'Santoso', '083234567892', 'Jl. Diponegoro No. 22, Surabaya', NULL, 'sultan'),
('Dewi', 'Sartika', '084234567893', 'Jl. Gatot Subroto No. 33, Yogyakarta', NULL, 'konglomerat'),
('Andi', 'Pratama', '085234567894', 'Jl. Ahmad Yani No. 12, Medan', NULL, 'warga'),
('Rina', 'Amalia', '086234567895', 'Jl. Soekarno Hatta No. 99, Bali', NULL, 'juragan'),
('Yusuf', 'Ibrahim', '087234567896', 'Jl. RA Kartini No. 7, Makassar', NULL, 'sultan'),
('Lina', 'Wulandari', '088234567897', 'Jl. KH Ahmad Dahlan No. 88, Semarang', NULL, 'konglomerat'),
('Doni', 'Rahman', '089234567898', 'Jl. RA Kartini No. 77, Bogor', NULL, 'warga'),
('Fitri', 'Susanti', '081234567899', 'Jl. Gajah Mada No. 101, Malang', NULL, 'juragan');

INSERT INTO Product (name, price, stock, count_bought, category) VALUES
('Nasi Goreng', 25000, 50, 120, 'main_course'),
('Sate Ayam', 30000, 30, 90, 'main_course'),
('Es Teh Manis', 5000, 100, 200, 'beverages'),
('Mie Ayam', 20000, 40, 80, 'main_course'),
('Bakso', 22000, 60, 100, 'main_course'),
('Es Jeruk', 6000, 90, 150, 'beverages'),
('Rendang', 35000, 20, 50, 'main_course'),
('Klepon', 10000, 70, 130, 'dessert'),
('Gado-Gado', 18000, 35, 75, 'appetizer'),
('Cendol', 8000, 80, 110, 'dessert');

INSERT INTO Transaction (customer_id, product_id, price, quantity) VALUES
(1, 11, 25000, 2),
(2, 13, 5000, 3),
(3, 14, 20000, 1),
(4, 17, 35000, 1),
(5, 12, 30000, 2),
(6, 19, 18000, 3),
(7, 16, 6000, 1),
(8, 18, 10000, 2),
(9, 15, 22000, 1),
(10, 11, 8000, 2);






