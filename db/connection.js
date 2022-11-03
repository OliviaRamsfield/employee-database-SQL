//imports
const mysql = require('mysql2');

//connect to SQL database
const connection = mysql.createConnection(
    {
        host: '127.0.0.1',
        //mysql  username
        user: 'root',
        //mysql password
        password: 'auri',
        database: 'employment'
    },
    console.log('Connected to the employment database.')
);

//exports
module.exports = connection;