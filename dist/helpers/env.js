"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDev = exports.envEq = exports.env = void 0;

var _ramda = require("ramda");

var env = key => (0, _ramda.path)(['env', key])(process);

exports.env = env;

var envEq = (key, compare) => (0, _ramda.pathEq)(['env', key], compare)(process);

exports.envEq = envEq;
var isDev = envEq('NODE_ENV', 'development');
exports.isDev = isDev;