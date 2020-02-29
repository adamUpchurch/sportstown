var db      = require('../models'),
    url     = require('url'),
    // {Yelp}    = require('../config/keys'),
    yelp    = require('yelp-fusion');


module.exports = {
    list: (req, res)=>{
        db.Homefield.find().sort({name: 1})
            .then(homefields=> {
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
        if (!location && !term && !team) {
          location = location ? location : "Yo, need a city or zip!"
          term = term ? term : "Where is your homefield?"
          team = team ? team : "You need to select a team"
          let teams = await db.Team.find().sort({name: 1})
            .then(teams=> teams).catch(error => error)
          res.render('homefieldForm', {teams, location, term, team})
        } 
        
        else {
          const client = yelp.client(process.env.YELP_API_KEY)
          team = await db.Team.findById(team).then(team => team).catch(error => error)
          client.search({location, term})
            .then(homefields => {
                let locations = homefields.jsonBody.businesses
                if (!locations) {
                    res.render('homefieldForm', {error: "no locations found"})
                }

                res.render("homefieldForm", {
                    homefields: homefields.jsonBody.businesses,
                    team,
                    newHomeField: true
                })
            })
        }
    },
    create: async (req, res) => {
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
            
            content: `<h5>${homefield.yelp.name}</h5> <a href="${homefield.yelp.url}" target="_blank">Go to their yelp</a>`,
        }
    
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
                new: true,
                returnNewDocument: true
            })
            .then(foundHomefield => {
                console.log("adding homefield to the teammmmm")
                console.log(foundHomefield._id)
                let team = db.Team.findByIdAndUpdate(
                        team_id, 
                        {
                            "$push": {
                                "homefields": foundHomefield._id
                            }
                        }, 
                        {
                            upsert: true,
                            new: true,  
                            returnNewDocument: true
                        })
                    .then(team => {
                        console.log("NEW TEAaaaaaaaaam")
                        return team
                    })
                    .catch(error=> console.log(error))
                res.redirect(`/?team=${team._id}`)
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