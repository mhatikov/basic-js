import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if(!(arr instanceof Array)){
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  if(arr.length < 1){
    return [];
  }
  let cloneArr = Array.from(arr);
  cloneArr.forEach((element, index, arr) =>{
    if(element === '--discard-next'){
      index !== arr.length - 1 ? arr.splice(index, 2) : arr.splice(index);
    }else if(element === '--discard-prev'){
      index !== 0 ? arr.splice(index - 1, 2) : arr.splice(0, 1);
    }else if(element === '--double-next'){
      index !== arr.length - 1 ? arr.splice(index, 2, arr[index + 1], arr[index + 1]) : arr.splice(index);
    }else if(element === '--double-prev'){
      index !== 0 ? arr.splice(index - 1, 2, arr[index - 1], arr[index - 1]) : arr.splice(0, 1);
    }
  })
  return cloneArr.filter((element)=>{
    if(element === '--discard-next' || element === '--discard-prev' || element === '--double-next' || element === '--double-prev'){
      return false;
    }else{
      return true;
    }
  });
}
