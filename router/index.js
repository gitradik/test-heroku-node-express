const express = require('express');
const router = express.Router();

const { 
  questionController,
} = require('./controllers');
const {
  questionMiddleware,
} = require('./middleware');

// QUESTION
router.post('/qv', questionMiddleware.saveUserResponse, questionController.getQuestionByKey);
router.post('/qv-result', questionMiddleware.saveUserResponse, questionController.getSelectedDoors);

module.exports = router;