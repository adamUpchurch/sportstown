var express     = require('express'),
    router      = express.Router(),
    homefields  = require("../controller/homefield");
 
// TODO: 

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
 .get(adminCheck, homefields.list)

router.route('/create')
  .get(authCheck, homefields.newForm)
  .post(authCheck, homefields.create)
  

// TODO: Need to fix edit form, what to update? 
// Maybe just enable the removal of teams...?
// Allow deleting of homefield

router.route('/:id/edit')
  .get(authCheck, homefields.editForm)
  .put(authCheck, homefields.update) // should use Yelp api to re-populate data
  .delete(adminCheck, homefields.delete)

router.route('/:id')
  .get(homefields.findbyid)


module.exports = router;