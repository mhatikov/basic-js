import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {

  const err = new Error('Invalid date!');

  if(arguments.length === 0) return 'Unable to determine the time of year!';

  let parseDate = Date.parse(date);
  if(isNaN(parseDate)|| Object.keys(date).length > 0){
    throw err;
  }

  const dateMonth = date.getMonth();
  if(dateMonth === 0 || dateMonth === 11 || dateMonth === 1){
    return 'winter';
  }else if(dateMonth > 1 && dateMonth <= 4){
    return 'spring';
  }else if(dateMonth > 4 && dateMonth <= 7){
    return 'summer';
  }else if(dateMonth > 7 && dateMonth <= 10){
    return 'automn|fall';
  }
  
}