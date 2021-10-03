"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _env = require("../helpers/env");

var _Fetch = _interopRequireDefault(require("./Fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class InseeService extends _Fetch.default {
  getSiret(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return this.getJson("".concat((0, _env.env)('SIRET_PROXY_URL'), "/api/v1/siret?").concat(encodeURI(url)), options);
  }

}

var _default = new InseeService();

exports.default = _default;