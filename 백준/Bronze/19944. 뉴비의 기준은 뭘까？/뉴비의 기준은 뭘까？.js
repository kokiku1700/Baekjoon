const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

if ( m <= 2 ) {
    console.log("NEWBIE!");
} else if ( n >= m && m > 2 ) {
    console.log("OLDBIE!");
} else {
    console.log("TLE!");
}