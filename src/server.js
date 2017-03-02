// modules =================================================
var express        = require('express');
var fs 			   = require('fs');
var app            = express();
// configuration ===========================================

// set our port
var port = process.env.PORT || 8081; 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// routes ===================================================
app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/api/" + "users.json", 'utf8', function (err, data) {
       res.end( data );
   });
});

app.get('*', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});



// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);