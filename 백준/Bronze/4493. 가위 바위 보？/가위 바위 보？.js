const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
let reuslt = [];

for ( let i = 0; i < n; i++ ) {
    const m = +input.shift();
    const arr = input.splice(0, m);
    let p1 = 0;
    let p2 = 0;
    
    arr.forEach(e => {
        const [a, b] = e.split(' ');
        if ( a === "R" ) {
            if ( b === "S") p1++;
            else if ( b === "P") p2++;
        } else if ( a === "S") {
            if ( b === "R" ) p2++;
            else if ( b === "P" ) p1++;
        } else {
            if ( b === "S" ) p2++;
            else if ( b === "R" ) p1++;
        }
    });

    if ( p1 > p2 ) reuslt.push("Player 1");
    else if ( p1 < p2 ) reuslt.push("Player 2");
    else reuslt.push("TIE");
};

console.log(reuslt.join('\n'));