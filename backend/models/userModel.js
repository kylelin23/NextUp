const mongoose = require('mongoose');
const findOrCreate = require("mongoose-findorcreate");

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: true
        },
        realname: {
            type: String,
            required: true
        },
        birthday : {
            type: Date,
            required: false
        }, 
        friends: {
            type: Array,
            required: true,
        },
        googleId: {
            type: String,
            required: true
        }
    }
)

userSchema.plugin(findOrCreate);

module.exports = mongoose.model("user", userSchema);