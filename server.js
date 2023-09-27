var express = require('express');
var app = express();
const mongodb = require('./db/connect');

app.use('/', require('./routes/index'));


mongodb.initDb((err,mongodb) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Mongodb is connected')
        app.listen(8080, () => {
            console.log('Server is running on port 8080');
        });
    }
})