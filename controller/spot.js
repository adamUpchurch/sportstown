var db = require('../models');

module.exports = {
    getSpots: (req, res)=>{
        db.Spots.find()
            .then(spots=>{
                console.log(spots)
                res.render('spots', {spots});
            })
            .catch(err=>{
                res.send(err);
            })
    },
    getForm: async (req, res)=>{
        if (!req.params.id){
            let teams = await db.Teams.find().then(teams=> teams).catch(error => error)
            res.render('spotForm', {teams})
        }
        else {
            db.Spots.findById(req.params.id)
            .then(spot=> {
                res.render('spot', {spot})
            })
            // need to rerender form with errors and stuff
            .catch(error => res.send(error))
        }
    },
    createSpot: (req, res)=>{
        // need to sanitize data
        db.Spots.create(req.body)
            .then(spot => {
                res.redirect(spot.url)
            })
            // need to rerender form with errors and stuff
            .catch(error => res.send(error))
    },
    getSpot: (req, res) => {
        db.Spots.findById(req.params.id)
            .then(spot=> {
                res.render('spot', {spot})
            })
            // need to rerender form with errors and stuff
            .catch(error => res.send(error))
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