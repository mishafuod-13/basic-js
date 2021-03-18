const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (typeof date === "undefined") {
    return "Unable to determine the time of year!"
  }

  if (Object.prototype.toString.call(date)!=="[object Date]"){
    let err = new Error();
    throw err;
  }

  const month = date.getMonth();

    if(month>1 && month<5){
      return "spring";
    }
    else if (month>4&&month<8){
      return "summer";
    }
    else if (month>7&&month<11){
        return "autumn"
    }
    else if (month===11||month<2){
        return "winter"; 
    }
    else {
      return "Unable to determine the time of year!"
    } 
};
