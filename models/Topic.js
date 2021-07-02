const mongoose = require('mongoose');

const topicSchema = mongoose.Schema({
    name: {
    type: String,
    required: true
    },
    color:{
    typ: String,
    },
    weekday: {
    type: String,
    },
    start: {
    type: String,
    },
    end: {
    type: String,
    },
    date: {
        type: String,
    },
})
module.exports = mongoose.model('Topics', topicSchema);