var createError = require('http-errors');
var express = require('express');
var path = require('path');
const port = process.env.PORT;


var app = express();
var route = require("./src/routes/index");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/rnco_api_private', route);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send({ error: 'Page non trouver' })
});

app.use(function(req, res, next) {
  res.status(401).send({ error: 'Accés-refusé' })
});

app.use(function(req, res, next) {
  res.status(444).send({ error: 'MISE A JOURS EN COURS' })
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).send({ error: err })
});


app.listen(port, () => {
    console.log('port ecoute:' + port + 'attention réseau privé TSB  Tracking en cours')
})