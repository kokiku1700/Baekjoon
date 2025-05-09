function solution(my_string, letter) {
    let answer = [];
    const arr = my_string.split('')

    arr.forEach(e => {
        if ( e !== letter ) answer.push(e);
    })
    
    return answer.join('');
}