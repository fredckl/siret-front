"use strict";

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');

var router = express.Router();
/* App front-end. */

router.get('/', function (req, res) {
  res.sendFile(_path.default.join(process.env.ROOT_DIR, 'build', 'index.html'));
});
module.exports = router;