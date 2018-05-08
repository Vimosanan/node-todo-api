// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);

//Object Destructuring
/* var user = {name: 'joseph', age: 34, location:'Vietnam'}
var {name} = user;
console.log(name);
*/

  MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
      return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server.');
    // db.collection('Todos').insertOne({
    //   text: 'Something new to node.',
    //   completed: false
    // }, (err, result) => {
    //   if(err){
    //     return console.log('Unable to proceed insert todo', err);
    //   }
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //   name: 'Andrew',
    //   age: 25,
    //   location: 'Maldives'
    // },(err, result) => {
    //   if(err){
    //     return console.log('Unable to proceed insert User', err);
    //   }
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    //   console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
  });
