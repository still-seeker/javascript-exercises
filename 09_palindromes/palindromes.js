const palindromes = function (string) {
    //All the characters expected in a string
    const alphaNum = "abcdefghijhklmnopqrstuvwxyz0123456789";

    let palStr = string
                    .toLowerCase()
                    .split("")
                    .filter((char) => alphaNum.includes(char))
                    .join("");
    
    const reverseString = palStr.split('').reverse().join('');
    
    //check equality of both reverseString and palStr
    if (reverseString === palStr)
        return true;
    return false;
   
};

// Do not edit below this line
module.exports = palindromes;
