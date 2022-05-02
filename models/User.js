const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            // unique: true,
            required: true,
            trim: true

        },
        email: {
            type: String,
            required: true,
            unique: true,
            // use match to validate email
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    }
)

// virtual for total number of friends
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})
// instantiate User model
const User = model('User', userSchema);

module.exports = User;