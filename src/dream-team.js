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
  let nameDream;
  members.forEach(element => {
    if (typeof(element) == "string") {
      nameDream+=element[0]; }
      });
      if (nameDream.length == 0) return false;
      return nameDream.split("").sort().join("").toUpperCase(); 
}

module.exports = {
  createDreamTeam
};
