"use strict";
var should = require("should");

describe('server', function() {
    var server = require("./server.js");
    var http = require("http");

    describe('start', function() {
        before(function() {
            server.start();
        });

        after(function(done) {
            server.stop(done);
        });

        it('should listen on port 8080', function(done) {
            httpGet(done);
        });

        it('should respond with a nice greeting');

        function httpGet(callback) {
            http.get('http://localhost:8080', function() {
                callback();
            });
        }
    });
});