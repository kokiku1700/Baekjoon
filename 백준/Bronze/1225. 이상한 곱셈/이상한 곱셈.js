const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const arrN = input[0].split('').map(Number);
const arrM = input[1].split('').map(Number);
let result = 0;

for ( i = 0; i < arrN.length; i++ ) {
    for ( j = 0; j < arrM.length; j++ ) {
        result += arrN[i] * arrM[j];
    }
}

console.log(result);