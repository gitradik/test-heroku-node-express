const db = require('../../models');
const Chat = require('../../models/chat')(db.sequelize, db.Sequelize);

module.exports.saveUserResponse = async (req, res, next) => {
  const newChat = {
    ...req.body,
    userId: req.body.id,
  };
  delete newChat.id;

  try {
    const obj = await Chat.findOne({
      where: {
        userId: newChat.userId,
      }
    });

    if (obj) {
      await obj.update(newChat);
    } else {
      await Chat.create(newChat);
    }

    await next();
  } catch (err) {
    res.send(err);
  }
};

module.exports.setAllUserResponses = async (req, res, next) => {
  try {
    req.body.userChat = await Chat.findOne({
      attributes: [
        'id',
        'userId',
        'key', 
        'type',
        'time',
        'adv',
        'modelType',
        'glass',
        'color',
      ],
      where: {
        userId: req.body.id,
      },
    });
    
    await next();
  } catch (err) {
    res.send(err);
  } 
};