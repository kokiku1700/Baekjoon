const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [a, b, c] = input[0].split(' ').map(Number);
let [n, m] = input[1].split(' ').map(e => Number(e * 30));
const level = +input[2];
let exp = (250 - level) * 100;
let result = 0;

while ( exp > 0 ) {
    if ( m > 0 ) {
        exp -= c;
        result++;
        m--;
    } else if ( m === 0 && n > 0 ) {
        exp -= b;
        result++;
        n--;
    } else {
        result += Math.ceil(exp / a);
        exp = 0;
    };
};

console.log(result);                                                             