// function caesarCipher(str, keyShift) {
//     let abc = "abcdefghijklmnopqrstuvwxyz".split("");
//     // console.log(abc);
//     let encrypt = "";

//     let strToLowerCase = str.toLowerCase();

//     for(let i = 0; i < strToLowerCase.length; i++) {
//         //If a word is given (i.e. not an empty string)
//         if(strToLowerCase[i] !== " "){
//             let index = abc.indexOf(strToLowerCase[i]);
//             encrypt += abc[(index + keyShift % 26)];
//         } else {
//             encrypt += " - ";
//         }
//     }

//     return encrypt;
// }

// console.log(caesarCipher("Attack At Dawn", 1));
// export default caesarCipher;

function checkCharacters(character) {
    return (/[a-zA-Z]/).test(character);
}

function cipher(string, keyShift) {
    let splitStr = string.split("");

    let encrypted = [];

    for(let i = 0; i < splitStr.length; i+=1) {
        if(checkCharacters(splitStr[i])) {
            let index = splitStr[i].charCodeAt(0);
            let shiftedIndex = ( ((index - 97 + keyShift) % 26) + 97);

            encrypted.push(String.fromCharCode(shiftedIndex));
        } else {
            encrypted.push(splitStr[i]);
        }
    }

    return encrypted.join("");
}

console.log(cipher("Love me some SUNSHINE", 4));
// console.log(cipher("How are you??", 3));

export default cipher;