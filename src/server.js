"use strict";

var http = require("http");
var server;

exports.start = function(port) {
    server = http.createServer();
    server.on("request", function(request, response) {
        console.log("received request");

        var message;
        if (request.url === '/') {
            response.setHeader('Content-Type', 'text/plain');
            message = "hello world!";
        }
        else if (request.url === '/questions') {
            message = 'aww yeah';
        }
        else {
            // 404'ed!!
            response.writeHead(404);
        }

        response.end(message);
    });

    server.listen(port);
};

exports.stop = function(callback) {
    server.close(callback);
};