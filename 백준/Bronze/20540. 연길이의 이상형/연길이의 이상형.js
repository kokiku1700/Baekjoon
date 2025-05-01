const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');
let result = [];

input.forEach(e => {
    switch ( e ) {
        case "E":
            result.push("I");
            break; 
        case "I":
            result.push("E");
            break; 
        case "S":
            result.push("N");
            break; 
        case "N":
            result.push("S");
            break; 
        case "T":
            result.push("F");
            break; 
        case "F":
            result.push("T");
            break; 
        case "J":
            result.push("P");
            break; 
        case "P":
            result.push("J");
            break; 
    }
});

console.log(result.join(''));