import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
 let cats = 0;
 if(matrix instanceof Array){
   for(let i = 0; i < matrix.length; i++){
     for(let j = 0; j < matrix[i].length; j++){
       let cell = matrix[i][j];
       if(cell === '^^') cats++;
     }
   }
 }
 return cats;
}
