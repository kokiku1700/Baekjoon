const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();
let month = 8 + (7 * (input - 1));
let resultY = 0;
let resultM = 0;

if ( month % 12 === 0 ) {
    resultY = 2024 + Math.floor(month / 12) - 1
    resultM = 12;
} else {
    resultY = 2024 + Math.floor(month / 12)
    resultM = month % 12;
}

input !== 1 ? console.log(resultY, resultM) : console.log("2024 8");