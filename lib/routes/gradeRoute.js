// eslint-disable-next-line new-cap
const router = require('express').Router();
const GradeData = require('../models/grades');

router
  .get('/grade', (req, res, next) => {
    GradeData.grade()
      .then(grades => res.json(grades))
      .catch(next);
  });

module.exports = router;
