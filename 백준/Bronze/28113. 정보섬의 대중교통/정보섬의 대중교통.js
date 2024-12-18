const fs = require('fs');
const [n,a ,b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

if ( n > a ) {
    console.log("Bus");
} else {
    if ( a > b ) {
        console.log("Subway");
    } else if ( a < b ) {
        console.log("Bus");
    } else {
        console.log("Anything")
    }
}