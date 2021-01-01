var createError = require('http-errors');
var express = require('express');
var path = require('path');
const port = process.env.PORT;
var cors = require('cors');
var bodyParser = require('body-parser')

var app = express();
var route = require("./src/routes/index");

app.use(cors({origin: '*' }));

app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/rnco_api_private', route);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send({ error: 'Page non trouvé' })
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