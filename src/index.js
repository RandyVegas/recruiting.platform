const express = require('express');
require('./db/mongoose');
const cors = require('cors');
const userRouter = require('./routers/user');
const vacancyRouter = require('./routers/vacancies');
const eventsRouter = require('./routers/events');

const app = express();
const port = process.env.Port || 3000;

app.use(cors());

app.use(express.json());
app.use(userRouter);
app.use(vacancyRouter);
app.use(eventsRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});