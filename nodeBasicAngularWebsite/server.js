var express = require('express');
var app = express();

// GET /public folder STATIC FILES
app.use(express.static(__dirname + '/public'));

app.listen(3000);