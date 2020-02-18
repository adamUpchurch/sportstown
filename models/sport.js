var mongoose = require('mongoose');

var sportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    teams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }]
})

// Virtual 
sportSchema
    .virtual('url')
    .get(function() {
        return '/sport/' + this._id
    })

module.exports = mongoose.model("Sport", sportSchema)