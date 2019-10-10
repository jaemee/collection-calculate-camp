'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let result = [];
  collection_a.forEach(numberA => 
    collection_b.forEach(numberB => {
      if(numberA%numberB === 0){
        result.push(numberA);
      }
    })
  );

  return collection_a.filter(numberA => result.includes(numberA));
}

module.exports = choose_divisible_integer;
