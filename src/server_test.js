"use strict";
var should = require("should");

describe('server', function() {
    var server = require("./server.js");
    var http = require("http");


    function httpGet(callback) {
        http.get('http://localhost:8080', function(resp) {
            callback(resp);
        });
    }

    describe('start', function() {
        before(function() {
            server.start();
        });

        after(function(done) {
            server.stop(done);
        });

        it('should listen on port 8080', function(done) {
            httpGet(function() {
                done();
            });
        });
    });

    describe('default endpoint', function() {

        var response;
        before(function(done) {
            server.start();

            response = httpGet(function(resp) {
                response = resp;
                done();
            });
        });

        after(function(done) {
            server.stop(done);
        });

        it('returns success status code.', function() {
            response.statusCode.should.be.exactly(200);
        });
    });
});