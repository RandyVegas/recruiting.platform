const path = require('path');
const express = require('express');
const hbs = require('hbs');
var cors = require('cors');
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

var whitelist = ['http://localhost:4200', 'http://localhost:3000', 'https://recruiting-portal.herokuapp.com/']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

app.use(cors())

app.use(express.static(publickDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title: 'recruiting-platform',
        name: 'Igor'
    });
});

app.use(express.json());
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