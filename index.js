const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config(); 

const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT);