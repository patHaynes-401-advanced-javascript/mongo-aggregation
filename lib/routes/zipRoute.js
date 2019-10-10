// eslint-disable-next-line new-cap
const router = require('express').Router();
const ZipTopTen = require('../models/zip');

router
  .get('/topTen', (req, res, next) => {
    const limit = parseInt(req.query.limit || 10);
    console.log(limit);

    ZipTopTen.topTen(limit)
      .then(states => res.json(states))
      .catch(next);
  });

module.exports = router;