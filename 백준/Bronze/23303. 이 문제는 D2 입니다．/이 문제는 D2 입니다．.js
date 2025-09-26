const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let result = "";

for ( let i = 0; i < input.length; i++ ) {
    if ( input[i].toLowerCase() === "d2" || input[i].toLowerCase().includes("d2") ) {
        result = "D2";
        break;
    }
};

console.log(result === "" ? "unrated" : result);