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
    spotsAdded: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'spot'
    }],
    teamsAdded: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'team'
    }],
})

module.exports = mongoose.model("User", userSchema)