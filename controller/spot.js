var db = require('../models');

module.exports = {
    getList: (req, res)=>{
        db.Spots.find().sort({name: 1})
            .then(spots=> res.render('spots', {spots}))
            .catch(err=> res.send(err))
    },
    getSpotByID: (req, res) => {
        db.Spots.findById(req.params.id)
            .then(spot=> {
                res.render('spot', {spot})
            })
            // need to rerender form with errors and stuff
            .catch(error => res.send(error))
    },
    getForm: async (req, res) => {
        var {location, term, team} = url.parse(req.url, true).query;
        if (!location && !term && !team) {
          let teams = await db.Teams.find().sort({name: 1})
            .then(teams=> teams).catch(error => error)
          res.render('spotForm', {teams})
        } else {
          const client = yelp.client(Yelp.apiKey)
          team = await db.Teams.findById(team).then(team => team).catch(error => error)
          client.search({location, term})
            .then(spots => {
                console.log(spots.jsonBody.businesses)
                console.log(team)
                res.render("spotForm", {
                    spots: spots.jsonBody.businesses,
                    team
                })
            })
        }
    },
    createSpot: async (req, res) => {
        // team id
        // yelp data
        const {team_id, yelp} = req.body
        await db.Spots.findOneAndUpdate({"yelp.id": yelp.id}, {yelp: JSON.parse(yelp), "$push": { "teams": team_id}}, {upsert: true, returnNewDocument: true})
        .then(spot => res.redirect(spot.url))
        .catch(error => res.redirect('spot'))
    },
    updateSpot: (req, res) => {
        db.Sports.findByIdAndUpdate(req.params.id, req.body)
            .then(spot => {
                res.redirect(spot.url)
            })
            .catch(error => res.send(error))
    },
    deleteSpot: (req, res) => {
        db.Teams.findByIdAndDelete(req.params.id)
            .then(_ => res.redirect('/'))
            .catch(error => res.send(error))
    }
}