const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
let emptyArea = new Array(m).fill(false);
let count1 = 0;
let count2 = 0;

for ( let i = 0; i < n; i++ ) {
    let floor = input[i].split('');
    let bool = false;

    for ( let j = 0; j < m; j++ ) {
        if ( floor[j] === "X" ) {
            emptyArea[j] = true;
            bool = true;
        };
    };

    bool ? count2 : count2++;
};

emptyArea.forEach(e => {
    e === false ? count1++ : count1;
});

console.log(Math.max(count1, count2));