INSERT INTO departments (name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal'),
('Human Resources');

INSERT INTO roles (title, salary, department_id)
VALUES
('Salesperson', 80000, 1,),
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
('Jon', 'Wright', 1, 2),
('Mike', 'Yen', 2, null),
('Lindsay', 'Rodriguez', 3, 4),
('Kevin', 'Kao', 4, null),
('William', 'Brown', 5, 6),
('Sarah', 'Silvermen', 6, null),
('Josh', 'Allen', 7, 8),
('Jackie', 'Robinson', 8, null),
('Tyson', 'Fury', 9, 10),
('Rocky', 'Balboa', 10, null);