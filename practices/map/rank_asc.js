'use strict';
var rank_asc = function(collection){
  return collection.map((number, index, array, x) => { array.indexOf(number)[0] < x });
  // collection.sort().reverse();
};

module.exports = rank_asc;
