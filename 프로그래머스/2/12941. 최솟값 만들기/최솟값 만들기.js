function solution(A,B){
    let answer = 0;
    
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    A.forEach((e, i) => {
        answer += e * B[i];
    })
   
    return answer;
}