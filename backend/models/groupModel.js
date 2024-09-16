const mongoose = require('mongoose');

const groupSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        owner: {
            type: String,
            required: true
        },
        members: {
            type: Array,
            required: true
        },
        events: {
            type: Array,
            required: true
        }
    }
)

module.exports = mongoose.model("group", groupSchema);