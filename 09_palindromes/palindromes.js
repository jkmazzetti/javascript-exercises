const palindromes = function (words) {
    let text=words.toLowerCase();
    text=text.replace(/\s/g, '');
    text=text.replace(/,/g, '');
    text=text.replace(".", '');
    text=text.replace(/!/g, '');

    console.log(text);
    let palindrome = true;
    let i = 0;
    while (palindrome && i < Math.round(text.length / 2)) {
        if (text.charAt(i) !== text.charAt(text.length - (i + 1))) {
            palindrome = false;
        }
        i++;
    }
    
    return palindrome;
};

// Do not edit below this line
module.exports = palindromes;
