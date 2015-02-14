/*global desc, task, jake, fail, complete */
(function() {
    "use strict";

    desc("Do all the things");
    task("default", ["lint"], function() {
        console.log("done!");
    });

    desc("Lint everything");
    task("lint", [], function() {
        console.log("linting..");

        var lint = require("jake-jshint");
        var jake = require("jake");

        var files = new jake.FileList();
        files.include("./*.js");

        var config = getLintConfig();
        var pass = lint.validateFileList(files.toArray(), config.options, config.globals);
        if (!pass) fail("Lint failed");
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
                beforeEach: false,
                afterEach: false
            }
        };
    }
}());