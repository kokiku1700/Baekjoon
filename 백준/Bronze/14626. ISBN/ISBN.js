const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');
let m = +input.pop();
let num = 0;
let sum = 0;
let result = 0;

for ( let i = 0; i < input.length; i++ ) {
    if ( input[i] === "*" ) {
        num = i % 2 === 0 ? 1 : 3;
    } else {
        sum += i % 2 === 0 ? +input[i] : 3 * +input[i];
    };
};

if ( num === 1 ) {
    result = 10 - ((sum + m) % 10);
} else {
    for ( let i = 0; i < 10; i++ ) {
        
        if ( ((sum + m + (i * num)) % 10) === 0 ) {
            result = i;
            break;
        }
    }
}

console.log(result);