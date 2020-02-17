var mongoose = require('mongoose');

var spotSchema = new mongoose.Schema({
    yelp: {
        type: Object,
        require: true
    },
    teams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'team'
    }]
})

// Virtual 
spotSchema
    .virtual('url')
    .get(function() {
        return '/spot/' + this._id
    })

module.exports = mongoose.model("Spot", spotSchema)