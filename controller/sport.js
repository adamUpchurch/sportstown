var db = require('../models');

//TODO: SANITIZE DATA BEFORE PUSHING TO DB

module.exports = {
    getList: (req, res)=>{
        db.Sports.find()
            .then(sports=>{
                console.log(sports)
                res.render('sports', {sports});
            })
            .catch(err=>{
                res.send(err);
            })
    },
    getSport: (req, res) => {
        db.Sports.findById(req.params.id)
            .then(sport=> {
                res.render('sport', {sport})
            })
            // need to rerender form with errors and stuff
            .catch(error => res.send(error))
    },
    getForm: async (req, res)=>{
        res.render('sportForm')
    },
    createSport: (req, res)=>{
        // need to sanitize data
        db.Sports.create(req.body)
            .then(sport => {
                res.redirect(sport.url)
            })
            // need to rerender form with errors and stuff
            .catch(error => res.send(error))
    },
    updateSport: (req, res) => {
        db.Sports.findByIdAndUpdate(req.params.id, req.body)
            .then(sport => {
                res.redirect(sport.url)
            })
            .catch(error => res.send(error))
    },
    deleteSport: (req, res) => {
        db.Sports.findByIdAndDelete(req.params.id)
            .then(_ => res.redirect('/'))
            .catch(error => res.send(error))
    }
}