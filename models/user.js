var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    googleID: {type: String, unique: true, sparse: true},
    facebookID: {type: String, unique: true, sparse: true},
    twitterID: {type: String, unique: true, sparse: true},
    homefieldsAdded: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Homefield'
    }],
    teamsAdded: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }],
})

userSchema
    .virtual('url')
    .get(function() {
        return '/user/' + this._id
    })


module.exports = mongoose.model("User", userSchema)