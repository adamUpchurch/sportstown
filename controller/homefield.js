var db      = require('../models'),
    url     = require('url'),
    yelp    = require('yelp-fusion'),
    {Yelp}    = require('../config/key')


module.exports = {
    list: (req, res)=>{
        console.log('Rendering homefield list')
        db.Homefield.find().sort({name: 1})
            .then(homefields=> {
                console.log(homefields)
                res.render('homefields', {homefields})}
                )
            .catch(err=> res.send(err))
    },
    findbyid: (req, res) => {
        db.Homefield.findById(req.params.id)
            .then(homefield=> {
                res.render('homefield', {homefield})
            })
            // need to rerender form with errors and stuff
            .catch(error => res.send(error))
    },
    newForm: async (req, res) => {
        var {location, term, team} = url.parse(req.url, true).query;
        console.log(req.url)
        if (!location && !term && !team) {
          location = location ? location : "Yo, need a city or zip!"
          term = term ? term : "Where is your homefield?"
          team = team ? team : "You need to select a team"
          let teams = await db.Team.find().sort({name: 1})
            .then(teams=> teams).catch(error => error)
          res.render('homefieldForm', {teams, location, term, team})
        } 
        
        else {
          const client = yelp.client(Yelp.apiKey)
          team = await db.Team.findById(team).then(team => team).catch(error => error)
          client.search({location, term})
            .then(homefields => {
                let locations = homefields.jsonBody.businesses
                if (!locations) {
                    res.render('homefieldForm', {error: "no locations found"})
                }
                console.log("Businesses", homefields.jsonBody.businesses)
                console.log("TEAM:", team)

                res.render("homefieldForm", {
                    homefields: homefields.jsonBody.businesses,
                    team,
                    newHomeField: true
                })
            })
        }
    },
    create: async (req, res) => {
        // team id
        // yelp data
        var {team_id, yelp} = req.body
        yelp = JSON.parse(yelp)
        console.log(yelp)
        await db.Homefield.findOneAndUpdate({"yelp.id": yelp.id}, {yelp, "$push": { "teams": team_id}}, {upsert: true, returnNewDocument: true})
        .then(homefield => res.redirect(homefield.url))
        .catch(error => res.redirect('/'))
    },
    editForm: async(req, res) => {
        await db.Homefield.findById(req.params.id)
        .populate('teams')
        .then(homefield=> {
            res.render('homefieldForm', {homefield, edit: true})
        })
        .catch(error => res.send(error))
    },
    update: (req, res) => {
        db.Homefield.findByIdAndUpdate(req.params.id, req.body)
            .then(homefield => {
                res.redirect(homefield.url)
            })
            .catch(error => res.send(error))
    },
    delete: (req, res) => {
        console.log('delelting thisbitch')
        db.Homefield.findByIdAndDelete(req.params.id)
            .then(_ => res.render('/landing'))
            .catch(error => res.send(error))
    }
}