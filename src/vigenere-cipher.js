const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(bool) {

    this.bool = bool;
    const alph= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.alphabet = alph.split("")     
    
  }

  cutOff(message, keyword){
    let newkey = [];
    message = message.toUpperCase();
    keyword= keyword.toUpperCase();

    
        let ch = 0;
          for (let i = 0; i < message.length; i++) {
            if (ch==keyword.length){
              ch=0;
            }
            if (this.alphabet.includes(message[i])){
              newkey.push(keyword[ch]);
               ch++;
            } else {
              newkey.push(message[i])
            }              
          }
        
      
      let mess = message;
      let key;
      (newkey.length) ? key = newkey.join("") : key = keyword;

      return {mess:mess , key:key};
  }

  offsetter (arr, letter) {

      for (let i = 0; i < arr.length; i++){
        if (letter==arr[i]){
          return i;
        }
      }
      return false;    
  }

  replacer (offset) {

    let offarr = this.alphabet.slice();
    let deleted = offarr.splice(0, offset);
    offarr = offarr.concat(deleted);

    return offarr;
  }

  reverser (res) {
    if (this.bool===false) {
      return res.reverse().join("");
    }
    return res.join("");
  }

  encrypt(message, keyword) {

    if (message===undefined||keyword===undefined){
      throw new Error;
    }

    let result = [];

    let mess = (this.cutOff(message, keyword)).mess;
    let key =  (this.cutOff(message, keyword)).key;

    for (let i =0; i < mess.length; i++) {
      let offset = this.offsetter(this.alphabet, mess[i]);
      let koffset = this.offsetter(this.alphabet, key[i]);


      if (typeof offset==="number") {
        let decrarr = this.replacer(offset);
        result.push (decrarr[koffset])
        
      } else {
        result.push(mess[i])
      }
    }
    return this.reverser(result);
  }

  decrypt(message, keyword) {

    if (message===undefined||keyword===undefined){
      throw new Error;
    }

    let result = [];

    let mess = (this.cutOff(message, keyword)).mess;
    let key =  (this.cutOff(message, keyword)).key;

    for (let i =0; i < mess.length; i++) {
      let offset = this.offsetter(this.alphabet, key[i]);

      if (typeof offset==="number") {
        let decrarr = this.replacer(offset);
        let moffset = this.offsetter(decrarr, mess[i]);
        result.push(this.alphabet[moffset]);       

      } else {
        result.push(mess[i])
      } 
    }
    return this.reverser(result)
    
  }
}

module.exports = VigenereCipheringMachine;
