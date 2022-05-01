const connection = require('../config/connection');
const { User, Thought } = require('../models');

const getThought = require('./thought-seeds');
const getUser = require('./user-seeds');

// create connection to mongodb
connection.once('open', async() => {
    // delete existing entries in collection
    await User.deleteMany({});
    await Thought.deleteMany({});
    // empty arrays to hold users and thoughts
    let users = [];
    let thoughts = [];
// loop 15 times to get thought and user seed data 
    for(let i = 0; i < 15; i++) {
        thoughts.push(getThought());
        users.push(getUser());
    }
    // push thought and user data into collections
    await Thought.collection.insertMany(thoughts);
    await User.collection.insertMany(users);

    console.table(users);
    console.table(thoughts);
    process.exit(0);
})
