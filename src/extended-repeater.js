const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let resstr = "";

  let ch=1;
  
  if (options.repeatTimes!==undefined){
    ch = options.repeatTimes;
  }

  let separator = "+";
  if (options.separator!==undefined){
    separator = options.separator;
  }
  

  function addition () {
    let res = "";
      if (options.addition!==undefined){
        res+=options.addition; 
      }

    let sep = "|";

      if (options.additionSeparator!==undefined){
        sep=options.additionSeparator; 
      }

        let repeat = 1;
        if (options.additionRepeatTimes!==undefined){
          repeat=options.additionRepeatTimes;
        }

        if (repeat==1) {
          return res
        }

        let fres = "";
        for (let i = 1; i < repeat; i++) {
          fres += res+sep;
          if (i===repeat-1){
            fres+=res;     
          }
          
  
        }
      
    return fres;

  }

  let add = addition();
  
    for (let i = 0; i < ch; i++) {
      if (i===0) {
        resstr += str+add;
      } else {
        resstr += separator+str+add;
      }
    }

    return resstr;
};
  