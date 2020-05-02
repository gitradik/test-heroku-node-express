const questions = require('../../utils/qv.json');

module.exports.getQuestionByCount = (req, res) => {  
  const qv = questions.find(q => q.key === req.body.key);
  
  if (qv) {
    res.send({ qv, responses: req.body.responses, });
  } else {
    res.status(400).send({
      err: {
        message: "Question not found",
      }
    });
  }
};