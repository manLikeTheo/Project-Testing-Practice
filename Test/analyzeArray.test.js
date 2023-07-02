import analyzeArray from "../Code/analyzeArray";

describe("Run Analyze Array Test", () => {
    test("Check if Object Matches", () => {
        expect(analyzeArray([2, 5, 9, 5, 3, 7, 5, 4])).toMatchObject({
            average: 5, 
            min: 2, 
            max: 9, 
            length: 8 
        });
    });
});