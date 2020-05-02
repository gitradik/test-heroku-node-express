const questions = require('../../utils/qv.json');
const doors = require('../../utils/doors.json');
const lastQvKey = questions[questions.length - 1].key;

module.exports.getQuestionByKey = async (req, res) => {  
  const qv = questions.find(q => q.key === req.body.key);

  if (qv && lastQvKey !== qv.key) {
    res.send(qv);
  } else {
    res.status(400).send({
      err: {
        message: "Question not found",
      }
    });
  }
};

module.exports.getSelectedDoors = async (req, res) => {
  const qv = questions.find(q => q.key === req.body.key);

  if (qv && lastQvKey === qv.key) {
    const { userChat } = req.body;
  
    const selectedDoors = doors.filter(d => 
        d.type === userChat.type &&
        d.time === userChat.time &&
        d.adv === userChat.adv &&
        d.modelType === userChat.modelType &&
        d.glass === userChat.glass &&
        d.color === userChat.color
      );

    qv.content.messages = generateMessages(selectedDoors);

    res.send(qv); 
  } else {
    res.status(400).send({
      err: {
        message: "Question not found",
      }
    });
  }
};

function generateMessages(doors) {
  const messages = [];

  if (Array.isArray(doors)) {
    doors.forEach(d => {
      messages.push({
        "type": "text",
        "text": `Название: ${d.name},\nЦена: ${d.price}`,
      });
      messages.push({
        "type": "image",
        "url": d.img,
        "buttons": [],
      });
    })
  }

  messages.push({
    "type": "text",
    "text": "Укажите контактный номер телефона"
  });

  return messages;
}