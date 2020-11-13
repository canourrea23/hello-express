const express = require('express');
const app = express();


//making home route '/'
app.get('/', function(req, res) {
    res.send('Hello, SEI World');
});

app.listen(8000);