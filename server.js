/**
 * Created by sibyg on 12/02/2017.
 */
var connect = require('connect')
var http = require('http')
connect.static("angjs")
var app = connect();

//create node.js http server and listen on port
http
    .createServer(app)

    .listen(5000);