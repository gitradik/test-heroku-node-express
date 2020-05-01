const { 
  saveChat,
  getChatById,
} = require('./chat.controller');
const {
  getQuestionByCount,
} = require('./question.controller');

module.exports.chatController = {
  saveChat,
  getChatById,
};

module.exports.questionController = {
  getQuestionByCount,
};