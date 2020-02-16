var db = require('../models')

module.exports = {
    getTeams: (req, res) => {
        db.Teams.find()
        .then(teams => {
            res.render('teams', {teams})
        })
        .catch(error => res.send(error))
    },
    getForm: (req, res) => {
        res.render('teamForm')
    },
    createTeam: (req, res) => {
        db.Teams.create(req.body)
            .then(team => {
                res.render("team", {team})
            })
            .catch(error => res.send(error))
    },
    getTeam: (req, res) => {
        db.Teams.findById(req.params.id)
        .then(team => {
            res.render("team", {team})
        })
        .catch(error => res.send(error))
    },
    updateTeam: (req, res) => {
        db.Teams.findByIdAndUpdate(req.params.id, req.body)
            .then(team => {
                res.render("team", {team})
            })
            .catch(error => res.send(error))
    },
    deleteTeam: (req, res) => {
        db.Teams.findByIdAndDelete(req.params.id)
            .then(_ => res.redirect('/'))
    }
}