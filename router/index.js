const express = require('express');
const router = express.Router();

const chatController = require('./controllers');

router.post(chatController.saveChat);
router.get(chatController.getChatById);

module.exports = router;