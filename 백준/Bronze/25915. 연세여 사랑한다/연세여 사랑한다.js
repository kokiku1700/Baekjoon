const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const arr =  ['I', 'L', 'O', 'V', 'E', 'Y', 'O', 'N', 'S', 'E', 'I'];
let n = input.charCodeAt();
let result = 0;

for (let i = 0; i < arr.length; i++ ) {
    result += Math.abs(n - arr[i].charCodeAt());
    n = arr[i].charCodeAt();
};

console.log(result);