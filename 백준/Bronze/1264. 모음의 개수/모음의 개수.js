const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();
const aeiou = ['a', 'e', 'i', 'o', 'u'];
let result = [];

for ( let i = 0; i < input.length; i++ ) {
    let str = input[i].toLowerCase().split('');
    let count = 0;

    str.forEach(e => {
        if ( aeiou.includes(e) ) count++;
    });
    result.push(count);
};

console.log(result.join('\n'));