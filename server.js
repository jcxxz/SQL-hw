const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2/promise');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

(async function main() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Weld1234.',
    database: 'tracker_db',
  });

  console.log(`Connected to the tracker_db database.`);

  mainMenu(connection);
})();

async function mainMenu(connection) {
  try {
    const { menu } = await inquirer.prompt({
      type: 'list',
      name: 'menu',
      message: 'Main Menu',
      choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add Department',
        'Add Role',
        'Add Employee',
        'Update Employee Role',
        'Remove Employee',
        'Exit',
      ],
    });

    switch (menu) {
      case 'View All Departments':
        await viewAllDepartments(connection);
        break;
      case 'View All Roles':
        await viewAllRoles(connection);
        break;
      case 'View All Employees':
        await viewAllEmployees(connection);
        break;
      case 'Add Department':
        await addDepartment(connection);
        break;
      case 'Add Role':
        await addRole(connection);
        break;
      case 'Add Employee':
        await addEmployee(connection);
        break;
      case 'Update Employee Role':
        await updateEmployeeRole(connection);
        break;
      case 'Remove Employee':
        await removeEmployee(connection);
        break;
      case 'Exit':
        await connection.end();
        break;
    }
  } catch (err) {
    console.error(err);
  }
}

async function viewAllDepartments(connection) {
  try {
    const [rows] = await connection.query('SELECT * FROM departments');
    console.table(rows);
    mainMenu(connection);
  } catch (err) {
    console.error(err);
  }
}

async function viewAllRoles(connection) {
  try {
    const [rows] = await connection.query('SELECT * FROM roles');
    console.table(rows);
    mainMenu(connection);
  } catch (err) {
    console.error(err);
  }
}

async function viewAllEmployees(connection) {
  try {
    const [rows] = await connection.query('SELECT * FROM employees');
    console.table(rows);
    mainMenu(connection);
  } catch (err) {
    console.error(err);
  }
}

async function addDepartment(connection) {
  try {
    const { department } = await inquirer.prompt({
      type: 'input',
      name: 'department',
      message: 'Enter department name:',
    });

    await connection.query('INSERT INTO departments (name) VALUES (?)', department);
    console.log('Department added.');
    mainMenu(connection);
  } catch (err) {
    console.error(err);
  }
}

async function addRole(connection) {
  try {
    const { title, salary, department_id } = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter title:',
      },
      {
        type: 'input',
        name: 'salary',
        message: 'Enter salary:',
      },
      {
        type: 'input',
        name: 'department_id',
        message: 'Enter department ID:',
      },
    ]);

    await connection.query('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)', [
      title,
        salary,
        department_id,
    ]);
    console.log('Role added.');
    mainMenu(connection);
    } catch (err) {
    console.error(err);
    }
}

async function addEmployee(connection) {
  try {
    const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
      {
        type: 'input',
        name: 'first_name',
        message: 'Enter first name:',
      },
      {
        type: 'input',
        name: 'last_name',
        message: 'Enter last name:',
      },
      {
        type: 'input',
        name: 'role_id',
        message: 'Enter role ID:',
      },
      {
        type: 'input',
        name: 'manager_id',
        message: 'Enter manager ID:',
      },
    ]);

    await connection.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [
      first_name,
      last_name,
      role_id,
      manager_id,
    ]);
    console.log('Employee added.');
    mainMenu(connection);
  } catch (err) {
    console.error(err);
  }
}   

async function updateEmployeeRole(connection) {
    try {
        const { id, role_id } = await inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID:',
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Enter new role ID:',
        },
        ]);
    
        await connection.query('UPDATE employees SET role_id = ? WHERE id = ?', [role_id, id]);
        console.log('Employee role updated.');
        mainMenu(connection);
    } catch (err) {
        console.error(err);
    }
    }

async function removeEmployee(connection) {
    try {
        const { id } = await inquirer.prompt({
        type: 'input',
        name: 'id',
        message: 'Enter employee ID:',
        });
    
        await connection.query('DELETE FROM employees WHERE id = ?', id);
        console.log('Employee removed.');
        mainMenu(connection);
    } catch (err) {
        console.error(err);
    }
    }   





    






