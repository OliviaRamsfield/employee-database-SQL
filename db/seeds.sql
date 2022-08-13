
INSERT INTO department (name)
VALUES 
('Customer Service'),
('IT'),
('Management'),
('Sales');

INSERT INTO roles (title, salary, department_id)
VALUES
('Engineer', 100000, 2),
('Sales Rep', 85000, 4),
('Manager', 95000, 3),
('Customer Service Rep', 70000, 1);

INSERT INTO employee (first_name, last_name, role_id)
VALUES
('Tim', 'Fake', 1),
('Gal', 'Mann', 2),
('Juan', 'Night', 3),
('Steph', 'Shine', 4);