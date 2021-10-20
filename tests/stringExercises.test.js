import { returnAString } from "../src/stringExercises.js";

describe('Variables can be a string', () => {
    test('should return Hello World', () => {
        const result = returnAString();
        expect(result).toBe('Hello World');
    });    
});