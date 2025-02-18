const fibonacci = function(num) {
    const fibo = [0, 1];

    let count;
    if (typeof num !== 'number') {
        count = parseInt(num);
    }
    else {
        count = num;
    }

    if (count < 0) return "OOPS";
    if (count === 0) return 0;

    for (let i = 2; i <= count; i++){
        fibo[i] = fibo[i-1] + fibo[i - 2];
    }
    return fibo[count];
};

// Do not edit below this line
module.exports = fibonacci;
