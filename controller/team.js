var db = require('../models')

module.exports = {
    list: (req, res) => {
        db.Team.find().sort({name: 1})
        .then(teams => {
            res.render('teams', {teams, isAuthenticated: req.isAuthenticated()})
        })
        .catch(error => res.send(error))
    },
    newForm: (req, res) => {
        res.render('teamForm', {isAuthenticated: req.isAuthenticated()})
    },
    create: (req, res) => {
        db.Team.create(req.body)
            .then(team => {
                res.render("team", {team, isAuthenticated: req.isAuthenticated()})
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
                res.render("team", {team, isAuthenticated: req.isAuthenticated()})
            })
            .catch(error => res.send(error))
    },
    delete: (req, res) => {
        db.Team.findByIdAndDelete(req.params.id)
            .then(_ => res.redirect('/'))
    },
    findbyid: (req, res) => {
        db.Team.findById(req.params.id)
        .populate("homefields")
        .then(team => {
            res.render("team", {team, isAuthenticated: req.isAuthenticated()})
        })
        .catch(error => res.send(error))
    },
    findByidForMap: async (req, res) => {
        await db.Team.findById(req.params.id)
            .populate("homefields")
            .then(team => {
                // let geometries = team.homefields.map(homefield => homefield.geometry)
                console.log(team)
                let locations = [
                    {"geometry":{"type":"Point","coordinates":[37.769921,-122.424824],"content":"<h1>Taco Bell</h1> <a href=\"https://www.yelp.com/biz/taco-bell-san-francisco-9?adjust_creative=L29oZl_jxqGjExoW2NqMcw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=L29oZl_jxqGjExoW2NqMcw\">Go to their yelp</a>"}}
                  ]
                res.send({locations})
            })
            .catch(error => res.send(error))
    }
}