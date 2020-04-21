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

const message = {
  version: "v2",
  content:{
    messages: [
      {
        type: "text",
        text: "simple text"
      }
    ]
  }
}


const gallery = {
  version: "v2",
  content: {
    messages: [
      {
        type: "cards",
        elements: [
          {
            title: "Card title",
            subtitle: "card text",
            image_url: "https://manybot-thumbnails.s3.eu-central-1.amazonaws.com/ca/xxxxxxzzzzzzzzz.png",
            action_url: "https://manychat.com",
            buttons: []
          },
          {
            title: "Card title 2",
            subtitle: "card text 2",
            image_url: "https://manybot-thumbnails.s3.eu-central-1.amazonaws.com/ca/xxxxxxzzzzzzzzz.png",
            action_url: "https://manychat.com",
            buttons: []
          }
        ],
        image_aspect_ratio: "horizontal"
      }
    ],
    actions: [],
    quick_replies: []
  }
};

const qv01 = {
  version: "v2",
  content: {
    messages: [
      {
        type: "list",
        top_element_style: "compact",
        buttons: [],
        elements: [
          {
            title: "Плохая звукоизоляция",
            image_url: "https://radiant-stream-65729.herokuapp.com/img/q01.png",
            buttons: []
          },
          {
            title: "Плохая устойчивость к влаге",
            image_url: "https://radiant-stream-65729.herokuapp.com/img/q02.png",
            buttons: []
          },
          {
            title: "Некачественные материалы",
            image_url: "https://radiant-stream-65729.herokuapp.com/img/q03.png",
            buttons: []
          },
          {
            title: "Дверь не подлежала реставрации",
            image_url: "https://radiant-stream-65729.herokuapp.com/img/q04.png",
            buttons: []
          }
        ]
      }
    ],
    actions: [],
    quick_replies: []
  }
};


app.get('/test', (req, res) => {
  res.send(JSON.stringify(message));
});

app.post('/bst', (req, res) => {

  let main = req.body;

  if(main.count == 1)
  {
    res.send(qv01);
  }else{
    res.send(message);
  }
  
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