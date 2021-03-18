const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newarr = [];
  let diskarded = [];

  function discarder (val) {

    if (val<0||val>arr.length-1){
      return true;
    }

    for (let ch=0; ch<diskarded.length; ch++) {
        if (val===diskarded[ch]){
          return true;
        }
    }
    return false;
  }

  for (let i=0; i<arr.length; i++) {
      switch (arr[i]) {

        case "--discard-next":
          if (discarder(i+1)) {
            continue;
          } else {
            diskarded.push(i+1);
          }
        break;

        case "--discard-prev":
          if (discarder(i-1)) {
            continue;
          } else {
            diskarded.push(i-1);
            newarr.pop();
          }
        break;

        case "--double-next":
          if (discarder(i+1)) {
            continue;
          } else {
            newarr.push(i+1);
          }
        break;

        case "--double-prev":
          if (discarder(i-1)) {
            continue;
          } else {
            newarr.push(i-1);
          }
        break;

        default:
        if (discarder(i)){
          continue;
        } else {
        newarr.push(i);
        }
        break;
      }

  }

  let res = [];

  newarr.forEach((item) => res.push(arr[item]));
  newarr,diskarded = null;

  return res; 

};
