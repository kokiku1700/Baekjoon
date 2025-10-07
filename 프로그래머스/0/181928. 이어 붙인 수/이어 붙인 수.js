function solution(num_list) {
    const even = [];
    const odd = [];
    
    for ( let i = 0; i < num_list.length; i++ ) {
        if ( num_list[i] % 2 === 0 ) even.push(String(num_list[i]));
        else odd.push(String(num_list[i]));
    }
    const answer = +even.reduce((a, b) => a + b) + +odd.reduce((a, b) => a + b);
    
    return answer;
}