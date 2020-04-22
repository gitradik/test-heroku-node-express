const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config(); 

const PORT = process.env.PORT || 80;

app.use(cors());
app.use(express.json());

const { pool } = require('./db');

// app.get('/', (req, res) => {
//   const { name } = req.query;
//   const message = `Hello ${name ? name : 'World'}`;

//   res.send(message);
// });


const doors = {
  model001:{
    name: "model001",
    // В БАЗЕ ДАННЫХ ОБЫЧНО ХРАНЯТСЯ ТОЛЬКО НАЗВЫНИЯ ФАЙЛОВ И НА ФРОНТЕ ТЕБЕ НУЖНО БУДТЕ ТОЛЬКО ПОДСТАВИТЬ `https://server-url/static/image/${file.name}`
    img: "https://radiant-stream-65729.herokuapp.com/static/image/qv07_02.png",
    price: "3000 грн"
  }
};

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
};



const qv08 = {
    version: "v2",
    content: {
      messages: [
        {
          type: "text",
          text: doors.model001.name,
        },
        {
          type: "text",
          text: doors.model001.price,
        },
        {
          type: "image",
          url: doors.model001.img,
          buttons: []
        },
        {
          type: "text",
          text: "Укажите контактный номер телефона",
        }
      ],
      actions: [],
      quick_replies: []
    }
};

const qv07 = {
  version: "v2",
  content: {
    messages: [
      {
        type: "text",
        text: "Выберите цвет"
      },
      {
        type: "cards",
        elements: [
          {
            title: "Белый ясень",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv07_01.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Палисандр",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 8,
                }
              }
            ]
          },
          {
            title: "Палисандр",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv07_02.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 8,
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

const qv06 = {
  version: "v2",
  content: {
    messages: [
      {
        type: "cards",
        elements: [
          {
            title: "Без стекла",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv06_02.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 7,
                }
              }
            ]
          },
          {
            title: "Со стеклом",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv06_01.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 7,
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

const qv05 = {
  version: "v2",
  content: {
    messages: [
      {
        type: "text",
        text: "Выберите одну из представленных моделей"
      },
      {
        type: "cards",
        elements: [
          {
            title: "Модель 01",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv05_01.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 6,
                }
              }
            ]
          },
          {
            title: "Модель 02",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv05_01.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 6,
                }
              }
            ]
          },
          {
            title: "Модель 03",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv05_01.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 6,
                }
              }
            ]
          },
          {
            title: "Модель 05",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv05_01.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 6,
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

const qv04 = {
  version: "v2",
  content: {
    messages: [
      {
        type: "cards",
        elements: [
          {
            title: "Двери с повышенной шумоизоляцией",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv04_01.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 5,
                }
              }
            ]
          },
          {
            title: "Двери с повышенной шумоизоляцией",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv04_02.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 5,
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

const qv03 = {
  version: "v2",
  content: {
    messages: [
      {
        type: "cards",
        elements: [
          {
            title: "На завтра! (на завтра существуют двери только в современном дизайне)",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv03_01.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 4,
                }
              }
            ]
          },
          {
            title: "Готов подождать",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv03_02.png",
            buttons: [
              {
                type: "dynamic_block_callback",
                caption: "Выбрать",
                url: "https://radiant-stream-65729.herokuapp.com/bst",
                method: "post",
                payload: {
                  count: 4,
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

const qv02 = {
  version: "v2",
  content: {
    messages: [
      {
        type: "cards",
        elements: [
          {
            title: "КЛАССИЧЕСКИЕ ДВЕРИ",
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv02_01.png",
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
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv02_02.png",
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
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/qv02_03.png",
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
            image_url: "q01.png",
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
            image_url: "q02.png",
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
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/q03.png",
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
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/q04.png",
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

  const main = req.body;
  
  switch (main.count){
    case 1: 
      res.send(qv01);
      break;
    case 2: 
      res.send(qv02);
      break;
    case 3: 
      res.send(qv03);
      break;
    case 4: 
      res.send(qv04);
      break;
    case 5: 
      res.send(qv05);
      break;
    case 6: 
      res.send(qv06);
      break;
    case 7: 
      res.send(qv07);
      break;
    case 8: 
      res.send(qv08);
      break;
    case 9: 
      res.send(qv09);
      break;
    default:
      res.send(message);
  }
  console.log(main.count);
});

app.put('/', (req, res) => {
  res.send(req.body); 
});


app.get('/', (req, res) => {
  // const { name } = req.query;
  // const message = `Hello ${name ? name : 'World'}`;
  
  res.send(qv01);
});


app.get('/db', async (req, res) => {
  try {
    const clientDb = await pool.connect();
    const result = await clientDb.query('SELECT * FROM test_table');
    const results = { 'results': (result) ? result.rows : null};
    res.send(results);
    client.release();
  } catch (err) {
    res.send("Error " + err);
  }
});
app.use('/static/image',
    express.static(__dirname + process.env.STATIC_URL, { fallthrough: true }),
    function (req, res) {
        res.sendFile(__dirname + process.env.STATIC_URL + '/' + process.env.STATIC_IMG_DEFAULT);
    },
);

app.listen(PORT);
