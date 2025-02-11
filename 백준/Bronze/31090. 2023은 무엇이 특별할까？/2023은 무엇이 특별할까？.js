const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let result = [];

input.shift();

input.forEach(e => {
    let nextYear = e + 1;
    let two = +e.toString().slice(-2);

    result.push(nextYear % two === 0 ? "Good" : "Bye");
});

console.log(result.join('\n'));