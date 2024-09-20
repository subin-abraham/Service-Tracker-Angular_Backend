const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',  // or your MySQL server IP
    user: 'root',  // MySQL username
    password: 'P@password',  // MySQL password
    database: 'service_tracker',  // the database you created
})
connection.connect(err => {
    if (err) {
        console.error('Database connection failed! ', err);
        return;
    }
    console.log('Connected to MySQL');
});

module.exports = connection;