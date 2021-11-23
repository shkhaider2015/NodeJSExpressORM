let mysql = require("mysql");

let connection = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test_node'
})



module.exports = {
    DatabaseConnection: connection
}