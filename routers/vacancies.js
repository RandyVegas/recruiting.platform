const express = require('express');
var cors = require('cors');
const Vacancy = require('../models/vacancies');
const router = new express.Router();

var whitelist = ['http://localhost:4200', 'https://recruiting-portal.herokuapp.com/']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

router.post('/vacancies', cors(corsOptions), async (req, res) => {
    const task = new Vacancy(req.body);

    try {
        await task.save();
        return res.status(201).send();
    } catch(e) {
        res.status(400).send(e);
    }
});

router.get('/vacancies', cors(corsOptions), async (req, res) => {
    try {
        const tasks = await Vacancy.find({});
        res.send(tasks);
    } catch(e){
        res.status(500).send();
    }
});

router.get('/vacancies/:id', cors(corsOptions), async (req, res) => {
    const code = req.params.id;
    
    try {
        const vacancy = await Vacancy.findById({code: code});

        if (!vacancy) {
            return res.status(404).send()
        }

        res.send(vacancy);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;