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
function createDreamTeam(members) {
  const result = [];
  if (members instanceof Array && members.length > 0) {
    for (let member of members) {
      if(typeof member === 'string') {
        result.push(member.trim()[0].toUpperCase());
      };  
    }
  } else {
    return false;
  }
  return result.sort().join('');
}

module.exports = {
  createDreamTeam
};
