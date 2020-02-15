var mongoose = require('mongoose');
mongoose.set('debug', true); // see queries in terminal

// does it return promises?
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/sportstown', {
    keepAlive: true,
    useMongoClient: true

});

module.exports = {
    User: require("./user"),
    Team: require("./team"),
    Spot: require('./spot')
  }