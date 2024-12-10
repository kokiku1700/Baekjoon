const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();
let arr = new Array(26).fill(0);

for (let i = 0; i < input.length; i++ ) {
    arr[input.charCodeAt(i) - 65]++;
};

let max = Math.max(...arr);
let idx = arr.indexOf(max);
let bool = false;

for ( let i = 0; i < 26; i++ ) {
    if ( max === arr[i] && idx !== i ) {
        bool = true;
        break;
    }
};

console.log(bool ? "?" : String.fromCharCode(idx + 65));