var mongoose = require('mongoose');

mongoose.Prmoise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose}
