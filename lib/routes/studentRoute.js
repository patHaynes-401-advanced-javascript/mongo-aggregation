// eslint-disable-next-line new-cap
const router = require('express').Router();
const StudentMinMaxAvg = require('../models/student');

router
  .get('/student', (req, res, next) => {
    StudentMinMaxAvg.student()
      .then(students => res.json(students))
      .catch(next);
  });

module.exports = router;