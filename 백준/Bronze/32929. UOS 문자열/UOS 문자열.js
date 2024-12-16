const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();
const rest = input % 3;

if ( rest === 1 ) {
    console.log("U");
} else if ( rest === 2 ) {
    console.log("O");
} else {
    console.log("S");
}