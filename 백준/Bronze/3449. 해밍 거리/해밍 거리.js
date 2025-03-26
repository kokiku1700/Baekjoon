const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const n = +input.shift();
let result = [];

for ( let i = 0; i < n; i++ ) {
    const str1 = input.shift().split('');
    const str2 = input.shift().split('');
    let count = 0;

    str1.forEach((e, i) => {
        if ( e !== str2[i] ) {
            count++;
        }
    });

    result.push(`Hamming distance is ${count}.`);
};

console.log(result.join("\n"));