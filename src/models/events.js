const mongoose = require('mongoose');
const Vacancy = require('./vacancies');

const Event = mongoose.model('Events', {
    date_start: {
        type: Date,
        default: Date.now
    },
    date_end: {
        type: Date
    },
    vacancy:[{
        type: String,
        ref: 'Vacancy'
    }],
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