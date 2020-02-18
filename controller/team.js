var db = require('../models')

module.exports = {
    list: (req, res) => {
        db.Team.find().sort({name: 1})
        .then(teams => {
            res.render('teams', {teams})
        })
        .catch(error => res.send(error))
    },
    newForm: (req, res) => {
        res.render('teamForm')
    },
    create: (req, res) => {
        db.Team.create(req.body)
            .then(team => {
                res.render("team", {team})
            })
            .catch(error => res.send(error))
    },
    editForm: async(req, res) => {
        await db.Team.findById(req.params.id)
        .populate('Homefield')
        .then(team=> {
            res.send({team, edit: true})
        })
        .catch(error => res.send(error))
    },
    update: (req, res) => {
        db.Team.findByIdAndUpdate(req.params.id, req.body)
            .then(team => {
                res.render("team", {team})
            })
            .catch(error => res.send(error))
    },
    delete: (req, res) => {
        db.Team.findByIdAndDelete(req.params.id)
            .then(_ => res.redirect('/'))
    },
    findbyid: (req, res) => {
        db.Team.findById(req.params.id)
        .then(team => {
            res.render("team", {team})
        })
        .catch(error => res.send(error))
    }
}