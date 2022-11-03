//imports
const connection = require('../db/connection')
const cTable = require('console.table')
const continueApp = require('..')

//view all employees
const viewEmployees = () => {
    connection.execute(
        `SELECT * FROM employee;`,
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

//add an employee

//update an employee

module.exports = viewEmployees