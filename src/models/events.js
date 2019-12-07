const mongoose = require('mongoose');
const Vacancy = require('./vacancies');

const Event = mongoose.model('Events', {
    date: {
        type: Date,
        require: true
    },
    vacancy:{
        type: String
    },
    type: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    quota: {
        type: Number
    }
});

module.exports = Event;