const sumAll = function(min, max) { 
    if(!Number.isInteger(min) || !Number.isInteger(max)){
        return "ERROR";
    }
    if (min < 0 || max < 0) return "ERROR";
    if (min > max){
        [min, max] = [max, min];
    }
    let finalSum = 0;
    let i = min;
    while (i <= max){
        finalSum += i;
        i++;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
