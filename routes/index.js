const express = require('express');
const router = express.Router();

const messages = [
  { text: 'Hi there!', user: 'Amanda', added: new Date() },
  { text: 'Hello World!', user: 'Charles', added: new Date() }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages});
});
/* GET new message form. */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Message' });
});
/* POST new message form. */
router.post('/new', function(req, res, next) {
  messages.push({text: req.body.message, user: req.body.author, added: new Date()});
  res.redirect('/')
});

module.exports = router;
