var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , url = require('url');

var app = express();

app.configure(function () {
   app.set('port', process.env.PORT || 3000);
   app.set('views', __dirname + '/views');
   app.set('view engine', 'jade');
   app.use(express.logger('dev'));
   app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function (req, res) {
   
   res.writeHead(307, {
      Location: '/UK/London'
   });

   res.end();
});

app.get('/:countryCd/:city', function (req, res) {
   routes.index(req, res, http);
});

http.createServer(app).listen(app.get('port'), function () {
   console.log("Express server listening on port " + app.get('port'));
});