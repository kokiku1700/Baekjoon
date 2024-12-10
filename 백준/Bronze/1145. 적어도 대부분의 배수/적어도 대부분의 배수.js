const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let min = Math.min(...input);


while ( true ) {
    let count = 0;
    for ( let i = 0; i < 5; i++ ) {
        if ( min % input[i] === 0 ) {
            count++;
        } 
    }

    if ( count >= 3 ) {
        break;
    } else {
        min++;
    }
};

console.log(min);