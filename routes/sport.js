var express   = require('express'),
    router    = express.Router(),
    sports     = require("../controller/sport");
 
// TODO: 

router.route('/')
 .get(sports.getList)

router.route('/create')
  .get(sports.getForm)
  .post(sports.createSport)

router.route('/sport/:id/edit')
  .get(sports.getForm)
  .put(sports.updateSport) // should use Yelp api to re-populate data
  .delete(sports.deleteSport)

router.route('/:id')
  .get(sports.getSport)
  
module.exports = router;