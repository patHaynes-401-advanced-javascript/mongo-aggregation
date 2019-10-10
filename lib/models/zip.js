const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema();

schema.static('topTen', function() {
  return this.aggregate(
    [{
      $group: {
        _id: '$state',
        totalPop: {
          $sum: '$pop'
        }
      }
    }, {
      $sort: {
        totalPop: -1
      }
    }, {
      $limit: 10
    }]
  );
});

module.exports = mongoose.model('Zip', schema);