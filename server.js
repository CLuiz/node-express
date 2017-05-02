var express = require('express');
var app = express();

app.use(express.static('public'));

// This responds with 'Hello Get!' on the home page'
app.get('/', function (req, res) {
    console.log('Got a GET request on the homepage');
    res.send('Hello GET!');
});

// This responds to a homepage post request with 'Hello POST!'
app.post('/', function(req, res) {
    console.log('Got a POST request on the homepage');
    res.send('Hello POST!');
});

// This responds to a DELETE request on the /del_user page
app.delete('/del_user', function(req, res) {
    console.log('Got a DELETE request for /del_user');
    res.send('Hello DELETE!');
});

// This responds to a GET request for the /list_user page
app.get('/list_user', function(req, res){
    console.log('Got a GET request for /list_user');
    res.send('Page listing');
});

// This responds to a get request or abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res){
    console.log('Got a GET request for /ab*cd');
    res.send('Page Pattern Match');
});

var server = app.listen(8081, function (){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
