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

router.get('/new', function(req, res) {
  res.render('form');
});

router.post('/new', function(req, res) {
    const {name, message} = req.body
    messages.push({text: message, user: name, date: new Date()})

  res.redirect('/');
});

module.exports = router;
