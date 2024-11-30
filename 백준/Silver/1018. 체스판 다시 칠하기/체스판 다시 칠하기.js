const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [row, col] = input.shift().split(' ').map(Number);

const white = [
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
];
const black = [
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB'
];
let result = [];

function isWhite ( x, y ) {
    let count = 0;
    
    for ( let i = 0; i < 8; i++ ) {
        for ( let j = 0; j < 8; j++ ) {
            if ( input[x + i][j + y] !== white[i][j] ) count++;
        }
    }
    return count;
}; 

function isBlack ( x, y ) {
    let count = 0;
    
    for ( let i = 0; i < 8; i++ ) {
        for ( let j = 0; j < 8; j++ ) {
            if ( input[x + i][j + y] !== black[i][j] ) count++;
        }
    }
    return count;
};

for ( let i = 0; i < row - 7; i++ ) {
    for ( let j = 0; j < col - 7; j++ ) {
        result.push(isWhite(i, j));
        result.push(isBlack(i, j));
    }
};

console.log(Math.min(...result));