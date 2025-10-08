const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const bingo = input.slice(0, 5).map(e => e.split(' ').map(Number));
const call = input.slice(5).flatMap(e => e.split(' ').map(Number));
let result = 0;

function check ( bingo ) {
    let count = 0;

    for ( let i = 0; i < 5; i++ ) {
        if ( bingo[i].every(e => e === 0) ) count++;
    }

    for ( let j = 0; j < 5; j++ ) {
        if ( bingo.every(e => e[j] === 0 ) ) count++;
    }

    if ( [0, 1, 2, 3, 4].every(e => bingo[e][e] === 0 ) ) count++;
    if ( [0, 1, 3, 4, 4].every(e => bingo[e][4 - e] === 0) ) count++;

    return count;
};

for ( let num of call ) {
    result++;

    for ( let i = 0; i < 5; i++ ) {
        for ( let j = 0; j < 5; j++ ) {
            if ( bingo[i][j] === num ) bingo[i][j] = 0;
        }
    }

    if ( check(bingo) >= 3 ) break;
}

console.log(result);