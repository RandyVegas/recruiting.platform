const express = require('express');
require('./db/mongoose');
const vacancyRouter = require('./routers/vacancies');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(vacancyRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});