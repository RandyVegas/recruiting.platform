const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/recruiting-platform', {
    useNewUrlParser: true,
    useCreateIndex: true
}).catch(err => {
        console.log ('ERROR connecting to: ' + err);
});