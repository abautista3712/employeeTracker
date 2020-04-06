CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE employee
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(30),
	last_name VARCHAR(30),
    role_id INT
    manager_id INT
	PRIMARY KEY (id)
);