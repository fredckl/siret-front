import path from 'path';
const express = require('express');
const router = express.Router();

/* App front-end. */
router.get('/', function (req, res) {
  res.sendFile(path.join(process.env.ROOT_DIR, 'build', 'index.html'))
})

module.exports = router;
