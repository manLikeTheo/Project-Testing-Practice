import cipher from "../Code/caesarCipher";

describe("Check if Cipher works as expected", () => {
    test("Wrapping from z to a", () => {
        expect(cipher("zyxwvutsrqponmlkjihgfedcba", 5)).toBe("edcbazyxwvutsrqponmlkjihgf");
    });

    test("Keeping the same case", () => {
        expect(cipher("Love me some SUNSHINE", 4)).toBe("Pszi qi wsqi WYRWLMRI");
    });

    test("Test Punctuation", () => {
        expect(cipher("Walk in the park!", 3)).toBe("Zdon lq wkh sdun!");
    });
})