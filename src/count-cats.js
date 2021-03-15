const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix) {
    let count = 0;
    const cat = "^^";
  
      const counter = (arr) => arr.forEach(elem => {
        if (elem===cat){
          count++;
        }
      });
  
      matrix.forEach((elem) => (counter(elem)));
    return count;
 
};
