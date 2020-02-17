var express = require('express');
var router = express.Router();
var url = require('url');
var teams = require("../controller/team");
var spots = require("../controller/spot");
const { Yelp } = require("../config/key")
const yelp = require('yelp-fusion');
let db = require('../models')


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

router.route('/spot/:id')
  .get(spots.getSpot)

router.route('/spot')
.get(async (req, res) => {

  var {location, term, team} = url.parse(req.url, true).query;
  if (!location && !term && !team) {
    let teams = await db.Teams.find().sort({name: 1})
      .then(teams=> teams).catch(error => error)
    res.render('spotForm', {teams})
  } else {
    const client = yelp.client(Yelp.apiKey)
    const searchQuery = {location, term}
    team = await db.Teams.findById(team).then(team => team).catch(error => error)
    client.search(searchQuery)
      .then(spots => {
          console.log(spots.jsonBody.businesses)
          console.log(team)
          res.render("spotForm", {
              spots: spots.jsonBody.businesses,
              team
          })
      })
  }
  })
  .post( async (req, res) => {
    // team id
    // yelp data
    const {team_id, yelp} = req.body
    await db.Spots.findOneAndUpdate({"yelp.id": yelp.id}, {yelp: JSON.parse(yelp), "$push": { "teams": team_id}}, {upsert: true, returnNewDocument: true})
    .then(spot => res.redirect(spot.url))
    .catch(error => res.redirect('spot'))

  })

router.route('/spot/:id/edit')
  .get(spots.getForm)
  .put(spots.updateSpot)
  .delete(spots.deleteSpot)
  
module.exports = router;