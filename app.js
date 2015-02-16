"use strict";

var server = require('./src/server.js');
var port = process.env.PORT || 80;
server.start(port);