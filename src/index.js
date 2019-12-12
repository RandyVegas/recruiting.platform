const express = require('express');
require('./db/mongoose');
const cors = require('cors');
const hbs = require('hbs');
const path = require('path');
const userRouter = require('./routers/user');
const vacancyRouter = require('./routers/vacancies');
const eventsRouter = require('./routers/events');

const app = express();
const port = process.env.PORT || 3000;

var whitelist = ['http://localhost:4200', 
                'http://localhost:3000', 
                'https://recruiting-portal.herokuapp.com/',
                'https://recruiting-platform.herokuapp.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors());

const publickDirectory = path.join(__dirname, './public');
const viewsPath = path.join(__dirname, './templates/views');
const partialsPath = path.join(__dirname, './templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.json());
app.use(userRouter);
app.use(vacancyRouter);
app.use(eventsRouter);

app.use(express.static(publickDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title: 'recruiting-platform',
        name: 'Igor'
    });
});

// app.options('*', cors());

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});