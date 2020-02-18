var express     = require('express'),
    router      = express.Router(),
    homefields  = require("../controller/homefield");
 
// TODO: 

router.route('/')
 .get(homefields.list)

router.route('/create')
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