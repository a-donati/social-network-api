const { User, Thought } = require('../models');

module.exports = {

  // create a new Thought
  createThought(req, res) {
    Thought.create(req.body)
    .then((thoughtData) => {
        User.updateOne({_id: req.body.userId}, {
            $push: {
                thoughts: thoughtData._id
            }
        },{new: true}).catch(err => console.log(err));
        res.json(thoughtData);
    }).catch((err) => res.status(500).json(err));
  },
    // get all thoughts
    getAllThoughts(req, res) {
        // find all thoughts
        Thought.find({})
            // populate reactions
            .populate({ path: 'reactions', select: '-__v' })
            .select('-__v')
            .then(thoughtData => res.json(thoughtData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // get a thought by ID - destructure req.params
    getSingleThought({ params }, res) {
        // find single thought where _id =  req.params.id
        Thought.findOne({ _id: params.thoughtId })
            // populate reactions
            .populate({ path: 'reactions', select: '-__v' })
            .select('-__v')
            .then(thoughtData => {
                if (!thoughtData) {
                    res.status(404).json({ message: 'No thoughts found by this ID' });
                    return;
                }
                res.json(thoughtData);
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(404);
            })
    },
    // update thought
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.thoughtId }, body, { new: true, runValidators: true })
            .populate({ path: 'reactions', select: '-__v' })
            .select('-___v')
            .then(dbThoughtsData => {
                if (!dbThoughtsData) {
                    res.status(404).json({ message: 'No thoughts with this particular ID!' });
                    return;
                }
                res.json(dbThoughtsData);
            })
            .catch(err => res.json(err));
    },

    // delete thought by ID - destructure req.params
    deleteThought({ params }, res) {
        // find Thought and delete where _id : req.params.id
        Thought.findOneAndDelete({ _id: params.thoughtId })
            .then(thoughtData => {
                if (!thoughtData) {
                    res.status(404).json({ message: 'No thoughts found by this ID' });
                    return;
                }
                res.json(thoughtData);
            })
            .catch(err => res.status(400).json(err));
    },
    // add reaction
    addReaction({ params, body }, res) {
        // find Thought by id, push new reaction to reactions array
        Thought.findOneAndUpdate({ _id: params.thoughtId }, { $push: { reactions: body } }, { new: true, runValidators: true })
            .populate({ path: 'reactions', select: '-__v' })
            .select('-__v')
            .then(thoughtData => {
                if (!thoughtData) {
                    res.status(404).json({ message: 'No thought found by this ID' });
                    return;
                }
                res.json(thoughtData);
            })
            .catch(err => res.status(400).json(err));
    },

    // delete reaction through id
    deleteReaction( req, res) {
        // find Thought by id, pull reaction from array
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { new: true })
            .then(dbThoughtsData => {
                if (!dbThoughtsData) {
                    res.status(404).json({ message: 'No thoughts with this particular ID!' });
                    return;
                }
                res.json('Deleted');
            })
            .catch(err => res.status(400).json(err));
    }
    // end of export
}