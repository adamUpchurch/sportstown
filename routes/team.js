var express = require('express');
var router = express.Router();
var teams = require("../controller/team");

const authCheck = (req, res, next) => {
    console.log("AUTH CHECKING THIS MOTHER FUCKER")
    console.log(req.user)
    if(!req.user) res.redirect('/auth/login')
    else next()
  }
  
  const adminCheck = (req, res, next) => {
    console.log("ADMIN CHECKING THIS MOTHER FUCKER")
    console.log(req.user)
    if(!req.user.admin) res.redirect('/')
    else next()
  }

router.route('/')
 .get(adminCheck, teams.list)

 router.route('/create')
 .get(authCheck, teams.newForm)
 .post(teams.create)
 .post(authCheck, teams.create)

router.route('/map/:id')
 .get(teams.findByidForMap)

router.route('/:id/edit')
 .get(authCheck, teams.editForm) // need to create form
 .put(authCheck, teams.update) // todo
 .delete(authCheck, teams.delete) // todo

router.route('/:id')
 .get(authCheck, teams.findbyid)
  
module.exports = router;