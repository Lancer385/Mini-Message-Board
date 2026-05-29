const express = require('express');
const createError = require('http-errors');
const router = express.Router();


const messages = [
  {
    id: 0,
    text: "hello?",
    user: "lancer",
    date: new Date()
  },

  {
    id: 1 ,
    text: "hiiiiiii",
    user: "radish",
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
    messages.push({id: messages.length, text: message, user: name, date: new Date()})

  res.redirect('/');
});

router.get('/message/:id', (req, res, next) => {
    for (let message of messages){
      if (message.id === Number(req.params.id)){
        res.render("message", {message: message})
        return;
      }
    }
    next(createError(404))
})

module.exports = router;
