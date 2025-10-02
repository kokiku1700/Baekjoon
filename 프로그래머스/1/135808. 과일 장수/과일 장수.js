function solution(k, m, score) {
    let apples = score.sort();
    let answer = 0;
    const n = Math.floor(score.length / m);

    for ( let i = 0; i < n; i++ ) {
        let box = apples.splice(-m);
        answer += m * Math.min(...box);
    };
     
    return answer;
}