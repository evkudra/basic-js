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
function transform(/* arr */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let transformArr = [];
  // if (Array.isArray(arr) === false) {
  //   throw new Error('arr parameter must be an instance of the Array!') 
  // }
 
  //   for (let i = 0; i < arr.length; i++) {
  //     if (typeof arr[i] !== 'number' || typeof arr[i] !== 'string') {
  //       return 'arr parameter must be an instance of the Array!'
  //     }
  //     if (arr[i] === '--double-next') {
  //       transformArr.push(arr[i+1]);
  //       continue
  //     }
  //     if (arr[i] === '--double-prev') {
  //       transformArr.push(arr[i-1]);
  //       continue
  //     }
  //     if (arr[i] === '--discard-prev') {
  //       transformArr.pop();
  //       continue
  //     }
  //     if (arr[i] === '--discard-next') {
  //       transformArr.pop();
  //       i++;
  //       continue
  //     }
  //     transformArr.push(arr[i]);
  //   }
  
  
  // console.dir(arr);
  // console.dir(transformArr);
  // return transformArr
}

module.exports = {
  transform
};
