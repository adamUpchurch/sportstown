var mongoose = require('mongoose');
mongoose.set('debug', true); // see queries in terminal

// does it return promises?
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/sportstown', {
    keepAlive: true

});

module.exports = {
    Users: require("./user"),
    Teams: require("./team"),
    Spots: require('./spot'),
    Sports: require('./sport'),
  }