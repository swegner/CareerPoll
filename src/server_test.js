"use strict";
var should = require("should");

describe('server', function() {

    var PORT = 8080;

    var server = require("./server.js");
    var http = require("http");


    function httpGet(callback) {
        var url = 'http://localhost:' + PORT;
        http.get(url, function(resp) {
            callback(resp);
        });
    }

    describe('start', function() {
        before(function() {
            server.start(PORT);
        });

        after(function(done) {
            server.stop(done);
        });

        it('should listen on specified port', function(done) {
            httpGet(function() {
                done();
            });
        });
    });

    describe('default endpoint', function() {

        var response;
        var responseMessage = '';
        before(function(done) {
            server.start(PORT);

            httpGet(function(resp) {
                response = resp;

                resp.on('data', function(chunk) {
                    responseMessage += chunk;
                });
                resp.on('end', done);
            });
        });

        after(function(done) {
            server.stop(done);
        });

        it('returns success status code.', function() {
            response.statusCode.should.be.exactly(200);
        });

        it ('returns a nice greeting', function() {
            responseMessage.should.be.exactly('hello world!');
        });

        it('should set the content type', function() {
            var contentType = response.headers['content-type'];

            should.exist(contentType);
            contentType.should.be.exactly('text/plain');
        });
    });
});