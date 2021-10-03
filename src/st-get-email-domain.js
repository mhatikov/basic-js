import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let result = email.match(/\@.+/g);
  console.log(result);
  result = result.map((element)=>{
    let arr = element.split('');
    arr.shift();
    element = arr.join('');
    return element;
  })
  let newRes = result.pop();
  let final = newRes;
  for(let i = 0; i< newRes.length; i++){
    if (newRes[i] === '@'){
      final = newRes.substr(i+1);
    }
  }
  return final;
}
