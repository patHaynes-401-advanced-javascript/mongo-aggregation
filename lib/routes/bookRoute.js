// eslint-disable-next-line new-cap
const router = require('express').Router();
const BookData = require('../models/book');

router
  .get('/book', (req, res, next) => {
    BookData.book()
      .then(books => res.json(books))
      .catch(next);
  });

module.exports = router;