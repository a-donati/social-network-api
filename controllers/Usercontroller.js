// require the User model
const { User, Thought } = require('../models');


module.exports = {
// create new user
createUser(req, res) {
    User.create(req.body)
      .then((userData) => res.json(userData))
      .catch((err) => res.status(500).json(err));
  },

// get all users
getAllUsers(req, res) {
    User.find({})
    // populate user thoughts
    .populate({path: 'thoughts', select: '-__v'})
    // populate user friends
    .populate({path: 'friends', select: '-__v'})
    .select('-__v')
    .then(async(users) => {
        const userObj = {
            users
        };
        return res.json(userObj);
    })
    .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    });
},
// get single user
getSingleUser(req, res) {
    User.findOne({ _id: req.params.id})
    // populate thoughts for single user
    .populate({path: 'thoughts', select: '-__v'})
    // populate user friends for single user
    .populate({path: 'friends', select: '-__v'})
    .select('-__v')
    .then(async(userData) => 
    // if no userData
    !userData
    ? res.status(404).json({ message: 'No user found with this ID' })
    // else, return the user data
    : res.json({
        userData
    })
    )
    .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    });
},

// update user by ID
updateUser(req, res) {
    // find user by id, update, run validation
    User.findOneAndUpdate({ _id: req.params.id}, req.body, {new: true, runValidators: true})
    .then(userData => {
        if(!userData){
            res.status(404).json({message: `No user found with this ID`});
            return;
        }
        res.json(userData)
    })
    .catch(err => res.json(err))
},

// delete a user
deleteUser(req, res) {
    // find user by id and delete
    User.findOneAndDelete({ _id: req.params.id })
    .then(userData => {
        if(!userData) {
            res.status(404).json( { message: 'No user found with this ID'} );
            return;
        }
        res.json(userData);
    })
    .catch(err => res.status(400).json(err));
},

// add a friend
addFriend(req, res) {
    // find user by ID, push friend to friends array
    User.findOneAndUpdate({ _id: req.params.id }, {$push: { friends: req.params.friendId}}, { new: true })
    // populate friends
    .populate({ path: 'friends', select: ('-__v')})
    .select('-__v')
    .then(userData => {
        if(!userData) {
            res.status(404).json({ message: 'No user found with this ID'});
            return;
        }
        res.json(userData);
    })
    .catch(err => res.status(400).json(err));
},
// delete a friend

deleteFriend(req, res) {
    // find user by id, pull friend id from friends array
    User.findOneAndUpdate({ _id: req.params.id }, { $pull: { friends: req.params.friendId }}, {new: true})
    .populate({ path: 'friends', select: '-__v'})
    .select('-__v')
    .then(userData => {
        if(!userData) {
            res.status(404).json( { message: 'No user found with this ID' });
            return;
        }
        res.json(userData);
    })
    .catch(err => res.status(400).json(err));
}
// end of export
};