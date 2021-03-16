const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)){
    return false;
  }

  let arrn = [];

  const pusher = (item) => {
    if (typeof(item)==="string"){
      let str= item.trim();
      arrn.push(str[0].toUpperCase());
    } 
  }

  members.forEach(elem => {pusher(elem)});
  
  return arrn.sort().join("");
};
