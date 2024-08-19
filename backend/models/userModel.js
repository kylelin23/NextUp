const mongoose = require('mongoose');
const findOrCreate = require("mongoose-findorcreate");

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: false,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
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
            required: true
        },
        friendrequests:{
            type: Array,
            required: true,
        },
        groupinvites:{
            type: Array,
            required: true
        },
        googleId: {
            type: String,
            required: true,
            unique: true
        }
    }
)

userSchema.plugin(findOrCreate);

module.exports = mongoose.model("user", userSchema);