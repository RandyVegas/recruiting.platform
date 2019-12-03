const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
require('../db/mongoose');
const vacancyRouter = require('../routers/vacancies');

const app = express();
const port = process.env.PORT || 3000;

const publickDirectory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publickDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title: 'recruiting-platform',
        name: 'Igor'
    });
});


app.use(vacancyRouter);

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Error page',
        name: 'Igor',
        errorMessage: 'Page not found.'
    });
});

app.listen(port, () => {
    console.log('Server is up on port ' + port + '.');
});