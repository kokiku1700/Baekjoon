const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const aCards = input[0].split(' ').map(Number);
const bCards = input[1].split(' ').map(Number);
let score = [0, 0]
let lastWinner = "";
let result = "";

for ( let i = 0; i < 10; i++ ) {
    if ( aCards[i] > bCards[i] ) {
        score[0] += 3;
        lastWinner = "a";
    } else if ( aCards[i] < bCards[i] ) {
        score[1] += 3;
        lastWinner = "b";
    } else {
        score[0] += 1;
        score[1] += 1;
    }
};

if ( score[0] > score[1] ) {
    result = "A"
} else if ( score[0] < score[1] ) {
    result = "B"
} else {
    if ( lastWinner === "a") {
        result = "A"
    } else if ( lastWinner === "b") {
        result = "B"
    } else {
        result = "D"
    }
}

console.log(score.join(' ') + '\n' + result);