const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const arr = str.split('');
    const answer = [];
    arr.forEach(e => {
        if ( e === e.toUpperCase() ) answer.push(e.toLowerCase());
        else answer.push(e.toUpperCase());
    });
    console.log(answer.join(''));
});