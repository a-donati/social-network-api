const { Schema, model } = require('mongoose');
const Thought = require('./Thought')
const validator = require('validator');


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
            validate: {
                validator: validator.isEmail,
                message: '{VALUE} is not a valid email',
                isAsync: false
              }
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
          ]
    }
)