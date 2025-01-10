const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get("/help", (req, res) => {
  res.send("You are contacted help path");
});

app.post("/help", (req, res) => {
  const { name, email, phone } = req.body;
  res.send(`Received the data - Name: ${name}, Email: ${email}, Phone: ${phone}`);
  console.log(`Received the data - Name: ${name}, Email: ${email}, Phone: ${phone}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});