import { compareNumbers, isGreaterThan10, isGreaterThan10AndEqualTo20, isJane } from "../../src/fundamentals-ex/comparisonExercises.js";

describe('Comparison Exercises', () => {
    test.skip('using == should be equal to Jane', () => {
        /* Completa el test y completa la function isJane */
        const name = 'Jane';
        const result= isJane(name)
        expect(result).toEqual('Jane');
    });
    test.skip('using == should be equal to Jane', () => {
        /* Completa el test y completa la function isJane */
        const name = 'Donald';
        const result= isJane(name)
        expect(result).toEqual('Is not Jane');
    });
    test.skip('using === should return 10', () => {
        /* Completa el test y completa la function compareNumbers */
        let number1 = '10';
        let number2 = '10';
        const result= compareNumbers(number1,number2);
        expect(result).toEqual('10');
    });

    test.skip('quantity are greater than 10', () => {
        /* Completa el test y completa la function isGreaterThan10 */
        const quantity1 = 15;
        const result= isGreaterThan10(quantity1);
        expect(result).toBeGreaterThan(10);
    });
});

describe('Logical comparison', () => {
    test.skip('should be greater than 10 and equal to 20', () => {
        /* Completa el test y completa la function isGreaterThan10AndEqualTo20 */
        const numb = 20;
        const result= isGreaterThan10AndEqualTo20(numb);
        expect(result).toBeGreaterThan(10);
        expect(result).toEqual(20);
    });
});