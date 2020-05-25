var db = require('../models')

module.exports = {
    list: (req, res) => {
        let user = req.user
        db.Team.find().sort({name: 1})
        .then(teams => {
            res.render('teams', {teams, user})
        })
        .catch(error => res.send(error))
    },
    newForm: (req, res) => {
        let user = req.user
        res.render('teamForm', {user})
    },
    create: (req, res) => {
        let user = req.user
        var team = {...req.body, status: "requested"}
        db.Team.create(team)
            .then(createdTeam => {
                res.render("team",{createdTeam, user, newlyCreated: true })
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
        let user = req.user
        db.Team.findByIdAndUpdate(req.params.id, req.body)
            .then(team => {
                res.render("team", {team, user})
            })
            .catch(error => res.send(error))
    },
    delete: (req, res) => {
        db.Team.findByIdAndDelete(req.params.id)
            .then(_ => res.redirect('/'))
    },
    findbyid: (req, res) => {
        let user = req.user
        db.Team.findById(req.params.id)
        .populate("homefields")
        .then(team => {
            res.render("team", {team, user})
        })
        .catch(error => res.send(error))
    },
    findByidForMap: (req, res) => {
        db.Team.findById(req.params.id)
            .sort({"yelp.location.state": 1 })
            .populate("Homefields")
            .then(team => {
                console.log(team)
                res.send({team: team})
            })
            .catch(error => res.send(error))
    }
}