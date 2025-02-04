const fs = require('fs');
const [hh, mm] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const hour = (hh - 9) * 60;
let result = hour + mm;


console.log(result);