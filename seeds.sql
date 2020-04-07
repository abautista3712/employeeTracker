INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('George', 'Washington', 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Adams', 2,1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Thomas', 'Jefferson', 3,1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Alexander', 'Hamilton', 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Jay', 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('James', 'Wilson', 6, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('William', 'Cushing', 6, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Blair', 6, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Rutledge', 6, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('James', 'Iredell', 6, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Philip', 'Schuyler', 7, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('James', 'Monroe', 7, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Frederick', 'Muhlenberg', 8);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jonathan', 'Trumbull, Jr.', 9, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('James', 'Madison', 9, 5);

INSERT INTO role (title, salary, department_id) VALUES ('President', '100000', 1);
INSERT INTO role (title, salary, department_id) VALUES ('Vice President', '90000', 1);
INSERT INTO role (title, salary, department_id) VALUES ('Secretary of State', '80000', 1);
INSERT INTO role (title, salary, department_id) VALUES ('Secretary of the Treasury', '80000', 1);
INSERT INTO role (title, salary, department_id) VALUES ('Chief Justice', '95000', 2);
INSERT INTO role (title, salary, department_id) VALUES ('Associate Justice', '85000', 2);
INSERT INTO role (title, salary, department_id) VALUES ('Senator', '75000', 3);
INSERT INTO role (title, salary, department_id) VALUES ('Speaker of the House', '77500', 3);
INSERT INTO role (title, salary, department_id) VALUES ('Member of the House of Representatives', '75000', 3);

INSERT INTO department (name) VALUES ('Executive');
INSERT INTO department (name) VALUES ('Judiciary');
INSERT INTO department (name) VALUES ('Legislative');
