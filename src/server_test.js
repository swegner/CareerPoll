"use strict";
var should = require("should")

describe('server', function() {
    var server = require("./server.js");

    describe('greeting', function() {
        var response = server.greeting();

        it('should be friendly', function() {
            response.should.startWith('hello');
        });

        it ('should address the world', function(){
            response.should.endWith('world');
        });
    });

});