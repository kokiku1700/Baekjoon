const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(Number));
const n = +input.shift();

let maxNum = new Array(n).fill(0);

for (let x = 0; x < n; x++ ) {
    for ( let i = 0; i < 5; i++ ) {
        for ( let j = i + 1; j < 5; j++ ) {
            for ( let k = j + 1; k < 5; k++ ) {
                maxNum[x] = Math.max((input[x][i] + input[x][j] + input[x][k]) % 10, maxNum[x]); 
            }
        }
    }
}


console.log(maxNum.lastIndexOf(Math.max(...maxNum)) + 1);