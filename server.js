var express = require('express');
var app = express();

app.use('/', require('./routes/index'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});