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
  let encodedStr=''
  let factor = 1
  for(let i=0; i<str.length; i++){
     if(str[i] == str[i+1]){
       factor++
     }else{
       factor = factor==1?'':factor
       encodedStr+=factor+str[i]
       factor = 1
     }
  }
  return encodedStr
}

module.exports = {
  encodeLine
};
