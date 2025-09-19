const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, str] = input.shift().split(' ');
let result = 0;

input.forEach(e => {
    let [s, num] = e.split(' ');
    const arr = s.split("_");
    
    if ( arr.includes(str) ) result += +num;
});

console.log(result);