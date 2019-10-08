const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema();

schema.static('trade', function() {
  return this.aggregate(
    [{
      $match: {
        ticker: 'abcd'
      }
    }, {
      $project: {
        hour: {
          $hour: '$time'
        },
        shares: '$shares'
      }
    }, {
      $group: {
        _id: '$hour',
        sharesTraded: {
          $sum: '$shares'
        }
      }
    }]
  );

});

module.exports = mongoose.model('Trade', schema);