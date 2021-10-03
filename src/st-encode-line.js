import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  if(str.length === 0) return str;
  let arrStr = str.split('');
  let res = '';
  for(let i = 0, j = 1; i<arrStr.length; i++){
    if(arrStr[i] === arrStr[i+1]){
      j++
    }else{
      res += j > 1 ? j + arrStr[i] : arrStr[i];
      j = 1;
    }
  }
  return res;
}
