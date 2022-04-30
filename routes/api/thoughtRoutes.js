const router = require('express').Router();

const  {
createThought,
getAllThoughts,
getSingleThought,
updateThought,
deleteThought,
addReaction,
deleteReaction
} = require('../../controllers/Thoughtcontroller')

// api/thoughts GET and POST route
router.route('/').get(getAllThoughts);

// api/thoughts/:id
router.route('/:id').get(getSingleThought)

module.exports = router;
