var express   = require('express'),
    router    = express.Router(),
    sports     = require("../controller/sport");
 
// TODO: 

router.route('/')
 .get(sports.list)

router.route('/create')
  .post(sports.create)

router.route('/:id/edit')
  .get(sports.redirectHome)
  .put(sports.redirectHome) // should use Yelp api to re-populate data
  .delete(sports.redirectHome)

router.route('/:id')
  .get(sports.findbyid)
  
module.exports = router;