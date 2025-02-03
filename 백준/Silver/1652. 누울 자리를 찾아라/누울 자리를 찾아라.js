const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
let rowCount = 0;
let colCount = 0;

for ( let i = 0; i < n; i++ ) {
    let count = 0;
    for ( let j = 0; j < n; j++ ) {
        if ( input[i][j] === "." ) {
            count++;
            if ( count === 2 ) {
                rowCount++;
            }
        } else {
            count = 0;
        }
    };
};
for ( let i = 0; i < n; i++ ) {
    let count = 0;
    for ( let j = 0; j < n; j++ ) {
        if ( input[j][i] === "." ) {
            count++;
            if ( count === 2 ) {
                colCount++;
            }
        } else {
            count = 0;
        }
    };
};

console.log(rowCount, colCount);