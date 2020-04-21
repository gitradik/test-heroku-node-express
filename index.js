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
        text: "Ошибка"
      }
    ]
  }
}


const qv02 = {
  version: "v2",
  content: {
    messages: [
      {
        type: "cards",
        elements: [
          {
            title: "КЛАССИЧЕСКИЕ ДВЕРИ",
            image_url: "https://radiant-stream-65729.herokuapp.com/img/qv02_01.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 3,
                }
              }
            ]
          },
          {
            title: "СОВРЕМЕННЫЕ ДВЕРИ",
            image_url: "https://radiant-stream-65729.herokuapp.com/img/qv02_02.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 3,
                }
              }
            ]
          },
          {
            title: "СКРЫТЫЕ ДВЕРИ",
            image_url: "https://radiant-stream-65729.herokuapp.com/img/qv02_03.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 3,
                }
              }
            ]
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
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 2,
                }
              }
            ]
          },
          {
            title: "Плохая устойчивость к влаге",
            image_url: "https://radiant-stream-65729.herokuapp.com/img/q02.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 2,
                }
              }
            ]
          },
          {
            title: "Некачественные материалы",
            image_url: "https://radiant-stream-65729.herokuapp.com/img/q03.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 2,
                }
              }
            ]
          },
          {
            title: "Дверь не подлежала реставрации",
            image_url: "https://radiant-stream-65729.herokuapp.com/img/q04.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 2,
                }
              }
            ]
          }
        ]
      }
    ],
    actions: [],
    quick_replies: []
  }
};



app.post('/bst', (req, res) => {

  let main = req.body;

  switch (main.count){
    case 1: 
      res.send(qv01);
      break;
    case 2: 
      res.send(qv02);
      break;
    default:
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