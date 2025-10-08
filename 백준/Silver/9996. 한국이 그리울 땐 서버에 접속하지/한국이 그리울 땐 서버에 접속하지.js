const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
const [first, last] = input.shift().split('*');
const result = [];

input.forEach(e => {
    if ( e.length < first.length + last.length ) {
        result.push("NE");
        return;
    }
    
    const firstStr = e.slice(0, first.length);
    const lastStr = e.slice(e.length - last.length);

    if ( first === firstStr && last === lastStr ) {
        result.push("DA");
    } else {
        result.push("NE");
    }
});

console.log(result.join('\n'));