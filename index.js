const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config(); 

const PORT = process.env.PORT || 80;

app.use(express.json());

const { pool } = require('./db');

app.get('/', (req, res) => {
  const { name } = req.query;
  const message = `Hello ${name ? name : 'World'}`;
  res.send(message);
});

app.get('/test', (req, res) => {
  const message = {
    name: "John",
    age: 30  
  };
  res.send(message);
});


app.put('/', (req, res) => {
  res.send(req.body); 
});

app.get('/db', async (req, res) => {
  try {
    const clientDb = await pool.connect();
    const result = await clientDb.query('SELECT * FROM test_table');
    const results = { 'results': (result) ? result.rows : null};
    res.send(JSON.stringify(results));
    client.release();
  } catch (err) {
    res.send("Error " + err);
  }
});

app.listen(PORT);