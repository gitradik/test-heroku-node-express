const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config(); 

const PORT = process.env.PORT || 80;

app.get('/', function (req, res) {
  res.send('Доброе утро, Денис');
});

app.listen(PORT);