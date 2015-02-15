"use strict";

var http = require("http");
var server;

exports.start = function() {
    server = http.createServer();
    server.on("request", function(request, response) {
        console.log("received request");

        response.setHeader('Content-Type', 'text/plain');
        response.end("hello world!");
    });

    server.listen(8080);
};

exports.stop = function(callback) {
    server.close(callback);
};