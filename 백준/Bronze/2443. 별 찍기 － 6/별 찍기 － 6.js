const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();
const len = input * 2 - 1;
let result = [];
const emptyStr = " ";
const star = "*"

for ( let i = input; i > 0; i-- ) {
    const emptyLen = len - (i * 2 - 1);

    result.push(emptyStr.repeat(emptyLen / 2) + star.repeat(i * 2 - 1))
}

console.log(result.join('\n'));