const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');
let result = '';

input.forEach((e, i) => {
    bin = parseInt(e, 8).toString(2);
    if ( bin.length < 3 && i !== 0 ) {
        result += '0'.repeat( 3 - bin.length );
        result += bin;
    } else {
        result += bin;
    }
});

console.log(result)