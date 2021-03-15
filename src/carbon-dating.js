const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity)!=="string"){
    return false;
  }
  const sample_act = parseFloat(sampleActivity);

  if (Number.isNaN(sample_act)) {
    return false;
  }

  if (sample_act>15||sample_act<=0){
    return false;
  }

  const k = (Math.log(2))/HALF_LIFE_PERIOD;
  const time = Math.log(MODERN_ACTIVITY/sample_act)/k;

  return Math.ceil(time);

};
