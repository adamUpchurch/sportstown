var express   = require('express'),
    router    = express.Router(),
    spots     = require("../controller/spot");
 
// TODO: 

router.route('/')
 .get(spots.getList)

router.route('/:id')
  .get(spots.getSpotByID)

router.route('/spot/:id/edit')
  .get(spots.getForm)
  .put(spots.updateSpot) // should use Yelp api to re-populate data
  .delete(spots.deleteSpot)

router.route('/create')
  .get(spots.getForm)
  .post(spots.createSpot)
  
module.exports = router;