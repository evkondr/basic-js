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
  if(!Array.isArray(arr)){
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  let transformed = [];
  for (let index = 0; index < arr.length; index++) {
    switch (arr[index] ) {
      case '--discard-next':
        index += 2;
        break;
      case '--double-next':
        if(arr[index+1]) transformed.push(arr[index+1])
        break;
      case '--discard-prev':
        transformed.pop()
        break;
      case '--double-prev':
        if(arr[index-1]) transformed.push(arr[index-1])
        break;
      default:
        transformed.push(arr[index])
        break;
    } 
  }
  return transformed
}

module.exports = {
  transform
};
