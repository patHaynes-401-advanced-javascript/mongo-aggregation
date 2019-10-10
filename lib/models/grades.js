const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema();

schema.static('grade', function() {
  return this.aggregate(
    [{
      $unwind: {
        path: '$scores',
      }
    }, {
      $project: {
        class: '$class_id',
        type: '$scores.type',
        score: '$scores.score',
      }
    }, {
      $group: {
        _id: {
          class: '$class',
          type: '$type'
        },
        avgScore: {
          $avg: '$score'
        }
      }
    }, {
      $sort: {
        '_id.class': 1
      }
    }, {
      $project: {
        _id: 0,
        class: '$_id.class',
        type: '$_id.type',
        avgScore: '$avgScore'
      }
    }]
  );
});

module.exports = mongoose.model('Grade', schema);

