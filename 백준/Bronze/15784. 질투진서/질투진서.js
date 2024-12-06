const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, x, y] = input.shift().split(' ').map(Number);
const charm = input.map(e => e.split(' ').map(Number));
const num = charm[x - 1][y - 1];
let result = "HAPPY";

for ( let i = 0; i < n; i++ ) {
    if ( charm[x - 1][i] > num || charm[i][y - 1] > num) {
        result = "ANGRY";
        break;
    }  
};

console.log(result);