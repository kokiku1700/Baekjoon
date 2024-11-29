const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let str = input[0];
let word = input[1];
let count = 0;

while ( str.length > word || str.includes(word) === true ) {
    let n = str.indexOf(word);
    str = str.slice(n + word.length);
    count++
}

console.log(count);