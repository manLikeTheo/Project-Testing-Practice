function reverseString(str) {
    let splitStr = str.split("");
    let reverseStr = splitStr.reverse();
    let joinStr = reverseStr.join("");
    return joinStr;
}

console.log(reverseString("church"));

export default reverseString;