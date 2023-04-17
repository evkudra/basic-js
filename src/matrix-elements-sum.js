const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],   0 0
 *  [0, 5, 0, 0],   1 0
 *  [2, 0, 3, 3]    2 0
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix ) {
  //console.dir(matrix);
  let countColumn = matrix[0].length;
  let sum = 0;
  for (let i = 0; i < countColumn; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) {
        break
      } else {
        sum += matrix[j][i];
      }
      
    }
  } 
  //console.dir(sum);
  return sum
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
}

module.exports = {
  getMatrixElementsSum
};
