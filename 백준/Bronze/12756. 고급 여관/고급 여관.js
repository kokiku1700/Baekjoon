const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [attackA, lifeA] = input[0].split(' ').map(Number);
let [attackB, lifeB] = input[1].split(' ').map(Number);

const aCount = Math.floor(lifeA / attackB);
const bCount = Math.floor(lifeB / attackA);
const aRest = lifeA % attackB;
const bRest = lifeB % attackA;

if ( aCount !== bCount ) {
    if ( aCount > bCount ) console.log("PLAYER A");
    else console.log("PLAYER B")
} else {
    if ( aRest !== 0 && bRest === 0 ) console.log("PLAYER A");
    else if ( aRest === 0 && bRest !== 0 ) console.log("PLAYER B");
    else console.log("DRAW");
}