const mongoose = require('mongoose');

const Vacancy = mongoose.model('Vacancy', {
    title: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = Vacancy;