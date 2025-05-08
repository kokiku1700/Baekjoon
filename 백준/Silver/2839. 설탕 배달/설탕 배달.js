const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();let result = 0;

if ( input === 4 || input === 7 ) {
    result = -1;
} else if ( input % 5 === 0 ) {
    result = input / 5;
} else if ( input % 5 === 1 || input % 5 === 3 ) {
    result = Math.floor(input / 5) + 1;
} else if ( input % 5 === 2 || input % 5 === 4 ) {
    result = Math.floor(input / 5) + 2
}

console.log(result);