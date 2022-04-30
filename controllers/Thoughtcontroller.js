const { User, Thought } = require('../models');
const { getAllUsers } = require('./Usercontroller');
// const { ObjectId } = require('mongoose').Types;

module.exports = {

// create a new thought - destructure params and body
createThought({params, body}, res) {
    // create new thought from req body
    Thought.create(body)
    // using req id, find user and update - push new thought to thoughts array
    .then(({ _id }) => {
        return User.findOneAndUpdate({ _id: params.userId}, {$push: {thoughts: _id}}, {new: true}); 
    })
    .then(thoughtData => {
        if(!thoughtData){
            res.status(404).json({ message: 'No thought found by this ID'});
            return;
        }
        res.json(thoughtData);
    })
    .catch(err => res.json(err));
},
// get all thoughts
getAllThoughts(req, res) {
    // find all thoughts
    Thought.find({})
    // populate reactions
    .populate({path: 'reactions', select: '-__v'})
    .select('-__v')
    .then(thoughtData => res.json(thoughtData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
},

// get a thought by ID - destructure req.params
getSingleThought({params}, res) {
    // find single thought where _id =  req.params.id
    Thought.findOne({ _id: params.id })
    // populate reactions
    .populate({ path: 'reactions', select: '-__v'})
    .select('-__v')
    .then(thoughtData => {
        if(!thoughtData){
            res.status(404).json({ message: 'No thoughts found by this ID'});
            return;
        }
        res.json(thoughtData);
    })
    .catch(err => {
        console.log(err);
        res.sendStatus(404);
    })
},

// update thought by ID - destructure req.params
deleteThought({ params }, res) {
    // find Thought and delete where _id : req.params.id
    Thought.findOneAndDelete({ _id: params.id })
    .then(thoughtData => {
        if(!thoughtData){
            res.status(404).json({ message: 'No thoughts found by this ID'});
            return;
        }
        res.json(thoughtData);
    })
    .catch(err => res.status(400).json(err));
},
// add reaction
addReaction({params, body}, res){
    // find Thought by id, push new reaction to reactions array
    Thought.findOneAndUpdate({ _id: params.thoughtId}, {$push: {reactions: body}}, { new: true, runValidators: true })
    .populate({ path: 'reactions', select: '-__v'})
    .select('-__v')
    .then(thoughtData => {
        if(!thoughtData){
            res.status(404).json({ message: 'No thought found by this ID'});
            return; 
        }
        res.json(thoughtData);
    })
    .catch(err => res.status(400).json(err));
},

// delete reaction through id
deleteReaction({params}, res) {
    // find Thought by id, pull reaction from array
    Thought.findOneAndUpdate({ _id: params.thoughtId }, { $pull: { reactions: { reactionId: params.reactionId }}}, { new : true })
    .then(dbThoughtsData => {
        if (!dbThoughtsData) {
            res.status(404).json({message: 'No thoughts with this particular ID!'});
            return;
        }
        res.json(dbThoughtsData);
    })
    .catch(err => res.status(400).json(err));
}
// end of export
}