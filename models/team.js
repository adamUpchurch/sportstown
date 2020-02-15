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
        type: String,
    }],
    googleID: {type: String},
    spots: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'spot'
    }]
})

module.exports = mongoose.model("Team", teamSchema)