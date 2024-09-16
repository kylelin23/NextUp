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
        },
        creator: {
            type: String,
            required: true
        },
        users: {
            type: Array,
            required: true
        },
        groups: {
            type: Array,
            required: true
        }
    }
)
module.exports = mongoose.model("event", eventSchema);