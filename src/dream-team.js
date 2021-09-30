import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
 if(members instanceof Array){
   let arr = [];
  members.forEach((member)=>{
    if(typeof member === 'string'){
      let nameMember = member.trim().toUpperCase();
      arr.push(nameMember[0]);
    }
  })
  arr.sort();
  return arr.join('');
 }else{
   return false;
 }
}
