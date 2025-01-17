const express = require('express');
const router = express.Router();
module.exports = router;
// read all users
app.use(express.json());

// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));
router.get('/user/all', (req, res) => {
  res.send('User list');
});
// read user by id
router.get('/user/new', (req, res) => {
  res.render('newUser');
});
router.post('/userdata', (req, res) => {
  const {name, email, password} = req.body;
  const newUser={
    name,
    email,
    password
  }
  User.push(newUser);
});
router.get('/user/new', (req, res) => {     

    res.send('User details');
    }                   );