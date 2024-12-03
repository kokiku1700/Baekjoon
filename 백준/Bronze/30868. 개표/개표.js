const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.shift();
let reuslt = [];

input.forEach(e => {
    const fiveNum = Math.floor(e / 5);
    const restNum = e % 5;
    const five = "++++ ";
    const rest = "|";

    reuslt.push(five.repeat(fiveNum) + rest.repeat(restNum));
});

console.log(reuslt.join('\n'));