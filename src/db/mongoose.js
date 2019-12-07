const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_PURPLE_URI || 'mongodb://127.0.0.1:27017/recruiting-platform', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).catch(err => {
    console.log(process.env.MONGOLAB_PURPLE_URI);
        console.log ('ERROR connecting to: ' + err);
});