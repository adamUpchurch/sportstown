var express = require('express');
var router = express.Router();
var teams = require("../controller/team");
var spots = require("../controller/spot");
const { Yelp } = require("../config/key")
const yelp = require('yelp-fusion');


router.route('/')
 .get((req, res) => res.render('landing'))

router.route('/teams')
 .get(teams.getTeams)


router.route('/team')
 .get(teams.getForm)
 .post(teams.createTeam)
  
router.route('/team/:id')
 .get(teams.getTeam)

router.route('/team/:id/edit')
 .get(teams.getForm)
 .put(teams.updateTeam)
 .delete(teams.deleteTeam)
 
router.route('/spots')
 .get(spots.getSpots)

router.route('/spot')
 .get(spots.getForm)
 .post(spots.createSpot)

router.route('/spot/:id')
  .get(spots.getSpot)

router.route('/search')
  .get((req, res) => {
    res.render('spotForm')
  })
  .post((req, res) => {
      const client = yelp.client(Yelp.apiKey)
      client.search({...req.body, limit: 10})
        .then(spots => {
            console.log(spots.jsonBody.businesses)
            res.render("spotForm", {
                spots: spots.jsonBody.businesses
            })
        })
  })

router.route('/spot/:id/edit')
  .get(spots.getForm)
  .put(spots.updateSpot)
  .delete(spots.deleteSpot)
  
module.exports = router;