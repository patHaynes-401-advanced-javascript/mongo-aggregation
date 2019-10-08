const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema();


schema.static('student', function() {
  return this.aggregate(
    [{
      $unwind: {
        path: '$scores',
      }
    }, {
      $group: {
        _id: '$scores.type',
        minScore: {
          $min: '$scores.score'
        },
        maxScore: {
          $max: '$scores.score'
        },
        avgScore: {
          $avg: '$scores.score'
        },
      }
    }]
  );
});
module.exports = mongoose.model('Student', schema);