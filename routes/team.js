var express = require('express');
var router = express.Router();
var teams = require("../controller/team");

router.route('/')
 .get(teams.list)

 router.route('/create')
 .get(teams.newForm)
 .post(teams.create)

router.route('/:id/edit')
 .get(teams.editForm) // need to create form
 .put(teams.update) // todo
 .delete(teams.delete) // todo
 
router.route('/:id')
 .get(teams.findbyid)
  
module.exports = router;