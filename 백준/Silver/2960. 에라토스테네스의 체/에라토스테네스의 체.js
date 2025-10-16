const fs = require('fs');
const [n, k] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const arr = new Array(n + 1).fill(true);
let count = 0;
let result = 0;

a: for ( let i = 2; i <= Math.sqrt(n); i++ ) {
    if ( arr[i] ) {
        for ( let j = i; j <= n; j += i ) {
            if ( arr[j] ) {
                arr[j] = false;
                count++;
            } 
            
            if ( count === k ) {
                result = j;
                break a;
            } 
        };
    };
};

if ( count !== k ) {
    const newArr = arr.map((e, i) => e ? i : 0);
    const filterArr = newArr.filter(e => e);

    result = filterArr[k - count];
}
console.log(result);