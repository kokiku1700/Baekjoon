const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');
const dial = [
    "ABC",
    "DEF",
    "GHI",
    "JKL",
    "MNO",
    "PQRS",
    "TUV",
    "WXYZ",
];
let result = 0;

input.forEach(e => {

    for ( let i = 0; i < dial.length; i++ ) {
        if ( dial[i].includes(e) ) {
            result += i + 3;
            break;
        }
    };
});

console.log(result);