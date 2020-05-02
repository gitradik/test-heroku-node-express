const express = require('express');
const router = express.Router();

const { 
  questionController,
} = require('./controllers');
const {
  questionMiddleware,
} = require('./middleware');

// QUESTION
router.post('/qv', questionMiddleware.saveUserResponse, questionMiddleware.getAllUserResponses, questionController.getQuestionByCount);

module.exports = router;