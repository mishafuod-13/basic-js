const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain:[],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value);
    return this;
  },

  removeLink(position) { 
    const err = new Error ("Invalide value/type of position");

    if (Object.prototype.toString.call(position)!=="[object Number]"){
      this.chain=[];
      throw err;
    }
    if ((position ^ 0) !== position){
      this.chain=[];
      throw err;
    }
    if (position-1>this.chain.length||position-1<0){
      this.chain=[];
      throw err;
    }

    this.chain.splice(position-1, 1);
    return this;

  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    if (this.chain.length) {
      let res = "( ";
        for (let i = 0; i<this.chain.length; i++){
          let str = this.chain[i];
          res+=str;
          (i==this.chain.length-1) ? res+=" )" : res+=" )~~( "
        }
      this.chain = [];
      return res;
    } else {
      return "( )";
    }
  }
};

module.exports = chainMaker;
