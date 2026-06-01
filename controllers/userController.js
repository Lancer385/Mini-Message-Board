const { body, validationResult, matchedData } = require("express-validator");
const { format } = require('date-fns');
const createError = require('http-errors');
const db = require("../db/queries");

const validateUser = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name can not be empty."), 
  body("message")
  .trim()
  .notEmpty()
  .withMessage("Can't send empty message")
  .isLength({min: 20, max: 200}).withMessage("Message must be between 20 and 200 characters")
];

exports.messageListGet = async (req, res) => {
  const messages = await db.getAllMessages();
  res.render('index', { title: 'Message Board' , messages: messages, format: format});
};
exports. sendMessageGet = (req, res) => {
  res.render('sendMessage');
}

exports.sendMessagePost = [
  validateUser,
  async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("sendMessage", {
      title: 'Message Board',
      errors: errors.array(),
    });
  }
  const {name, message} = matchedData(req);
  await db.sendMessage(name, message);
  res.redirect('/');
}]

exports.messageDetailsGet =  async (req, res, next) => {
  const rows = await db.viewMessageDetails(req.params.id)
      if (rows.length !== 0){

        console.log('username', rows[0].username)
        res.render("message", {message: rows[0]})
        return;
      }
    next(createError(404))
    }
  ;