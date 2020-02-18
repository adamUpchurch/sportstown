var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    googleID: {type: String},
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