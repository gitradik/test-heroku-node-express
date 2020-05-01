const express = require('express');
const router = express.Router();

const { 
  chatController,
  questionController,
} = require('./controllers');

// CHAT
router.post('/chat', chatController.saveChat);
router.get('/chat/:id', chatController.getChatById);

// QUESTION
router.post('/qv', questionController.getQuestionByCount);

module.exports = router;