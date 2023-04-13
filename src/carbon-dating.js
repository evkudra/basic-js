const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample( sampleActivity ) {
  
  if (typeof sampleActivity !== 'string') {
    return false
  }
  if (typeof sampleActivity === 'string') {
    if (typeof +sampleActivity === 'number' && +sampleActivity !== Infinity) {
      if (+sampleActivity < 0) {
        return false
      }
      if (Math.log(MODERN_ACTIVITY / +sampleActivity) < 0 || MODERN_ACTIVITY / +sampleActivity === Infinity){
        return false
      }
      
      t = (HALF_LIFE_PERIOD / 0.693) * Math.log(MODERN_ACTIVITY / +sampleActivity);
      if (isNaN(t)) {
        return false
      }
      return Math.ceil(t)
    } else {
      return false
    }
  } else {
    return false
  }
  

}

module.exports = {
  dateSample
};
