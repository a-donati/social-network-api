const router = require('express').Router();

// require from Usercontroller.js
const {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/Usercontroller')

// /api/users - GET and POST route
router.route('/').get(getAllUsers).post(createUser);

// api/users/:id
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;
