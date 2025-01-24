const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let passenger = 0;
let result = [];

input.forEach(e => {
    let [down, up] = e.split(' ').map(Number);

    passenger += up - down;
    result.push(passenger);
});
console.log(Math.max(...result));