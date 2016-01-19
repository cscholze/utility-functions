var range = require('./range');

module.exports = function(length) {
  return range(length).reduce(function(presVal, curVal, curInd, arr) {
     presVal[curVal] = curVal;
    return presVal;
  }, {});
};
