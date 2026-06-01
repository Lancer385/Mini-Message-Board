const { body, validationResult, matchedData } = require("express-validator");
const {format} = require("date-fns");

function createNewDate(){
  return format(new Date(), 'dd/MM/yyyy hh:mm');
}
const messages = [
  {
    id: 0,
    text: "hello?",
    user: "lancer",
    date: createNewDate()
  },

  {
    id: 1 ,
    text: "hiiiiiii",
    user: "radish",
    date: createNewDate()
  }

]



const validateUser = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name can not be empty.")
    .isAlpha()
    .withMessage("Name must only contain alphabet letters."),  
  body("message")
  .trim()
  .notEmpty()
  .withMessage("Can't send empty message")
  .isLength({min: 20, max: 200}).withMessage("Message must be between 20 and 200 characters")
];

exports.messageListGet = (req, res) => {
  res.render('index', { title: 'Message Board' , messages: messages});
};
exports. sendMessageGet = (req, res) => {
  res.render('sendMessage');
}

exports.sendMessagePost = [
  validateUser,
  (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("sendMessage", {
      title: 'Message Board',
      errors: errors.array(),
    });
  }
  const {name, message} = matchedData(req);
  messages.push({id: messages.length, text: message, user: name, date: new Date()});
  res.redirect('/');
}]

exports.messageDetailsGet = (req, res, next) => {
    for (let message of messages){
      if (message.id === Number(req.params.id)){
        res.render("message", {message: message})
        return;
      }
    }
    next(createError(404))
  };