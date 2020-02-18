var db      = require('../models'),
    Async   = require('async');
//TODO: SANITIZE DATA BEFORE PUSHING TO DB

module.exports = {
    list: (req, res)=>{
        db.Sport.find().sort({name: 1})
            .then(sports=>{
                console.log(sports)
                res.render('sports', {sports});
            })
            .catch(err=>{
                res.send(err);
            })
    },
    newForm: (req, res) => {
        db.Sport.findById(req.params.id)
            .then(sport=> {
                res.render('sport', {sport})
            })
            // need to rerender form with errors and stuff
            .catch(error => res.send(error))
    },
    create: async (req, res)=>{
        res.render('sportForm')
    },
    editForm: (req, res) => {
        db.Sport.findById(req.params.id)
            .then(sport=> {
                res.render('sport', {sport})
            })
            // need to rerender form with errors and stuff
            .catch(error => res.send(error))
    },
    create: (req, res)=>{
        // need to sanitize data
        db.Sport.create(req.body)
            .then(sport => {
                res.redirect(sport.url)
            })
            // need to rerender form with errors and stuff
            .catch(error => res.send(error))
    },
    update: (req, res) => {
        db.Sport.findByIdAndUpdate(req.params.id, req.body)
            .then(sport => {
                res.redirect(sport.url)
            })
            .catch(error => res.send(error))
    },
    delete: (req, res) => {
        db.Sport.findByIdAndDelete(req.params.id)
            .then(_ => res.redirect('/'))
            .catch(error => res.send(error))
    },
    findbyid: (req, res) => {
        Async.parallel({
                sport: (cb) => db.Sport.findById(req.params.id).exec(cb)
            }
            , (error, results) => {
                const {sport, teams} = results
                if(error) next(error)
                if (sport==null) {
                    var err = new Error("Sport not found")
                    error.status = 404
                    return next(error)
                }
                res.render('sport', {sport, teams})
            }
    )},
    redirectHome: (req, res) => {
        req.redirect('/')
    }
}