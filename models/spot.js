var mongoose = require('mongoose');

var spotSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    yelpInfo: {
        address: {
            type: String,
            required: true
        },
    },
    teams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'team'
    }]
})

module.exports = mongoose.model("Spot", spotSchema)