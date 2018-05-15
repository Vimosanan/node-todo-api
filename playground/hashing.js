const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// var password = "123abc";
//
// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log('Hashed Password: ', hash);
//   });
// });

// var hashedPassword = '$2a$10$yNnJc3yEPr1jCdmwQhyWQODEg9Eaxt63/H2yJ3Tg2rGD3wMG3Bgqa';
//
// bcrypt.compare('123abc', hashedPassword, (err, res) => {
//   console.log(res);
// });

// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, 'abc123');
// console.log(token);
//
// var decoded = jwt.verify(token, 'abc123');
// console.log('Decoded: ', decoded);


// var message = 'I have to go buddy.';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash Value: ${hash}`);
//
// var data = {
//   id: 4
// }
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString()
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()
//
// if(resultHash === token.hash){
//   console.log('Data was not changed.');
// }else{
//   console.log(`Data was changed. Don't trust`);
// }
