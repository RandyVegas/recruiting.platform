const express = require('express');
require('./db/mongoose');
const cors = require('cors');
const hbs = require('hbs');
const path = require('path');
const userRouter = require('./routers/user');
const vacancyRouter = require('./routers/vacancies');
const eventsRouter = require('./routers/events');

const app = express();
const port = process.env.Port || 3000;

const publickDirectory = path.join(__dirname, './public');
const viewsPath = path.join(__dirname, './templates/views');
const partialsPath = path.join(__dirname, './templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(cors());

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

app.use(express.json());

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});