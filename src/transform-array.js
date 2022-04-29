const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {throw Error("'arr' parameter must be an instance of the Array!")};
  let transArr = arr.slice();
  let objMetod = {
    "--discard-next": function discardNext (arr, index) {
      if (index == arr.length) {arr.splice(index,1)}
      else {
    arr.splice(index,2);
      }
    return arr;
  },
    "--discard-prev": function discardPrew (arr, index) {
      if (index == 0) {arr.splice(index,1)}
      else {
    arr.splice(index-1,2);
      }
    return arr;
  },
    "--double-next": function doubleNext (arr, index) {
      if (index == arr.length) {arr.splice(index, 1)}
      else {
    arr.splice(index, 1, arr[index+1]);
      }
    return arr;
  },
    "--double-prev": function doublePrew (arr, index) {
      if (index == 0) {arr.splice(index,1)}
      else {
    arr.splice(index, 1, arr[index-1]);
      }
    return arr; },
  }
  for (let i =0; i< transArr.length;i++) {
    if (transArr[i] in objMetod) {
      objMetod[transArr[i]](transArr,i);
    }    
  }
  return transArr;
  }

module.exports = {
  transform
};
