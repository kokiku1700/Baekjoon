const fs = require('fs');
const input = fs.readFileSync('/dev/stdin')
                .toString()
                .trim()
                .split('\n')
                .map(e => e.split(' ').map(Number));
const [n, m] = input.shift();

input.sort((a, b) => a[0] - b[0]);
const minPackage = input[0][0];
input.sort((a, b) => a[1] - b[1]);
const minPiece = input[0][1];

const onlyPackage = minPackage * Math.ceil(n / 6);
const onlyPiece = minPiece * n;
const mix = (Math.floor(n / 6) * minPackage) + ((n % 6) * minPiece);

console.log(Math.min(onlyPackage, onlyPiece, mix));