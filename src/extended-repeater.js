import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {

  let rep = options.repeatTimes;
  let result = Array(rep).fill(`${str}`);
  let sep = options.separator ? options.separator : '+';
  let addSep = options.additionSeparator ? options.additionSeparator : '|';
  let addition = options.addition;
  let additionTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;


  let newresult = [];
  
  if (addition !== undefined) {
    addition = `${options.addition}`;
    result.forEach((item) =>{
      if (additionTimes > 1) {
        let additionWithSep = Array(additionTimes).fill(addition);
        additionWithSep = additionWithSep.join(addSep);
        newresult.push(item += additionWithSep);
      } else {
        newresult.push(item += addition.repeat(additionTimes));
      }
    })
    result = newresult;
  }

  result = sep && rep > 1 ? result.join(sep) : result.join('');
  return result
}
