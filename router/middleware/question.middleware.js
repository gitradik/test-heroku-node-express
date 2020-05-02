const db = require('../../models');
const Chat = require('../../models/chat')(db.sequelize, db.Sequelize);

module.exports.saveUserResponse = async (req, res, next) => {
  const chat = new Chat({
    userId: req.body.id,
    key: req.body.key,
  });

  try {
    await chat.save();
    await next();
  } catch (err) {
    res.send(err);
  }
};

module.exports.getAllUserResponses = async (req, res, next) => {
  try {
    req.body.responses = await Chat.findAll({
      attributes: ['userId', 'key'],
      where: {
        userId: req.body.id,
      },
    });
    
    next();
  } catch (err) {
    res.send(err);
  } 
};