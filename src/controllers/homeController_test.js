"use strict";

describe('homeController', function() {

    var homeController = require('./homeController.js');

    describe('getIndex', function() {

        var response;
        before(function() {
            response = homeController.getIndex();
        });

        it ('returns a nice greeting', function() {
            response.should.be.exactly('hello world!');
        });
    });
});