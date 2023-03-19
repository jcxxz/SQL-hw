INSERT INTO departments (name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal'),
('Human Resources');

INSERT INTO roles (title, salary, department_id)
VALUES
('Salesperson', 80000, 1),
('Sales Lead', 100000, 1),
('Engineer', 120000, 2),
('Lead Engineer', 150000, 2),
('Accountant', 125000, 3),
('Chief Financial Officer', 300000, 3),
('Lawyer', 190000, 4),
('Legal Team Lead', 250000, 4),
('Human Resources Employee', 80000, 5),
('Human Resources Director', 100000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Jon', 'Wright', 1, NULL),
('Mike', 'Yen', 2, 1),
('Lindsay', 'Rodriguez', 3, NULL),
('Kevin', 'Kao', 4, 3),
('William', 'Brown', 5, NULL),
('Sarah', 'Silvermen', 6, 5),
('Josh', 'Allen', 7, NULL),
('Jackie', 'Robinson', 8, 7),
('Tyson', 'Fury', 9, NULL),
('Rocky', 'Balboa', 10, 9);

