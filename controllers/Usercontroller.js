const { User, Thought } = require('../models');
const { ObjectId } = require('mongoose').Types;


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
    .populate({path: 'thoughts', select: '-__v'})
    // populate user friends
    .populate({path: 'friends', select: '-__v'})
    .select('-__v')
    .then(async(userData) => 
    // if no userData
    !userData
    ? res.status(404).json({ message: 'No user found by this ID' })
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
    Users.findOneAndUpdate({ _id: req.params.id}, body, {new: true, runValidators: true})
    .then(userData => {
        if(!userData){
            res.status(404).json({message: `No user with this ID`});
            return;
        }
        res.json(userData)
    })
    .catch(err => res.json(err))
}

// delete a user



// end of export
}