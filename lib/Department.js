//imports
const connection = require('../db/connection')
const cTable = require('console.table')
const inquirer = require('inquirer')
const continueApp = require('../index')

class Department {
    constructor(id, department_name) {
        this.id = id
        this.department_name = department_name
    }

//view all departments
viewDepartment() {
    connection.execute(
        `SELECT * FROM department;`,
        function (err, results) {
            if (err) {
                console.log(err)
                return
            }
            const table = cTable.getTable(results)
            console.log(table)
        }
    )
}

//add a department
addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the new department?'
        }
    ]).then(data => {
        insertIntoDepartments(data.name)
    })
    
    // .then((data) => {
    //     connection.execute(
    //         `INSERT INTO department (name)
    //         VALUES (?);`,
    //         function(err, results) {
    //         if (err) {
    //             console.log(err)
    //             return
    //         }
    //         console.log(`New department ${results} added!`)
    //     })
    // })
}

insertIntoDepartments(name)  {
    connection.execute(
        `INSERT INTO department (department_name)
        VALUES (?);`,
        console.log(name),
        function (err, results) {
            if (err) {
                console.log(err)
                return
            }
            console.log(`New department ${name} added!`)
        }
    )
}

}

module.exports = new Department(12, 'developing')