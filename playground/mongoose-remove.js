const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id='5af436f2a87bd84b8d30df26';

Todo.remove({}).then((result) => {
  console.log(result);
});
//
// Todo.findOneAndRemove({_id: '5af52f88b5944fa9808b166d' }).then((todo) => {
//   console.log(todo);
// });
//
// Todo.findByIdAndRemove({_id: '5af436f2a87bd84b8d30df26'}).then((todo) => {
//   console.log(todo);
// });
