import InseeService from '../../../services/InseeService';
const express = require('express');
const router = express.Router();
const qs = require('query-string');

/* GET home page. */
router.get('/siret', async function (req, res, next) {
  const { query } = req;

  res.json(await InseeService.getSiret(qs.stringify(query, {
    skipEmptyString: true,
    skipNull: true
  })))
});

module.exports = router;
