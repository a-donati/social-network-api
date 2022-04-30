// schema only 
const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        // mongoose ObjectId data type
        type: Schema.Types.ObjectId,
        // default value set to new ObjectId
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},
    {
        toJSON: {
            getters: true,
        },
        // excluding ID field in JSON response.
        id: false,
    }
);

module.exports = reactionSchema