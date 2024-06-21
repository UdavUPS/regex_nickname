// TODO: write your code here
/* import sum from './basic';

console.log('worked');

console.log(sum([1, 2])); */

export default class Validator {
    constructor(name) {
        this.name = name;
      }

    validateUsername(name) {
        return /^[^0-9 _-][a-z_0-9-]+[^0-9 _-]$/.test(name)
        
    }
}