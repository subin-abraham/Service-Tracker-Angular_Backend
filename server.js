const express = require('express');
const cors = require('cors');
const db = require('./db');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
const PORT = 3000;

// Middleware to handle JSON
app.use(express.json());


const registered_user = [];


// Register New User
app.post("/New-Registration", (req, res) => {
  const { name, username, password } = req.body;
  // Validation
  if (!name || !username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }
  let isAdmin = "false";
  let isSuperUser = "false";
  // Insert the new user into the database
  const sql = 'INSERT INTO registered_user (name,username, password,isAdmin,isSuperUser) VALUES (?,?,?,' + isAdmin + ',' + isSuperUser + ')';
  db.query(sql, [name, username, password], (err, result) => {
    if (err) {
      console.error('Error inserting user into the database:', err);
      return res.status(500).json({ message: 'Registration failed' });
    }
    res.json({ message: 'Registration successful', registered_user: { username } });
  });
});

// Route to get all registered users
app.get('/registered_user', (req, res) => {
  const sql = 'SELECT username FROM registered_user';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching users from the database:', err);
      return res.status(500).json({ message: 'Failed to fetch users' });
    }
    res.json(results);
  });
});

// //get Users
// app.get('/users', (req, res) => {
//   res.json(users);
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
