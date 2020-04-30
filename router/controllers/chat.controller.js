const db = require('../../models');
const Chat = require('../../models/chat')(db.sequelize, db.Sequelize);

module.exports.saveChat = ('/chat', async (req, res) => {
  const newChat = new Chat(req.body);
  
  try {
    const chat = await newChat.save();

    res.send(chat);
  } catch (err) {
    res.send(err);
  } 
});

module.exports.getChatById = ('/chat/:id', async (req, res) => {
  const id = req.params.id;

  let chats = [];

  try {
    chats = await Chat.findAll({
      where: {
        userId: id,
      },
    });

    res.send(chats);
  } catch (err) {
    res.send(err);
  } 
});