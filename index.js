//imports
const inquirer = require('inquirer')
const Department = require('./lib/Department')
const viewRoles = require('./lib/Role')
const viewEmployees = require('./lib/Employee')

//array of questions for user input
const promptUser = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'start',
            message: 'What would you like to do?',
            choices: [
            'View all departments', 
            'View all roles', 
            'View all employees', 
            'Add a department', 
            'Add a role', 
            'Add an employee', 
            'Update an exisiting employee'
            ]
        }
    ]).then(data => {
        switch(data.start) {
            case 'View all departments':
                console.log(Department)
                Department.viewDepartment()
                break;
            case 'View all roles':
                viewRoles()
                break;
            case 'View all employees':
                viewEmployees()
                break;
            case 'Add a department':
                addDepartment()
                break;
        }
    })  
}

const continueApp = () => {
    inquirer.prompt([
        {
            type: "confirm",
            name: "continue",
            message: 'Would you like to perform another action?',
            default: true

        }
    ]).then((answer) => {
    if (answer === true) {
        promptUser()
    } 
    return
    })
}

//start the application menu
promptUser();

module.exports = continueApp()