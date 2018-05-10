var express = require('express');
var bodyParser = require('body-parser');

var {moongose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  },(e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req,res) => {
    Todo.find().then((todos) => {
      res.send({todos});
    }, (e) => {
      res.status(400).send(e);
    });
});

app.listen(3000, () => {
  console.log('Server started on 3000');
});

module.exports = {app}


// var newTodo = new Todo({
//   text: 'You eat',
//   completed: true,
//   completedAt: 4
// });
//
// newTodo.save().then((doc) => {
//   console.log('Sucessfully Saved.', doc);
// }, (e) => {
//   console.log('Unable to save.');
// });
//
//
// var otherTodo = new Todo({
//   text: "   Have to eat   ",
//   completed: true,
//   completedAt: 15
// });
//
// var user = new User({
//   email: 'andrew@yahoo.com'
// });
//
// user.save().then((doc) => {
//   console.log('Sucessfully saved.', doc );
// }, (err) => {
//   console.log('Unable to save.')
// })
//
// otherTodo.save().then((doc) => {
//   console.log('Sucessfully Saved.', doc);
// }, (e) => [
//   console.log('Unable to save.')
// ])
