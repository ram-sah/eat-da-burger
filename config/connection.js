// Set up MySQL connection.
var mysql = require("mysql");
let connection;
// Hooking with JawsDB
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "pass",
    database: "burgers_db"
  });
}
