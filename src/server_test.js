"use strict";
var should = require("should");

describe('server', function() {
    var server = require("./server.js");
    var http = require("http");

    describe('greeting', function() {
        var response = server.greeting();

        it('should be friendly', function() {
            response.should.startWith('hello');
        });

        it ('should address the world', function(){
            response.should.endWith('world');
        });
    });

    describe('start', function() {
        before(function() {
            server.start();
        });

        after(function(done) {
            server.stop(done);
        });

        it('should listen on port 8080', function(done) {
            http.get('http://localhost:8080', function() {
                done();
            });
        });
    });
});