const express = require('express');
const Vacancy = require('../models/vacancies');
const router = new express.Router();

router.post('/vacancies', async (req, res) => {
    const task = new Vacancy(req.body);

    try {
        await task.save();
        return res.status(201).send();
    } catch (e) {
        res.status(400).send(e);
    }
});

router.patch('/vacancies/:id', async (req, res) => {
    try {
        const vacancy = await Vacancy.findOneAndUpdate({code: req.params.id}, req.body, {
            new: true,
            runValidators: true
        });

        if (!vacancy) {
            return res.status(404).send();
        }

        res.send(vacancy);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/vacancies', async (req, res) => {
    try {
        const tasks = await Vacancy.find({});
        res.send(tasks);
    } catch (e) {
        res.status(500).send();
    }
});

router.get('/vacancies/:id', async (req, res) => {
    const code = req.params.id;

    try {
        const vacancy = await Vacancy.find({
            code: code
        });

        if (!vacancy) {
            return res.status(404).send()
        }

        res.send(vacancy);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;