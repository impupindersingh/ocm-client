var cc       = require('config-multipaas'),
    finalhandler= require('finalhandler'),
    http     = require("http"),
    Router       = require('router');

var config   = cc();
var app      = Router()


// Routes
app.get("/status", function (req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end("{status: 'ok Client is UP'}\n")
})

app.get("/", function (req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end("{status: 'Yeaaaaaa, Pupinder Singh, and I am Client..................................................'}\n")
})

// Create server 
var server = http.createServer(function(req, res){
  var done = finalhandler(req, res)
  app(req, res, done)
})

server.listen(config.get('PORT'), config.get('IP'), function () {
  console.log( "Listening on " + config.get('IP') + ", port " + config.get('PORT') )
});
