const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneID = new ObjectID();
const userTwoID = new ObjectID();

const users = [{
  _id: userOneID,
  email: 'userone@test.com',
  password: 'userOnePass',
  tokens:[{
    access: 'auth',
    token: jwt.sign({_id: userOneID, access:'auth'}, 'abc123').toString()
  }]
}, {
  _id:userTwoID,
  email: 'usertwo@test.com',
  password: 'userTwoPass',
}];

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo'
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 333
}];

var populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
}

var populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(user[0]).save();
    var userTwo = new User(user[1]).save();

    return Promise.all([userOne, userTwo]);
  }).then(() => done());
};
module.exports = {todos, populateTodos};
