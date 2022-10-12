const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  const arr = str.split("");
  let count = 1;
  let enc=""; 
  for (let i=0; i<arr.length;) {
    if (arr[i]===arr[i+1]) {
      count++;         
      arr.shift();           
    }
    else {
      if (count >1) {
        enc+=count+arr[i];
        count=1;
        arr.shift();      
      }
      else {
        enc+=arr[i];
        count=1;
        arr.shift();       
      }
    }
  }
  return enc  
  }

module.exports = {
  encodeLine
};
