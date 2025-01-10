const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
let result = [];

for ( let i = 0; i < n; i++ ) {
    const m = +input.shift();
    const arr = input.splice(0, m);
    let maxCost = 0;
    let maxName = "";

    arr.forEach(e => {
        let [cost, name] = e.split(' ');
        if ( maxCost < +cost ) {
            maxCost = cost;
            maxName = name;
        };
    });
    result.push(maxName);
};

console.log(result.join('\n'));