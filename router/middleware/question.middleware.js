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
      const chat = await Chat.create(newChat);
      req.body = {
        ...chat,
      };
    }

    await next();
  } catch (err) {
    res.send(err);
  }
};