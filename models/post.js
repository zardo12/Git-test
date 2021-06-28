const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    tittel: {
    type: String,
    required: true
    },
    content: {
    type: String,
    required: true
    },
    date: {
    type: Date,
    default: Date.now()
    }
})
module.exports = mongoose.model('Posts', postSchema);