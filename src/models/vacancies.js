const mongoose = require('mongoose');

const Vacancy = mongoose.model('Vacancy', {
    title: {
        type: String,
        required: true,
        trim: true
    },
    code: {
        type: String,
        required: true,
        trim: true
    },
    set: {
        type: String
    },
    functional: {
        type: String
    },
    shedule: {
        type: String
    },
    type_of_work: {
        type: String
    },
    shedule: {
        type: String
    },
    income: {
        type: String
    },
    training: {
        type: String
    },
    registration: {
        type: String
    },
    set_process: {
        type: String
    },
    conditions: {
        type: Array
    },
    process: {
        type: Array
    }
});

module.exports = Vacancy;