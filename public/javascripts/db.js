var mysql = require('mysql');
// mysql db 커넥트
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'scanner_test'
});
db.connect();
module.exports = db;