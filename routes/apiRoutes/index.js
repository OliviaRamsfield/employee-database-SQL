const cTable = require('console.table')
const inquirer = require('inquirer')

//array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'startOptions',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an exisiting employee']
        }
    ])
}