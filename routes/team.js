var express = require('express');
var router = express.Router();
var teams = require("../controller/team");

router.route('/list')
 .get(teams.getTeams)
  
router.route('/:id')
 .get(teams.getTeam)

router.route('/:id/edit')
 .get(teams.getForm)
 .put(teams.updateTeam)
 .delete(teams.deleteTeam)
 
 router.route('/')
 .get(teams.getForm)
 .post(teams.createTeam)
  
module.exports = router;