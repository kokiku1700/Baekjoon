function solution(a, b) {
    const num1 = +(String(a) + String(b));
    const num2 = +(String(b) + String(a));
    const answer = num1 >= num2 ? num1 : num2;
    return answer;
}