const caesar = function (text, shift) {
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    let encryptedMessage = "";
    let index = -1;
    for (let letter of text) {
        let upperCase = false;
        if (letter == letter.toUpperCase()) {
            upperCase = true;
            index = alphabet.indexOf(letter);
        } else {
            index = alphabet.indexOf(letter.toUpperCase());
        }

        if (index >= 0) {
            index += shift;
            if (index > alphabet.length - 1) {
                while (index > alphabet.length - 1) {
                    index -= alphabet.length;
                }
            } else if (index < 0) {
                while (index < 0) {
                    index += alphabet.length;
                }
            }
            if (!upperCase) {
                encryptedMessage += alphabet[index].toLowerCase();
            } else {
                encryptedMessage += alphabet[index];
            }
        } else {
            encryptedMessage += letter;
        }

    }
    return encryptedMessage;
};

// Do not edit below this line
module.exports = caesar;
