function solution(my_string, n) {
    let str = my_string.split('');
    let result = [];
    
    str.forEach(e => {
        result.push(e.repeat(n));
    });
    
    return result.join('');
}