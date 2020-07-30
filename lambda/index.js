var app = require('./the.js')('TresFute');

exports.status = app('status');
exports.echo = app('echoEvent:andContext:');
