var db      = require('../models'),
    url     = require('url'),
    yelp    = require('yelp-fusion'),
    {Yelp}    = require('../config/keys')


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
        console.log(req.body)
        var {team_id, yelp} = req.body
        var homefield = {yelp: JSON.parse(yelp)}
        
        // extracting Yelp location data for easier data parsing
        // is this smart or stupid? lol
        // well I guess it's good to put in type and content
        homefield.geometry =  {
            "type": "Point",
            coordinates: [
                homefield.yelp.coordinates.latitude,
                homefield.yelp.coordinates.longitude,
                7.4
            ],
            content: `<h1>${yelp.name}</h1> <a href="${yelp.url}">Go to their yelp</a>`,
        }

        console.log(homefield)
    
        await db.Homefield.findOneAndUpdate({
                "yelp.id": homefield.yelp.id
            }, 
            {
            yelp: homefield.yelp,
            geometry: homefield.geometry,
            "$push": { 
                "teams": team_id
            }
            }, 
            {
                upsert: true, 
                returnNewDocument: true
            })
            .then(async homefield => {
                console.log("Pusing homefield to team.homefields")
                await db.Team.findByIdAndUpdate(team_id, {"$push": {"homefields": homefield._id}})
                .catch(error=> console.log(error))
                res.redirect(homefield.url)
            })
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