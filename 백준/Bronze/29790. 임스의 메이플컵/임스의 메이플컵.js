const fs = require('fs');
const [n, u, l] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let result = "";

if ( n >= 1000 ) {
    if ( u >= 8000 || l >= 260 ) {
        result = "Very Good";
    } else {
        result = "Good";
    }
} else {
    result = "Bad"
};

console.log(result);