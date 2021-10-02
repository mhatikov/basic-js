import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

export default class VigenereCipheringMachine {
  constructor(value){
    if (value == true || !value){
      this._direct = true;
    }else{
      this._direct = false;
    }
  }
  _ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

  encrypt(message, key) {
    if(!message || !key)throw new Error('Incorrect arguments!');
    let words = message.split(' ');

    let keyCode = key.trim().toUpperCase().split('');
    keyCode = keyCode.map((elementKeyCode)=>{
      let unicode;
      this._ABC.forEach((elementABC, index)=>{
        if(elementKeyCode === elementABC){
          unicode = index;
        }
      });
      return unicode;
    });

    let wordsKey = [];
    words.forEach((element, index)=>{
      for(let char of element){
        wordsKey.push(char.toUpperCase());
      }
      if(index !== words.length - 1) wordsKey.push(' ');
    })
    wordsKey = wordsKey.map((element) =>{
      let unicode = element;
      this._ABC.forEach((elementABC, index)=>{
        if(elementABC === element)unicode = index;
      })
      return unicode;
    })

    let flowKey = [];
    for(let i = 0, j = 0; i< wordsKey.length; i++){
      if(typeof wordsKey[i] === 'number'){
        flowKey.push(keyCode[j]);
        j < (keyCode.length - 1) ? j++ : j = 0;
      }else{
        flowKey.push('');
      }
    }

    let resultArrIndex = []
    for(let i = 0; i < flowKey.length; i++){
      resultArrIndex.push(typeof flowKey[i] === 'number' ? this._ABC[(wordsKey[i] + flowKey[i]) % this._ABC.length] : wordsKey[i] + flowKey[i]);
    }
    if(this._direct){
      let result = resultArrIndex.join('');
      return result;
    }else{
      let result = resultArrIndex.reverse().join('');
      return result;
    }
  }
  decrypt(message, key) {
    if(!message || !key)throw new Error('Incorrect arguments!');
    let words = message.split(' ');

    let keyCode = key.trim().toUpperCase().split('');
    keyCode = keyCode.map((elementKeyCode)=>{
      let unicode;
      this._ABC.forEach((elementABC, index)=>{
        if(elementKeyCode === elementABC){
          unicode = index;
        }
      });
      return unicode;
    });

    let wordsKey = [];
    words.forEach((element, index)=>{
      for(let char of element){
        wordsKey.push(char.toUpperCase());
      }
      if(index !== words.length - 1) wordsKey.push(' ');
    })
    wordsKey = wordsKey.map((element) =>{
      let unicode = element;
      this._ABC.forEach((elementABC, index)=>{
        if(elementABC === element)unicode = index;
      })
      return unicode;
    })

    let flowKey = [];
    for(let i = 0, j = 0; i< wordsKey.length; i++){
      if(typeof wordsKey[i] === 'number'){
        flowKey.push(keyCode[j]);
        j < (keyCode.length - 1) ? j++ : j = 0;
      }else{
        flowKey.push('');
      }
    }

    let resultArrIndex = []
    for(let i = 0; i < flowKey.length; i++){
      if(typeof flowKey[i] === 'number'){
        let indexABC = (wordsKey[i] - flowKey[i]) > 0 ?
        (wordsKey[i] - flowKey[i]) % this._ABC.length :
        ((wordsKey[i] - flowKey[i]) + this._ABC.length) % this._ABC.length;
        resultArrIndex.push(this._ABC[indexABC]);
      }else{
        resultArrIndex.push(wordsKey[i] + flowKey[i]);
      }
    }

    if(this._direct){
      let result = resultArrIndex.join('');
      return result;
    }else{
      let result = resultArrIndex.reverse().join('');
      return result;
    }
  }
}

