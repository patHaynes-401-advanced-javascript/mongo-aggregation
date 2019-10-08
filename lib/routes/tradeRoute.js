// eslint-disable-next-line new-cap
const router = require('express').Router();
const TradeTopTen = require('../models/trade');

router
  .get('/trade', (req, res, next) => {
    TradeTopTen.trade()
      .then(trades => res.json(trades))
      .catch(next);
  });

module.exports = router;