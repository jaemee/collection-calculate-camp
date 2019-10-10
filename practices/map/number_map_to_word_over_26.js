'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(number => number+96 <= 120 ? String.fromCharCode(number+96) : String.fromCharCode((number+96)));

  // return collection;
  // return ['a','m','aa','ad','y','aa'];
};

module.exports = number_map_to_word_over_26;
