import InseeService from '../../../services/InseeService';
const express = require('express');
const router = express.Router();
const qs = require('query-string');

/* GET home page. */
router.get('/siret', async function (req, res, next) {
  const { query } = req;
  // const {
  //   q,
  //   firstname,
  //   postalCode,
  //   active,
  //   legalFormCode,
  //   page,
  //   perPage
  // } = query;
  res.json(await InseeService.getSiret(qs.stringify(query)))
});

module.exports = router;
