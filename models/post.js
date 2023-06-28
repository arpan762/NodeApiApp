const mongoose = require('mongoose');
const postschema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a name"]
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        count: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }
);


module.exports = mongoose.model('Posts', postschema);