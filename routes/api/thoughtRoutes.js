const router = require('express').Router();

const  {
createThought,
getAllThoughts,
getSingleThought,
deleteThought,
addReaction,
deleteReaction
} = require('../../controllers/Thoughtcontroller')

// api/thoughts GET and POST route

router.route('/').get(getAllThoughts).post(createThought);

module.exports = router;
