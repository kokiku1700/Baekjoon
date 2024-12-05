const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const time = +input[0];
const candys = input[2].split(' ').map(Number);
const candySum = candys.reduce((a, b) => a + b);

if ( time <= candySum ) {
    console.log("Padaeng_i Happy");
} else {
    console.log("Padaeng_i Cry");
}