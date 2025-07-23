const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
const result = [];

input.forEach(e => {
    const arr = e.split(' ').map(Number);
    const rifle = arr[0] * 350.34;
    const sight = arr[1] * 230.90;
    const hearing = arr[2] * 190.55;
    const arm = arr[3] * 125.30;
    const leg = arr[4] * 180.90;
    const sum = (rifle + sight + hearing + arm + leg).toFixed(2);

    result.push('$' + sum);
});

console.log(result.join('\n'));