function solution(rny_string) {
    let str = rny_string.split('')
    let arr = [];

    str.forEach(e => {
        if ( e === "m" ) arr.push("rn");
        else arr.push(e);
    })
    
    return arr.join('');
}