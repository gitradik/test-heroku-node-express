const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config(); 

const PORT = process.env.PORT || 80;

const pool = require('./db');

app.get('/', (req, res) => {
  res.send('Hello World' + req.query.var);
});

app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM test_table');
    const results = { 'results': (result) ? result.rows : null};
    res.render('pages/db', results );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

app.listen(PORT);