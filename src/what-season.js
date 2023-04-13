const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {

  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error('Invalid date!')
  }
  for (let key in date) {
    if (typeof date[key] === 'function') {
      throw new Error('Invalid date!')
    }
  } 
  
  let getMonth = date.getMonth();
  if (getMonth < 2 || getMonth === 11) {
    return 'winter'
  } else if (2 <= getMonth && getMonth < 5) {
    return 'spring'
  } else if (5 <= getMonth && getMonth < 8) {
    return 'summer'
  } else if (8 <= getMonth && getMonth < 11) {
    return 'autumn'
  } 
}
module.exports = {
  getSeason
};
