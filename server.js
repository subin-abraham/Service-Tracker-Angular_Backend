const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 3000;

// Middleware to handle JSON
app.use(express.json());


const users = [];


// Register New User
app.post("/New-Registration", (req, res) => {
  const { name, username, password } = req.body;
  users.push([name, username, password]);
  res.status(200).send({ message: "User Registration Successfully" });
})

//get Users
app.get('/users', (req, res) => {
  res.json(users);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
