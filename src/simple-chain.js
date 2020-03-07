const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`${String(value)}`);
    return this;
  },
  removeLink(position) {
    if (typeof(position) !== "number" || position <= 0 || position > this.chain.length) {
	    this.chain.length = 0;
	    throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let strChain = '( ' + this.chain.join(' )~~( ') + ' )';
    this.chain.length = 0;
    return strChain;
  }
};

module.exports = chainMaker;
