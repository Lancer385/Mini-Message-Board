const express = require('express');
const { messageListGet, sendMessageGet, sendMessagePost, messageDetailsGet } = require('../controllers/userController');
const router = express.Router();



router.get('/', messageListGet);

router.get('/new', sendMessageGet);

router.post('/new', sendMessagePost);

router.get('/message/:id', messageDetailsGet)

module.exports = router;
