const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }
    findAllEmployees() {
        return this.connection.promise().query(
            "SELECT * from Employees"
        )
    }
}



module.exports = new DB(connection);