module.exports = function(length) {
  var arr = [];
  var start = 0;
  var end = length;

  if (arguments.length > 1) {
    start = arguments[0];
    end = arguments[1];
  }

  for (var i = start; i < end; i ++ ) {
    arr.push(i);
  }

  return arr;
};

