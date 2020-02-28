var mongoose = require('mongoose');

var homefieldSchema = new mongoose.Schema({
    yelp: {
        type: Object,
        require: true
    },
    teams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }],
    geometry: {
        type: "Object",
        require: true
    },
})

// Virtual 
homefieldSchema
    .virtual('url')
    .get(function() {
        return '/homefield/' + this._id
    })
// Virtual 
homefieldSchema
    .virtual('content')
    .get(function() {
        return `<h3>${this.yelp.name}</h3> <a href="${this.yelp.url}" target="_blank">Go to their yelp</a>`
    })

module.exports = mongoose.model("Homefield", homefieldSchema)