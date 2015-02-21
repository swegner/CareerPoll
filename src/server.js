"use strict";

var http = require("http");
var server;

exports.start = function(port) {
    server = http.createServer();
    server.on("request", function(request, response) {
        console.log("received request");

        var message;
        if (request.url === '/') {
            var homeController = require('./controllers/homeController.js');

            response.setHeader('Content-Type', 'text/plain');
            message = homeController.getIndex();
        }
        else if (request.url === '/questions') {
            var questionsController = require('./controllers/questionsController.js');

            message = JSON.stringify(questionsController.getAll());
            response.setHeader('Content-Type', 'application/json');
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