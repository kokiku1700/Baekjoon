const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let result = [];

input.forEach((e, i) => {
    let tri = e.split(' ').map(Number).sort((a, b) => a - b);

    if ( tri[2] ** 2 === (tri[0] ** 2) + (tri[1] ** 2) ) {
        result.push(`Scenario #${i + 1}:` + '\n' + 'yes' + '\n');
    } else {
        result.push(`Scenario #${i + 1}:` + '\n' + 'no' + '\n');
    }
});

console.log(result.join('\n'));