import calculator from "../Code/calculator";

describe("Calculator object with basic operations", () => {
    
    test("Addition", () => {
        expect(calculator.add(5, 10)).toEqual(15);
    });

    test("Subtraction", () => {
        expect(calculator.subtract(12, 8)).toEqual(4);
    });

    test("Division", () => {
        expect(calculator.divide(12, 4)).toBeCloseTo(3);
    });

    test("Multiplication", () => {
        expect(calculator.multiply(2, 8)).toEqual(16);
    });
})