const router = require('express').Router();

const {
    createThought,
    getAllThoughts,
    getSingleThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/Thoughtcontroller')

// /api/thoughts - GET
router.route('/').get(getAllThoughts);

// /api/thoughts/:thoughtId - GET, PUT, DELETE
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought)

// /api/thoughts/:thoughtId - POST
router.route('/:thoughtId').post(createThought);

// /api/thoughts/:thoughtId/reactions - POST
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactionId - DELETE
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)
module.exports = router;
