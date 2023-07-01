import capitalize from "../Code/capitalize";

test("Should return first letter capitalized", () => {
    expect(capitalize("aerospace")).toBe("Aerospace");
});