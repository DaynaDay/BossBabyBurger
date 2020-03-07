var mysql = require("mysql");

require('dotenv').config();

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: 'root',
  password: 'KnightlyNews93',
  database: 'burger_db'
});

module.exports = connection;
