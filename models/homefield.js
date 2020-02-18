var mongoose = require('mongoose');

var homefieldSchema = new mongoose.Schema({
    yelp: {
        type: Object,
        require: true
    },
    teams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }]
})

// Virtual 
homefieldSchema
    .virtual('url')
    .get(function() {
        return '/homefield/' + this._id
    })

module.exports = mongoose.model("Homefield", homefieldSchema)