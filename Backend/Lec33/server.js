const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const port = 3000;  
app.set('view engine', 'ejs');
app.set('views', './views');
app.use( userRoutes);
app.use(express.json());

// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});