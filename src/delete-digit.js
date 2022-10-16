const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  const arr =str.split("");  
  let index;   
  for (let i=0; i< arr.length; i++) { 
      if (i+1 != arr.length-1) {
          if (arr[i] < arr[i+1]) {
              index=i;
              return Number (str.slice(0, index)+str.slice(index+1));                
          }
      }
      else {
          if (arr[i] > arr[i+1]) {
              index = i+1;
              return Number (str.slice(0, index)); 
          }
          else {
              index = i;
              return Number (str.slice(0, index)+str.slice(index+1)); 

          }
      }    
}

}

module.exports = {
  deleteDigit
};
