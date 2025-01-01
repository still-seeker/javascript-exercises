const repeatString = function(str, num) {
    let repeatedString = "";
    while (num > 0){
        repeatedString += str;
        num --;
    }
    return repeatedString;    
};
repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
