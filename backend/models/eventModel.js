const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        time: {
            type: Date,
            required: true
        },
        location: {
            type: String,
            required: false
        }
    }
)
module.exports = mongoose.model("event", userSchema);