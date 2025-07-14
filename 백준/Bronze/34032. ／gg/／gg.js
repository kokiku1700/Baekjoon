const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const sur = input[1].split('');
let agr = 0;
let opp = 0;

sur.forEach(e => {
    e === "O" ? agr++ : opp++;
});

console.log(agr >= opp ? "Yes" : "No");