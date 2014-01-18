
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
//var oauth = require('./routes/oauth');
//var players = require('./routes/players');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.index);
//app.get('/users', user.list);

//app.get('.apicallback', oauth.callback);

/*
 * ======================
 * ====== USER ==========
 */

// create
// app.post('/user', user.create);
// login
app.get('/user', user.login);
// update
// app.put('/user', auth.check, user.update);
// delete
// app.del('/user', auth.check, user.update);

/*
 * ======================
 * ====== LEAGUE ========
 */

// list 
// app.get('/leagues', auth.check, leagues.list);

/*
 * ======================
 * ====== TEAMS =========
 */


// list
// app.get('/teams', auth.check, teams.list);

/*
 * ======================
 * ====== PLAYERS =======
 */



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});