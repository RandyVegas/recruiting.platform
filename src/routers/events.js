const express = require('express');
const Event = require('../models/events');
const router = new express.Router();

router.post('/events', async (req, res) => {
    const event = new Event(req.body);

    try {
        await event.save();
        return res.status(201).send();
    } catch(e) {
        res.status(400).send(e);
    }
});

router.get('/events', async (req, res) => {
    try {
        const events = await Event.find({})
            .populate({path: 'vacancy', select: 'title'});
        
        res.send(events);
    } catch(e){
        res.status(500).send();
    }
});

router.get('/events/:id', async(req, res) => {
    const _id = req.params.id;

    try {
        const event = await Event.findById(_id);

        if (!event){
            return res.status(404).send();
        }

        res.send(event);
    } catch(e) {
        res.status(500).send();
    }
});

router.patch('/events/:id', async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!event) {
            return res.status(404).send();
        }

        res.send(event);
    } catch(e) {
        res.status(400).send(e);
    }
});

router.delete('/events/:id', async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        
        if (!event) {
            return res.status(404).send();
        }

        res.send(event);
    }   catch(e) {
        res.status(500).send();
    }
});

module.exports = router;