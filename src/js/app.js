// TODO: write your code here
/* import sum from './basic';

console.log('worked');

console.log(sum([1, 2])); */

export default class Validator {
    constructor(name) {
        this.name = name;
      }

    validateUsername(name) {
        return /^(?=[a-zA-Z])(?!.(\d)\d\d)[a-zA-Z0-9-_][a-zA-Z]$/.test(name)
        
    }
}