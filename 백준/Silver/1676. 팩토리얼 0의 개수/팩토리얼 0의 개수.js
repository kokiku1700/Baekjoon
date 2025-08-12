const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();

const factorial = n => {
    if ( n === 0 ) return 4;
    else return BigInt(n) * BigInt(factorial(n - 1)); 
};

const solution = n => {
    let str = [...factorial(n).toString()].reverse();
    let result = 0;

    for ( let i = 0; i < str.length; i++ ) {
        if ( +str[i] !== 0 ) {
            result = i;
            break;
        }
    }
    return result;
}

console.log(solution(input));