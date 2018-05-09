// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();




  MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
      return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server.');

    // db.collection('Users').findOneAndUpdate({
    //   _id: new ObjectID("5af28ec3481d4b17a08e01d2")
    // }, {
    //   $set: {
    //     age: 30
    //   }
    // }, {
    //   returnOriginal:false
    // }).then((result) => {
    //   console.log(result);
    // });

    db.collection("Users").findOneAndUpdate({
      _id: new ObjectID("5af28ec3481d4b17a08e01d2")
    },{
      $inc: {
        age: 2
      }
    },{
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

    db.close();
  });
