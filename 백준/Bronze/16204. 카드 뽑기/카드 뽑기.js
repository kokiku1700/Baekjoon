const fs = require('fs');
const [cardNum, oCardFront, oCardBack] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let xCardFront = cardNum - oCardFront;
let xCardBack = cardNum - oCardBack;
let oMin = Math.min(oCardFront, oCardBack);
let xMin = Math.min(xCardFront, xCardBack);

console.log(oMin + xMin);