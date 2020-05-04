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
    const selectedDoors = doors.filter(d =>
      d.type === req.body.type &&
      d.time === req.body.time &&
      d.adv === req.body.adv &&
      d.modelType === req.body.modelType &&
      d.glass === req.body.glass &&
      d.color === req.body.color
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

  if (doors.length) {
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
    });
  } else {
    messages.push({
      "type": "text",
      "text": "Нет двери"
    });
  }

  messages.push({
    "type": "text",
    "text": "Укажите контактный номер телефона"
  });

  return messages;
}