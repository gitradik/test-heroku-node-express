const express = require('express');
const router = express.Router();

const chatController = require('./controllers');

router.post('/chat', chatController.saveChat);
router.get('/chat/:id', chatController.getChatById);

module.exports = router;