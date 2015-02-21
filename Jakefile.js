/*global desc, task, jake, fail, complete */
(function() {
    "use strict";

    // Jake documentation: http://howtonode.org/intro-to-jake

    desc("Do all the things");
    task("default", ["lint", "test"], function() {
        console.log("done!");
    });

    desc("Lint everything");
    task("lint", [], function() {
        console.log("linting..");

        var lint = require("jake-jshint");
        var jake = require("jake");

        var files = new jake.FileList();
        files.include("./*.js");
        files.include("src/**/*.js");

        var config = getLintConfig();
        var pass = lint.validateFileList(files.toArray(), config.options, config.globals);
        if (!pass) fail("Lint failed");
    });

    desc("Run tests");
    // Mocha documentation: http://mochajs.org/
    var mocha = require("jake-mocha");
    mocha.defineTask({
        name: 'test',
        files: 'src/**/*_test.js',
        mochaOptions: {
            ui: 'bdd',
            reporter: 'spec'
        }
    });

    function getLintConfig() {
        return {
            options: {
                bitwise: true,
                curly: false,
                eqeqeq: true,
                forin: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                noempty: true,
                nonew: true,
                regexp: true,
                undef: true,
                strict: true,
                trailing: true,
                node: true
            },
            globals: {
                describe: false,
                it: false,
                before: false,
                after: false
            }
        };
    }
}());