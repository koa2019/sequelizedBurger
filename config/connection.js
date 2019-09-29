//import npm mysql2
var mysql = require('mysql2');

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    //create a connection to mysql database
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burger_db"
    });
};

connection.connect();

//export connection
module.exports = connection;