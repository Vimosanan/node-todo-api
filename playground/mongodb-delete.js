// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();




  MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
      return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server.');

    // db.collection('Todos').deleteMany({text: 'you eat.'}).then((result) => {
    //   console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'you eat.'}).then((result) => {
    //   console.log(result);
    // })

    // db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
    //   console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
      _id: new ObjectID ("5af27d243a7f8e158df282cf")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

    db.close();
  });
