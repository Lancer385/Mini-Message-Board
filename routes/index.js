const express = require('express');
const router = express.Router();


const messages = [
  {
    text: "hello?",
    user: "Lancer",
    date: new Date()
  },

  {
    text: "hiiiiiii",
    user: "Radish",
    date: new Date()
  }

]

router.get('/', function(req, res) {
  res.render('index', { title: 'Message Board' , messages: messages});
});

module.exports = router;
