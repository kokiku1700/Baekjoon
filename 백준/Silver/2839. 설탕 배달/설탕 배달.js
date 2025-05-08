const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();
let five = Math.floor(input / 5)
let result = -1;

while ( five >= 0 ) {
    let remain = input - five * 5;

    if ( remain % 3 === 0 ) {
        result = remain / 3 + five;
        break;
    } else {
        five--;
    }
}


console.log(result);