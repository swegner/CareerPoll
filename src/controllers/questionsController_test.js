"use strict";

describe('questionsController', function() {

    var questionsController = require('./questionsController.js');
    describe('getAll', function() {

        var response;
        before(function() {
            response = questionsController.getAll();
        });

        it('should be contain an array of questions', function() {
            (response instanceof Array).should.eql(true);

        });
    });
});