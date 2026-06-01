const express = require('express');
const createError = require('http-errors');
const { messageListGet, sendMessageGet, sendMessagePost, messageDetailsGet } = require('../controllers/userController');
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


router.get('/', messageListGet);

router.get('/new', sendMessageGet);

router.post('/new', sendMessagePost);

router.get('/message/:id', messageDetailsGet )

module.exports = router;
