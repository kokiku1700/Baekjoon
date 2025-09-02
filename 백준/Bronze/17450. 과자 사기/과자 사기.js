const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let resultCost = 0;
let idx = 0;

input.forEach((e, i) => {
    const [cost, weight] = e.split(' ').map(Number);
    const costSum = cost * 10 >= 5000 ? (cost * 10) - 500 : cost * 10 
    const weightSum = weight * 10;
    const num = weightSum / costSum;
    
    if ( resultCost < num ) {
        resultCost = num;
        idx = i;
    };
});

switch ( idx ) {
    case 0: 
        console.log("S");
        break;
    case 1:
        console.log("N");
        break;
    case 2: 
    console.log("U");
        break;
};