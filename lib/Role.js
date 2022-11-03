//imports
const connection = require('../db/connection')
const cTable = require('console.table')
const promptUser = require('../index')
const continueApp = require('../index')

//make a Role constructor class here?

//view all roles
const viewRoles = () => {
    connection.execute(
        `SELECT * FROM roles;`,
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

//add role

module.exports = viewRoles