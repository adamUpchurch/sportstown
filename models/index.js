// var keys = require('../config/keys')

var mongoose = require("mongoose");
mongoose.set("debug", true); // see queries in terminal
// does it return promises?
mongoose.Promise = Promise
mongoose.connect("mongodb+srv://adam:NUUvk7OC3kizskK1@cluster0-hz3sc.mongodb.net/sportstown?retryWrites=true&w=majority", {
    keepAlive: true
});

module.exports = {
    User: require("./user"), // Need to do all of this lololol
    Team: require("./team"),  // Need to do a better screen of seeing all the homefields
    Homefield: require("./homefield"), // Have done first part need to do editing, updating and delete
  }