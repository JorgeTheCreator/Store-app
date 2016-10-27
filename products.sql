
CREATE DATABASE Bamazon;
-----------------------  CHANGE TO BAMAZON DATABASE --------------------------------------/
USE Bamazon;

-------------------------verify to see what database im in------------------------------

SELECT DATABASE();



----------------------------------------------------CREATE the product table-----------------------------------
CREATE TABLE Products (

	ItemID int AUTO_INCREMENT, 
	ProductName varchar(50) NOT NULL, 
	DepartmentName varchar(50) NOT NULL, 
	Price varchar(30) NOT NULL, 
	StockQuantity int NOT NULL,
	PRIMARY KEY(ItemID)
);
---------------------------------------------check the components of the prouct table i.e. VARCHAR(50)--------------------
DESCRIBE Products; 






----------------SHOWS THE TABLE PRODUCT--------------------------


SELECT * FROM Products;

----------------------------------------------------PRODUCT#1-----------------------------------------------
INSERT INTO Products 
(ProductName, DepartmentName, Price, StockQuantity) 
VALUES 
("Dewalt Multi Tool Gift Pack", "Garden & Tools", 14.99, 40);
----------------------------------------------------PRODUCT#2-----------------------------------------------
INSERT INTO Products 
(ProductName, DepartmentName, Price, StockQuantity) 
VALUES ("Rake", "Garden & Tools", 22.99, 35);
----------------------------------------------------PRODUCT#3-----------------------------------------------
INSERT INTO Products 
(ProductName, DepartmentName, Price, StockQuantity) 
VALUES ("Pruners", "Garden & Tools", 24.99, 15);
---------------------------------------------------PRODUCT#4-------------------------------------------------------
INSERT INTO Products 
(ProductName, DepartmentName, Price, StockQuantity) 
VALUES ("Big Wheel", "Toys", 40.99, 25);
---------------------------------------------------PRODUCT#5-------------------------------------------------------
INSERT INTO Products 
(ProductName, DepartmentName, Price, StockQuantity) 
VALUES ("Roller Skates", "Toys", 21.97, 25);
---------------------------------------------------PRODUCT#6-------------------------------------------------------
INSERT INTO Products 
(ProductName, DepartmentName, Price, StockQuantity) 
VALUES ("Power Rangers", "Toys", 80.26, 12);
---------------------------------------------------PRODUCT#7-------------------------------------------------------
INSERT INTO Products 
(ProductName, DepartmentName, Price, StockQuantity) 
VALUES ("Red-shirt", "Clothing", 25.99, 20);
---------------------------------------------------PRODUCT#8-------------------------------------------------------
INSERT INTO Products 
(ProductName, DepartmentName, Price, StockQuantity)
VALUES ("Blue-shirt", "Clothing", 25.99, 30);
---------------------------------------------------PRODUCT#9-------------------------------------------------------
INSERT INTO Products 
(ProductName, DepartmentName, Price, StockQuantity) 
VALUES ("Green-shirt", "Clothing", 30.95, 40);
---------------------------------------------------PRODUCT#10-------------------------------------------------------
INSERT INTO Products 
(ProductName, DepartmentName, Price, StockQuantity) 
VALUES ("Black-shirt", "Clothing", 25.89, 24);


SELECT * FROM Products; 

