const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();

if ( input > 5 ) console.log("Success!");
else console.log("Oh My God!");