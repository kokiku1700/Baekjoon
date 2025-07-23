const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();
let count = 0;
let nums = String(input).split('').map(Number);

while( nums.length > 1 ) {
    let num = nums[0];

    for ( let i = 1; i < nums.length; i++ ) {
        num *= nums[i];
    }
    nums = String(num).split('').map(Number);
    count++;
};

console.log(count);