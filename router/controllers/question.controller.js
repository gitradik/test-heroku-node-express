const questions = require('../../utils/questions/qv.json');

module.exports.getQuestionByCount = (req, res) => {  
  const qv = questions.find(q => q.key === req.body.count);
  if (qv) { 
    res.send(qv);
  }

  res.send({ err: "not qv" });
};