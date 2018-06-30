var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res) {
    res.render('start');
});

app.get('/hello', function(req,res) {
  res.render('hello');
});

    
app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Nie odnaleziono takiej strony');
});
 