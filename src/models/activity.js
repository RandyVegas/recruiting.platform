const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    url:{
        type: String,
        require: true
    },
    user: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})


const Activity = mongoose.model('Activities', activitySchema);

module.exports = Activity;