const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr,depth) {
    depth===undefined ? depth = 1 : depth = depth
  
  let res = depth;

    for (let i=0; i<arr.length; i++){
      if (Array.isArray(arr[i])) {
        let branch = this.calculateDepth(arr[i],depth+1);
        branch>res ? res=branch : 0  
      }
    }
     
    return res;
  }
};