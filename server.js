var express = require('express');
var app = express();

app.use('/', require('./routes/index'));

app.listen(27017, () => {
    console.log('Server is running on port 27017');
});
