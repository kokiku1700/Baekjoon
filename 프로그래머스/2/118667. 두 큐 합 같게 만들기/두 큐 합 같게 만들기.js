function solution(queue1, queue2) {
    let sum1 = queue1.reduce((a, b) => a + b);
    let sum2 = queue2.reduce((a, b) => a + b);
    let arr = [...queue1, ...queue2];
    const limit = queue1.length * 3;
    let i = 0; 
    let j = queue1.length;
    const target = (sum1 + sum2) / 2;
    
    let answer = 0;
    
    if ( (sum1 + sum2) % 2 === 1 ) return -1;
     
    while ( answer <= limit ) {
        if ( sum1 === target ) return answer;
        if ( sum1 > target ) sum1 -= arr[i++];
        else sum1 += arr[j++];
        answer++;
    }
    return -1;
}