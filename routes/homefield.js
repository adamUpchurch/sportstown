var express     = require('express'),
    router      = express.Router(),
    homefields  = require("../controller/homefield");
 
// TODO: 

const authCheck = (req, res, next) => {
  if(!req.user) res.redirect('/auth/login')
  else next()
}

router.route('/')
 .get(homefields.list)

router.route('/create', authCheck)
  .get(homefields.newForm)
  .post(homefields.create)
  

// TODO: Need to fix edit form, what to update? 
// Maybe just enable the removal of teams...?
// Allow deleting of homefield

router.route('/:id/edit')
  .get(homefields.editForm)
  .put(homefields.update) // should use Yelp api to re-populate data
  .delete(homefields.delete)

router.route('/:id')
  .get(homefields.findbyid)


module.exports = router;