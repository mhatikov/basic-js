import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let result = {};
  domains.forEach((element) =>{
    let item = element.split('.').reverse();
    let newItem = '';
    for(let elem of item){
      newItem = newItem + '.' + elem;
      result[newItem] ? result[newItem]++ : result[newItem] = 1;
    }
  });
  return result;
}

