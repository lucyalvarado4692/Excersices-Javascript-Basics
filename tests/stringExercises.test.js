import { returnAString } from "../src/stringExercises.js";

describe('Variables can be a string', () => {
    test.skip('should say Hello', () => {
        /* agrega la línea que falta */

        expect().toBe('Hello');
    });

    test.skip('should return Hello World', () => {
        /* Modifica la function returnAString del archivo stringExercises para que el test pase */
        const result = returnAString();
        expect(result).toBe('Hello World');
    });

    test.skip('should be return I Love JS', () => {
        /* Modifica la function concatenateStrings y agrega la línea que falta en el test */

        expect().toBe('I Love JS');
    });

    test.skip('should return letter g', () => {
        /* Modifica la function giveOneLetter para que devuelva la letra g de la variable configurada y añade las líneas necesarias al test */
        
        expect().toBe('g');
    });

    test.skip('should return -1', () => {
        /* Modifica la function giveTheIndexOfWord y añade las líneas necesarias al test */

        expect().toEqual(-1);
    });

    test.skip('should return "Give a Man a Pussy Cat" ', () => {
        /* Modifica la function replaceFishWords y añade las líneas necesarias al test */

        expect().toBe('Give a Man a Pussy Cat');
    });

    test.skip('should return "RIDE HIM, COWBOY!"', () => {
        /* Modifica la function giveAllLettersInUppercase y añade las líneas necesarias al test */
        
        expect().toBe('RIDE HIM, COWBOY');
    });

    test('should return "Hands Down"', () => {
        /* Modifica la function removeWhiteSpace y añade las líneas necesarias al test */

        expect().toBe('Hands Down');
    });
});