const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  let newMembers = [];
  let arr = [];
  if (Array.isArray(members) === false) {
    return false
  }
  for (let member of members) {
    if (typeof member === 'string') {
      newMembers.push(member);
    }
  }
  for (let member of newMembers) {
    arr.push(member.trim().slice(0, 1).toUpperCase());
  }
  return arr.sort().join('')
  
}

module.exports = {
  createDreamTeam
};
