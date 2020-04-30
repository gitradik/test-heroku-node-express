const express = require('express');
const app = express();
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config(); 

const PORT = process.env.PORT || 80;

app.use(cors());
app.use(express.json());

const doors = {
  sc04:{
    name: 'SC-04',
    type: 'modern',
    time: 'fast',
    adv: 'normal',
    modelType: '01',
    glass: false,
    color: '',
    img: 'https://radiant-stream-65729.herokuapp.com/static/image/qv07_02.png',
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
        // {
        //   type: "text",
        //   text: doors.model001.name,
        // },
        // {
        //   type: "text",
        //   text: doors.model001.price,
        // },
        // {
        //   type: "image",
        //   url: doors.model001.img,
        //   buttons: []
        // },
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
            title: "Стандартные двери",
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
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/q01.png",
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
            image_url: "https://radiant-stream-65729.herokuapp.com/static/image/q02.png",
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
  switch (req.body.count){
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
});

app.put('/', (req, res) => {
  res.send(req.body); 
});

app.get('/', (req, res) => {  
  res.send(qv01);
});

const db = require('./models');
const Chat = require('./models/chat')(db.sequelize, db.Sequelize);

app.post('/chat', async (req, res) => {
  const newChat = new Chat(req.body);
  
  try {
    const chat = await newChat.save();
    res.send(chat);
  } catch (err) {
    console.error(err);
  } 

  res.send({ err: 'invalid' });
});

app.get('/chat/:id', async (req, res) => {
  const id = req.params.id;

  let chats = [];

  try {
    chats = await Chat.findAll({
      where: {
        userId: id
      },
    })
  } catch (err) {
    // console.error(err.errors);
  } 

  res.send(chats);
});

app.use('/static/image',
    express.static(__dirname + process.env.STATIC_URL, { fallthrough: true }),
    function (req, res) {
        res.sendFile(__dirname + process.env.STATIC_URL + '/' + process.env.STATIC_IMG_DEFAULT);
    },
);

app.listen(PORT);
