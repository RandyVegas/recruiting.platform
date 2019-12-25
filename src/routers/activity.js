const express = require('express');
const Activity = require('../models/activity');
const tracker = require('../middleware/tracker');
const router = new express.Router();

router.post('/track', tracker, async (req, res) => {
    const track = new Activity(req.body);

    try {
        await track.save();
        return res.status(201).send();
    } catch(e) {
        res.status(400).send(e);
    }
});

router.get('/activity', tracker, async (req, res) => {
    try {
        const activities = await Activity.find({}, 'url user createdAt');

        delete activities.updatedAt;
        delete activities.__v;
        delete activities._id;
        
        res.send(activities);
    } catch(e){
        res.status(500).send();
    }
});

module.exports = router;