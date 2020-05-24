var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
    },
    league: {
        type: String,
    },
    logo: {
        type: String,
    },
    status: {
        enum: [ "approved", "pending", "rejected",  null ]
    },
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

var autoPopulateLead = function(next) {
        this.populate('homefields');
        this.populate('sport');
        next();
      };

      teamSchema.
  pre('findOne', autoPopulateLead).
  pre('find', autoPopulateLead);

module.exports = mongoose.model("Team", teamSchema)