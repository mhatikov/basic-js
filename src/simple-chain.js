import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  _links : [],
  _chainValue : '',

  getLength() {
    return this._links.length;
  },
  addLink(value) {
    this._links.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(position < 1 || position > this.getLength() - 1|| typeof position !== 'number'){
      this._links = [];
      this._chainValue = '';
      throw new Error(`You can't remove incorrect link!`);
    }else{
      position !== this.getLength() ? this._links.splice(position - 1, 1) : this._links.splice(position);
      return this;
    }
  },
  reverseChain() {
   this._links.reverse();
   return this;
  },
  finishChain() {
   this._chainValue = `${this._links.join('~~')}`;
   let result = this._chainValue;
   this._chainValue = '';
   this._links = [];
   return result;
  }
};
