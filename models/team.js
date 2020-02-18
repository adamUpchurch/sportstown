var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    mascot: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    image: {
        type: String,
    },
    sports:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sport'
    }],
    homefields: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Homefield'
    }]
})

teamSchema
    .virtual('url')
    .get(function() {
        return '/team/' + this._id
    })


module.exports = mongoose.model("Team", teamSchema)