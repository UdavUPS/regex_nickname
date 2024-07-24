import Validator from '../app';

test('Validator', () => {
    let obj = new Validator ('name');

/*     let logs = ['Vasa', true, '1-qwe3', false];

    for (let i = 0; i < logs.length; i+2) {

        let result = obj.validateUsername(logs[i]);
        expect(result).toEqual(logs[i++]);
        
    } */

        let result = obj.validateUsername('Vasa');
        expect(result).toBe(true);

        let result2 = obj.validateUsername('1-qwe3');
        expect(result2).toBe(false);

});