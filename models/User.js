const { Schema, model } = require('mongoose');
const Thought = require('./Thought')


const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true

        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }],
        friends: [
            //   self reference
            {
                type: Schema.types.ObjectId,
                ref: 'User'
            }
        ],
        toJSON: {
            virtuals: true,
            getters: true,
        },

    },

)

// virtual for total number of friends
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const User = model('user', userSchema);

module.exports = User;