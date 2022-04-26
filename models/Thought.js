const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true
        },
        // nested documents referencing reactionSchema
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
        // * true ? 
        id: false,
    }
)

// virtual for retrieving length of reactions array
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})
// instantiate Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;