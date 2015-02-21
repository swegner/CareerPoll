/* jshint expr:true */

"use strict";
var should = require('should');
require('should-http');

describe('server', function() {

    var PORT = 8080;

    var server = require("./server.js");
    var http = require("http");

    describe('start', function() {
        before(function() {
            server.start(PORT);
        });

        after(function(done) {
            server.stop(done);
        });

        it('should listen on specified port', function(done) {
            httpGet('', function() {
                done();
            });
        });
    });

    describe('default endpoint', function() {

        var response;
        var responseMessage = '';
        before(function(done) {
            server.start(PORT);

            httpGet('', function(resp, msg) {
                response = resp;
                responseMessage = msg;
                done();
            });
        });

        after(function(done) {
            server.stop(done);
        });

        it('returns success status code.', function() {
            response.statusCode.should.be.exactly(200);
        });

        it('sets the content type', function() {
            response.should.header('content-type', 'text/plain');
        });

        it('routes to the home controller', function() {
            // Just make sure we get some friendly text back.
            responseMessage.length.should.be.greaterThan(0);
        });
    });

    describe('questions endpoint', function() {
        var response;
        var responseMessage = '';
        before(function(done) {
            server.start(PORT);

            httpGet('questions', function(resp, msg) {
                response = resp;
                responseMessage = msg;
                done();
            });
        });

        after(function(done) {
            server.stop(done);
        });

        it('should return success', function() {
            response.statusCode.should.be.exactly(200);
        });

        it('routes to the questions controller', function() {
            // Just make sure we hvae valid JSON
            var jsonMessage = JSON.parse(responseMessage);
        });

        it('should set the content type', function() {
            response.should.be.json;
        });

        it('should be contain an array of questions', function() {
            var jsonMessage = JSON.parse(responseMessage);
            (jsonMessage instanceof Array).should.eql(true);

        });
    });

    describe('all other URLs', function() {

        var response;
        before(function(done) {
            server.start(PORT);

            httpGet('anyOtherUrl', function(resp) {
                response = resp;
                done();
            });
        });

        after(function(done) {
            server.stop(done);
        });

        it('should return a 404', function() {
            response.statusCode.should.be.exactly(404);
        });
    });

    function httpGet(route, callback) {
        var url = 'http://localhost:' + PORT + '/' + route;
        http.get(url, function(resp) {
            var response = resp;
            var responseMessage = '';

            resp.on('data', function(chunk) {
                responseMessage += chunk;
            });

            resp.on('end', function() {
                callback(response, responseMessage);
            });
        });
    }
});